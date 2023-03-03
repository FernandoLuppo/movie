//  Components
import { justNumber } from "./mask"
//  types
import { IInput } from "../../types"

export const Input = ({mask, ...props}:IInput) => {
    const handleKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
        if (mask === "justNumber") {
            justNumber(e)
        }
    }
    return <input {...props} onKeyUp={handleKeyUp}/>
}