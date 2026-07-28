type TagListProps = {
  items: readonly string[];
  label: string;
  className?: string;
};

export function TagList({
  items,
  label,
  className
}: TagListProps) {
  return (
    <ul
      className={["tag-list", className]
        .filter(Boolean)
        .join(" ")}
      aria-label={label}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
