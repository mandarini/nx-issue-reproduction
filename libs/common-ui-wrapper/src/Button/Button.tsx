import React from 'react';
import { Button as UiButton } from '@myorg/common-ui';
import type { ButtonProps as MuiButtonProps } from '@mui/material';

export const Button = (props: MuiButtonProps & { label: string }) => (
  <UiButton {...props} />
);
