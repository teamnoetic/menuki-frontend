import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import RestaurantCard from '@/app/component/common/RestaurantCard';

const AllRestaurant = ({ all_restaurant }) => {
  const route = useRouter();

  const handleCardClick = (item) => {
    route.push(`/restaurants/${item.restaurant_id}`)
}
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
      <Divider />
      <Grid container>
        {all_restaurant.map((el, index) => (
          <Grid onClick={()=>handleCardClick(el)} key={index} item xs={12} md={6} lg={3}>
            <RestaurantCard  restaurant = {el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AllRestaurant;
