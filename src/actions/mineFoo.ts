import assert from 'assert'
import crypto from 'crypto'
import type { Robot } from '~/models/robot'
import { log } from '~/models/robot'
import { create as createFoo } from '~/models/foo'
import { wait } from '~/utils/async'

export const mineFoo = async (robot: Robot) => {
  assert(
    robot.state === 'MOVING',
    `Invalid state. Expected MOVING, got ${robot.state}`
  )

  robot.state = 'MINING'

  log(robot, 'mining foo...')

  await wait(1)

  const foo = createFoo()

  log(robot, `mined foo ${foo.id}`)

  robot.state = 'IDLE'
}
