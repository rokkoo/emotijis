import React, { useState, useEffect } from "react";

const useRefCallBack = () => {
  const [ref, setRef] = useState(null);
  const [ready, setReay] = useState(false);

  useEffect(() => {
    if (ref) setReay(true);
  }, [ref]);

  return [setRef, ready];
};

export default useRefCallBack;
