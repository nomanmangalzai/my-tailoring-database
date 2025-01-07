import { useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import "../App.css";
import "./FetchCustomers.css";

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch data from the database when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/naaf/get-naaf"); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); // Set the fetched data, which is an array
        console.log(result.total);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="container custom-structure">
      <h1 className="font-weight-bold text-center mb-5">Customer Data</h1>
      {data.map((item, index) => (
        <div className="data-item-container" key={index}>
          <div className="row">
            {/* Left Column: Name, Phone Number, Date */}
            <div className="col-md-12">
              <table
                className="table"
                dir="rtl"
                style={{
                  width: "130%",
                  marginBottom: "50px",
                  borderCollapse: "collapse",
                  tableLayout: "fixed", // Ensures the table stretches fully
                }}
              >
                <thead>
                  <tr>
                    <th>اسم مشتری</th>
                    <th style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      شماره تیلیفون
                    </th>
                    <th style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      د غوښتلو نیټه
                    </th>
                    <th style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      جمله
                    </th>
                    <th style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      باقی
                    </th>{" "}
                    <th style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      تعداد
                    </th>
                    <th style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      جنس
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.customerName}
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.phoneNumber}
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {new Date(item.submissionDate).toISOString().slice(0, 10)}
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.total}
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.remainingMoney}
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.quantity}
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.Gins}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Blank space row between tables */}
          <div className="row mb-3">
            <div className="col-12">
              <hr style={{ marginTop: "0px", marginBottom: "20px" }} />
            </div>
          </div>

          {/* Right Column: Measurements - Swapping columns to place Measurements on the right side */}
          {/* This table is for FARMAYESH */}
          <div className="row" style={{ marginTop: "90px" }}>
            <div className="col-md-12">
              <table
                className="table measurements-table"
                dir="rtl"
                style={{
                  marginTop: "5px", // Add margin between tables
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th
                      className="font-semibold text-xl"
                      style={{
                        border: "1px solid #dee2e6",
                        padding: "2px",
                      }}
                    >
                      واحد&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>
                    <th
                      className="font-semibold text-xl"
                      style={{ border: "1px solid #dee2e6", padding: "0px" }}
                    >
                      اندازه&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>یخن</strong>
                    </td>
                    <td
                      style={{
                        border: "1px solid #dee2e6",
                        padding: "8px",
                        width: "100px",
                      }}
                    >
                      {item.yakhan}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>بغل جیب</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.baghalJeeb}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>جیب روی</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.jeebeRoy}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>آستین</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.asteen}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>دامن</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.daman}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>سلایي</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.salayee}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>دکمه</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.dukma}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>تمبان</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.tumban}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>شانه</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.shana}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>تار</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.taar}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Right Column: Measurements - Swapping columns to place Measurements on the right side */}
          <div className="row" style={{ marginTop: "90px" }}>
            <div className="col-md-12">
              <table
                className="table measurements-table"
                dir="rtl"
                style={{
                  marginTop: "5px", // Add margin between tables
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th
                      className="font-semibold text-xl"
                      style={{
                        border: "1px solid #dee2e6",
                        padding: "2px",
                      }}
                    >
                      واحد&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>
                    <th
                      className="font-semibold text-xl"
                      style={{ border: "1px solid #dee2e6", padding: "0px" }}
                    >
                      اندازه&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #dee2e6",
                        padding: "8px",
                      }}
                    >
                      <strong>قد</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafQad}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>شانه</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafShana}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>آستین</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafAsteen}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>یخن</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafYakhan}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>بغل</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafBaghal}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>دامن</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafDaman}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>زیر بغل</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafZeereBaghal}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>تمبان</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafTumban}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>پاچه</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafPacha}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>جیب تمبان</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafTumbanJeeb}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      <strong>پټۍ</strong>
                    </td>
                    <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                      {item.naafPatay}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
