import fs from 'fs'

const RELEASE_NOTES_URL = 'https://support.claude.com/en/articles/12138966-release-notes'

async function main() {
  console.log('Fetching release notes...')
  const page = await fetch(RELEASE_NOTES_URL).then(r => r.text())

  const currentFile = fs.readFileSync('data/updates.ts', 'utf8')

  console.log('Asking Claude to diff...')
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: `You maintain a website called Claude Time Machine that tracks major Claude releases.

Here is the current updates.ts data file:
<current_updates>
${currentFile}
</current_updates>

Here is the latest Claude release notes page content:
<release_notes>
${page}
</release_notes>

Your job: identify any MAJOR releases in the release notes that are NOT already in updates.ts.

Major = model launches (Opus, Sonnet, Haiku), significant new product features (computer use, memory, file creation, browser extension), or major platform launches (Cowork, Claude Code expansion). Skip minor improvements, bug fixes, billing changes, and admin controls.

For each new major release found, output a complete Update object following this exact TypeScript type:
{
  id: string,         // kebab-case slug
  date: string,       // "Mon DD, YYYY"
  isoDate: string,    // "YYYY-MM-DD"
  title: string,      // punchy, max 8 words
  category: "Model" | "Feature" | "Agent" | "Platform",
  summary: string,    // 2-3 sentences, plain English
  killed: string[],   // 2-4 items: what this disrupted or made obsolete. Be specific and slightly irreverent.
  tweets: [           // exactly 2 paraphrased reactions, attributed by role only
    { meta: string, text: string },
    { meta: string, text: string }
  ],
  vibes: [            // exactly 3, must sum to 100
    { label: "Excited", pct: number },
    { label: "Skeptical", pct: number },
    { label: "Mind-blown", pct: number }
  ],
  fact: string        // one surprising downstream effect or stat
}

Return ONLY a JSON array of new Update objects. If there are no new major releases, return an empty array []. No explanation, no preamble, just the JSON.`
      }]
    })
  })

  const data = await response.json()

  if (data.error) {
    console.error('Claude API error:', data.error)
    process.exit(1)
  }

  let newEntries
  try {
    newEntries = JSON.parse(data.content[0].text)
  } catch (e) {
    console.log('Claude response was not valid JSON — likely no updates found.')
    console.log('Response:', data.content[0].text)
    return
  }

  if (!Array.isArray(newEntries) || newEntries.length === 0) {
    console.log('No new major releases found.')
    return
  }

  console.log(`Found ${newEntries.length} new update(s):`, newEntries.map(e => e.title))

  // Inject new entries at the top of the array (newest first)
  const marker = 'export const updates: Update[] = ['
  const insertPoint = currentFile.indexOf(marker) + marker.length
  const newBlock = '\n' + newEntries.map(e => '  ' + JSON.stringify(e, null, 2).replace(/\n/g, '\n  ')).join(',\n') + ','
  const updatedFile = currentFile.slice(0, insertPoint) + newBlock + currentFile.slice(insertPoint)

  fs.writeFileSync('data/updates.ts', updatedFile)
  console.log(`Added ${newEntries.length} new update(s).`)
}

main().catch(console.error)
