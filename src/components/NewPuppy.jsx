import React from "react";
import { useForm } from "react-hook-form";

export default function NewPuppy({
  puppyId,
  puppies,
  setPuppies,
  setNewPuppyForm,
}) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (newPuppyData) => {
    console.log("NEW PUPPY SUBMIT", newPuppyData);
    setPuppies([...puppies, newPuppyData]);
    setNewPuppyForm(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="id">{puppyId}</p>
      {/*//todo upload <img />*/}
      <label>
        Name:{" "}
        <input
          name="name"
          placeholder="Puppy Name"
          type="text"
          ref={register()}
        />
      </label>
      <label>
        Microchip #:{" "}
        <input
          name="microchipId"
          placeholder="#######"
          type="text"
          ref={register()}
        />
        <select name="gender" default="male" ref={register({ required: true })}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        Markings:{" "}
        <input
          // todo choose multiple markings
          name="markings"
          placeholder="markings"
          type="text"
          list="markings"
          ref={register({ required: true })}
        />
        <datalist id="markings">
          <option>Cream</option>
          <option>Chocolate</option>
          <option>Dapple</option>
        </datalist>
      </label>
      <div className="new-owner">
        {/*
        //todo add new owner/choose existing owner (new form)
         */}
        <label>
          First Name:{" "}
          <input
            name="firstName"
            placeholder="First Name"
            type="text"
            ref={register({ required: true })}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            name="lastName"
            placeholder="Last Name"
            type="text"
            ref={register({ required: true })}
          />
        </label>
        <label>
          Address:{" "}
          <input
            name="address"
            placeholder="Address"
            type="text"
            ref={register({ required: true })}
          />
        </label>
      </div>
      <label>
        Price:{" "}
        <input
          name="price"
          placeholder="$$"
          type="text"
          ref={register({ required: true })}
        />
      </label>
      {/* //todo validate number  */}
      <div>
        <label>
          Payment:{" "}
          <input
            name="paymentValue"
            type="text"
            placeholder="$"
            ref={register({ required: true })}
          />
        </label>
        <label>
          Payment Type:{" "}
          <input
            name="paymentType"
            type="text"
            list="paymentType"
            default="cash"
            ref={register({ required: true })}
          />
          <datalist id="paymentType">
            <option>Cash</option>
            <option>Check</option>
            <option>Card</option>
            <option>Venmo</option>
            <option>Paypal</option>
          </datalist>
        </label>
      </div>
      <label>
        Fees:{" "}
        <input
          name="fees"
          type="text"
          placeholder="$"
          ref={register({ required: true })}
        />
      </label>
      <label>
        Seller Payment:{" "}
        <input
          name="sellerPayment"
          type="text"
          placeholder="$"
          ref={register({ required: true })}
        />
      </label>
      <label>
        Commission:{" "}
        <input
          name="commission"
          type="text"
          default={CommissionRate()} //todo pass in price field
          ref={register({ required: true })}
        />
      </label>
      <label>
        AKC:{" "}
        <input
          name="akcRegistered"
          type="checkbox"
          default={false}
          ref={register({ required: true })}
        />
      </label>
      <label>
        Listed:{" "}
        <input
          name="listed"
          type="checkbox"
          default={false}
          ref={register({ required: true })}
        />
      </label>
      <input type="submit">Submit Puppy!</input>
    </form>
  );

  function CommissionRate() {
    // "0-799": "10%",
    // "800-1599": "15%",
    // "1600": "20%"
    const price = watch("price");
    console.log("PRICE", price);
    if (!price) return 0;

    if (price < 799) {
      return price * 0.1;
    } else if (price < 1599) {
      return price * 0.15;
    } else {
      return price * 0.2;
    }
  }
}
