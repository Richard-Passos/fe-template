import { cn } from '@/utils';

const Shortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-content/75',
        className
      )}
      {...props}
    />
  );
};

export default Shortcut;
