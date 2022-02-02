import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" fontSize="sm">
      | &copy; {new Date().getFullYear()} Power By Willie  |
    </Box>
  );
};

export default Footer;
