import { ContactForm } from "@/components/Contact/ContactForm/ContactForm";
import { ContactHero } from "@/components/Contact/Hero/Hero";
import type { Metadata } from "next";
import { paths } from "@/config/paths";
import {
  isLocale,
  localizePath
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getDictionary(locale).metadata;
  return { title: copy.contactTitle, description: copy.contactDescription, alternates: { canonical: localizePath(locale, paths.routes.contact) } };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  return (
    <main id="main-content" tabIndex={-1}>
      <ContactHero copy={dictionary.contact} />
      <ContactForm
        copy={dictionary.contact}
        locale={locale}
      />
    </main>
  );
}
