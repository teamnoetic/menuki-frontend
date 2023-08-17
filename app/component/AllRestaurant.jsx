import { useState } from "react";
import FuzzySearch from 'fuzzy-search';
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { Divider, Grid, Stack, TextField, Typography,useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import RestaurantCard from "@/app/component/common/RestaurantCard";

const AllRestaurant = ({ all_restaurant }) => {
  const [restaurant, setRestaurant] = useState(all_restaurant)
  const route = useRouter();
  const isMobile = useMediaQuery("(max-width: 425px)");
  const searcher = new FuzzySearch(all_restaurant, ['name'], {
    caseSensitive: false,
  });
  const HandleSearch = (e) =>{
    const result = searcher.search(e.target.value);
    setRestaurant(result)
  }

  const handleCardClick = (item) => {
    route.push(`/restaurants/${item.restaurant_id}`);
  };
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <DinnerDiningIcon style={{ fontSize: "1.5rem" }} />
          <Typography variant="h4" gutterBottom>
            All Restaurant
          </Typography>
        </Stack>
      </div>
      <Divider style={{ marginBottom: "2rem" }} />
      <Grid container>
        {isMobile ? (
          <>
            <Grid container item xs={12} justifyContent="center">
              <TextField
                onChange={(e)=>HandleSearch(e)}
                style={{ width: "50%" }}
                id="outlined-basic"
                label="Search"
                variant="outlined"
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid container item xs={11} justifyContent="flex-end">
              <TextField
                onChange={(e)=>HandleSearch(e)}
                style={{ width: "20%" }}
                id="outlined-basic"
                label="Search"
                variant="outlined"
              />
            </Grid>
          </>
        )}
      </Grid>
      <Grid container>
        {restaurant.map((el, index) => (
          <Grid
            onClick={() => handleCardClick(el)}
            key={index}
            item
            xs={12}
            md={6}
            lg={3}
          >
            <RestaurantCard restaurant={el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AllRestaurant;
