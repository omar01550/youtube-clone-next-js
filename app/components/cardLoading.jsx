import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function CardLoading() {
  return (
    <Stack spacing={1} sx={{marginTop:"40px"}}>
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="img" width={270} height={200} />
      <Skeleton variant="text" width={150} height={30} />
      <Skeleton variant="text" width={150} height={30} />
      <Skeleton variant="text" width={130} height={30} />
      <Skeleton variant="rounded" width={270} height={60} />
    </Stack>
  );
}