import {Button} from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Libraries/UI/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;


export const Default: Story = {
  args: {
    children: 'default button'
  },
  render: args => <Button {...args} />,
};
