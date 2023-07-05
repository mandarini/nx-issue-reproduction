// button.component.tsx

import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from './Button.types';

export const Button = (props: ButtonProps) => <MuiButton {...props} />;