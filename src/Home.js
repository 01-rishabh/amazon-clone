import React from "react";
import "./Home.css"
import Product from "./Product"

function Home() {

    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Upload/UPLO_S1_FT_XSite_HeroTALL_1500x600_PV_en-GB._CB433982839_.jpg" />

                <div className="home__row">
                <Product 
                id="12345"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={19}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL._SY346_.jpg"
            rating={5} />

                <Product
                id="36745"
            title="iPad Pro 2020 12.9 inch Wi-Fi+Cellular  1 TB Silver+Apple Pencil (2nd Generation)"
            price={2189}
            image="https://images-na.ssl-images-amazon.com/images/I/81aj7q%2Bo3KL._SL1500_.jpg"
            rating={5}
             />

<Product
            id="235690"
            title="GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilization, Dual Screen, HyperSmooth 3.0 and Time Warp 3.0"
            price={849}
            image="https://images-na.ssl-images-amazon.com/images/I/61Iyd3w%2BbKL._SL1500_.jpg"
            rating={5}
             />
                
                
            </div>
            <div className="home__row">
            
            <Product
                id="777789"
                title="Acer Nitro 5 Intel Core i5-10th Gen 15.6-inch Display Thin and Light Gaming Laptop (8GB Ram/1TB HDD + 256GB SSD/Win10/GTX 1650Ti Graphics/Obsidian Black/2.3 Kgs), AN515-55 + Xbox Game Pass for PC"
                price={1119}
                image="https://images-na.ssl-images-amazon.com/images/I/71%2BkGr%2B5LrL._SL1500_.jpg"
                rating={4}
             />
            <Product
            id="235690"
            title="GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilization, Dual Screen, HyperSmooth 3.0 and Time Warp 3.0"
            price={849}
            image="https://images-na.ssl-images-amazon.com/images/I/61Iyd3w%2BbKL._SL1500_.jpg"
            rating={5}
             />
            <Product
            id="889767"
            title="Amazfit GTS2 mini Super-light Smart Watch with 14 Days' Battery Life, 70+ Sports Modes, Built-in GPS, Built-in Amazon Alexa, SpO2 Level Measurement, Heart Rate, Sleep&Stress Monitoring(Midnight Black)"
            price={479}
            image="https://images-na.ssl-images-amazon.com/images/I/618MEYCaUQL._SL1500_.jpg"
            rating={5}
             />
                
            </div>
            <div className="home__row">
            <Product
                id="248976"
                title="Samsung C34H890WJN - 34 Inch (3440 x 1440) WQHD UltraWide Professional LED Curved Monitor"
                price={1149}
                image="https://images-na.ssl-images-amazon.com/images/I/41gVicwYMiL.jpg"
                rating={4}
             />
                
            </div>


            </div>

        </div>
    )

}

export default Home;