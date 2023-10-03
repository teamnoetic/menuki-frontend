import {
  MobilecardStyle,
  cardStyle,
  gg1Style,
  ggstyle,
  locationTagStyle,
  tag1Style,
} from "@/app/styles/restaurantCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Chip, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const RestaurantCard = ({ restaurant }) => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  return (
    <>
      <div style={isMobile ? MobilecardStyle : cardStyle}>
        <div style={ggstyle}>
          <Image
            style={{ borderRadius: "5px" }}
            width={isMobile ? 400 : 280}
            height={200}
            alt="gg"
            src={"https://test.abid.com.bd" + restaurant.image}
          />
        </div>
        <Grid container style={{ marginLeft: "10px" }}>
          <Grid item xs={12}>
            <Typography style={{textOverflow: 'ellipsis'}} variant="h6" gutterBottom>
              {restaurant.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Chip
              style={locationTagStyle}
              label={restaurant.location.length < 30 ? restaurant.location : restaurant.location.slice(0,35) + '.....'}
              icon={<LocationOnIcon style={{ color: "white" }} />}
            />
          </Grid>
        </Grid>
        <div style={ggstyle}>
          {restaurant.tags.map((el, index) => (
            <Chip key={index} style={tag1Style} label={el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
