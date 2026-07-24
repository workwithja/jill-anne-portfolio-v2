import Tags from "@/components/ui/Tags";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

type SnapshotItem = {
  label: string;
  value: string | string[];
};

type SnapshotProps = {
  items: SnapshotItem[];
};

export default function Snapshot({ items }: SnapshotProps) {
  return (
    <Section size="md">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Overview"
          title="Project Snapshot"
          description="..."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-slate-500">{item.label}</p>
              <div className="mt-3">
  {Array.isArray(item.value) ? (
    <Tags items={item.value} />
  ) : (
    <p className="text-2xl font-semibold text-slate-900">
      {item.value}
    </p>
  )}
</div>
            </div>
          ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}