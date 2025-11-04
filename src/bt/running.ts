import { BT, BtState } from "./bt";

export default class BtRunning implements BT
{
    tick(): BtState
    {
        // console.log(this.constructor.name, BtState.RUNNING)
        return BtState.RUNNING
    }

    reset(): void 
    {
        // console.log(this.constructor.name, "RESET")
    }
    
}