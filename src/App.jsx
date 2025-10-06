import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase/firebase';
import { useState } from "react";
import './App.css'

const App = () => {

  let [name, setName] = useState("")
  let [surname, setSurname] = useState("")
  let [age, setAge] = useState("")
  let handleAdd = (async () => {
    
    try {
      if(name !== "" && surname !== "" && age !== "" ){

        const docRef = await addDoc(collection(db, "users"), {
          name: name,
          surname: surname,
          age: age
          
        });
        console.log("Document written with ID: ", docRef.id);
      }
      else{
        alert("Please Enter Student Details...!");
      } 
    }
    catch (e) {
      console.error("Error adding document: ", e);
    }

    setName("")
    setSurname("")
    setAge("")
  })
 return (
    <div className="form-container">
      <h2>Student Info</h2>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default App
