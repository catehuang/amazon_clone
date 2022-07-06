import React from "react";
import Card from "./Card";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Footer from "./Footer";
import Banner from "./Banner";

function Home() {
  return (
    <div className="w-full">
      <Header department="All" />
      <SubHeader />
      <div className="mx-auto">
        <div className="-mb-20 -z-50">
          <Banner />
        </div>
        <div className="pb-10 px-5 grid grid-cols-4 gap-x-5 gap-y-10 grid-flow-row bg-gray-200 h-full">
          <Card
            title="Today's deal"
            image="https://m.media-amazon.com/images/I/41wmVnzwT0L._AC_SY230_.jpg"
            card_option_line1="Up to 41% off Top deal"
            card_option_line2="Save on Portable Monitors from Ptvdisplays"
            message="See more deals"
          />

          <Card
            title="Shop our Home décor store"
            image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/Home/XCM_CUTTLE_1409568_2190612_CA_CUTTLE_379x304_1X_en_CA._SY304_CB628571819_.jpg"
            message="See more"
          />

          <Card
            title="Celebrate Pet Month"
            image="https://images-na.ssl-images-amazon.com/images/G/15/OHL_Marketing/Pets_22/petmonth_desktop_379x304._SY304_CB626651252_.jpg"
            message="Shop now"
          />

          <Card
            title="A+ school supplies"
            image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/PC_Hardware/XCM_CUTTLE_1446135_2439998_379x304_1X_en_CA._SY304_CB634221532_.jpg"
            message="School supplies for every grade, for less"
          />

          <Card
            title="New Beats Studio Buds"
            image="https://images-na.ssl-images-amazon.com/images/G/15/Apple_Marketing/SunsetPink_Flexible_Desktop__Cat_Card_379x304_v2._SY304_CB622066853_.jpg"
            message="Learn more"
          />
          <Card
            title="Save 15% with less effort"
            image="https://images-na.ssl-images-amazon.com/images/G/15/SnS/gw/2022spring/XCM_Manual_ORIGIN_1402790_2138292_4419909_UK_SNS_GW_Spring_379x304_1X_en_GB._SY304_CB624659051_.jpg"
            message="Subscribe & Save"
          />
          <Card
            title="Treat your pet"
            image="https://images-na.ssl-images-amazon.com/images/G/15/OHL_Marketing/Events/Pets_21/sns_gateway_desktop_sept_379x304._SY304_CB643689174_.jpg"
            message="Shop now"
          />
          <Card
            title="New series: Ten Percent"
            image="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/TV/CMYA_S1_DashboardCard_379x304_POST_Final_noLocale_DOT0735._SY304_CB623891337_.jpg"
            message="Watch now on Prime Video"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
