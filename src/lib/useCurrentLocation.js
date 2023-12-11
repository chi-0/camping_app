import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
  const { kakao } = window;
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const [address, setAddress] = useState("서울");

  const location = (pos) => {
    const {
      coords: { longitude, latitude },
    } = pos;
    setLon(longitude);
    setLat(latitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);

    const geocoder = new kakao.maps.services.Geocoder();

    const coord = new kakao.maps.LatLng(lat, lon);

    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const {
          address: { address_name },
        } = result[0];

        setAddress(address_name);
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }, [
    lon,
    lat,
    kakao.maps.LatLng,
    kakao.maps.services.Geocoder,
    kakao.maps.services.Status.OK,
  ]);

  return { address };
};
