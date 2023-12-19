import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Map = styled.div`
  width: 60%;
  height: 100%;
  background-color: gray;
  border-radius: 10px;
`;

export const SearchMap = () => {
  const { kakao } = window;

  const { isLat, isLon } = useSelector((state) => state.coordReducer);
  const dispatch = useDispatch();

  const searchLocation = useSelector((state) => state.location.value);

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
  }, [kakao.maps, isLat, isLon, searchLocation, dispatch]);

  return (
    <>
      <Map id="map" />
    </>
  );
};
