import React from "react";
import { useForm } from "react-hook-form";

export default function NewPuppy(props) {
  const { register, watch, errors } = useForm();
  console.log(props);
  const { id } = props;
  return (
    <div className="puppy">
      <p className="id">{id}</p>
      {/*//todo upload <img />*/}
      <input
        name="name"
        placeholder="Puppy Name"
        type="text"
        ref={register()}
      />
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
      <div className="new-owner">
        {/*
        //todo add new owner/choose existing owner (new form)
         */}
        <input
          name="firstName"
          placeholder="First Name"
          type="text"
          ref={register({ required: true })}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          type="text"
          ref={register({ required: true })}
        />
        <input
          name="address"
          placeholder="Address"
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <input
        name="price"
        placeholder="$$"
        type="text"
        ref={register({ required: true })}
      />
      {/* //todo validate number  */}
      <div>
        <input
          name="paymentValue"
          type="text"
          placeHolder="$"
          ref={register({ required: true })}
        />
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
      </div>
      <input
        name="fees"
        type="text"
        placeHolder="$"
        ref={register({ required: true })}
      />
      <input
        name="sellerPayment"
        type="text"
        placeHolder="$"
        ref={register({ required: true })}
      />
      <input
        name="commission"
        type="text"
        default={() => CommissionRate()} //todo pass in price field
        ref={register({ required: true })}
      />
      <input
        name="akcRegistered"
        type="checkbox"
        default={false}
        ref={register({ required: true })}
      />
      <input
        name="listed"
        type="checkbox"
        default={false}
        ref={register({ required: true })}
      />
    </div>
  );

  function CommissionRate(price) {
    // "0-799": "10%",
    // "800-1599": "15%",
    // "1600": "20%"
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
