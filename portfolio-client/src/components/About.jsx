import CommonLayout from "./CommonLayout";
import React, { useState, useEffect } from "react";
import path from "../route/route";
import axios from "axios";

const About = () => {
  const [data, setData] = useState([]);
  const [dataRecieved, setDataRecieved] = useState("nodata");
  const getData = async () => {
    try {
      const fetchData = await axios.get(`${path}about`);
      setData(fetchData.data);
      setDataRecieved("data recived");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [dataRecieved]);

  return (
    <>
      {data.map((_, i) => {
        return (
          <CommonLayout
            key={i}
            greet=""
            title={data[i]?.title}
            description={data[i]?.describe}
            image={data[i]?.image}
            button=""
            animate="col-lg-6 order-1 order-lg-2"
          />
        );
      })}
    </>
  );
};

export default About;
