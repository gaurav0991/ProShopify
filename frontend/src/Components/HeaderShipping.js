import React from "react";

function HeaderShipping(props) {
  return (
    <div className="mt-3 mx-5">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class={`nav-link ${props.step1 ? "" : "disabled"}`}
            data-toggle="tab"
          >
            Login
          </a>
        </li>
        <li class="nav-item">
          <a
            class={`nav-link ${props.step2 ? "" : "disabled"}`}
            data-toggle="tab"
            href="#profile"
          >
            Shipping
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${props.step3 ? "" : "disabled"}`} href="#">
            Payment Method
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${props.step4 ? "" : "disabled"}`} href="#">
            Place Order
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderShipping;
