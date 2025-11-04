import { BtState } from "./bt/bt"
import BtCondition from "./bt/condition"
import BtError from "./bt/error"
import BtList from "./bt/list"
import BtLog from "./bt/log"
import BtLoop from "./bt/loop"
import BtReset from "./bt/reset"
import BtSequence from "./bt/sequence"


const root = new BtSequence([
    new BtLoop(new BtLog("First step"), 4),
    new BtLoop(new BtLog("Second step"), 10),
    new BtLoop(new BtLog("Third step"), 2)
])

const interval = setInterval(() =>
{
    const actionResult: BtState = root.tick()
    if (actionResult !== BtState.RUNNING) {
        clearInterval(interval)
        console.log(actionResult)
    }
}, 100)