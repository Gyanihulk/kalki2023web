import '../styles/index.scss'
import { ChakraProvider } from "@chakra-ui/react";
import { SSRProvider } from "react-bootstrap";
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SSRProvider>
  );
}

export default MyApp;
