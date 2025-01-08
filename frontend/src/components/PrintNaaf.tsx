// Another component that you want to print
import React from "react";
const AnotherComponent = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref}>
      <h1>This is the content you want to print</h1>
      <p>Noman you have done it with the grace of your Rabb</p>
    </div>
  );
});

export default AnotherComponent;
