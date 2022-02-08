import { Box } from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <Box align="center" fontSize="sm">

<p>
            聯絡我們：contact@liberas.studio
          </p>
       &copy;{new Date().getFullYear()} SUNN，由「Willie」強力驅動
    </Box>
  );
};
export default Footer;
