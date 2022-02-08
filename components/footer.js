import {
  Box,
  Image
} from "@chakra-ui/react";


const Footer = () => {
  return (
     <Box align="center" fontSize="sm">
          <Image alt="footer logo" src="/images/trademark.png"  width={40}  />
       &copy;{new Date().getFullYear()} SUNN，由「Willie」強力驅動
    </Box>
  );
};
export default Footer;
