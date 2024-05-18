import { useTranslations } from 'next-intl';

import { Card } from '@/components/molecules';
import { cn } from '@/utils';

const CardBold = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Card.Root
      className={cn('min-h-48 items-center justify-center', className)}
      color={t('color')}
      namespace={namespace}
      variant={t('variant')}
      {...props}
    >
      <Card.Title className='text-center text-5xl/none font-bold'>
        {t('title')}
      </Card.Title>

      <Card.Description className='mt-xs text-center'>
        {t('description')}
      </Card.Description>
    </Card.Root>
  );
};

export default CardBold;
