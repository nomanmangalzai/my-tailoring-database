import React, { useState } from "react";

import { Alert, Spinner } from "react-bootstrap";

import "./contactus.css";

const SearchNaafData = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      setError("Please enter a phone number.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/naaf/get-one-naaf?phoneNumber=${phoneNumber}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data. Please check the phone number.");
      }

      const result = await response.json();
      if (result) {
        setData(result);
        setEditedData(result); // Initialize editedData with fetched data
      } else {
        setError("No data found for the provided phone number.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditToggle = () => {
    setEditMode((prev) => !prev);
  };

  const handleInputChange = (e, field) => {
    setEditedData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      const response = await fetch("http://localhost:5000/naaf/update-naaf", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update data.");
      }

      const result = await response.json();
      setData(result); // Update the main data with saved data
      setEditMode(false);
      setSuccessMessage("Data updated successfully!");
    } catch (err) {
      console.error("Error updating data:", err);
      setError(err.message || "An error occurred while updating data.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!data || !data._id) {
      setError("No data to delete.");
      return;
    }

    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/naaf/delete-naaf/${data._id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json(); // Parse the response JSON

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete data.");
      }

      setData(null); // Clear the data after successful deletion
      setSuccessMessage(result.message); // Show the message from the backend
    } catch (err) {
      console.error("Error deleting data:", err);
      setError(err.message || "An error occurred while deleting data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="font-weight-bold text-center mb-2">
        Search Customer Data
      </h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-1">
        <div className="input-group">
          <input
            type="tel"
            name="phone"
            id="phone"
            className="form-control mr-1"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit" className="btn btn-primary" id="search-button">
            Search
          </button>
        </div>
      </form>

      {/* Error Alert */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Loading data...</p>
        </div>
      )}

      {/* Display Data */}
      {data && (
        <div>
          <div className="customer-information">
            <table className="table" dir="rtl">
              <thead>
                <tr>
                  <th>اسم مشتری</th>
                  <th>شماره تیلیفون</th>
                  <th>د غوښتلو نیټه</th>
                  <th>جمله</th>
                  <th>باقی</th>
                  <th>تعداد</th>
                  <th>جنس</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editedData.customerName}
                        onChange={(e) => handleInputChange(e, "customerName")}
                      />
                    ) : (
                      data.customerName
                    )}
                  </td>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editedData.phoneNumber}
                        onChange={(e) => handleInputChange(e, "phoneNumber")}
                      />
                    ) : (
                      data.phoneNumber
                    )}
                  </td>
                  <td>
                    {editMode ? (
                      <input
                        type="date"
                        value={new Date(editedData.submissionDate)
                          .toISOString()
                          .slice(0, 10)}
                        onChange={(e) => handleInputChange(e, "submissionDate")}
                      />
                    ) : (
                      new Date(data.submissionDate).toISOString().slice(0, 10)
                    )}
                  </td>
                  <td>
                    {editMode ? (
                      <input
                        type="number"
                        value={editedData.total}
                        onChange={(e) => handleInputChange(e, "total")}
                      />
                    ) : (
                      data.total
                    )}
                  </td>
                  <td>
                    {editMode ? (
                      <input
                        type="number"
                        value={editedData.remainingMoney}
                        onChange={(e) => handleInputChange(e, "remainingMoney")}
                      />
                    ) : (
                      data.remainingMoney
                    )}
                  </td>
                  <td>
                    {editMode ? (
                      <input
                        type="number"
                        value={editedData.quantity}
                        onChange={(e) => handleInputChange(e, "quantity")}
                      />
                    ) : (
                      data.quantity
                    )}
                  </td>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editedData.Gins}
                        onChange={(e) => handleInputChange(e, "Gins")}
                      />
                    ) : (
                      data.Gins
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-container">
            <div className="table-wrapper">
              <div className="customer-naaf">
                <table className="table customer-naaf-sizes" dir="rtl">
                  <thead>
                    <tr>
                      <th className="font-semibold text-xl table-headers">
                        واحد&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </th>
                      <th className="font-semibold text-xl table-headers">
                        اندازه&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>قد</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafQad}
                            onChange={(e) => handleInputChange(e, "naafQad")}
                          />
                        ) : (
                          data.naafQad
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>شانه</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafShana}
                            onChange={(e) => handleInputChange(e, "naafShana")}
                          />
                        ) : (
                          data.naafShana
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>استین</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafAsteen}
                            onChange={(e) => handleInputChange(e, "naafAsteen")}
                          />
                        ) : (
                          data.naafAsteen
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>یخن</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafYakhan}
                            onChange={(e) => handleInputChange(e, "naafYakhan")}
                          />
                        ) : (
                          data.naafYakhan
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>بغل</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafBaghal}
                            onChange={(e) => handleInputChange(e, "naafBaghal")}
                          />
                        ) : (
                          data.naafBaghal
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>دامن</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafDaman}
                            onChange={(e) => handleInputChange(e, "naafDaman")}
                          />
                        ) : (
                          data.naafDaman
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>زیر بغل</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafZeereBaghal}
                            onChange={(e) =>
                              handleInputChange(e, "naafZeereBaghal")
                            }
                          />
                        ) : (
                          data.naafZeereBaghal
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>تمبان</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafTumban}
                            onChange={(e) => handleInputChange(e, "naafTumban")}
                          />
                        ) : (
                          data.naafTumban
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>پاچه</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafPacha}
                            onChange={(e) => handleInputChange(e, "naafPacha")}
                          />
                        ) : (
                          data.naafPacha
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>جیب تمبان</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafTumbanJeeb}
                            onChange={(e) =>
                              handleInputChange(e, "naafTumbanJeeb")
                            }
                          />
                        ) : (
                          data.naafTumbanJeeb
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>پټۍ</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.naafPatay}
                            onChange={(e) => handleInputChange(e, "naafPatay")}
                          />
                        ) : (
                          data.naafPatay
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="table-wrapper-farmaish">
              <div className="customer-farmaish">
                <table
                  style={{ width: "100%" }}
                  className="table customer-farmaish-properties"
                  dir="rtl"
                >
                  <thead>
                    <tr>
                      <th className="font-semibold text-xl table-headers">
                        واحد&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </th>
                      <th className="font-semibold text-xl table-headers">
                        اندازه&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>یخن</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.yakhan}
                            onChange={(e) => handleInputChange(e, "yakhan")}
                          />
                        ) : (
                          data.yakhan
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>شانه</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.asteen}
                            onChange={(e) => handleInputChange(e, "naafShana")}
                          />
                        ) : (
                          data.asteen
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>استین</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.baghalJeeb}
                            onChange={(e) => handleInputChange(e, "naafAsteen")}
                          />
                        ) : (
                          data.baghalJeeb
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>یخن</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.daman}
                            onChange={(e) => handleInputChange(e, "naafYakhan")}
                          />
                        ) : (
                          data.daman
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>بغل</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.tumban}
                            onChange={(e) => handleInputChange(e, "naafBaghal")}
                          />
                        ) : (
                          data.tumban
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>دامن</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.shana}
                            onChange={(e) => handleInputChange(e, "naafDaman")}
                          />
                        ) : (
                          data.shana
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>زیر بغل</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.salayee}
                            onChange={(e) =>
                              handleInputChange(e, "naafZeereBaghal")
                            }
                          />
                        ) : (
                          data.salayee
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>تمبان</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.taar}
                            onChange={(e) => handleInputChange(e, "naafTumban")}
                          />
                        ) : (
                          data.taar
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>پاچه</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.jeebeRoy}
                            onChange={(e) => handleInputChange(e, "naafPacha")}
                          />
                        ) : (
                          data.jeebeRoy
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="naaf-andaze">
                        <strong>جیب تمبان</strong>
                      </td>
                      <td className="naaf-andaze">
                        {editMode ? (
                          <input
                            type="string"
                            value={editedData.dukma}
                            onChange={(e) =>
                              handleInputChange(e, "naafTumbanJeeb")
                            }
                          />
                        ) : (
                          data.dukma
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="div-for-buttons">
        {data && (
          <div>
            <button
              className="btn btn-primary m-1 pr-4 pl-4"
              onClick={handleEditToggle}
            >
              {editMode ? "Cancel" : "Edit"}
            </button>
            <button className="btn btn-success m-1 w-40">Print</button>
            <button className="btn btn-danger m-1 w-30" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
        {editMode && (
          <button className="btn btn-success" onClick={handleSave}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchNaafData;
