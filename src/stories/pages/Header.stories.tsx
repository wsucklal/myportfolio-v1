// src/sections/About.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Header from '../../pages/Header';

const meta = {
    title: 'Pages/Header',
    component: Header,
    parameters:{
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta; 

type Story = StoryObj<typeof meta>

export const HeaderStory: Story = {
    args: {}
};
