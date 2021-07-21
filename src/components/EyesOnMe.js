function EyesOnMe() {
    function bruh(event) {
        console.log('Good!')
    }

    function bruhg() {
        console.log('Hey! Eyes on me!')
    }

    return (
        <>
            <button onFocus={bruh} onBlur={bruhg}>Eyes on me</button>
        </>
    )
}

export default EyesOnMe
