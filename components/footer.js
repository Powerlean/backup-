import {
  Box,
  Image
} from "@chakra-ui/react";


const Footer = () => {
  return (
     <Box align="center" fontSize="sm">
          <Image alt="footer logo" src="/images/memecat.png"  width={40}  />
       &copy;{new Date().getFullYear()} MeMeCat，由「Willie」强力驱动
    </Box>
  );
};
export default Footer;
