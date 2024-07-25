// src/components/MainLayout.tsx
import React from 'react';
import { Box, VStack } from '@chakra-ui/react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <VStack spacing={16} align="stretch">
        {children}
      </VStack>
    </Box>
  );
};

export default MainLayout;
