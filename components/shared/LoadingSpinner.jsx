import React from "react";

function LoadingSpinner({ loadingText = "Loading" }) {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: "500px", border: '1px solid red', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{loadingText}</p>
    </div>
  );
}

export default LoadingSpinner;
