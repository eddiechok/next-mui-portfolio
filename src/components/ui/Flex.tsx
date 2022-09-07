import { Box, BoxProps } from '@mui/material';
import { SystemProps } from '@mui/system';

import { packSx } from '@/utils';

export type FlexOptions = {
  align?: SystemProps['alignItems'];
  justify?: SystemProps['justifyContent'];
  wrap?: SystemProps['flexWrap'];
  direction?: SystemProps['flexDirection'];
  basis?: SystemProps['flexBasis'];
  grow?: SystemProps['flexGrow'];
  shrink?: SystemProps['flexShrink'];
};

export type FlexProps = FlexOptions & BoxProps;

export const Flex = ({
  direction,
  align,
  justify,
  wrap,
  basis,
  grow,
  shrink,
  ...props
}: FlexProps) => {
  const flexSx = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
  };

  return <Box {...props} sx={[flexSx, ...packSx(props.sx)]} />;
};
