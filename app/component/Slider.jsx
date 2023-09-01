"use client";
import { Grid, Paper, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { sliders } from "@/app/utils/fakeData";

const Item = ({ item, isMobile }) => {
  return (
    <Paper>
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
          <Carousel sx={{height: {xs: '200px', sm:'400px', md: '500px', lg:'600px'}, width:'100%' }}>
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