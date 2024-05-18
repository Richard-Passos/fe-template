'use client';

import { Trigger } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(
        'group flex h-12 w-full cursor-pointer items-center justify-between px-md font-medium outline-none transition-colors hover:bg-active',
        className
      )}
      data-accordion-trigger
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionTrigger);
