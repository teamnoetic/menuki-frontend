"use client";
import { Grid, Paper, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { sliders } from "@/app/utils/fakeData";

const Item = ({ item, isMobile }) => {
  return (
    <Paper sx={isMobile ? { height: "40vh" } : { height: "80vh" }}>
      <Image alt="gg" src={item.img_url} fill />
    </Paper>
  );
};

const Slider = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  return (
    <Grid container>
      <Grid item xs = {12}>
        <div style={isMobile ? { marginTop: "60px" } : { marginTop: "80px" }}>
          <Carousel>
            {sliders.map((item, i) => (
              <Item key={i} item={item} isMobile={isMobile} />
            ))}
          </Carousel>
        </div>
      </Grid>
    </Grid>
  );
};

export default Slider;
