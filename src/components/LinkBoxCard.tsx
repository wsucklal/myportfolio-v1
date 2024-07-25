import React , {Children, ReactNode} from "react";
import {Box, Card, LinkBox, LinkOverlay} from '@chakra-ui/react';


interface LinkBoxCardProps {
    children: ReactNode;
    linkOverlay:string;
}

const LinkBoxCard : React.FC<LinkBoxCardProps> = ({children, linkOverlay}) => {

    return(
        <LinkBox as='article' _hover={{ transform: "scale(1.05)", rounded:'md', boxShadow:'lg', borderRadius:'md' }}>
        <LinkOverlay href={linkOverlay}>
          <Card 
          direction={{base: 'column', sm: 'row'}}
          >
            {children}
          </Card>
        </LinkOverlay>
      </LinkBox>
    )
}

export default LinkBoxCard