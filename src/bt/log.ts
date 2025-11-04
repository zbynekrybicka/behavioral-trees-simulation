import { BT, BtState } from "./bt";

export default class BtLog implements BT
{
    message: string

    constructor(message: string)
    {
        this.message = message
    }


    tick(): BtState 
    {
        console.log(this.message)
        return BtState.SUCCESS    
    }


    reset(): void
    {
        // console.log(this.constructor.name, "RESET")
    }
    
}