import { BT, BtState } from "./bt";

export default class BtSequence implements BT
{
    actions: BT[]
    index: number = 0

    constructor(actions: BT[])
    {
        this.actions = actions
    }


    tick(): BtState 
    {
        this.index = Math.max(this.index, 0)
        // console.log(this.constructor.name, this.index)
        const action = this.actions[this.index]
        if (action) {
            const actionResult: BtState = action.tick()
            if (actionResult === BtState.SUCCESS) {
                this.index++
                // console.log(this.constructor.name, this.index + "/" + this.actions.length)
                return BtState.RUNNING
            } else {
                // console.log(this.constructor.name, actionResult)
                return actionResult 
            }
        } else {
            return BtState.SUCCESS
        }
    }


    reset(): void
    {
        // console.log(this.constructor.name, "RESET")
        for (const actionIndex in this.actions) {
            // console.log("RESET", this.constructor.name, ":", actionIndex, this.actions[actionIndex]?.constructor.name)
            this.actions[actionIndex]?.reset()
        }
        this.index = -1
    }

}