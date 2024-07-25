import { Box, Flex, Heading, Text, Button, Image, Stack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React, { ReactNode } from "react";

const typeWriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

interface TypeWriterTextProps{
    children: ReactNode;
    delay?:number;
  }
const TypeWriterText: React.FC<TypeWriterTextProps>= ({ children, delay=3,...props }) => (
  <Text
    as="span"
    whiteSpace="nowrap"
    overflow="hidden"
    borderRight="2px solid"
    display="inline-block"
    width="0"
    animation={`${typeWriter} ${delay}s steps(40, end) forwards, ${blink} 1s step-end infinite`}
    {...props}
  >
    {children}
  </Text>
);

export default TypeWriterText;