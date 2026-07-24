import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import SelectedWorks from "@/components/work/SelectedWorks";

const works = [
  {
    image: "/images/projects/educational-services/educational-cover.png",
    title: "Educational Services",
    category: "Education",
    href: "/work/educational-services",
  },

  {
    image: "/images/projects/medical-aesthetics/medical-hero.png",
    title: "Medical Aesthetics",
    category: "Healthcare",
    href: "/work/medical-aesthetics",
  },

   {
    image: "/images/projects/basketball-contents/cover.png",
    title: "Basketball Contents",
    category: "Sports",
    href: "/work/basketball-contents",
  },
];

export default function WorkPage() {
  return (
    <Section size="lg">
      <Container>
        <SelectedWorks works={works} />
      </Container>
    </Section>
  );
}