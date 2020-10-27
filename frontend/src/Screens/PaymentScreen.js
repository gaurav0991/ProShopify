import React from "react";
import HeaderShipping from "../Components/HeaderShipping";

function PaymentScreen() {
  return (
    <div className="container">
      <div className="form-container">
        <HeaderShipping step1 step2 step3 />
        <form>
          <div class="form-group mt-3 mx-5">
            <legend>Payment Details</legend>
            <div class="alert alert-dismissible alert-success">
              <strong>Select a Payment Method to go forward!</strong>
            </div>
            <fieldset class="form-group mx-1">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios1"
                    value="option1"
                    checked=""
                  />
                  <i class="fab fa-cc-paypal mx-1"></i>
                  Paypal
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="option2"
                  />
                  <i class="fab fa-cc-visa mx-1"></i>
                  Credit Card or Debit Card
                </label>
              </div>
              <div class="form-check disabled">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios3"
                    value="option3"
                    disabled=""
                  />
                  <i class="fab fa-google-pay mx-1"></i>
                  Gpay
                </label>
              </div>
              <btn className="btn btn-danger mt-3">Continue</btn>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentScreen;
