import React from "react";
import { useForm } from "react-hook-form";

export default function NewPuppy(props) {
  // const {
  //   newPuppyId,
  //   puppies,
  //   setPuppies,
  //   setPuppyForm,
  //   editingPuppy,
  //   setEditingPuppy,
  //   RemovePuppy,
  //   cancel,
  // } = props;
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (puppyData) => {
    puppyData.commission = CommissionRate();
    // puppyData.id = editingPuppy ? editingPuppy.id : newPuppyId;
    // if (editingPuppy) {
    //   console.log("EDIT PUPPY");
    //   // RemovePuppy(editingPuppy.id);
    // }
    // setPuppies([...puppies, puppyData]);
    // setEditingPuppy(false);
    // setPuppyForm(false);
  };
  // const {
  //   // id,
  //   address,
  //   akcRegistered,
  //   commission,
  //   fees,
  //   firstName,
  //   sex,
  //   lastName,
  //   listed,
  //   markings,
  //   microchipId,
  //   name,
  //   paymentType,
  //   paymentValue,
  //   phone,
  //   price,
  //   sellerPayment,
  // } = editingPuppy;
  return (
    <form className="puppy-form" onSubmit={handleSubmit(onSubmit)}>
      {/* <p className="id">{id ? id : newPuppyId}</p> */}
      {/*//todo upload <img />*/}
      <label>
        Name:{" "}
        <input
          name="name"
          placeholder="Puppy Name"
          type="text"
          // defaultValue={name ? name : ""}
          ref={register()}
        />
      </label>
      <label>
        Microchip #:{" "}
        <input
          name="microchipId"
          placeholder="#######"
          type="text"
          // defaultValue={microchipId ? microchipId : ""}
          ref={register()}
        />
        <select
          name="sex"
          // defaultValue={sex ? sex : "M"}
          ref={register({ required: false })}
        >
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </label>
      <label>
        Markings:{" "}
        <input
          // todo choose multiple markings array
          name="markings"
          placeholder="markings"
          // defaultValue={markings ? markings : ""}
          type="text"
          list="markings"
          ref={register({ required: false })}
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
            // defaultValue={firstName ? firstName : ""}
            type="text"
            ref={register({ required: false })}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            name="lastName"
            placeholder="Last Name"
            // defaultValue={lastName ? lastName : ""}
            type="text"
            ref={register({ required: false })}
          />
        </label>
        <label>
          Phone:{" "}
          <input
            name="phone"
            placeholder="Phone #"
            // defaultValue={phone ? phone : ""}
            type="text"
            ref={register({ required: false })}
          />
        </label>
        <label>
          Address: {/* //todo split this into further breakdown */}
          <input
            name="address"
            placeholder="Address"
            // defaultValue={address ? address : ""}
            type="text"
            ref={register({ required: false })}
          />
        </label>
      </div>
      <label>
        Price:{" "}
        <input
          name="price"
          placeholder="$$"
          // defaultValue={price ? price : ""}
          type="text"
          ref={register({ required: false })}
        />
      </label>
      {/* //todo validate number  */}
      <div>
        <label>
          Payment:{" "}
          <input
            name="paymentValue"
            type="text"
            // defaultValue={paymentValue ? paymentValue : ""}
            placeholder="$"
            ref={register({ required: false })}
          />
        </label>
        <label>
          Payment Type:{" "}
          <input
            name="paymentType"
            type="text"
            list="paymentType"
            // defaultValue={paymentType ? paymentType : "Cash"}
            // default="cash"
            ref={register({ required: false })}
          />
          <datalist id="paymentType">
            <option>Cash</option>
            <option>Check</option>
            <option>Card</option>
            <option>Venmo</option>
            <option>PayPal</option>
          </datalist>
        </label>
      </div>
      <label>
        Fees:{" "}
        <input
          name="fees"
          type="text"
          placeholder="$"
          // defaultValue={fees ? fees : ""}
          ref={register({ required: false })}
        />
      </label>
      <label>
        Seller Payment:{" "}
        <input
          name="sellerPayment"
          type="text"
          // defaultValue={sellerPayment ? sellerPayment : ""}
          placeholder="$"
          ref={register({ required: false })}
        />
      </label>
      <label>
        AKC:{" "}
        <input
          name="akcRegistered"
          type="checkbox"
          // defaultValue={akcRegistered ? firstName : false}
          ref={register({ required: false })}
        />
      </label>
      <label>
        Listed:{" "}
        <input
          name="listed"
          type="checkbox"
          // defaultValue={listed ? listed : false}
          ref={register({ required: false })}
        />
      </label>
      <div className="actions">
        {/* <button onClick={cancel}>Cancel</button> */}
        {/* {editingPuppy && (
          <button onClick={() => RemovePuppy(editingPuppy.id)}>Delete</button>
        )} */}
        <input type="submit" value="Submit Puppy!" />
      </div>
    </form>
  );

  function CommissionRate() {
    // "0-799": "10%",
    // "800-1599": "15%",
    // "1600": "20%"
    const price = watch("price");
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
