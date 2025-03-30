import { useEffect, useState } from 'react';
import * as SC from './Avatar.styles';
import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'src' | 'height' | 'width' | 'alt'> & {
  src?: string;
  size?: number;
};

const fallbackSrc = '/images/fallback-avatar.svg';

const Avatar = ({ src, size = 40, ...props }: Props) => {
  const isValidImage = !!src && src.startsWith('http');

  const [imgSrc, setImgSrc] = useState<string>(!isValidImage ? fallbackSrc : src);

  return (
    <SC.Wrapper $size={size}>
      <Image {...props} alt='avatar' width={size} height={size} src={imgSrc} onError={() => setImgSrc(fallbackSrc)} />
    </SC.Wrapper>
  );
};

export default Avatar;
