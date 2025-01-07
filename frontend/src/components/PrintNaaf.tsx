import React from "react";
import "./contactus.css";

const PrintNaaf = React.forwardRef((props, ref) => {
  const { data } = props;

  // React.useEffect(() => {
  //   console.log("PrintNaaf ref:", ref);
  // }, [ref]);

  return (
    <div className="container " ref={ref}>
      <div className="card">
        <div className="table1">
          <table className="table">
            <thead>
              <tr>
                <td>نیټه</td>
                <td>غوښتلو نیټه</td>
                <td>تعداد</td>
                <td>جمله</td>
                <td>باقی</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{new Date(data.todayDate).toISOString().slice(0, 10)}</td>
                <td>
                  {new Date(data.submissionDate).toISOString().slice(0, 10)}
                </td>
                <td>{data.quantity}</td>
                <td>{data.total}</td>
                <td>{data.remainingMoney}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table2">
          <p>خیاطی و رخت فروشی درخشان</p>
          <table className="table">
            <thead>
              <tr>
                <td>نیټه</td>
                <td>غوښتلو نیټه</td>
                <td>تعداد</td>
                <td>جمله</td>
                <td>باقی</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{new Date(data.todayDate).toISOString().slice(0, 10)}</td>
                <td>
                  {new Date(data.submissionDate).toISOString().slice(0, 10)}
                </td>
                <td>{data.quantity}</td>
                <td>{data.total}</td>
                <td>{data.remainingMoney}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

export default PrintNaaf;
