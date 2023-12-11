import axios from "axios";

const campInstance = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/GoCamping",
  params: {
    MobileOS: "ETC",
    MobileApp: "캠핑갈까?",
    serviceKey:
      "l2/QPVm5ciKhbR5fCSUNQLv+eiM6/MvMnEG3p0m7aFjDdEb2vYfDRd5YE5DEqNpDL0x3wg/woGky7FdU45tk1g==",
    _type: "json",
  },
});

export const getCamping = () => {
  return campInstance
    .get(
      `/locationBasedList?mapX=${127.6622221}&mapY=${34.7603737}&radius=${5000}`
    )
    .then((res) => res.data);
};
