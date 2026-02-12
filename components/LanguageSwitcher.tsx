'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { locales } from '@/i18n';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    // Replace the locale in the current pathname
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium tracking-wider
        bg-layer border border-border rounded
        hover:border-authority-blue hover:text-authority-blue
        transition-all duration-200"
      aria-label={`Switch to ${locale === 'en' ? 'Spanish' : 'English'}`}
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span>{locale === 'en' ? 'ES' : 'EN'}</span>
    </button>
  );
}
