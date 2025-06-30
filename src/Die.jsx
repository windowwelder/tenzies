export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : null
    }
    return (<button style={styles}>{props.value}</button>)
}