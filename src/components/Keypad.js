// Code Keypad Component Here


function Keypad (){
    const handleKeyUp = () => {
        console.log("Entering password...");
    }
    return (
        <div></div>
        <div>
              <input type="password" onChange={handleKeyUp} />
        </div>
    )
}


export default Keypad;