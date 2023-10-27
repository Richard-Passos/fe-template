import { cn } from '@/utils';

const AlertDialogHeader = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'flex flex-col space-y-2.5 max-sm:items-center max-sm:text-center',
        className,
      )}
      {...props}
    />
  );
};

export default AlertDialogHeader;
