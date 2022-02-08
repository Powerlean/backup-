import {
  Box,
  Image
} from "@chakra-ui/react";


const Footer = () => {
  return (
     <Box align="center" fontSize="sm">
<Image src='/images/trademark.png' alt="footer logo" rounded="none" boxSize='100px' objectFit='none' my={2} />
       &copy;{new Date().getFullYear()} SUNN，由「Willie」強力驅動
    </Box>
  );
};
export default Footer;
