"use client";
import { setMobileView } from "@/redux/slices/viewportSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const viewChange = () => {
    if (window.innerWidth < 1024) {
      dispatch(setMobileView(true));
    } else {
      dispatch(setMobileView(false));
    }
  };

  useEffect(() => {
    viewChange();
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", viewChange);
  }

  const isMobileView = useSelector((state) => state.viewport.isMobileView);

  return <div>Write your code here {isMobileView ? "Mobile" : "Laptop"}</div>;
};

export default page;
