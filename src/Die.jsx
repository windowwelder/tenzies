export default function Die(props) {

    const src=`./dice/die${props.isHeld ? "-held": ""}-${props.value}.svg`

    return (<button 
                onClick={ () => props.hold()}
                style={{ backgroundImage: `url(${src})` }}
                >
            </button>)
}