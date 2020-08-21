import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
//todo set required based of forms
export default withRouter(function OwnerForm({ history, location }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (ownerData) => {
    console.log(ownerData);
  };

  return (
    <form className="owner-form" onSubmit={handleSubmit(onSubmit)}>
      {console.log({ errors })}
      <label>
        <span className="required">*</span>
        First Name:{" "}
        <input
          name="first_name"
          placeholder="First Name"
          type="text"
          className={errors.first_name ? "error" : null}
          ref={register({ required: true })}
        />
      </label>
      <label>
        Last Name:{" "}
        <input
          name="last_name"
          placeholder="Last Name"
          type="text"
          ref={register()}
        />
      </label>
      <label>
        <span className="required">*</span>
        Phone:{" "}
        <input
          name="phone"
          placeholder="Phone #"
          // defaultValue={phone ? phone : ""}
          //todo change to type="tel"
          type="text"
          className={errors.phone ? "error" : null}
          ref={register({ required: true })}
        />
      </label>
      <label>
        Address: {/* //todo split this into further breakdown */}
        <input
          name="address"
          placeholder="Address"
          type="text"
          ref={register({ required: false })}
        />
      </label>
      <label>
        <span className="required">*</span>
        City:
        <input
          name="city"
          placeholder="City"
          type="text"
          className={errors.city ? "error" : null}
          ref={register({ required: true })}
        />
      </label>
      <label>
        <span className="required">*</span>
        State:
        <input
          name="state"
          placeholder="State"
          type="text"
          className={errors.state ? "error" : null}
          ref={register({ required: true })}
        />
      </label>
      <label>
        Zip:
        <input
          name="zip"
          placeholder="Zip"
          type="text"
          ref={register({ required: false })}
        />
      </label>
      <label>
        <span className="required">*</span>
        Type:{" "}
        <input
          name="type"
          type="text"
          list="ownerType"
          className={errors.type ? "error" : null}
          ref={register({ required: true })}
        />
        <datalist id="ownerType">
          <option>Breeder</option>
          <option>Pet Owner</option>
        </datalist>
      </label>

      <div className="actions">
        <input type="submit" value="Submit Owner" />
      </div>
    </form>
  );
});
