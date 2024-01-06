import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleGet } from "../Redux/Action/GlavniyAction";

export default function Config() {
  let dispatch = useDispatch();
  let Olish = async () => {
    try {
      let glavniy = await axios("http://localhost:3000/data", {
        method: "get",
      });
      let korzinka = await axios("http://localhost:3000/data", {
        method: "get",
      });
      dispatch(handleGet(glavniy.data));
    } catch (err) {
      console.log(err);
    } finally {
      console.log("malumot olish tugadi!");
    }
  };
  useEffect(() => {
    Olish();
  }, [dispatch]);
}
