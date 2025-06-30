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
        
        const hold = (id) => {
        setDice(
            prevDice => prevDice.map( el => id === el.id ? {...el, isHeld: !el.isHeld} : el)
        )
        }

        const diceElements = dice.map(dice => <Die hold={ () => hold(dice.id)} isHeld={dice.isHeld} key={dice.id} value={dice.value} id={dice.id}/>)

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