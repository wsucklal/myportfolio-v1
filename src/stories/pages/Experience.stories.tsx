// src/sections/About.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Experience from '../../pages/Experience';

const meta = {
    title: 'Pages/Experience',
    component: Experience,
    parameters:{
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Experience>;

export default meta; 

type Story = StoryObj<typeof meta>

export const ExperienceStory: Story = {
    args: {}
};
