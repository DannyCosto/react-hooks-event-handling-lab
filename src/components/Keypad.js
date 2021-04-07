// Code Keypad Component Here
function KeyPad(){
        function handleChange(event) {
          // console.log(`${event.target.name}: ${event.target.value}`);
          return console.log("Entering password...", event.target.value)
        }
      
        return (
          <div>
            <input
              type="password"
              name="search"
              onChange={handleChange}
              placeholder="Enter Password..."
            />
          </div>
        );
      }
      
export default KeyPad