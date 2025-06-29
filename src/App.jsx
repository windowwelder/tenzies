import Die from "./Die"
import { useState } from "react"

export default function App() {
        const [dice, setDice] = useState(generateAllDice())
        
        const generateAllDice = () => {
        return [...Array(10)].map( () => Math.ceil(Math.random()*6) )
        }
        
        const diceElements = dice.map( num  => <Die value={num} />)

    return (
        <main>
            <div className="container">
                {diceElements}
            </div>
        </main>
    )
}