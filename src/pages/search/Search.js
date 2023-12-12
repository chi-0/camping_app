import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getCamping } from "../../api";
import { useCurrentLocation } from "../../lib/useCurrentLocation";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "../../components/Container";

const KakaoMap = styled.div`
  width: 600px;
  height: 600px;
`;

export const Search = () => {
  const { kakao } = window;
  const [isLon, setIsLon] = useState();
  const [isLat, setIsLat] = useState();

  const searchLocation = useSelector((state) => state.value);

  const { address } = useCurrentLocation();
  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  const queries = useQueries({
    queries: [
      {
        queryKey: [isLon, isLat],
        queryFn: getCamping,
      },
    ],
  });

  const campingData = queries[0]?.data?.response?.body?.items?.item;
  console.log(campingData);

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
  }, [
    isLat,
    isLon,
    kakao.maps.LatLng,
    kakao.maps.Map,
    kakao.maps.services.Geocoder,
    kakao.maps.services.Status.OK,
    searchLocation,
    address,
    kakao.maps.Marker,
    kakao.maps.MarkerImage,
    kakao.maps.Size,
    campingData,
  ]);

  return (
    <Container>
      <KakaoMap id="map" />
    </Container>
  );
};
