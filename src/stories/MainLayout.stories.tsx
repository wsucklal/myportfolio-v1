import type { Meta, StoryObj } from '@storybook/react';
import MainLayout from '../components/MainLayout';

const meta = {
    title: 'Components/MainLayout',
    component: MainLayout,
    parameters:{
        layout: 'fullscreen',
    }
  } satisfies Meta<typeof MainLayout>;
  
export default meta; 

type Story = StoryObj<typeof meta>

export const MainLayoutStory: Story = {
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