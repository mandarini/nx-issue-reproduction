import {Typography} from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Libraries/UI wrapper/Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;


export const Default: Story = {
  args: {
    children: 'wrapper typography',
    variant: 'body2'
  },
  render: args => <Typography {...args} />,
};
