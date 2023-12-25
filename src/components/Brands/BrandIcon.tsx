import type { FC } from 'react';
import type { Service } from '@/types/service';

import TikTok from './TikTok';
import Twitter from './Twitter';

const BrandIcon: FC<{
  brand: Service;
  className?: string;
  width?: number;
  height?: number;
}> = ({ brand, className }) => {
  if (brand === 'tiktok') {
    return <TikTok className={className} />;
  }

  return <Twitter className={className} />;
};

export default BrandIcon;
