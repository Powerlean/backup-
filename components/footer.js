import { Box } from "@chakra-ui/react";

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
