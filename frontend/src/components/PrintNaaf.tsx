// // Another component that you want to print
// import React from "react";
// const AnotherComponent = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
//   return (
//     <div ref={ref}>
//       <h1>This is the content you want to print</h1>
//       <p>Noman you have done it with the grace of your Rabb</p>
//     </div>
//   );
// });

// export default AnotherComponent;

import React from "react";
import "./contactus.css";

const PrintNaaf = React.forwardRef((props, ref) => {
  const { data } = props;

  return (
    <div className="container " ref={ref}>
      <h1>You have done it with the grace of Allah</h1>
    </div>
  );
});

export default PrintNaaf;

// import React from "react";
// import "./contactus.css";

// const PrintNaaf = React.forwardRef((props, ref) => {
//   const { data } = props;

//   return (
//     <div className="container " ref={ref}>
//       <div className="card">
//         <div className="table1">
//           <table className="table">
//             <thead>
//               <tr>
//                 <td>نیټه</td>
//                 <td>غوښتلو نیټه</td>
//                 <td>تعداد</td>
//                 <td>جمله</td>
//                 <td>باقی</td>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{new Date(data.todayDate).toISOString().slice(0, 10)}</td>
//                 <td>
//                   {new Date(data.submissionDate).toISOString().slice(0, 10)}
//                 </td>
//                 <td>{data.quantity}</td>
//                 <td>{data.total}</td>
//                 <td>{data.remainingMoney}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="table2">
//           <p>خیاطی و رخت فروشی درخشان</p>
//           <table className="table">
//             <thead>
//               <tr>
//                 <td>نیټه</td>
//                 <td>غوښتلو نیټه</td>
//                 <td>تعداد</td>
//                 <td>جمله</td>
//                 <td>باقی</td>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{new Date(data.todayDate).toISOString().slice(0, 10)}</td>
//                 <td>
//                   {new Date(data.submissionDate).toISOString().slice(0, 10)}
//                 </td>
//                 <td>{data.quantity}</td>
//                 <td>{data.total}</td>
//                 <td>{data.remainingMoney}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default PrintNaaf;
