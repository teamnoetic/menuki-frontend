"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const FoodSection = ({ food }) => {
  const [expanded, setExpanded] = useState([]);
  const isMobile = useMediaQuery("(max-width: 425px)");

  const handleExpandClick = (index) => {
    const newExpandedList = [...food.food_section];
    newExpandedList[index].expanded = !newExpandedList[index].expanded;
    setExpanded(newExpandedList);
  };
  return (
    <>
      <div style={{ marginTop: "1rem" }} id={food.tag}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h4" gutterBottom>
            {food.section_title}
          </Typography>
        </Stack>
      </div>
      <Divider sx={{ marginBottom: "1rem" }} />
      <Grid container spacing={2}>
        {food.food_section.length > 0 ? (
          food.food_section.map((food, index) => (      
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card sx={{ maxWidth: isMobile ? 420 : 345 }}>
                <CardContent>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={8}>
                      <Typography variant="h6">{food.name}</Typography>
                      <Typography paragraph style={{ color: "#909090" }}>
                        {food.desc}
                      </Typography>
                      {food.discount_available ? (
                        <>
                          <Typography variant="body2" color="text.secondary">
                            <del>{`From ${food.actual_price} `}</del>
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{ fontWeight: "bold" }}
                          >
                            {`From ${food.discounted_price} BDT`}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>{

                          food.variants.length > 0 ? `From ${food.variants[0].actual_price} BDT` : `From ${food.actual_price} BDT` 
                          }
                          </Typography>
                        </>
                      )}
                    </Grid>
                    <Grid item xs={4}>
                      <Image
                        src={food.img_url ?  "https://test.abid.com.bd" + food.img_url : "/assets/images/base.jpg"}
                        width={100}
                        height={90}
                        alt="foods"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Chip
                        label={
                          food.is_available == "1"
                            ? "Available"
                            : "Not Available"
                        }
                        style={
                          food.is_available == "1"
                            ? { backgroundColor: "green", color: "white", marginTop:"5px" }
                            : { backgroundColor: "red", color: "white" , marginTop:"5px"}
                        }
                      />
                    </Grid>
                    <Grid item xs={8}>
                      {food.discount_available ? (
                        <div style={{ display: "flex" }}>
                          {food.variants.length > 0 && (
                            <ExpandMore
                              expand={food.expanded}
                              onClick={(e) => handleExpandClick(index)}
                              aria-expanded={expanded}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon style={{color:'#32ce4c'}} />
                            </ExpandMore>
                          )}
                        </div>
                      ) : (
                        <div style={{ display: "flex" }}>
                          {food.variants.length > 0 && (
                            <ExpandMore
                              expand={food.expanded}
                              onClick={(e) => handleExpandClick(index)}
                              aria-expanded={expanded}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon style={{color:'#32ce4c'}} />
                            </ExpandMore>
                          )}
                        </div>
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
                <Collapse in={food.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Variants:</Typography>
                    <hr />
                    {food.variants.map((el, index) => (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        key={index}
                      >
                        <Typography variant="h6">{el.variant}</Typography>
                        <div
                          style={{
                            display: "flex",
                            marginTop: "3px",
                            justifyContent: "space-around",
                          }}
                        >
                          {food.discount_available == 1 ? (
                            <>
                              <Typography
                                style={{ marginRight: "1rem" }}
                                variant="body2"
                                color="text.secondary"
                              >
                                <del>{el.actual_price}</del>
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {`${el.discount_price} BDT`}
                              </Typography>
                            </>
                          ) : (
                            <Typography
                              variant="body"
                              color="text.primary"
                              style={{ marginLeft: "5px" }}
                            >
                              {`${el.actual_price} BDT`}
                            </Typography>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))
        ) : (
          <div style={{ marginLeft: "1rem" }}>
            <Typography>Food not available</Typography>
          </div>
        )}
      </Grid>
    </>
  );
};

export default FoodSection;
