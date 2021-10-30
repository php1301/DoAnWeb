import { useRef } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import { ToastContainer } from "react-toastify";
import { ManagedUIContext } from "@contexts/ui.context";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@components/layout/layout";
import { GlobalProvider } from "@contexts/global-context";

// import "@public/assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf";
// import "@public/assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf";
// import "@public/assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf";

// import "@public/assets/fonts/icon-font/fonts/avasta.ttf";
import "@public/assets/fonts/icon-font/css/style.css";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/aos/dist/aos.css";

import "@public/assets/fonts/icon-font/css/style.css";
import "@public/assets/fonts/fontawesome-5/css/all.css";

import "@styles/scss/bootstrap.scss";
import "@styles/scss/main.scss";
// base css file
import "@styles/tailwind.css";
// const Noop: React.FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    const queryClientRef = useRef<any>();
    if (!queryClientRef.current) {
        queryClientRef.current = new QueryClient();
    }
    const router = useRouter();
    // const Layout = (Component as any).Layout || Noop;
    if (router.pathname.match(/404/)) {
        return (
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    {/* <DefaultSeo /> */}
                    <GlobalProvider>
                        <ManagedUIContext>
                            <NextNProgress
                                color="#008a5b"
                                startPosition={0.3}
                                stopDelayMs={200}
                                height={3}
                                showOnShallow={true}
                                options={{
                                    easing: "ease",
                                    speed: 500,
                                }}
                            />
                            <ReactQueryDevtools initialIsOpen={false} />
                            <Layout pageContext={{ layout: "bare" }}>
                                <Component {...pageProps} key={router.route} />
                            </Layout>
                        </ManagedUIContext>
                    </GlobalProvider>
                    <ToastContainer />{" "}
                </Hydrate>
            </QueryClientProvider>
        );
    }
    if (router.pathname.match(/dashboard/)) {
        return (
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    {/* <DefaultSeo /> */}
                    <GlobalProvider>
                        <ManagedUIContext>
                            <NextNProgress
                                color="#008a5b"
                                startPosition={0.3}
                                stopDelayMs={200}
                                height={3}
                                showOnShallow={true}
                                options={{
                                    easing: "ease",
                                    speed: 500,
                                }}
                            />
                            <ReactQueryDevtools initialIsOpen={false} />
                            <Layout pageContext={{ layout: "dashboard" }}>
                                <Component {...pageProps} key={router.route} />
                            </Layout>
                        </ManagedUIContext>
                    </GlobalProvider>
                    <ToastContainer />{" "}
                </Hydrate>
            </QueryClientProvider>
        );
    }
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <GlobalProvider>
                    <ManagedUIContext>
                        {/* <DefaultSeo /> */}
                        <NextNProgress
                            color="#008a5b"
                            startPosition={0.3}
                            stopDelayMs={200}
                            height={3}
                            showOnShallow={true}
                            options={{
                                easing: "ease",
                                speed: 500,
                            }}
                        />
                        <ReactQueryDevtools initialIsOpen={false} />
                        <Layout pageContext={{}}>
                            <Component {...pageProps} key={router.route} />
                        </Layout>
                        <ToastContainer />{" "}
                    </ManagedUIContext>
                </GlobalProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
