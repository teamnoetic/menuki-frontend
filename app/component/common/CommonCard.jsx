import { cardStyle, ggstyle } from "@/app/styles/commonCard";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Image from "next/image";

const CommonCard = ({cardInfo}) => {
  return (
    <div style={cardStyle}>
      <div style={ggstyle}>
        <Image
          style={{ borderRadius: "5px" }}
          width={310}
          height={250}
          alt="gg"
          src={"https://admin.noeticit.tech"+cardInfo.img_url}
        />
      </div>
      <div style={ggstyle}>
        <Typography variant="h5" gutterBottom>
          {cardInfo.product_name}
        </Typography>
      </div>
      <div style={ggstyle}>
        <Chip
          style={{ backgroundColor: "#34C840", color: "white" }}
          label={`${cardInfo.discount_amount} % Discount`}
        />
        <Chip
          style={{
            marginLeft: "4px",
            backgroundColor: "#FFBD00",
            color: "black",
          }}
          label={cardInfo.shop_name}
        />
      </div>
    </div>
  );
};

export default CommonCard;
