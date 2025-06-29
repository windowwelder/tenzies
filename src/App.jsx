import Die from "./Die"
import { useState } from "react"

export default function App() {
        const generateAllDice = () => {
        return [...Array(10)].map( () => Math.ceil(Math.random()*6) )
        }
        const [dice, setDice] = useState(generateAllDice())
                
        const diceElements = dice.map( num  => <Die value={num} />)

        const updateAllDice = () => {
        setDice(generateAllDice())
        }

    return (
        <main>
            <div className="container">
                {diceElements}
            </div>
            <button onClick={updateAllDice}>Roll</button>
        </main>
    )
}