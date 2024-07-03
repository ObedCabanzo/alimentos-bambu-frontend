
import CategoriesHomeSection from "./components/categories-section";
import SkillsSection from "./components/skills-section";
import PauzeSection from "./components/pauze-section";
import { BannerComponent } from "@/components/banner-component";
import BannerSection from "./components/banner-section";

export default function HomePage() {

  return (
    <div>
      <BannerSection/>
      <CategoriesHomeSection />
      <SkillsSection />
      <PauzeSection />
    </div>
  );
}
