import { config } from '~/config'
import { log } from '~/utils/logger'
import { count as countRobots, create as createRobot } from '~/models/robot'
import { count as countBars } from '~/models/bar'
import { count as countFoos } from '~/models/foo'
import { count as countFooBars } from '~/models/fooBar'
import { count as countWallet } from '~/models/wallet'
import { schedule } from '~/scheduler'

log(`starting with time coeff ${config.timeCoeff}...`)

schedule(createRobot())
schedule(createRobot())

process.on('exit', (code) => {
  if (!code) {
    log(
      `stopped with ${countRobots()} robots, ${countFooBars()} fooBars, ${countFoos()} foos, ${countBars()} bars and ${countWallet()} € in the wallet`
    )
  }
})
