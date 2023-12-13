import styled from "styled-components";
import { useForm } from "react-hook-form";

const Wrap = styled.div`
  margin-bottom: 10px;
`;

const Form = styled.form``;

const Select = styled.select``;

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
          <option value={5000} selected>
            5km이내
          </option>
          <option value={8000}>8km이내</option>
          <option value={10000}>10km이내</option>
        </Select>
      </Form>
    </Wrap>
  );
};
