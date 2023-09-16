"use client";
import { footerContent, footerLinks, mainFooterStyle } from "@/app/styles/footer";

const Footer = () => {
  return (
    <div style={{ marginTop: "1.5rem", width: '100%' }}>
      <footer style={mainFooterStyle}>
        <div style={footerContent}>
          <p>&copy; All rights reserved.</p>
          <ul style={footerLinks}>
            <h2>Menuki</h2>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
