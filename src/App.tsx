import { FormEvent, useState } from "react";
import { AccountForm } from "./AccuntForm";
import { AddressForm } from "./AddressForm";
import { useMultiStepForm } from "./useMultiStepForm";
import { Userform } from "./UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev => {
      return {...prev, ...fields}
    }))
  }
  const { steps, currentStep, step, isFirstStep, isLastStep, next, back } =
    useMultiStepForm([
      <Userform {...data} updateFields={updateFields}/>,
      <AddressForm {...data} updateFields={updateFields}/>,
      <AccountForm {...data} updateFields={updateFields}/>,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!isLastStep) return next()
    alert('Successfull Account Creation')
  };

  
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        border: "1px solid black",
        padding: "2rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial",
        maxWidth: 'max-content',
        margin: '0  auto'
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: "0.5rem", right: ".5rem" }}>
          {currentStep + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            display: "flex",
            marginTop: "1rem",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
