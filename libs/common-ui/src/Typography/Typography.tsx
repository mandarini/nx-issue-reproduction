import { Typography as MuiTypography } from '@mui/material';
import React, { FC } from 'react';
import { TypographyProps } from './Typography.types';

const Typography: FC<TypographyProps> = props => <MuiTypography {...props} />;

export default Typography;
