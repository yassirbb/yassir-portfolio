import type { Metadata } from "next";

import { Hero } from "@/components/About/Hero/Hero";
import { Journey } from "@/components/Home/Journey/Journey";
import { ExperienceList } from "@/components/About/Experience/Experience";
import { SkillsSection } from "@/components/About/SkillsSection/SkillsSection";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getDictionary(locale).metadata;
  return { title: copy.aboutTitle, description: copy.aboutDescription, alternates: { canonical: `/${locale}/about` } };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale: Locale = value;
  const dictionary = getDictionary(locale);
  return (
    <main id="main-content">
      <Hero locale={locale} copy={dictionary.about} />
      <Journey copy={dictionary.home} locale={locale} />
      <ExperienceList copy={dictionary.about} locale={locale} />
      <SkillsSection copy={dictionary.about} locale={locale} />
    </main>
  );
}
