import { ColorSchemeScript } from '@mantine/core';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import {
  ErrorBoundary,
  Footer,
  Header,
  Providers
} from '@/components/organisms';
import '@/globals.css';
import { locales } from '@/navigation';

const Layout = ({ params: { locale }, children }) => {
  unstable_setRequestLocale(locale);

  return (
    <html
      className='overflow-x-clip scroll-smooth'
      lang={locale}
    >
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>

      <body className='relative flex min-h-svh flex-col items-center overflow-x-clip'>
        <Providers>
          <Header.Root />

          <ErrorBoundary>
            <Header.State>
              <main className='relative my-auto flex w-full max-w-bounds flex-col items-center'>
                {children}
              </main>
            </Header.State>
          </ErrorBoundary>

          <Footer />
        </Providers>
      </body>
    </html>
  );
};

const generateMetadata = async ({ params: { locale } }) => {
  const t = await getTranslations({ locale, namespace: 'personalInfo' });

  return {
    title: {
      default: `${t('name.first')} ${t('name.last')}`,
      template: `%s - ${t('name.first')} ${t('name.last')}`
    },
    icons: {
      icon: t('favicon')
    },
    description: t('description'),
    openGraph: {
      title: `${t('name.first')} ${t('name.last')} - ${t('summary')}`,
      description: t('description')
    }
  };
};

const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default Layout;
export { generateMetadata, generateStaticParams };
