import PageWrapper from "@components/page-wrapper/page-wrapper";
import React from "react";
import Content1 from "src/sections/landing/Content1";
import Content from "src/sections/landing/Content2";
import FeaturedJobs from "src/sections/landing/FeaturedJobs";
import Hero from "src/sections/landing/Hero";
import Pricing from "src/sections/landing/Pricing";
import Services from "src/sections/landing/Services";
import Slider from "src/sections/landing/Slider";

const IndexPage = () => {
    return (
        <>
            <PageWrapper>
                <Hero />
                <Services />
                <FeaturedJobs />
                <Content />
                <Content1 />
                <Slider />
                <Pricing />
            </PageWrapper>
        </>
    );
};
export default IndexPage;
