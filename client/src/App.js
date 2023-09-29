import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [code,setCode] = useState('');
  const [testCases,setTestCases] = useState('');

  const handleSubmit = async () => {
    try{
        console.log("i am clicked");
        let response = await axios.post('http://localhost:8000/executeCode',{
            code : code,
            testCases : testCases
        });
        setCode("");
        setTestCases("");
        console.log("response sent");
    }catch(error){
        console.log(error);
    }

  }

  return (
    <div className="app-container">
      <h1>Code Execution App</h1>
      <div className="input-container">
        <textarea
          className="code-input"
          placeholder="Enter your code here"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <textarea
          className="test-cases-input"
          placeholder="Enter your test cases here"
          value={testCases}
          onChange={(e) => setTestCases(e.target.value)}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
