import Die from "./Die"
import { useState } from "react"

export default function App() {
        const generateAllDice = () => {
        return [...Array(10)].map( () =>
                ({
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false
                })
                    )
        }

        const [dice, setDice] = useState(generateAllDice())
                
        const diceElements = dice.map(dice => <Die value={dice.value} />)

        const updateAllDice = () => {
        setDice(generateAllDice())
        }

    return (
        <main>
            <div className="container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={updateAllDice}>Roll</button>
        </main>
    )
}