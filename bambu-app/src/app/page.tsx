
import CategoriesHomeSection from "./components/categories-section";
import SkillsSection from "./components/skills-section";
import PauzeSection from "./components/pauze-section";
import BannerSection from "./components/banner-section";
import HomeInfo from "@/config/dataPage_home";

export default function HomePage() {

  return (
    <div>
      <BannerSection/>
      <CategoriesHomeSection info={HomeInfo.categories_section}/>
      <SkillsSection info={HomeInfo.skills_section}/>
      <PauzeSection info={HomeInfo.pauze_section} />
    </div>
  );
}
