import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from 'next/image';
import sunn from '/images/sunn.png';

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
          <Image alt="sunn logo" src={sunn} width={120} height={36} />
        </Logobox>
      </a>
    </Link>
  );
};

export default Logo;
