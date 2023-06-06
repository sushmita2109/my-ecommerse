import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-title">SneakerShop</div>
      <div>Made with 💕 by Sushmita Kumari</div>
      <div>
        <a href="https://github.com/sushmita2109/my-ecommerse">
          <GitHubIcon sx={{ color: "white" }} />
        </a>
        <a href="https://www.instagram.com/sushmitakumari94/">
          <InstagramIcon sx={{ color: "white" }} />
        </a>
        <a href="https://twitter.com/Sushmit10759660">
          <TwitterIcon sx={{ color: "white" }} />
        </a>
      </div>
    </div>
  );
};
