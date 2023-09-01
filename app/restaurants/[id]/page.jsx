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

  const navStyle = {
    borderBottom: "5px solid #32ce4c",
    paddingBottom: "3px",
    textDecoration: "none",
    fontSize: "1.2rem",
    color: "#32ce4c",
  };

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
                <div>
                  <Carousel
                    sx={{
                      height: {
                        xs: "200px",
                        sm: "400px",
                        md: "500px",
                        lg: "600px",
                      },
                      width: "100%",
                    }}
                  >
                    <Paper>
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
            <div
              style={
                isMobile
                  ? {
                      display: "flex",
                      flexGrow: 1,
                      overflowX: "scroll",
                      gap: 20,
                      paddingTop: "20px",
                    }
                  : {
                      display: "flex",
                      flexGrow: 1,
                      overflowX: "scroll",
                      gap: 20,
                      paddingTop: "20px",
                    }
              }
            >
              <h6
                style={{
                  ...selectedCategoryStyle,
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  marginTop: "10px",
                }}
                onClick={(e) => handleCategorySelect("")}
              >
                All
              </h6>
              {categoryList &&
                categoryList.map((category, index) => (
                  <Link
                    to={category}
                    activeStyle={navStyle}
                    spy={true}
                    smooth={true}
                    offset={-190}
                    duration={500}
                    key={index}
                  >
                    <h3
                      style={{
                        // paddingLeft: "20px",
                        // paddingRight: "20px",
                        marginTop: "10px",
                        paddingTop: "10px",
                        fontSize: ".8em",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                      onClick={(e) => handleCategorySelect(category)}
                    >
                      {category}
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
