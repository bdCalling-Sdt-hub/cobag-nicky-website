
import { getRequestConfig } from 'next-intl/server'; // Importing the server-side config helper from next-intl
import { routing } from './routing'; // Import routing configuration (locales, defaultLocale)

// Default export for the request configuration
export default getRequestConfig(async ({ requestLocale }) => {
  // Resolving the locale from the request
  let locale = await requestLocale;

  
  if (!locale || !routing.locales.includes(locale)) {
    // If not valid, use the default locale
    locale = routing.defaultLocale;
  }

  // Return the locale and corresponding translations from the messages directory
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});    