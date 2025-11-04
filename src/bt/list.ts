import { BT, BtState } from "./bt";

export default class BtList implements BT
{
    actions: BT[]
    results: BtState[]


    constructor(actions: BT[])
    {
        this.actions = actions
        this.results = new Array(actions.length).fill(BtState.RUNNING)
    }


    tick(): BtState 
    {
        for (const index in this.actions) {
            if (this.results[index] === BtState.RUNNING && this.actions[index]) {
                this.results[index] = this.actions[index].tick()
            }
        }
        if (!this.results.includes(BtState.RUNNING)) {
            if (this.results.includes(BtState.FAILURE)) {
                return BtState.FAILURE
            } else {
                return BtState.SUCCESS
            }
        } else {
            return BtState.RUNNING
        }
    }


    reset(): void 
    {
        for (const action of this.actions) {

        }
    }
    
}