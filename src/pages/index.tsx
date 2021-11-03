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
    const { query } = useRouter();
    const { data, isLoading } = useFetchViecLamMoi();
    const { viecLams, count } = data ?? {};
    return (
        <>
            <PageWrapper>
                <Hero />
                <Services />
                {!isLoading && (
                    <FeaturedJobs viecLams={viecLams} count={count} />
                )}
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
        // async () => fetchBlog(query?.post as unknown as string),
    );
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
        revalidate: 10,
    };
};

// export const getServerSideProps: GetServerSideProps = async ({
//     locale,
//     query,
// }) => {
//     const queryClient = new QueryClient();
//     await queryClient.prefetchQuery(
//         [API_ENDPOINTS.BLOG, query?.post as unknown as string],
//         async () => fetchBlog(query?.post as unknown as string),
//     );
//     return {
//         props: {
//             ...(await serverSideTranslations(locale!, [
//                 "common",
//                 "forms",
//                 "menu",
//                 "footer",
//             ])),
//             dehydratedState: dehydrate(queryClient),
//         },
//     };
// };
