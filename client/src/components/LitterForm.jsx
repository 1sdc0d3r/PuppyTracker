import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../style/LitterForm/LitterForm.css";
import PuppyForm from "./PuppyForm";
import OwnerForm from "./OwnerForm";
import axios from "axios";
import { withRouter } from "react-router-dom";
const api_url = "http://localhost:5000/api";

export default withRouter(function LitterForm({ history }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (litterData) => {
    // todo set date in correct format
    console.log("litter submit", litterData);
    const ownerName = litterData.owner.split(" ");
    litterData.owner_id = owners.find(
      (e) => e.first_name === ownerName[0] && e.last_name === ownerName[1]
    ).id;
    //   axios
    //     .post(`${api_url}/litter`, litterData)
    //     .then((res) => history.push("/puppy", { litterId: res.data }))
    //     .catch((err) => console.log(err.response.data.message));
  };
  // todo # of puppies/litter
  // todo add in error messages (all at top?)
  const [puppies, setPuppies] = useState([]);
  const [owners, setOwners] = useState([]);
  const [litterFormData, setLitterFormData] = useState({
    expectedDate: expectedDateHandler("breed_date", 63),
    newHomeDate: "",
  });
  useEffect(() => {
    const id = 1;
    //todo DRY axios calls? chaining
    axios
      .get(`${api_url}/litter/${id}/puppies`)
      .then((res) => setPuppies(res.data))
      .catch((err) => console.log(err.response.data));
    axios
      .get(`${api_url}/owner`)
      .then((res) => setOwners(res.data))
      .catch((err) => console.log(err.response.data.message));
  }, []);
  return (
    <div className="litter-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="litter-info">
          <div className="row">
            <label>
              <span className="required">*</span>Owner's Name:{" "}
              <input
                name="owner"
                placeholder="Owner's Name"
                list="owners"
                ref={register({ required: true })}
                className={errors.owner ? "error" : null}
              />
              <datalist id="owners">
                {owners.map((e) => (
                  <option key={e.id}>
                    {e.first_name} {e.last_name}
                  </option>
                ))}
              </datalist>
            </label>
            <label>
              <span className="required">*</span>Dam(F):{" "}
              <input
                name="dam"
                placeholder="Dam"
                type="text"
                list="dams"
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
              <span className="required">*</span>Sire(M):{" "}
              <input
                name="sire"
                placeholder="Sire"
                type="text"
                list="sires"
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
            {errors.litter_date && <span>this field is required:</span>}
            {/* //todo date format/validation MM/DD/YY  */}
            <div className="date">
              <label>
                <span className="required">*</span>Breed Date:{" "}
                <input
                  name="breed_date"
                  type="date"
                  ref={register({ required: true })}
                  className={errors.ownerName ? "error" : null}
                />
              </label>
              <p>
                Expected Date:{" "}
                {expectedDateHandler("breed_date", 63, "expectedDate")}
              </p>
            </div>
            <div className="date">
              <label>
                Litter Date:{" "}
                <input
                  name="litter_date"
                  type="date"
                  ref={register({ required: false })}
                />
              </label>
              <p>New Home: {expectedDateHandler("litter_date", 56)}</p>
            </div>
          </div>
          <p># of Puppies: {puppies.length}</p>
        </div>
        <table className="puppies">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>sex</th>
              <th>markings</th>
              <th>Name</th>
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
                  akcRegistered,
                  commission,
                  fees,
                  listed,
                  markings,
                  name,
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
                    <td>{price}</td>
                    <td>{paymentValue}</td>
                    <td>{paymentType}</td>
                    <td>{fees}</td>
                    <td>{sellerPayment}</td>
                    <td>{commission}</td>
                    <td>{akcRegistered ? "Yes" : "No"}</td>
                    <td>{listed ? "Yes" : "No"}</td>
                    {/* <button onClick={() => editPuppyHandler(id)}>Edit</button> */}
                  </tr>
                )
              )}
          </tbody>
        </table>
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
      <PuppyForm
      // newPuppyId={newPuppyId}
      // puppies={puppies}
      // setPuppies={setPuppies}
      // setPuppyForm={setPuppyForm}
      // RemovePuppy={removePuppyHandler}
      // editingPuppy={editingPuppy}
      // setEditingPuppy={setEditingPuppy}
      // cancel={() => {
      //   setEditingPuppy(false);
      //   setPuppyForm(false);
      // }}
      />
      <OwnerForm />
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
