import { Box } from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <Box align="center" fontSize="sm">
       &copy;{new Date().getFullYear()} SUNN，由「Willie」強力驅動

<p>
            聯絡我們：contact@liberas.studio
          </p>
    </Box>
  );
};
export default Footer;
