import { Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";

const AboutSection = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  return (
    <Grid
      spacing={2}
      container
      justify="space-between"
      alignContent="space-between"
      justifyContent="center"
      flexDirection="row"
    >
      <Grid item xs={12} md={5}>
        <Image
          alt="gg"
          width={isMobile ? 300 : 500}
          height={isMobile ? 300 : 500}
          src="/assets/images/section.png"
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <p>
          <span style={ isMobile ? { color: "#34C840", fontSize: "3rem" }: { color: "#34C840", fontSize: "6rem" }}>Unveiling</span>
          <br></br>{" "}
          <span style={{ fontSize: "3rem" }}>
            The Restaurant's Menu with a{" "}
          </span>
          <br></br>
          <span style={{ fontSize: "3rem" }}>Simple Scan!</span>
        </p>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
