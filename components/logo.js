import Link from "next/link";
import { Text, Image, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Logobox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  padding: 10px;
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Logobox>
          <Image alt="sunn logo" src="/images/sunn.png"  css={{filter:"invert(.7)"}} width={116} height={34} />
        </Logobox>
      </a>
    </Link>
  );
};

export default Logo;
