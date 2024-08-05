import { useEffect, useRef } from "react";

export const useClickOutside = (handler, closePopup) => {
  let domNode = useRef();

  useEffect(() => {
    let isEventoutSideeDom = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", isEventoutSideeDom);

    return () => {
      document.removeEventListener("mousedown", isEventoutSideeDom);
    };
  });

  return domNode;
};
