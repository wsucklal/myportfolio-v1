// src/sections/About.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import About from '../../pages/About';

const meta = {
    title: 'Pages/About',
    component: About,
    parameters:{
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof About>;

export default meta; 

type Story = StoryObj<typeof meta>

export const AboutStory: Story = {
    args: {}
};
