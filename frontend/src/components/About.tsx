// import { useReactToPrint } from "react-to-print";
// import { useRef } from "react";

// const About = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const reactToPrintFn = useReactToPrint({ contentRef });

//   return (
//     <div>
//       <button onClick={() => reactToPrintFn()}>Print</button>
//       <div ref={contentRef}>Content to print</div>
//     </div>
//   );
// };
// export default About;

// const Print = () => {
//   return (
//     <div>
//       <h1>Print me</h1>
//     </div>
//   );
// };

import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
import AnotherComponent from "./PrintNaaf";

// // Another component that you want to print
// const AnotherComponent = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
//   return (
//     <div ref={ref}>
//       <h1>This is the content you want to print</h1>
//       <p>More content goes here...</p>
//     </div>
//   );
// });

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null); // Reference to AnotherComponent
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <button onClick={() => reactToPrintFn()}>Print</button>
      {/* Pass the ref to AnotherComponent */}
      <AnotherComponent ref={contentRef} />
    </div>
  );
};

export default About;
