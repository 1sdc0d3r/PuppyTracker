import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../style/LitterForm/LitterForm.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
const api_url = "http://localhost:5000/api";

export default withRouter(function LitterForm({ history }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (litterData) => {
    // todo set date in correct format
    console.log("litter submit", litterData);
    axios
      .post(`${api_url}/litter`, litterData)
      .then((res) => history.push("/puppy", { litterId: res.data }))
      .catch((err) => console.log(err.response.data.message));
  };
  // todo # of puppies/litter
  // todo add in error messages (all at top?)
  const [puppies, setPuppies] = useState([]);
  const [litterFormData, setLitterFormData] = useState({
    expectedDate: expectedDateHandler("breedDate", 63),
    newHomeDate: "",
  });
  useEffect(() => {
    const id = 1;
    axios
      .get(`${api_url}/litter/${id}/puppies`)
      .then((res) => setPuppies(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    //  puppyForm ? (
    //   <PuppyForm
    //     // newPuppyId={newPuppyId}
    //     puppies={puppies}
    //     setPuppies={setPuppies}
    //     setPuppyForm={setPuppyForm}
    //     RemovePuppy={removePuppyHandler}
    //     editingPuppy={editingPuppy}
    //     setEditingPuppy={setEditingPuppy}
    //     cancel={() => {
    //       setEditingPuppy(false);
    //       setPuppyForm(false);
    //     }}
    //   />
    // ) : (
    <div className="litter-form">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="litter-info">
          <div className="row">
            <label>
              <span className="required">*</span>Owner's Name:
              <input
                name="ownerName"
                placeholder="Owner's Name"
                // onChange={handleFormChange}
                // defaultValue={litterFormData.ownerName}
                ref={register({ required: true })}
                className={errors.ownerName ? "error" : null}
              />
            </label>
            <label>
              <span className="required">*</span>Dam:{" "}
              {/* {errors.dam && {style={errorStyle}}} */}
              <input
                name="dam"
                placeholder="Dam"
                type="text"
                list="dams"
                // onChange={handleFormChange}
                // defaultValue={litterFormData.dam}
                ref={register({ required: true })}
                className={errors.ownerName ? "error" : null}
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
            {/* {errors.sire && <span>this field is required:</span>} */}
            <label>
              <span className="required">*</span>Sire:{" "}
              <input
                name="sire"
                placeholder="Sire"
                type="text"
                list="sires"
                // onChange={handleFormChange}
                // defaultValue={litterFormData.sire}
                ref={register({ required: true })}
                className={errors.ownerName ? "error" : null}
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
                <span className="required">*</span>Breed Date:{" "}
                <input
                  name="breedDate"
                  type="date"
                  // onChange={handleFormChange}
                  // defaultValue={litterFormData.breedDate}
                  ref={register({ required: true })}
                  className={errors.ownerName ? "error" : null}
                />
              </label>
              <p>
                Expected Date:{" "}
                {expectedDateHandler("breedDate", 63, "expectedDate")}
              </p>
            </div>
            <div className="date">
              <label>
                Litter Date:{" "}
                <input
                  name="litterDate"
                  type="date"
                  // onChange={handleFormChange}
                  // defaultValue={litterFormData.litterDate}
                  ref={register({ required: false })}
                />
              </label>
              <p>New Home: {expectedDateHandler("litterDate", 56)}</p>
            </div>
          </div>
        </div>
        {/* <table className="puppies">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>sex</th>
              <th>markings</th>
              <th>Name</th>
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
                  sex,
                  address,
                  akcRegistered,
                  commission,
                  fees,
                  firstName,
                  lastName,
                  listed,
                  markings,
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
                    <td>{sex}</td>
                    <td>{markings}</td>
                    <td>
                      {firstName} {lastName}
                    </td>
                    <td>{phone}</td>
                    <td>{price}</td>
                    <td>{paymentValue}</td>
                    <td>{paymentType}</td>
                    <td>{fees}</td>
                    <td>{sellerPayment}</td>
                    <td>{commission}</td>
                    <td>{akcRegistered ? "Yes" : "No"}</td>
                    <td>{listed ? "Yes" : "No"}</td>
                    <button onClick={() => editPuppyHandler(id)}>Edit</button>
                  </tr>
                )
              )}
          </tbody>
        </table> */}
        {/* <button
          onClick={() => {
            // setNewPuppyId(newPuppyId + 1);
            setPuppyForm(true);
          }}
        >
          Add Puppy
        </button> */}
        <input type="submit" value="Next" />
      </form>
      {/* <PuppyForm
        newPuppyId={newPuppyId}
        puppies={puppies}
        setPuppies={setPuppies}
        setPuppyForm={setPuppyForm}
        RemovePuppy={removePuppyHandler}
        editingPuppy={editingPuppy}
        setEditingPuppy={setEditingPuppy}
        cancel={() => {
          setEditingPuppy(false);
          setPuppyForm(false);
        }}
      /> */}
    </div>
  );

  function expectedDateHandler(dateFrom, days, dataField) {
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
  // function editPuppyHandler(id) {
  // setEditingPuppy(puppies.find((puppy) => puppy.id === id));
  // setPuppyForm(true);
  // }
  function removePuppyHandler(id) {
    // todo shift id's of other puppies
    console.log("REMOVE", id);
    setPuppies(puppies.filter((puppy) => puppy.id !== id));
  }
  function handleFormChange(evt) {
    setLitterFormData({
      ...litterFormData,
      [evt.target.name]: evt.target.value,
    });
  }
});
