import { cn } from '@/utils';

const AlertDialogActions = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'flex gap-xs max-sm:flex-col-reverse sm:justify-end',
        className
      )}
      {...props}
    />
  );
};

export default AlertDialogActions;
