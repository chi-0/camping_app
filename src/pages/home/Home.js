import { useQueries } from "@tanstack/react-query";
import { getCamping } from "../../api";
import { useEffect } from "react";

const { kakao } = window;

export const Home = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(34.7603737, 127.6622221),
      level: 3,
    };

    new kakao.maps.Map(container, options);

    var geocoder = new kakao.maps.services.Geocoder();

    var callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);
      }
    };

    geocoder.addressSearch("해남군 송지면", callback);
  }, []);

  const queries = useQueries({
    queries: [
      {
        queryKey: [],
        queryFn: getCamping,
      },
    ],
  });

  const campingData = queries[0]?.data?.response?.body?.items?.item;

  console.log(campingData);

  return (
    <div>
      <div
        id="map"
        style={{
          width: "500px",
          height: "500px",
        }}
      ></div>
    </div>
  );
};
