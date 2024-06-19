
import CategoriesHomeSection from "./components/categories-section";
import BannerSection from "./components/banner-section";
import SkillsSection from "./components/skills-section";
import PauzeSection from "./components/pauze-section";

export default function HomePage() {

  return (
    <div>
      <BannerSection />
      <CategoriesHomeSection />
      <SkillsSection />
      <PauzeSection />
    </div>
  );
}
