
import { CategoriesSection } from "./categories-section";

export default function CategorieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between px-4 sm:px-8 md:px-16 gap-4">
        {/*Categories div*/}
        <CategoriesSection />
        {children}
      </div>
  );
}
