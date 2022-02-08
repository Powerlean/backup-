import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" fontSize="sm">
       &copy;{new Date().getFullYear()} SUNN，由「Willie」強力驅動
<p> contact@liberas.studio </p>
    </Box>
  );
};
export default Footer;
