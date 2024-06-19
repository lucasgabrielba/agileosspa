import { useOrganizationStore } from '@/store/useOrganizationStore';
import { type ComponentProps, useEffect, useState } from 'react';

type LogoProps = {
  src: string;
  alt?: string;
  fallbackSrc?: string;
};

export function Logo({
  src,
  fallbackSrc,
  ...otherProps
}: LogoProps & ComponentProps<'img'>) {
  const { brand } = useOrganizationStore();

  const [source, setSource] = useState(src);

  function handleError() {
    setSource(fallbackSrc);
  }

  useEffect(() => {
    if (brand) {
      setSource(brand.assets?.logoUrl || src);
    }
  }, []);

  return <img src={source} onError={handleError} {...otherProps} />;
}
