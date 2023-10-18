'use client';

import { Image as RadixImage } from '@radix-ui/react-avatar';
import { forwardRef } from 'react';

import Image from '@/components/ui/image';
import { cn } from '@/utils';

const AvatarImage = ({ asChild, className, children, ...props }, ref) => {
  return (
    <RadixImage
      asChild
      className={cn('h-full w-full', className)}
      ref={ref}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {asChild ? children : <Image />}
    </RadixImage>
  );
};

export default forwardRef(AvatarImage);
