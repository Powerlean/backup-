import {
  Box,
  Image
} from "@chakra-ui/react";


const Footer = () => {
  return (
<Box align="left" fontSize="sm">
     <Image src='/images/footer.png' alt="footer logo" rounded="md" boxSize='90px' objectFit='cover' my={4} />
 </box>   
<Box align="center" fontSize="sm">
       &copy;{new Date().getFullYear()} SUNN，由「Willie」強力驅動
    </Box>
  );
};
export default Footer;
