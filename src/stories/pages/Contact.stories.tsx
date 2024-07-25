// src/sections/About.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Contact from '../../pages/Contact';

const meta = {
    title: 'Pages/Contact',
    component: Contact,
    parameters:{
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Contact>;

export default meta; 

type Story = StoryObj<typeof meta>

export const ContactStory: Story = {
    args: {}
};
