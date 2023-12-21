import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Map = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 10px;

  @media screen and (max-width: 1200px) {
    width: 50%;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
    height: 60%;
    margin: 0 auto;
  }
`;

export const SearchMap = ({ getData }) => {
  const { kakao } = window;

  const { isLat, isLon } = useSelector((state) => state.coordReducer);
  const dispatch = useDispatch();

  const searchLocation = useSelector((state) => state.location.value);

  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

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
      dispatch({
        type: "SEARCH_VALID",
        value: result.length,
      });

      if (status === kakao.maps.services.Status.OK) {
        const { x: lon, y: lat } = result[0];

        dispatch({
          type: "CHECK",
          isLat: lat,
          isLon: lon,
        });

        const marker = new kakao.maps.Marker({
          position: coords,
        });
        marker.setMap(map);
      }
    };
    geocoder.addressSearch(searchLocation, callback); // 좌표 변환

    getData?.map((data) => {
      const imageSize = new kakao.maps.Size(24, 35);

      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      return new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data.mapY, data.mapX),
        title: data.facltNm,
        image: markerImage,
      });
    });
  }, [kakao.maps, isLat, isLon, searchLocation, dispatch, getData]);

  return (
    <>
      <Map id="map" />
    </>
  );
};
