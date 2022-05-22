import React from 'react';
import './Home.css';
import Card from './Card';
import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';

function Home() {
        return (
                <>
                        <Header department="All" />
                        <SubHeader />
                        <div className="home">
                                <div className="home_container">
                                        <img className="home_image" src='https://m.media-amazon.com/images/I/81OD9jQpdtL._SX3000_.jpg' alt="promotions" />

                                        <div className="home_row">
                                                <Card
                                                        title='Save on Renewed home entertainment"'
                                                        image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/Events/XCM_CUTTLE_2320605_379x304_1X_en_CA._SY304_CB621807113_.jpg"
                                                        message="See Renewed TVs" />
                                                <Card
                                                        title="Celebrate Pet Month"
                                                        image="https://images-na.ssl-images-amazon.com/images/G/15/OHL_Marketing/Pets_22/petmonth_desktop_379x304._SY304_CB626651252_.jpg"
                                                        message="Shop now" />
                                                <Card
                                                        title="Today's deal"
                                                        image="https://m.media-amazon.com/images/I/41Xdzq6iz5L._AC_SY230_.jpg"
                                                        card_option_line1="$27.99 - $48.99"
                                                        card_option_line2="Save on SainSmart Jr Kid Toys"
                                                        message="See more deals" />
                                                <Card
                                                        title="Fullmosa Smart Watch"
                                                        image="https://m.media-amazon.com/images/I/81LzQ7b5zLS._AC_SX679_.jpg"
                                                        card_option_line2="Full-touch Screen Fitness Tracker with Blood Oxygen Heart Rate Sleep Monitor "
                                                        message="Learn more" />

                                        </div>


                                        <div className="home_row">
                                                <Card
                                                        title="New Beats Studio Buds"
                                                        image="https://images-na.ssl-images-amazon.com/images/G/15/Apple_Marketing/SunsetPink_Flexible_Desktop__Cat_Card_379x304_v2._SY304_CB622066853_.jpg"
                                                        message="Learn more" />
                                                <Card
                                                        title="Save on Renewed computers"
                                                        image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/Events/XCM_CUTTLE_2320602_379x304_1X_en_CA._SY304_CB621807113_.jpg"
                                                        message="See Renewed computers" />
                                                <Card
                                                        title="Save on Renewed office products"
                                                        image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/Events/XCM_CUTTLE_2320601_379x304_1X_en_CA._SY304_CB621807113_.jpg"
                                                        message="See Renewed office products" />
                                                <Card
                                                        title="New series: Ten Percent"
                                                        image="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/TV/CMYA_S1_DashboardCard_379x304_POST_Final_noLocale_DOT0735._SY304_CB623891337_.jpg"
                                                        message="Watch now on Prime Video" />
                                        </div>
                                </div>
                        </div>
                        <Footer />
                </>
        )
}

export default Home;
