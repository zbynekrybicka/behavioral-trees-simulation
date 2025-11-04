import { BT, BtState } from "./bt";

export default class BtCondition implements BT
{
    condition: BT
    positive: BT
    negative: BT

    state: BtState = BtState.RUNNING
    actionState: BtState = BtState.RUNNING

    constructor(condition: BT, positive: BT, negative: BT)
    {
        this.condition = condition
        this.positive = positive
        this.negative = negative
    }


    tick(): BtState 
    {
        // console.log(this.constructor.name)
        let actionResult: BtState
        if (this.state === BtState.RUNNING) {
            actionResult = this.condition.tick()
            if (actionResult === BtState.RUNNING) {
                // console.log(this.constructor.name, BtState.RUNNING)
                return BtState.RUNNING
            } else {
                this.state = actionResult
            }
        }
        if (this.actionState === BtState.RUNNING) {
            // console.log(this.constructor.name, this.state, this.positive.constructor.name, this.negative.constructor.name)
            actionResult = this.state === BtState.SUCCESS ? this.positive.tick() : this.negative.tick()
            if (actionResult !== BtState.RUNNING) {
                this.actionState = actionResult
            }
            // console.log(this.constructor.name, actionResult)
            return actionResult
        } else {
            // console.log(this.constructor.name, this.actionState)
            return this.actionState
        }
    }

    
    reset(): void
    {
        // console.log(this.constructor.name, "RESET")
        this.condition.reset()
        this.positive.reset()
        this.negative.reset()
        this.state = BtState.RUNNING
        this.actionState = BtState.RUNNING
    }

}