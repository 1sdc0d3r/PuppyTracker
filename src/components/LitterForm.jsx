import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PuppyForm from "./PuppyForm";
//todo pawprint as icon/on home page
export default function LitterForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (litterData) => {
    litterData.puppies = puppies;
    console.log("litter submit", litterData);
  };
  const [puppies, setPuppies] = useState([
    {
      id: "id",
      microchipId: "microchipId",
      name: "name",
      gender: "gender",
      markings: "markings",
      firstName: "firstName",
      lastName: "lastName",
      address: "address",
      phone: "phone",
      price: "price",
      paymentValue: "paymentValue",
      paymentType: "paymentType",
      fees: "fees",
      sellerPayment: "sellerPayment",
      commission: "commission",
      akcRegistered: "akcRegistered",
      listed: "listed",
    },
    {
      id: 1,
      address: "2020 S 5040 E, South Jordan ut 84402",
      akcRegistered: false,
      commission: 200,
      fees: 80,
      firstName: "Jack",
      gender: "male",
      lastName: "Barry",
      listed: false,
      markings: "Chocolate, Dapple",
      microchipId: "",
      name: "",
      paymentType: "",
      paymentValue: "",
      phone: "",
      price: "",
      sellerPayment: "",
    },
  ]);
  const [puppyId, setPuppyId] = useState(0);
  const [puppyForm, setPuppyForm] = useState(false);
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
          {errors.sire && <span>This field is required:</span>}
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
          {errors.litterDate && <span>This field is required:</span>}
          {/* //todo date format/validation MM/DD/YY  */}
          <label>
            Breed Date:{" "}
            <input
              name="breedDate"
              type="date"
              ref={register({ required: false })}
            />
          </label>
          <p>Expected Date: {ExpectedDate("breedDate", 63)}</p>
          <label>
            Litter Date:{" "}
            <input
              name="litterDate"
              type="date"
              ref={register({ required: false })}
            />
            <p>New Home: 8wks {ExpectedDate("litterDate", 56)}</p>
          </label>
        </div>
        <div className="puppies">
          {puppies?.map(
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
              <div className="puppy">
                <p>{id}</p>
                <p>{microchipId}</p>
                <p>{name}</p>
                <p>{gender}</p>
                <p>{markings}</p>
                <div className="newOwner">
                  <p>{firstName}</p>
                  <p>{lastName}</p>
                  <p>{address}</p>
                  <p>{phone}</p>
                </div>
                <p>{price}</p>
                <p>{paymentValue}</p>
                <p>{paymentType}</p>
                <p>{fees}</p>
                <p>{sellerPayment}</p>
                <p>{commission}</p>
                <p>{akcRegistered}</p>
                <p>{listed}</p>
                <button onClick={() => RemovePuppy(id)}>Remove</button>
              </div>
            )
          )}
        </div>
        <input type="submit" value="Submit Litter" />
      </form>
      <button
        onClick={() => {
          setPuppyId(puppyId + 1);
          setPuppyForm(true);
        }}
      >
        Add Puppy
      </button>
      {puppyForm && (
        <PuppyForm
          puppyId={puppyId}
          puppies={puppies}
          setPuppies={setPuppies}
          setPuppyForm={setPuppyForm}
        />
      )}
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
  function RemovePuppy(id) {
    // todo shift id's of other puppies
    setPuppies(puppies.filter((puppy) => puppy.id !== id));
  }
}
