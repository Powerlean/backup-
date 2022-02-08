import {
  Box,
  Image
} from "@chakra-ui/react";


const Footer = () => {
  return (

     <Image src='/images/footer.png' alt="footer logo" rounded="md" boxSize='90px' objectFit='cover' my={4} />
<Box align="center" fontSize="sm">
       &copy;{new Date().getFullYear()} SUNN，由「Willie」強力驅動
    </Box>
  );
};
export default Footer;
