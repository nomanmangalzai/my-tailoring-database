///////////////////////////////////
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";
import "./customerDetails.css";

const HelloWorld = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    Gins: "",
    quantity: "",
    total: "",
    remainingMoney: "",
    todayDate: "",
    submissionDate: "",
    naafQad: "",
    naafShana: "",
    naafAsteen: "",
    naafYakhan: "",
    naafBaghal: "",
    naafDaman: "",
    naafZeereBaghal: "",
    naafTumban: "",
    naafPacha: "",
    naafTumbanJeeb: "",
    naafPatay: "",
    yakhan: "",
    asteen: "",
    baghalJeeb: "",
    daman: "",
    tumban: "",
    shana: "",
    salayee: "",
    taar: "",
    jeebeRoy: "",
    dukma: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form with data:", formData);

    if (!formData.customerName || !formData.phoneNumber) {
      setError("Name and Phone are required fields.");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/naaf/save-naaf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to the backend");
      }

      const result = await response.json();
      console.log("Data sent to backend:", result);
      setSuccess("ناف موفقانه ثبت شد");

      setFormData({
        customerName: "",
        phoneNumber: "",
        Gins: "",
        quantity: "",
        total: "",
        remainingMoney: "",
        todayDate: "",
        submissionDate: "",
        naafQad: "",
        naafShana: "",
        naafAsteen: "",
        naafYakhan: "",
        naafBaghal: "",
        naafDaman: "",
        naafZeereBaghal: "",
        naafTumban: "",
        naafPacha: "",
        naafTumbanJeeb: "",
        naafPatay: "",
        // لاندي فرمایشات دي
        yakhan: "",
        asteen: "",
        baghalJeeb: "",
        daman: "",
        tumban: "",
        shana: "",
        salayee: "",
        taar: "",
        jeebeRoy: "",
        dukma: "",
      });
    } catch (error) {
      console.error("Error sending data to backend:", error);
      setError("Error submitting data. Please try again.");
    }
  };

  const handleKeyDown = (event, nextFieldId) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission on Enter
      const nextField = document.getElementById(nextFieldId);
      if (nextField) {
        nextField.focus();
      }
    }
  };

  return (
    <div className="container parent-container" dir="rtl">
      <h1
        className="font-weight-bold text-primary text-center mb-5"
        style={{ fontSize: "42px" }}
      >
        ناف مشتری
      </h1>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <Form onSubmit={handleSubmit}>
        <div className="row">
          {/* First Column: Input Fields */}
          <div className="col-2">
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="customerName" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="نام مشتری"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "phoneNumber")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="phoneNumber" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="شماره تیلیفون"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "Gins")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="Gins" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="جنس"
                  value={formData.Gins}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "quantity")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="quantity" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="تعداد"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "total")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="total" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="جمله"
                  value={formData.total}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "remainingMoney")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group
                controlId="remainingMoney"
                className="flex-grow-1 ml-2"
              >
                <Form.Control
                  type="text"
                  placeholder="باقی"
                  value={formData.remainingMoney}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "todayDate")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="todayDate" className="flex-grow-1 ml-2">
                <Form.Control
                  type="date"
                  placeholder="نیټه"
                  value={formData.todayDate}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "submissionDate")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group
                controlId="submissionDate"
                className="flex-grow-1 ml-2"
              >
                <Form.Control
                  type="date"
                  placeholder="غوښتلو نیټه"
                  value={formData.submissionDate}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafQad")}
                />
              </Form.Group>
            </div>
          </div>
          {/* Second Column: More Input Fields */}
          <div className="col-2">
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="naafQad" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="قد"
                  value={formData.naafQad}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafShana")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="naafShana" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="شانه"
                  value={formData.naafShana}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafAsteen")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="naafAsteen" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="آستین"
                  value={formData.naafAsteen}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafYakhan")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="naafYakhan" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="یخن"
                  value={formData.naafYakhan}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafBaghal")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="naafBaghal" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="بغل"
                  value={formData.naafBaghal}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafDaman")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="naafDaman" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="دامن"
                  value={formData.naafDaman}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafZeereBaghal")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group
                controlId="naafZeereBaghal"
                className="flex-grow-1 ml-2"
              >
                <Form.Control
                  type="text"
                  placeholder="زیر بغل"
                  value={formData.naafZeereBaghal}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafTumban")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="naafTumban" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="تمبان"
                  value={formData.naafTumban}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafPacha")}
                />
              </Form.Group>
            </div>
          </div>
          {/* Third Column: Dropdown Lists */}
          <div className="col-2">
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="naafPacha" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="پاچه"
                  value={formData.naafPacha}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafTumbanJeeb")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group
                controlId="naafTumbanJeeb"
                className="flex-grow-1 ml-2"
              >
                <Form.Control
                  type="text"
                  placeholder="تمبان جیب"
                  value={formData.naafTumbanJeeb}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "naafPatay")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="naafPatay" className="flex-grow-1 ml-2">
                <Form.Control
                  type="text"
                  placeholder="پټۍ"
                  value={formData.naafPatay}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "yakhan")}
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="yakhan" className="flex-grow-1 ml-2">
                <Form.Control
                  as="select"
                  value={formData.yakhan}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "asteen")}
                >
                  <option value="">یخن</option>
                  <option value="ټوپیس">ټوپیس</option>
                  <option value="نیمه بین ګول">نیمه بین ګول</option>
                  <option value="فول بین ګول">فول بین ګول</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="asteen" className="flex-grow-1 ml-2">
                <Form.Control
                  as="select"
                  value={formData.asteen}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "baghalJeeb")}
                >
                  <option value="">استین</option>
                  <option value="کف دار ګول">کف دار ګول</option>
                  <option value="بي پلیټ چهار کنج"> کف بې پلیټ چهارکنج</option>
                  <option value="استین ساده">استین ساده</option>
                  <option value="استین ساده نرم">استین ساده نرم</option>
                  <option value="ډبل کف">ډبل کف</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="baghalJeeb" className="flex-grow-1 ml-2">
                <Form.Control
                  as="select"
                  value={formData.baghalJeeb}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "daman")}
                >
                  <option value="">بغل جیب</option>
                  <option value="یک">یک</option>
                  <option value="دو">دو</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="daman" className="flex-grow-1 ml-2">
                <Form.Control
                  as="select"
                  value={formData.daman}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "tumban")}
                >
                  <option value="">دامن</option>
                  <option value="ګول">ګول </option>
                  <option value="چهارکنج">چهارکنج</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="tumban" className="flex-grow-1 ml-2">
                <Form.Control
                  as="select"
                  value={formData.tumban}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "shana")}
                >
                  <option value="">تمبان</option>
                  <option value="بي درز">بې درز</option>
                  <option value="درز دار">درز دار</option>
                  <option value="ګیبي">ګیبي</option>
                  <option value="نیمه ګیبي">نیمه ګیبي</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="shana" className="flex-grow-1 ml-2">
                <Form.Control
                  as="select"
                  value={formData.shana}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "salayee")}
                >
                  <option value="">شانه</option>
                  <option value="عام">عام</option>
                  <option value="ډاون">ډاون</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="salayee" className="flex-grow-1 ml-2">
                <Form.Control
                  as="select"
                  value={formData.salayee}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "taar")}
                >
                  <option value="">سلایي</option>
                  <option value="قاسمي">قاسمي</option>
                  <option value="سنګل سلایي">سنګل سلایي</option>
                  <option value="ډبل سلایي">ډبل سلایي</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="taar" className="flex-grow-1 ml-2">
                <Form.Control
                  as="select"
                  value={formData.taar}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "jeebeRoy")}
                >
                  <option value="">تار</option>
                  <option value="ساده تار">ساده تار</option>
                  <option value="چمک تار">چمک تار</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="jeebeRoy" className="flex-grow-1 ml-2">
                <Form.Control
                  as="select"
                  value={formData.jeebeRoy}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "dukma")}
                >
                  <option value="">جیب روی</option>
                  <option value="شته">شته</option>
                  <option value="نشته">نشته</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="input-square"></div>
              <Form.Group controlId="dukma" className="flex-grow-1 ml-2">
                <Form.Control
                  as="select"
                  value={formData.dukma}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, "submit")}
                >
                  <option value="">دکمه</option>
                  <option value="ساده">ساده</option>
                  <option value="ډیزاین">ډیزاین</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <Button type="submit" className="btn btn-primary mt-4">
          ثبت
        </Button>
      </Form>
    </div>
  );
};

export default HelloWorld;
