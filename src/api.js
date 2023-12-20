import axios from "axios";

const campInstance = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/GoCamping",
  params: {
    MobileOS: "ETC",
    MobileApp: "캠핑갈까",
    serviceKey:
      "l2/QPVm5ciKhbR5fCSUNQLv+eiM6/MvMnEG3p0m7aFjDdEb2vYfDRd5YE5DEqNpDL0x3wg/woGky7FdU45tk1g==",
    _type: "json",
  },
});

export const getCamping = ({ queryKey }) => {
  const [lon, lat, distance] = queryKey;

  return campInstance
    .get(`/locationBasedList?mapX=${lon}&mapY=${lat}&radius=${distance}`)
    .then((res) => res.data);
};

export const getPopular = () =>
  campInstance.get(`/basedList?`).then((res) => res.data);
