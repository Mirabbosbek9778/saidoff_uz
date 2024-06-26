import React from "react";
import { useTranslation } from "next-i18next";

import Swipper from "./Swipper";
import avatar from "../../public/img/HamkorLogo2.jpg";

function SliderData(props) {
  const { t } = useTranslation();
  return (
    <div className=" w-full h-auto bg-white py-4 -mt-14 xl:-mt-[88px]">
      <Swipper
        title={t("reviews")}
        username={t("username")}
        clients={t("clients")}
        description={t("description")}
        avatar={avatar}
        i={1}
      />
      {/*<Swipper title={t("reviews2")} username={t("username2")} description={t("description2")} avatar={avatar2}  i={2}/>*/}
      {/*<Swipper title={t("reviews3")} username={t("username3")} description={t("description3")} avatar={avatar3}  i={3}/>*/}
      {/*<Swipper title={t("reviews4")} username={t("username4")} description={t("description4")} avatar={avatar4}  i={4}/>*/}
    </div>
  );
}

export default SliderData;
