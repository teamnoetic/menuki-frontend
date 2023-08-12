"use client";
import { useEffect, useState } from "react";
import FoodSection from "@/app/component/FoodSection";
import {
  categoryStyle,
  selectedCategoryStyle,
} from "@/app/styles/singleRestaurantStyle";
import { fakeFoods } from "@/app/utils/fakeFood";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Link } from "react-scroll";
import Carousel from "react-material-ui-carousel";

const RestaurantPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [foodItem, setFoodItem] = useState([]);
  const [gg, setGG] = useState(false);
  const params = useParams();

  const fetchData = async () => {
    const result = await axios.get(
      `https://admin.noeticit.tech/api/restaurant/${params.id}`
    );

    setRestaurantInfo(result.data);
    setFoodItem(result.data.food_detail);
    setGG(true);
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const isMobile = useMediaQuery("(max-width: 425px)");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  const loadCategories = (fakeFoods) => {
    const categories = [];
    foodItem.map((food) => categories.push(food.tag));
    const newCategories = new Set(categories);
    setCategoryList(Array.from(newCategories));
  };
  useEffect(() => {
    fakeFoods.map((food) => (food.expanded = false));
    loadCategories(fakeFoods);
  }, [foodItem]);

  return (
    <>
      {gg && (
        <>
          <Grid container>
            <Grid item xs={12}>
              <div
                style={isMobile ? { marginTop: "60px" } : { marginTop: "80px" }}
              >
                <div sx={isMobile ? { height: "40vh" } : { height: "10vh" }}>
                  <Carousel>
                    <Paper
                      sx={isMobile ? { height: "40vh" } : { height: "80vh" }}
                    >
                      <Image
                        alt="gg"
                        src={`https://admin.noeticit.tech${restaurantInfo.cover_pic}`}
                        fill
                      />
                    </Paper>
                  </Carousel>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography
                style={{ fontWeight: "bold" }}
                gutterBottom
                variant="h4"
              >
                {restaurantInfo.restaurant_name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} display="flex" flexDirection="row">
              <LocationOnIcon style={{ fontSize: "2rem" }} />
              <Typography gutterBottom variant="h5">
                {restaurantInfo.address}
              </Typography>
            </Grid>
          </Grid>
          <div style={categoryStyle}>
            <div style={isMobile ? { display: "flex", overflowX: "scroll" } : {display: "flex"}}>
              <h3
                style={
                  selectedCategory === ""
                    ? {
                        ...selectedCategoryStyle,
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        marginTop: "0px",
                      }
                    : {
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginTop: "10px",
                      }
                }
                onClick={(e) => handleCategorySelect("")}
              >
                All
              </h3>
              {categoryList &&
                categoryList.map((category,index) => (
                  <Link
                    to={category}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    key={index}
                  >
                    <h3
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        marginTop: "0px",
                        paddingTop: "10px",
                      }}
                      onClick={(e) => handleCategorySelect(category)}
                    >
                      <span
                        style={
                          selectedCategory == category
                            ? selectedCategoryStyle
                            : {}
                        }
                      >
                        {category}
                      </span>
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
          <div>
            {foodItem.map((el, index) => (
              <FoodSection key={index} food={el} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default RestaurantPage;
