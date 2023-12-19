import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { mainColor } from "../../style/GlobalStyled";

const FormWrap = styled.div``;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 15px;
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
  padding: 15px 50px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  width: 80vw;
  background-color: rgba(255, 255, 255);

  &::placeholder {
    color: #cacaca;
  }

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const HomeForm = () => {
  const dispatch = useDispatch();

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

    dispatch({
      type: "OPEN",
    });

    reset({ search: "" });
  };

  return (
    <FormWrap>
      <Title>근데 어디로 가지?</Title>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="검색창" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Input
          {...register("search", {
            required: true,
          })}
          type="text"
          placeholder="지역을 검색해보세요"
        />
      </Form>
    </FormWrap>
  );
};
