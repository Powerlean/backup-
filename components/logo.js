import Link from "next/link";
import { Image } from "@chakra-ui/react";
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
          <Image alt="sunn logo" src="/images/memecat.png"  css={{filter:"invert(.7)"}} width={20}  />
        </Logobox>
      </a>
    </Link>
  );
};

export default Logo;
