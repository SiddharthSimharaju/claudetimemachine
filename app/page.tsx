import { updates } from '@/data/updates'
import { TimeMachineShell } from '@/components/TimeMachineShell'

export default function Home() {
  return <TimeMachineShell updates={updates} />
}
