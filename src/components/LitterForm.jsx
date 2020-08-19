import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PuppyForm from "./PuppyForm";
import "../style/LitterForm/LitterForm.css";
//todo paw print as icon/on home page
export default function LitterForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (litterData) => {
    litterData.puppies = puppies;
    console.log("litter submit", litterData);
  };
  const [puppies, setPuppies] = useState([
    {
      id: 1,
      address: "2020 S 5040 E, South Jordan ut 84402",
      akcRegistered: false,
      commission: 200,
      fees: 80,
      firstName: "Jack",
      gender: "M",
      lastName: "Barry",
      listed: false,
      markings: "Chocolate, Dapple",
      microchipId: 3020384,
      name: "Red",
      paymentType: "Cash",
      paymentValue: 300,
      phone: "801-391-3949",
      price: 500,
      sellerPayment: 30,
    },
  ]);
  const [newPuppyId, setNewPuppyId] = useState(0);
  const [puppyForm, setPuppyForm] = useState(false);
  const [editingPuppy, setEditingPuppy] = useState(false);
  // todo add in error messages (all at top?)
  return puppyForm ? (
    <PuppyForm
      newPuppyId={newPuppyId}
      puppies={puppies}
      setPuppies={setPuppies}
      setPuppyForm={setPuppyForm}
      RemovePuppy={RemovePuppyHandler}
      editingPuppy={editingPuppy}
      setEditingPuppy={setEditingPuppy}
    />
  ) : (
    <div className="litter-form">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="litter-info">
          <div className="row">
            <label>
              Owner's Name:{" "}
              <input
                name="ownerName"
                // defaultValue="test"
                placeholder="Owner's Name"
                ref={register}
              />
            </label>
            {errors.dam && <span>this field is required:</span>}
            <label>
              Dam:{" "}
              <input
                name="dam"
                placeholder="Dam"
                type="text"
                list="dams"
                ref={register({ required: false })}
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
            {errors.sire && <span>this field is required:</span>}
            <label>
              Sire:{" "}
              <input
                name="sire"
                placeholder="Sire"
                type="text"
                list="sires"
                ref={register({ required: false })}
              />
              <datalist id="sires">
                <option>Rodeo</option>
                <option>Cowboy</option>
                <option>Birch</option>
                <option>Rosco</option>
              </datalist>
            </label>
          </div>
          <div className="row">
            {errors.litterDate && <span>this field is required:</span>}
            {/* //todo date format/validation MM/DD/YY  */}
            <div className="date">
              <label>
                Breed Date:{" "}
                <input
                  name="breedDate"
                  type="date"
                  ref={register({ required: false })}
                />
              </label>
              <p>Expected Date: {ExpectedDate("breedDate", 63)}</p>
            </div>
            <div className="date">
              <label>
                Litter Date:{" "}
                <input
                  name="litterDate"
                  type="date"
                  ref={register({ required: false })}
                />
              </label>
              <p>New Home: {ExpectedDate("litterDate", 56)}</p>
            </div>
          </div>
        </div>
        <table className="puppies">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>gender</th>
              <th>markings</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>phone</th>
              <th>price</th>
              <th>paymentValue</th>
              <th>paymentType</th>
              <th>fees</th>
              <th>sellerPayment</th>
              <th>commission</th>
              <th>AKC</th>
              <th>listed</th>
            </tr>
          </thead>
          <tbody>
            {puppies
              ?.sort((a, b) => a.id - b.id)
              .map(
                ({
                  id,
                  gender,
                  address,
                  akcRegistered,
                  commission,
                  fees,
                  firstName,
                  lastName,
                  listed,
                  markings,
                  microchipId,
                  name,
                  phone,
                  paymentType,
                  paymentValue,
                  price,
                  sellerPayment,
                }) => (
                  <tr className="puppy">
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{gender}</td>
                    <td>{markings}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{phone}</td>
                    <td>{price}</td>
                    <td>{paymentValue}</td>
                    <td>{paymentType}</td>
                    <td>{fees}</td>
                    <td>{sellerPayment}</td>
                    <td>{commission}</td>
                    <td>{akcRegistered ? "Yes" : "No"}</td>
                    <td>{listed ? "Yes" : "No"}</td>
                    <button onClick={() => EditPuppyHandler(id)}>Edit</button>
                  </tr>
                )
              )}
          </tbody>
        </table>
        <button
          onClick={() => {
            setNewPuppyId(newPuppyId + 1);
            setPuppyForm(true);
          }}
        >
          Add Puppy
        </button>
        <input type="submit" value="Submit Litter" />
      </form>
    </div>
  );

  function ExpectedDate(dateFrom, days) {
    if (watch(dateFrom)) {
      const baseDate = watch(dateFrom).split("-");
      let date = new Date(baseDate[0], --baseDate[1], baseDate[2]);
      let expectedDate = new Date();
      expectedDate.setDate(date.getDate() + days);
      expectedDate = expectedDate.toISOString().slice(0, 10);
      // console.log({ baseDate, date, expectedDate });
      return expectedDate;
    }
    return "N/A";
  }
  function EditPuppyHandler(id) {
    setEditingPuppy(puppies.find((puppy) => puppy.id === id));
    setPuppyForm(true);
  }
  function RemovePuppyHandler(id) {
    // todo shift id's of other puppies
    console.log("REMOVE", id);
    setPuppies(puppies.filter((puppy) => puppy.id !== id));
  }
}
