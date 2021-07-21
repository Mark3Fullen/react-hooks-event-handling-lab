function Keypad() {
    function change() {
        console.log('Entering password...')
    }
    return (
        <>
            <input type="password" onChange={change}></input>
        </>
    )
}

export default Keypad
