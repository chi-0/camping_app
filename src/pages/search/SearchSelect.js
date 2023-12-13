import styled from "styled-components";
import { useForm } from "react-hook-form";

const Wrap = styled.div`
  margin-bottom: 10px;
`;

const Form = styled.form`
  padding: 5px;
  padding-top: 0px;
`;

const Select = styled.select`
  all: unset;
  box-sizing: border-box;
  font-size: 18px;
  width: 120px;
  height: 42px;
  background-color: #cacaca;
  border-radius: 10px;
  line-height: 42px;
  text-align: center;
  cursor: pointer;
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
    <Wrap>
      <Form onChange={handleSubmit(selectHandler)}>
        <label htmlFor="캠핑장반경" />
        <Select {...register("distance")} defaultValue={5000}>
          <option value={5000}>5km이내</option>
          <option value={8000}>8km이내</option>
          <option value={10000}>10km이내</option>
        </Select>
      </Form>
    </Wrap>
  );
};
