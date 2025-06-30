import Die from "./Die"
import { useState } from "react"
import { nanoid } from "nanoid"

export default function App() {
        const generateAllDice = () => {
        return [...Array(10)].map( () =>
                ({
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
                })
                    )
        }

        const [dice, setDice] = useState(generateAllDice())
                
        const diceElements = dice.map(dice => <Die isHeld={dice.isHeld} key={dice.id} value={dice.value} />)

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