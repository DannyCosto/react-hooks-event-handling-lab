// Code EyesOnMe Component Here
function EyesOnMe(){
    return(
        <button onFocus ={() => console.log('Good!')} onBlur ={() =>console.log('Hey! Eyes on me!')}>EyesOnMe</button>
    )
}

export default EyesOnMe