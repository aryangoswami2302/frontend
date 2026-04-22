import React from 'react'
import { Navbar } from 'react-bootstrap'

function Addpages() {
    return (
        <div>
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder='Enter your first name' required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02"placeholder='Enter your last name' required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">State</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value>Choose...</option>
                        <option>GUJRAT</option>
                        <option>RAJASTHAN</option>
                        <option>MAHARASHTRA</option>
                        <option>MP</option>
                        <option>UP</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                
                <div className="col-12">
                    <button className="btn btn-dark text-white" type="submit">Submit</button>
                </div>
            </form>


        </div>
    )
}

export default Addpages