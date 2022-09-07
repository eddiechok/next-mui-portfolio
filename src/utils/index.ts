import { SxProps, Theme } from '@mui/material';

export const packSx = (sx?: SxProps<Theme>) => (Array.isArray(sx) ? sx : [sx]);
