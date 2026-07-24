type TagsProps = {
  items: string[];
};

export default function Tags({ items }: TagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-sm text-[color:var(--foreground)]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}