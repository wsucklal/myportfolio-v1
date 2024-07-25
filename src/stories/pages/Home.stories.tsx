import type { Meta, StoryObj } from '@storybook/react';
import Home from '../../pages/Home';

const meta = {
    title: 'Pages/Home',
    component: Home,
    parameters:{
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Home>;
  
export default meta; 

type Story = StoryObj<typeof meta>

export const HomeStory: Story = {
    args: {
        children: (
        <div>
        <h1>Section 1</h1>
        <h1>Section 2</h1>
        <h1>Section 3</h1>
        </div>
        ),
    }
};