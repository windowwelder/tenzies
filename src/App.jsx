import Die from "./Die"

export default function App() {
        const generateAllDice = () => {
        return [...Array(10)].map( () => Math.ceil(Math.random()*6) )
        }
    return (
        <main>
            <div className="container">
                <Die value={1} className="die"/>
                <Die value={2} className="die"/>
                <Die value={3} className="die"/>
                <Die value={4} className="die"/>
                <Die value={5} className="die"/>
                <Die value={6} className="die"/>
                <Die value={1} className="die"/>
                <Die value={2} className="die"/>
                <Die value={3} className="die"/>
                <Die value={4} className="die"/>
            </div>
        </main>
    )
}