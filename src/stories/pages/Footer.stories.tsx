// src/sections/About.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../../pages/Footer';

const meta = {
    title: 'Pages/Footer',
    component: Footer,
    parameters:{
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta; 

type Story = StoryObj<typeof meta>

export const FooterStory: Story = {
    args: {}
};
