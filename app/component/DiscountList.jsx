import { Divider, Stack, Typography } from "@mui/material";
import { IoFastFood } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselItem, responsive } from "../styles/discount";
import CommonCard from "@/app/component/common/CommonCard";
import { useRouter } from 'next/navigation';

const DiscountList = ({discount_product}) => {
  const route = useRouter();

  const handleCardClick = (item)=>{
    route.push(`/restaurants/${item.shop_id}`)
  } 
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IoFastFood style={{ fontSize: "1.5rem" }} />
          <Typography variant="h4" gutterBottom>
            Discount
          </Typography>
        </Stack>
      </div>
      <Divider />
      <div>
        <Carousel
          responsive={responsive}
          transitionDuration={500}
          autoPlay
          infinite
        >
          {discount_product.map((el, index) => (
            <div onClick={()=>handleCardClick(el)} key={index} style={carouselItem}>
              <CommonCard cardInfo = {el} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DiscountList;
