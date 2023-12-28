import React, { useState } from "react";
import FormData from "../models/DataModel";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [age, setAge] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [married, setMarried] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [fathersName, setFathersName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Collect form data
    const userData = [
      {
        ISA: investment,
        Name: name,
        "Blood Group": bloodGroup,
        Age: age,
        Investment: investment,
        Married: married,
        "Number of children": numberOfChildren,
        "Father's Name": fathersName,
        Gender: gender,
      }
    ];
  
    // Call the onSubmit callback with the form data
    onSubmit({ personalInformation: [{ "info": userData }] });
    // Reset form fields after submission
    setName("");
    setBloodGroup("");
    setAge(0);
    setInvestment(0);
    setMarried("");
    setNumberOfChildren(0);
    setFathersName("");
    setGender("");
  };
  

  return (
    <div style={{ marginTop: "120px", textAlign: "end", width: "57%" }}>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h4>Personal Information</h4>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Blood Group:
              <input
                type="text"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Age:
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value, 10))}
              />
            </label>
          </div>
          <div>
            <label>
              Investment:
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(parseInt(e.target.value, 10))}
              />
            </label>
          </div>
        </div>

        <div>
          <h4>Personal Life</h4>

          <div>
            <span style={{ marginTop: "20px" }}>
              <label>
                Married:
                <input
                  type="text"
                  value={married}
                  onChange={(e) => setMarried(e.target.value)}
                />
              </label>
            </span>
          </div>

          <div>
            <span style={{ marginTop: "20px" }}>
              <label>
                Number of Children:
                <input
                  type="number"
                  value={numberOfChildren}
                  onChange={(e) =>
                    setNumberOfChildren(parseInt(e.target.value, 10))
                  }
                />
              </label>
            </span>
          </div>
          <div>
            <span style={{ marginTop: "20px" }}>
              <label>
                Father's Name:
                <input
                  type="text"
                  value={fathersName}
                  onChange={(e) => setFathersName(e.target.value)}
                />
              </label>
            </span>
          </div>
          <div>
            <span style={{ marginTop: "20px" }}>
              <label>
                Gender:
                <input
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>
            </span>
          </div>

        </div>

        <div style={{marginTop:"10px"}}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
