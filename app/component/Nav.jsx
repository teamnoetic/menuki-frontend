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
        onClick={() => route.push("/")}
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
