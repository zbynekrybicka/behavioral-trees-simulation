import { BT, BtState } from "./bt";

export default class BtReset implements BT
{

    action?: BT
    
    setAction(action: BT)
    {
        this.action = action
    }

    tick(): BtState 
    {
        // console.log(this.constructor.name)
        if (this.action) {
            this.action.reset()
            // console.log(this.constructor.name, BtState.SUCCESS)
            return BtState.SUCCESS
        } else {
            // console.log(this.constructor.name, BtState.FAILURE)
            return BtState.FAILURE
        }
    }


    reset(): void
    {
        // console.log(this.constructor.name, "RESET")
    }

}