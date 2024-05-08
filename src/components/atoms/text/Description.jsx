import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TextDescription = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'p';

  return (
    <Tag
      className={cn(
        'leading-relaxed text-content/75 first-letter:uppercase [&_:is(b,a)]:text-content [&_b]:font-medium',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextDescription);