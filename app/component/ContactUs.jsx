import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";

const ContactUs = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  return (
    <Container maxWidth="xxl">
      <Card style={{padding:'20px'}} elevation={3}>
        <Grid
          container
          justify="space-between"
          alignContent="space-between"
          justifyContent="center"
          alignItems='center'
          flexDirection="row"
        >
          <Grid item xs={12} md={5}>
            <Typography
              variant="h2"
              component="h1"
              style={{ fontSize: "bold" }}
              gutterBottom
            >
              Our Contact
            </Typography>
          </Grid>
          <Grid
            style={{ display: "flex", flexDirection: "column" }}
            item
            xs={12}
            md={5}
          >
            <span style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <EmailIcon />
              <Typography variant="h6" style={{marginLeft:'10px'}} gutterBottom>
                menuki.bd@gmail.com
              </Typography>
            </span>
            <span style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <LocalPhoneIcon />
              <Typography variant="h6" style={{marginLeft:'10px'}} gutterBottom>
              +8801521258288
              </Typography>
            </span>
            <span style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <BusinessIcon />
              <Typography variant="h6" style={{marginLeft:'10px'}} gutterBottom>
              Mirpur, Dhaka- 1216
              </Typography>
            </span>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default ContactUs;
