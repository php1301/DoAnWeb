import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
// import { getDirection } from "@utils/get-direction";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx);
    }
    render() {
        return (
            // <Html dir={getDirection(locale)}>
            <Html lang="vi">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
