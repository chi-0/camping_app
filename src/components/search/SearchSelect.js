import styled from "styled-components";
import { useForm } from "react-hook-form";
import triangle from "./svg/triangle.svg";

const Form = styled.form`
  margin-right: 20px;
`;

const Select = styled.select`
  all: unset;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  padding: 5px;
  padding-right: 20px;
  border-radius: 10px;
  border: 1px solid #cacaca;
  background-image: url(${triangle});
  background-repeat: no-repeat;
  background-position: top 50% right 8%;
`;

export const SearchSelect = ({ data: distance }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm();

  const selectHandler = (data) => {
    distance(data);
  };

  return (
    <Form onChange={handleSubmit(selectHandler)}>
      <label htmlFor="캠핑장반경" />
      <Select {...register("distance")} defaultValue={5000}>
        <option value={5000}>5km이내</option>
        <option value={8000}>8km이내</option>
        <option value={10000}>10km이내</option>
      </Select>
    </Form>
  );
};
