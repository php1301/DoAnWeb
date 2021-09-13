import { useRef } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// base css file
import "@styles/tailwind.css";
const Noop: React.FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    const queryClientRef = useRef<any>();
    if (!queryClientRef.current) {
        queryClientRef.current = new QueryClient();
    }
    const router = useRouter();
    // const Layout = (Component as any).Layout || Noop;
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                {/* <DefaultSeo /> */}
                <NextNProgress
                    color="#d0af66"
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
                <Component {...pageProps} key={router.route} />
                <ToastContainer />{" "}
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
