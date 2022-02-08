import {
  Box,
  Image
} from "@chakra-ui/react";


const Footer = () => {
  return (
    <Box align="center" fontSize="sm">
<Image src='/images/footer.png' alt="footer logo" rounded="md" boxSize='30px' objectFit='cover' my={4} />

       &copy;{new Date().getFullYear()} SUNN，由「Willie」強力驅動
    </Box>
  );
};
export default Footer;
