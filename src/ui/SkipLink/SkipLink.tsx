type SkipLinkProps = {
  href?: `#${string}`;
  label?: string;
};

export function SkipLink({
  href = "#main-content",
  label = "Skip to content"
}: SkipLinkProps) {
  return <a className="skip-link" href={href}>{label}</a>;
}
