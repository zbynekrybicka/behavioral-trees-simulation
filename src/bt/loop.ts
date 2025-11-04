import { BT, BtState } from "./bt";

export default class BtLoop implements BT
{

    cycles: number
    action: BT
    currentCycle: number


    constructor(action: BT, cycles: number)
    {
        this.cycles = cycles
        this.action = action
        this.currentCycle = cycles
    }


    tick(): BtState
    {
        // console.log(this.constructor.name)
        const actionResult: BtState = this.action.tick()
        if (actionResult === BtState.SUCCESS) {
            this.currentCycle--
            const nodeResult = this.currentCycle > 0 ? BtState.RUNNING : BtState.SUCCESS
            // console.log(this.constructor.name, this.currentCycle)
            return nodeResult
        } else {
            // console.log(this.constructor.name, actionResult)
            return actionResult
        }
    }


    reset(): void
    {
        // console.log(this.constructor.name, "RESET")
        this.currentCycle = this.cycles
        this.action.reset()
    }
    
}