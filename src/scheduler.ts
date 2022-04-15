import * as robotModel from '~/models/robot'
import * as barModel from '~/models/bar'
import * as fooModel from '~/models/foo'
import * as fooBarModel from '~/models/fooBar'
import * as walletModel from '~/models/wallet'
import { assemble } from '~/actions/assemble'
import { buy } from '~/actions/buy'
import { deactivate } from '~/actions/deactivate'
import { move } from '~/actions/move'
import { mineFoo } from '~/actions/mineFoo'
import { mineBar } from '~/actions/mineBar'
import { sell } from '~/actions/sell'

export const schedule = async (robot) => {
  if (robot.state === 'DEACTIVATED') {
    return
  }

  if (robotModel.hasReachedMaxCapacity()) {
    await deactivate(robot)
  } else if (robot.state === 'IDLE') {
    await move(robot)
  } else if (fooModel.canBuyRobot() && walletModel.canBuyRobot()) {
    schedule(await buy(robot))
  } else if (fooBarModel.canSell()) {
    await sell(robot)
  } else if (barModel.count() && fooModel.count() - barModel.count() >= 10) {
    await assemble(robot)
  } else if (fooModel.count() - barModel.count() < 10) {
    await mineFoo(robot)
  } else {
    await mineBar(robot)
  }

  schedule(robot)
}
