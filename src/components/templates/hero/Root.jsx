import { useTranslations } from 'next-intl';

import { Icon, Text } from '@/components/atoms';
import { Action, Section } from '@/components/molecules';
import * as structures from '@/components/structures';
import { cn, normCompName } from '@/utils';

const HeroTemplate = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  const Block = structures[normCompName(t('block.slug'))];

  return (
    <Section
      className={cn(
        '-mt-[--header-h] grid min-h-svh gap-lg pt-[calc(var(--py)+var(--header-h))] sm:grid-cols-2',
        className
      )}
      namespace={namespace}
      size='lg'
      {...props}
    >
      <section className='flex flex-col'>
        <Text.Title className='max-w-xl text-5xl/none tracking-tight'>
          {t('title')}
        </Text.Title>

        <Text.Description className='mt-sm max-w-xl leading-relaxed'>
          {t.rich('description')}
        </Text.Description>

        <Action
          className='mt-lg w-fit'
          color={t('action.color')}
          href={t('action.href')}
          size={t('action.size')}
          variant={t('action.variant')}
        >
          {t('action.label')}
        </Action>

        <Text.Description className='mt-md flex items-center text-xs'>
          <span className='size-4'>
            <Icon
              color={t('scroll.icon.color')}
              src={t('scroll.icon.src')}
            />
          </span>
          &nbsp;
          <span className='first-letter:uppercase'>
            {t('scroll.description')}
          </span>
        </Text.Description>
      </section>

      {Block && (
        <Block
          className='grow'
          namespace={`${namespace}.block`}
        />
      )}
    </Section>
  );
};

export default HeroTemplate;
