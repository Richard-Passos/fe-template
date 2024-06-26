import { forwardRef } from 'react';

import Section from '@/components/atoms';
import { cn } from '@/utils';

const OrganismsHeroMediumImpact = ({ className, ...props }, ref) => {
  return (
    <Section
      className={cn('-mt-[--header-h] min-h-svh py-xl', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(OrganismsHeroMediumImpact);
