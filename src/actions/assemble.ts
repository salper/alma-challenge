import assert from 'assert'
import type { Robot } from '~/models/robot'
import { log } from '~/models/robot'
import { pop as popBar, push as pushBar } from '~/models/bar'
import { pop as popFoo } from '~/models/foo'
import { create as createFooBar } from '~/models/fooBar'
import { wait } from '~/utils/async'

export const assemble = async (robot: Robot) => {
  assert(
    robot.state === 'MOVING',
    `Invalid state. Expected MOVING, got ${robot.state}`
  )

  robot.state = 'ASSEMBLING'

  const bar = popBar()
  const foo = popFoo()

  log(robot, `assembling fooBar with bar ${bar.id} and foo ${foo.id}...`)

  await wait(2)

  try {
    const fooBar = createFooBar(bar, foo)
    log(
      robot,
      `assembled fooBar ${fooBar.id} with bar ${bar.id} and foo ${foo.id}`
    )
  } catch {
    pushBar(bar)
    log(robot, `assembling fooBar with bar ${bar.id} and foo ${foo.id} failed`)
  }

  robot.state = 'IDLE'
}
