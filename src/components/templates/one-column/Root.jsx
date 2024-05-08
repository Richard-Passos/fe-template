import { useTranslations } from 'next-intl';

import { GridPattern, Text } from '@/components/atoms';
import { Section } from '@/components/molecules';
import * as structures from '@/components/structures';
import { normCompName, renderComp } from '@/utils';

const OneColumnTemplate = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  const Block = structures[normCompName(t('block.slug'))];

  return (
    <Section
      color={t('color')}
      size={t('size')}
      type={t('type')}
      {...props}
    >
      {renderComp(
        <Text.Title className='text-center sm:max-w-2xl'>
          {t('title')}
        </Text.Title>,
        [t('title')]
      )}

      {renderComp(
        <Text.Description className='mt-4 text-center sm:max-w-2xl'>
          {t('description')}
        </Text.Description>,
        [t('description')]
      )}

      {Block && (
        <Block
          className='mt-md first:mt-0'
          namespace={`${namespace}.block`}
        />
      )}

      {renderComp(<GridPattern className='inset-x-auto w-screen' />, [
        t.raw('hasPattern')
      ])}
    </Section>
  );
};

export default OneColumnTemplate;