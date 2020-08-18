import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NewPuppy from "./NewPuppy";

export default function LitterForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (litterData) => {
    console.log("litter submit", litterData);
  };
  const [puppyId, setPuppyId] = useState(0);
  const [puppies, setPuppies] = useState([]);
  const [newPuppyForm, setNewPuppyForm] = useState(false);

  console.log(watch("litterDate")); // watch input value by passing the name of it
  // todo add in error messages (all at top?)
  return (
    <div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="litterInfo">
          <label>
            Owner's Name:{" "}
            <input
              name="ownerName"
              // defaultValue="test"
              placeholder="Owner's Name"
              ref={register}
            />
          </label>
          {errors.dam && <span>This field is required:</span>}
          <label>
            Dam:{" "}
            <input
              name="dam"
              placeholder="Dam"
              type="text"
              list="dams"
              ref={register({ required: true })}
            />
            {
              //todo datalist populate from past entries
            }
            <datalist id="dams">
              <option>Rose</option>
              <option>Sadie</option>
              <option>Athena</option>
              <option>Darby</option>
            </datalist>
          </label>
          {errors.sire && <span>This field is required:</span>}
          <label>
            Sire:{" "}
            <input
              name="sire"
              placeholder="Sire"
              type="text"
              list="sires"
              ref={register({ required: true })}
            />
            <datalist id="sires">
              <option>Rodeo</option>
              <option>Cowboy</option>
              <option>Birch</option>
              <option>Rosco</option>
            </datalist>
          </label>
          {errors.litterDate && <span>This field is required:</span>}
          {/* //todo date format/validation MM/DD/YY  */}
          <label>
            Breed Date:{" "}
            <input
              name="breedDate"
              placeholder="Breed Date"
              ref={register({ required: true })}
            />
          </label>
          <p>Expected Date: 63days</p>
          <label>
            Litter Date:{" "}
            <input
              name="litterDate"
              placeholder="Litter Date"
              ref={register({ required: true })}
            />
            <p>New Home: 8wks</p>
          </label>
        </div>
        <button
          onClick={() => {
            setPuppyId(puppyId + 1);
            setNewPuppyForm(true);
          }}
        >
          Add Puppy
        </button>
        <input type="submit" />
      </form>
      {newPuppyForm && (
        <NewPuppy
          puppyId={puppyId}
          puppies={puppies}
          setPuppies={setPuppies}
          setNewPuppyForm={setNewPuppyForm}
        />
      )}
    </div>
  );
}

// <input type="text" list="cars" />
//             <datalist id="cars">
//               <option>Volvo</option>
//               <option>Saab</option>
//               <option>Mercedes</option>
//               <option>Audi</option>
//             </datalist>
