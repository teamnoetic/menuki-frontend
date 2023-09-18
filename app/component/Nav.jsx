"use client";
import { useMediaQuery } from "@mui/material";
import { useRouter } from 'next/navigation';
import {
  contentStyle,
  logoStyle,
  logo_container,
  mobileLogoStyle,
  mobilenavbar,
  navbar,
} from "@/app/styles/nav";
const Nav = () => {

  const handleClick = (e) =>{
    route.push("/")

  }
  const route = useRouter();
  const isMobile = useMediaQuery("(max-width: 425px)");
  return (
    <nav style={isMobile ? mobilenavbar : navbar}>
      <div
        style={
          isMobile
            ? { ...logo_container, ...contentStyle }
            : { ...logo_container }
        }
        onClick={(e) => handleClick(e)}
      >
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          style={isMobile ? mobileLogoStyle : logoStyle}
        />
      </div>
    </nav>
  );
};

export default Nav;
