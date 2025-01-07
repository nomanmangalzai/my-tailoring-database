import { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";

import "./contactus.css";

const ContactUs = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState(null);

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

  const handleSave = () => {
    setData(editedData); // Update the main data with edited data
    setEditMode(false); // Exit edit mode
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
            {/* Table 1 */}
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

          {/* Table 2 */}
          <div className="customer-naaf">
            <table className="table" dir="rtl">
              <thead>
                <tr>
                  <th>واحد</th>
                  <th>اندازه</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>قد</td>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editedData.naafQad}
                        onChange={(e) => handleInputChange(e, "naafQad")}
                      />
                    ) : (
                      data.naafQad
                    )}
                  </td>
                </tr>
                <tr>
                  <td>شانه</td>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editedData.naafShana}
                        onChange={(e) => handleInputChange(e, "naafShana")}
                      />
                    ) : (
                      data.naafShana
                    )}
                  </td>
                </tr>
                <tr>
                  <td>استین</td>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editedData.naafAsteen}
                        onChange={(e) => handleInputChange(e, "naafAsteen")}
                      />
                    ) : (
                      data.naafAsteen
                    )}
                  </td>
                </tr>
                <tr>
                  <td>بغل</td>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editedData.naafBaghal}
                        onChange={(e) => handleInputChange(e, "naafBaghal")}
                      />
                    ) : (
                      data.naafBaghal
                    )}
                  </td>
                </tr>
                <tr>
                  <td>دامن</td>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editedData.naafDaman}
                        onChange={(e) => handleInputChange(e, "naafDaman")}
                      />
                    ) : (
                      data.naafDaman
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 3 */}
          <div className="customer-farmaish">
            <table className="table" dir="rtl">
              <thead>
                <tr>
                  <th>واحد</th>
                  <th>اندازه</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>جیب</td>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editedData.naafTumbanJeeb}
                        onChange={(e) => handleInputChange(e, "naafTumbanJeeb")}
                      />
                    ) : (
                      data.naafTumbanJeeb
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="div-for-buttons">
        <button className="btn btn-primary" onClick={handleEditToggle}>
          {editMode ? "Cancel" : "Edit"}
        </button>
        {editMode && (
          <button className="btn btn-success" onClick={handleSave}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
