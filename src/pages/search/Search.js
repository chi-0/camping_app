import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getCamping } from "../../api";
import { useCurrentLocation } from "../../lib/useCurrentLocation";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { SearchCard } from "./SearchCard";
import { SearchSelect } from "./SearchSelect";
import { Loading } from "../../components/Loading";
// import { SearchTest } from "./SearchTest";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 80px;
`;

const KakaoMap = styled.div`
  width: 600px;
  height: 600px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    width: 320px;
    height: 320px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Search = () => {
  const { kakao } = window;
  const [isLon, setIsLon] = useState();
  const [isLat, setIsLat] = useState();
  const [distance, setDistance] = useState(5000);
  const [notSearch, setNotSearch] = useState();

  const searchLocation = useSelector((state) => state.location.value);

  const { address } = useCurrentLocation();
  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  const distanceData = (data) => {
    setDistance(data.distance);
  };

  const queries = useQueries({
    queries: [
      {
        queryKey: [isLon, isLat, distance],
        queryFn: getCamping,
      },
    ],
  });

  const campingData = queries[0]?.data?.response?.body?.items?.item;
  const campingLoading = queries[0].isLoading;

  useEffect(() => {
    const container = document.getElementById("map");
    const coords = new kakao.maps.LatLng(isLat, isLon);
    const options = {
      center: coords,
      level: 8,
    };
    const map = new kakao.maps.Map(container, options); // 지도 불러오기

    const geocoder = new kakao.maps.services.Geocoder();
    const callback = function (result, status) {
      setNotSearch(result.length);
      if (status === kakao.maps.services.Status.OK) {
        const { x: lon, y: lat } = result[0];
        setIsLon(lon);
        setIsLat(lat);

        const marker = new kakao.maps.Marker({
          position: coords,
        });
        marker.setMap(map);
      }
    };
    geocoder.addressSearch(searchLocation ? searchLocation : address, callback); // 좌표 변환

    campingData?.map((data) => {
      const imageSize = new kakao.maps.Size(24, 35);

      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      return new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data.mapY, data.mapX),
        title: data.facltNm,
        image: markerImage,
      });
    });
  }, [isLat, isLon, kakao.maps, searchLocation, address, campingData]);

  return (
    <Container>
      <Wrap>
        <KakaoMap id="map" />
        <Info>
          <SearchSelect data={distanceData} />

          {campingLoading ? (
            <>
              <Loading alert="로딩중..." />
            </>
          ) : (
            <>
              {campingData ? (
                <>
                  <Loading
                    alert={
                      notSearch === 0 &&
                      "검색 결과가 없습니다. 지역명을 입력해주세요."
                    }
                  />
                  <SearchCard data={notSearch === 0 ? "" : campingData} />
                  {/* <SearchTest data={campingData} /> */}
                </>
              ) : (
                <>
                  <Loading
                    alert={
                      notSearch === 1
                        ? "주변 캠핑장이 없습니다."
                        : "검색 결과가 없습니다. 지역명을 입력해주세요."
                    }
                  />
                </>
              )}
            </>
          )}
        </Info>
      </Wrap>
    </Container>
  );
};
