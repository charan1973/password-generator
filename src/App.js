import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [numberOfCharacters, setNumberOfCharacters] = useState("");
  const [copied, setCopied] = useState(1);
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "1234567890";
  const special = "!@#$%^&*()_+{}[]:<>?/";

  const generatePassword = () => {
    const helperArray = [upper, lower, number, special];
    const passwordArray = [];
    for (let i = 0; i < numberOfCharacters; i++) {
      const randomForHelperArray = Math.floor(Math.random() * 4);
      const character = helperArray[randomForHelperArray];
      const randomForPasswordArray = Math.floor(
        Math.random() * character.length
      );
      passwordArray.push(character[randomForPasswordArray]);
    }
    setPassword(passwordArray.join(""));
  };

  const handleChange = (event) => {
    setNumberOfCharacters(event.target.value);
  };

  const copyToClipboard = (event) => {
    if(event.target.value){
    const textToCopy = event.target;
    textToCopy.select();
    document.execCommand("copy");
    setCopied(0);
    setTimeout(() => {
      setCopied(1)
    }, 500);
    }
  };

  return (
    <div>
      <div className="card">
        <input
          type="text"
          value={password}
          id="password-display"
          onClick={(e) => copyToClipboard(e)}
        />
        <div>
          <span>Enter number of characters</span>
          <input
            type="text"
            className="char-num"
            onChange={handleChange}
            value={numberOfCharacters}
          />
          <button onClick={() => generatePassword()}>Generate password</button>
          {!copied && (
            <h3>Copied!</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
