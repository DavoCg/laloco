import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head></Head>
        <body>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=6.0, user-scalable=yes"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
