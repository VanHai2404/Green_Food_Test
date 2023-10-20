
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Suppllier = () => {
  const [SuppllierID, setSuppllierID] = useState('');
  const [name, setName] = useState('');
  const [isAgree, setIsAgree] = useState(false);

  const handleCategoryIdChange = (e) => {
    setSuppllierID(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgreeChange = () => {
    setIsAgree(!isAgree);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!SuppllierID || !name || !isAgree) {
      alert('Please fill out all fields and agree to terms and conditions.');
      return;
    }

    // Handle form submission logic here
    // Example: Send data to backend API or perform other actions
    console.log('Form submitted:', SuppllierID, name);
  };

  return (
    <main id="main" className="main">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Suppllier Tabs</h5>

          {/* Default Tabs */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">New Category</button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">List Category</button>
            </li>
          </ul>
          <div className="tab-content pt-2" id="myTabContent">
            <div className="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <form className="row g-3 needs-validation pt-2" noValidate onSubmit={handleSubmit}>
                <div className="col-12">
                  <div className="form-outline">
                    <label htmlFor="validationCustom03" className="form-label">Suppllier Id</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom03"
                      value={SuppllierID}
                      onChange={handleCategoryIdChange}
                      required
                    />
                    <div className="invalid-feedback">Suppllier Id cannot be empty.</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-outline">
                    <label htmlFor="validationCustom05" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom05"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                    <div className="invalid-feedback">Name cannot be empty.</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-outline">
                    <label htmlFor="validationCustom05" className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom05"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                    <div className="invalid-feedback">Name cannot be empty.</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-outline">
                    <label htmlFor="validationCustom05" className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom05"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                    <div className="invalid-feedback">Name cannot be empty.</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      checked={isAgree}
                      onChange={handleAgreeChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">You must agree before submitting.</div>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Save</button>
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </form>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              {/* Table and pagination */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Suppllier