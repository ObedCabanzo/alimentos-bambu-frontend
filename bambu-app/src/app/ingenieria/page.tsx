import IconComponent from "@/components/IconComponent";
import { SkillsSection } from "./skills-section";
import { ContactSection } from "./contact-section";
import { BannerComponent } from "@/components/banner-component";
import IngenieriaInfo from "@/config/dataPage_ingenieria";

export const metadata = {
  title: "Ingeniería",
};

export default function EngineeringPage() {
  const formatId = (id: number) => {
    return id + 1 < 10 ? `0${id + 1}` : id + 1;
  };
  return (
    <div>
      <BannerComponent
        title={IngenieriaInfo.banner.title}
        descriptionItems={IngenieriaInfo.banner.descriptionItems}
        color={IngenieriaInfo.banner.color}
        children={null}
      />
      <div className="flex flex-col pb-16 lg:py-16 gap-16 w-full lg:pr-32 items-between ">
        {IngenieriaInfo.sectionsData.map(
          ({ id, title, descriptionItems }, _) => {
            return (
              <div className="flex w-full flex-col items-center gap-4 ">
                <div className="flex gap-16 w-full  items-center flex-col lg:flex-row lg:items-start">
                  <div className="flex gap-4 w-full lg:w-2/5 bg-[#67B1EB] items-center py-8 h-fit text-start">
                    <span className="w-1/6 md:w-32 h-1 rounded-3xl bg-white"></span>
                    <p
                      className="opificio-neue text-white text-base lg:text-lg font-bold "
                      style={{ letterSpacing: "0.1rem" }}
                    >
                      {formatId(id)}
                    </p>
                    <p
                      className="text-white text-sm lg:text-base font-bold "
                      style={{ letterSpacing: "0.1rem" }}
                    >
                      {title}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 w-3/5 text-center lg:text-end items-center lg:items-end">
                    <div>
                      {descriptionItems.map(
                        ({ description, textColor }, index) => {
                          return (
                            <p
                              key={index}
                              className="text-xs lg:text-sm font-bold"
                              style={{
                                color: textColor,
                              }}
                            >
                              {description}
                            </p>
                          );
                        }
                      )}
                    </div>

                    {id === 0 && (
                      <IconComponent
                        iconName="icon_bambu"
                        className="h-auto w-32"
                        height={0}
                        width={0}
                      />
                    )}
                  </div>
                </div>
                {id === 1 && (
                  <SkillsSection
                    attributeItems={IngenieriaInfo.atributtesItems}
                  />
                )}
                {id === 2 && (
                  <ContactSection contact={IngenieriaInfo.contact} />
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
