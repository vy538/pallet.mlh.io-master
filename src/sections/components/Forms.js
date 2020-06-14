import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Forms = () => (
  <ScrollableAnchor id="forms">
    <section className="py-3 mb-4">
      <h2 className="h4">Forms</h2>
      <hr className="mt-1 mb-4" />

      <div className="row">
        <div className="col-lg-6">
          <div className="bs-component">
            <form>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleSelect1">Example select</label>
                  <select className="form-control" id="exampleSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <fieldset className="form-group">
                  <legend>Radio buttons</legend>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="optionsRadios"
                        id="optionsRadios1"
                        defaultValue="option1"
                      />
                      Option one is this and that—be sure to include why it's
                      great
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="optionsRadios"
                        id="optionsRadios2"
                        defaultValue="option2"
                      />
                      Option two will deselect option one
                    </label>
                  </div>
                </fieldset>
                <fieldset className="form-group">
                  <legend>Checkboxes</legend>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="option1"
                      />
                      Option one is this and that—be sure to include why it's
                      great
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        disabled={true}
                      />
                      Option two is disabled
                    </label>
                  </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1">
          <form className="bs-component">
            <div className="form-group">
              <fieldset disabled="">
                <label className="control-label" htmlFor="disabledInput">
                  Disabled input
                </label>
                <input
                  className="form-control"
                  id="disabledInput"
                  type="text"
                  placeholder="Disabled input here..."
                  disabled={true}
                />
              </fieldset>
            </div>

            <div className="form-group has-success">
              <label className="form-control-label" htmlFor="inputSuccess1">
                Valid input
              </label>
              <input
                type="text"
                defaultValue="correct value"
                className="form-control is-valid"
                id="inputValid"
              />
              <div className="valid-feedback">Success! You've done it.</div>
            </div>

            <div className="form-group has-danger">
              <label className="form-control-label" htmlFor="inputDanger1">
                Invalid input
              </label>
              <input
                type="text"
                defaultValue="wrong value"
                className="form-control is-invalid"
                id="inputInvalid"
              />
              <div className="invalid-feedback">
                Sorry, that username's taken. Try another?
              </div>
            </div>

            <div className="form-group">
              <label className="control-label">Input addons</label>
              <div className="form-group">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Forms;
