import assert from 'assert'
import type { Robot } from '~/models/robot'
import { create, log } from '~/models/robot'
import { buyRobot as buyRobotFromFoo } from '~/models/foo'
import { buyRobot as buyRobotFromWallet } from '~/models/wallet'
import { wait } from '~/utils/async'

export const buy = async (robot: Robot) => {
  assert(
    robot.state === 'MOVING',
    `Invalid state. Expected MOVING, got ${robot.state}`
  )

  robot.state = 'BUYING'

  log(robot, `buying robot...`)

  const newRobot = create()

  buyRobotFromWallet()
  buyRobotFromFoo()

  await wait(0)

  log(robot, `bought robot ${newRobot.id}...`)

  robot.state = 'IDLE'

  return newRobot
}
