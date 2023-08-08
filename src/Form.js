import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <form class="search-form" id="search-form">
        <div class="row">
          <div class="col-6">
            <input
              type="search"
              placeholder="City.."
              class="form-control"
              id="city-form-input"
            />
          </div>
          <div class="col-2">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-outline-info"
            />
          </div>
          <div class="col-3">
            <button
              type="button"
              class="btn btn-outline-info"
              id="currentButton"
            >
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
