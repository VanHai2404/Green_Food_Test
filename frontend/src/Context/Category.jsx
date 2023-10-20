
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Category = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [categoriesList, setCategoriesList] = useState([]);
  const [pageSize, setPageSize] = useState(2); // Số lượng sản phẩm hiển thị trên trang
  useEffect(() => {
    // Gọi API để lấy danh sách danh mục và cập nhật state
    // Sử dụng fetch hoặc axios để gửi yêu cầu GET đến backend
    fetch("http://localhost:8080/api/admin/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Xem dữ liệu trả về từ API
        setCategoriesList(data);
      });
  }, []); // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo
  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
  };

  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
  });
  const apiUrl = "http://localhost:8080/api/admin/categories";
  const [message, setMessage] = useState("");


  // 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData({ ...categoryData, [name]: value });
  };
  // 
  const handleEditClick = (category) => {
    console.log(activeTab); // Kiểm tra xem hàm này được gọi bao nhiêu lần
    setActiveTab("contact"); // Chuyển tab khi nhấn nút Edit
    setCategoryData({ name: category.name, description: category.description });
    console.log(activeTab); // Kiểm tra xem hàm này được gọi bao nhiêu lần
  };

  const handleListClick = () => {
    setActiveTab("list"); // Chuyển tab khi nhấn nút list
   
  };

  // Lưu Category
  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setMessage("Category added successfully!");
        // Reset form fields
        setCategoryData({ name: "", description: "" });
      })
      .catch((error) => {
        setMessage("Error adding category. Please try again later.");
        console.error("Error adding category:", error);
      });
  };
  return (
    <main id="main" className="main">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Category Tabs</h5>

          {/* Default Tabs */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">New Category</button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link" id="list-tab" onClick={handleListClick} data-bs-toggle="tab" data-bs-target="#List" type="button" role="tab" aria-controls="profile" aria-selected="false">List Category</button>
            </li>
          </ul>
          <div className="tab-content pt-2" id="myTabContent">
            <div className={`tab-pane fade ${activeTab === "contact" ? "show active" : ""}`} id="contact" role="tabpanel" aria-labelledby="contact-tab">
             
              <form className="row g-3 needs-validation pt-2" onSubmit={handleFormSubmit}>
                <div className="col-12">
                  <div className="form-outline">
                    <label htmlFor="validationCustom03" className="form-label">Category Id</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom03" readOnly={true}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-outline">
                    <label htmlFor="validationCustom05" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={categoryData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-outline">
                    <label htmlFor="validationCustom05" className="form-label">description</label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      value={categoryData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Save</button>
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </form>
              {message && <p>{message}</p>}
            </div>
            <div  className={`tab-pane fade ${activeTab === "List" ? "show active" : ""}`} id="List" role="tabpanel" aria-labelledby="list-tab">
              <div className="container mt-5">
                <div className="row mt-3">
                  <div className="col-lg-2">
                    <table>Page Size</table>
                    <select
                      className="form-select"
                      id="pageSizeSelect"
                      aria-label="Select Page Size"
                      value={pageSize}
                      onChange={handlePageSizeChange}
                    >
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>

                  </div>
                </div>
                <table className="table align-middle mb-0 bg-white mt-2">
                  <thead className="bg-light">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoriesList.slice(0, pageSize).map((category, index) => (
                      <tr key={category.id}>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td>
                        <div className="d-flex justify-content-end">
                          <button type="button" className="btn btn-sm btn-info mx-1">
                            Views
                          </button>
                          <button type="button" className="btn btn-sm btn-warning mx-1" onClick={() => handleEditClick(category)} >
                            Edit
                          </button>
                          <button type="button" className="btn btn-sm btn-danger mx-1">
                           Delete
                          </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="row">
                  <div className="col-md-3 pt-2">
                    <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous" id="dataTable_previous">
                          <a href="#" aria-controls="dataTable" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a href="#" aria-controls="dataTable" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a href="#" aria-controls="dataTable" data-dt-idx="2" tabIndex="0" className="page-link">2</a>
                        </li>
                        <li className="paginate_button page-item next" id="dataTable_next">
                          <a href="#" aria-controls="dataTable" data-dt-idx="7" tabIndex="0" className="page-link">Next</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Category