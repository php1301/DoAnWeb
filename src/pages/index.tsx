import PageWrapper from "@components/page-wrapper/page-wrapper";
import React from "react";
import Content1 from "src/sections/landing/Content1";
import Content from "src/sections/landing/Content2";
import FeaturedJobs from "src/sections/landing/FeaturedJobs";
import Hero from "src/sections/landing/Hero";
import Pricing from "src/sections/landing/Pricing";
import Services from "src/sections/landing/Services";
import Slider from "src/sections/landing/Slider";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { useRouter } from "next/router";
import {
    fetchViecLamMoi,
    useFetchViecLamMoi,
} from "@apis/ViecLam/get-vieclam-moi";
import { API_ENDPOINTS } from "@apis/utils/api-endpoints";
import { GetStaticProps } from "next";

const IndexPage = () => {
    const { data, isLoading } = useFetchViecLamMoi();
    const { query } = useRouter();
    const { viecLams, count } = data ?? {};
    return (
        <>
            <PageWrapper>
                <Hero />
                <Services />
                <FeaturedJobs viecLams={viecLams} count={count} />
                <Content />
                <Content1 />
                <Slider />
                <Pricing />
            </PageWrapper>
        </>
    );
};
export default IndexPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        API_ENDPOINTS.VIECLAM_NEWEST,
        fetchViecLamMoi,
    );
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
        revalidate: 10,
    };
};
