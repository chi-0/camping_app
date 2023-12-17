import styled from "styled-components";
import { mainColor } from "../style/GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormWrap = styled.div`
  width: 100%;
  padding: 0 5%;
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    padding-top: 60px;
  }
`;

const Form = styled.form`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  > svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 30px;
    color: ${mainColor};
  }

  @media screen and (max-width: 800px) {
    > svg {
      font-size: 23px;
    }
  }
`;

const Input = styled.input`
  all: unset;
  padding: 10px 40px;
  box-sizing: border-box;
  border: 2px solid ${mainColor};
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  width: 100%;

  &::placeholder {
    color: #cacaca;
  }

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const SearchForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    const { search } = data;

    dispatch({
      type: "SEARCH_INPUT",
      value: search,
    });

    reset({ search: "" });

    nav("/search");
  };

  return (
    <FormWrap>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="search" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Input
          {...register("search", {
            required: true,
          })}
          type="text"
          placeholder="캠핑하고 싶은 지역명을 검색해보세요"
        />
      </Form>
    </FormWrap>
  );
};
