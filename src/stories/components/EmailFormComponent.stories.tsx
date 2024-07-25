import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EmailForm from '../../components/EmailFormComponent';

const meta = {
    title: 'Components/EmailForm',
    component: EmailForm,
    parameters:{
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof EmailForm>;

export default meta; 

type Story = StoryObj<typeof meta>

export const EmailFormStory: Story = {
    args: {}
};