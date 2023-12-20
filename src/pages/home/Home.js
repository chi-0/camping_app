import { useQuery } from "@tanstack/react-query";
import { Container } from "../../components/Container";
import { HomePopular } from "./HomePopular";
import { getPopular } from "../../api";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const query = useQuery({
    queryKey: [],
    queryFn: getPopular,
  });

  const popularData = query?.data?.response?.body?.items?.item;
  const popularLoading = query.isLoading;

  return (
    <>
      <Container>
        {popularLoading ? (
          <Loading />
        ) : (
          popularData && <HomePopular data={popularData} />
        )}
      </Container>
    </>
  );
};
