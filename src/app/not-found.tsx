import { NotFoundContent } from "@/components/NotFound/NotFoundContent";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function NotFound() {
  return (
    <NotFoundContent
      locale={defaultLocale}
      copy={getDictionary(defaultLocale).notFound}
    />
  );
}
