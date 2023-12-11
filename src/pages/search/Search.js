import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getCamping } from "../../api";
import { useCurrentLocation } from "../../lib/useCurrentLocation";

export const Search = () => {
  const { kakao } = window;
  const [isLocation, setIsLocation] = useState();
  const [isLon, setIsLon] = useState();
  const [isLat, setIsLat] = useState();

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
    geocoder.addressSearch(isLocation ? isLocation : address, callback); // 좌표 변환

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
    isLocation,
    address,
    kakao.maps.Marker,
    kakao.maps.MarkerImage,
    kakao.maps.Size,
    campingData,
  ]);

  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm();

  const submitHandler = (data) => {
    const { search } = data;
    setIsLocation(search);
  };

  return (
    <div>
      <div
        id="map"
        style={{
          width: "500px",
          height: "500px",
        }}
      ></div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("search", {
            required: true,
          })}
          type="text"
          placeholder="검색"
        />
      </form>
    </div>
  );
};
