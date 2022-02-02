import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Logobox = styled.span`
  font-weight: bold;
  font-size: 36px;
  display: inline-flex;
  align-items: center;
  padding: 20px;
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Logobox>
          <Text
            color={useColorModeValue("gary.800", "whiteAlpha.900")}
            fontFamily="-ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, Liberation Mono, monospace"
            fontWeight="bold"
            ml={3}
          >
            SUNN
          </Text>
        </Logobox>
      </a>
    </Link>
  );
};

export default Logo;
