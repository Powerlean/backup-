import {
  Box,
  Image
} from "@chakra-ui/react";


const Footer = () => {
  return (
     <Box align="center" fontSize="sm">
<Image src='/images/trademark.png' alt="footer logo" rounded="md" boxSize='100px' objectFit='cover' my={8} />
       &copy;{new Date().getFullYear()} SUNN，由「Willie」強力驅動
    </Box>
  );
};
export default Footer;
