import {
  MobilecardStyle,
  cardStyle,
  ggstyle,
  locationTagStyle,
  tag1Style
} from "@/app/styles/restaurantCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Chip, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const RestaurantCard = ({restaurant}) => {
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
            src={"https://admin.noeticit.tech"+restaurant.image}
          />
        </div>
        <div style={ggstyle}>
          <Typography variant="h6" gutterBottom>
            {restaurant.name}
          </Typography>
        </div>
        <div style={ggstyle}>
          {
            restaurant.tags.map((el,index)=>(
              <Chip key={index} style={tag1Style} label={el} />

            ))
          }
        </div>

        <div style={ggstyle}>
          <Chip
            style={locationTagStyle}
            label={restaurant.location}
            icon={<LocationOnIcon style={{ color: "white" }} />}
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
