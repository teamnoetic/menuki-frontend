import { Card, CardContent, Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const AboutUs = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  return (
    <Container maxWidth="xxl">
      <Card elevation={3}>
        <CardContent>
          {/* <BusinessIcon fontSize="large" color="primary" /> */}
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" paragraph>
           Menu Ki is a QR code-based restaurant digitalization startup in Bangladesh.
          </Typography>
          <Typography variant="body1" paragraph>
          Our goal is to provide a QR code-based digital menu and AI-based POS software in a single platform for restaurants. We believe that our unified software will revolutionize the restaurant industry in Bangladesh by offering a convenient and cashless payment system for customers and a profitable software solution for restaurant owners
          </Typography>
          {/* Add more content as needed */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutUs;
