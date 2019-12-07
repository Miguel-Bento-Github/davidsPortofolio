import React, { useState, Fragment, useEffect } from "react";

const openLogin ( )

export default function Login() {
  const openLoginKey = useKeyPress("h");

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", openLogin);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", openLogin);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <Fragment>
      <p>hi</p>
    </Fragment>
  );
}
