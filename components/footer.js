import { Box } from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <Box align="center" fontSize="sm">
       &copy;{new Date().getFullYear()} SUNN，由「Willie」強力驅動

<LinkItem
            _target="_blank"
            href="mailto:contact@liberas.studio"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoMail />
            聯絡我們
          </LinkItem>
    </Box>
  );
};
export default Footer;
