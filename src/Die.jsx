export default function Die(props) {
    //
    // 1)add the image with condition:
    //  if value is 1 then image is die-1 (with template literals)
    // 2) add condition with props.isHeld

    const src=`./src/assets/die${props.isHeld ? "-held": ""}-${props.value}.svg`
    
    return (<button 
                onClick={ () => props.hold()}
                style={{ backgroundImage: `url(${src})` }}
            >
            </button>)
}