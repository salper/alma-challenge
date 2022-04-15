import assert from 'assert'
import type { Robot } from '~/models/robot'
import { log } from '~/models/robot'
import { wait } from '~/utils/async'

export const move = async (robot: Robot) => {
  assert(
    robot.state === 'IDLE',
    `Invalid state. Expected IDLE, got ${robot.state}`
  )

  robot.state = 'MOVING'

  log(robot, 'moving...')

  await wait(5)

  log(robot, 'moved')
}
