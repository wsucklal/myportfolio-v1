// src/sections/About.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Project from '../../pages/Project';

const meta = {
    title: 'Pages/Project',
    component: Project,
    parameters:{
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Project>;

export default meta; 

type Story = StoryObj<typeof meta>

export const ProjectStory: Story = {
    args: {}
};
