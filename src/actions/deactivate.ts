import type { Robot } from '~/models/robot'
import { log } from '~/models/robot'

export const deactivate = async (robot: Robot) => {
  log(robot, 'deactivated...')
  robot.state = 'DEACTIVATED'
}
