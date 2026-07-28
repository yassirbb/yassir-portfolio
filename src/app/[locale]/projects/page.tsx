import type { Metadata } from "next";

import { ProjectsGrid } from "@/components/Projects/ProjectsGrid";
import { ProjectsHero } from "@/components/Projects/ProjectsHero";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getDictionary(locale).metadata;
  return { title: copy.projectsTitle, description: copy.projectsDescription, alternates: { canonical: `/${locale}/projects` } };
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale: Locale = value;
  const dictionary = getDictionary(locale);
  return (
    <main id="main-content">
      <ProjectsHero copy={dictionary.projectsPage} />
      <ProjectsGrid locale={locale} copy={dictionary.common} />
    </main>
  );
}
