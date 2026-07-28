import type { Metadata } from "next";

import { Hero } from "@/components/Home/Hero/Hero";
import { FeaturedProjects } from "@/components/Home/FeaturedProjects/FeaturedProjects";
import { Certifications } from "@/components/Home/Certifications/Certifications";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getDictionary(locale).metadata;
  return {
    title: copy.homeTitle,
    description: copy.homeDescription,
    alternates: { canonical: `/${locale}` }
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale: Locale = value;
  const dictionary = getDictionary(locale);
  return (
    <main id="main-content">
      <Hero locale={locale} copy={dictionary.home} />
      <FeaturedProjects locale={locale} copy={dictionary.home} />
      <Certifications
        copy={dictionary.home}
        common={dictionary.common}
      />
    </main>
  );
}
