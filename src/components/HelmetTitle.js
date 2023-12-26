import { Helmet, HelmetProvider } from "react-helmet-async";

export const HelmetTitle = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};
