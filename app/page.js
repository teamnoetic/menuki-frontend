"use client";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AboutSection from "@/app/component/AboutSection";
import AllRestaurant from "@/app/component/AllRestaurant";
import DiscountList from "@/app/component/DiscountList";
import Slider from "@/app/component/Slider";

const divStyle = {
  width: "100%",
  marginTop: "5rem",
};

export default function Home() {
  const [data, setData] = useState({});
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [discountPrice, setDiscountPrice] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const result = await axios.get(
      "https://test.abid.com.bd/api/restaurants"
    );
    setData(result?.data);
    setAllRestaurant(result?.data?.all_restaurant);
    setDiscountPrice(result?.data?.discount_product);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ width: "100%", height:"100%", marginTop: "2rem" }}>
          <Slider />
        </div>
        <div style={divStyle}>
          <AboutSection />
        </div>
        {loading ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
            <CircularProgress />
          </div>
        ) : (
          discountPrice.length ? (
            <div style={divStyle}>
              <DiscountList discount_product={discountPrice} />
            </div>
          ): (<div></div>)
        )}
        {loading ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
            <CircularProgress />
          </div>
        ) : (
          <div style={divStyle}>
            <AllRestaurant all_restaurant={allRestaurant} />
          </div>
        )}
      </div>
    </>
  );
}