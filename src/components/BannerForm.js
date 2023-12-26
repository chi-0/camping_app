import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { mainColor } from "../style/GlobalStyled";

const FormWrap = styled.div`
  transform: rotateY(180deg);
`;

const Title = styled.h3`
  font-size: 46px;
  letter-spacing: -2.5px;
  font-weight: 600;
  color: white;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    font-size: 32px;
    letter-spacing: -2px;
    margin-bottom: 10px;
  }
`;

const Dot = styled.span`
  color: ${mainColor};
  font-size: 75px;
  line-height: 0;

  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
`;

const Form = styled.form`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 26px;

  > svg {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-22%);
    font-size: 20px;
    color: ${mainColor};
  }

  @media screen and (max-width: 800px) {
    margin-top: 16px;

    > svg {
      font-size: 14px;
      transform: translateY(-10%);
    }
  }
`;

const Input = styled.input`
  all: unset;
  padding: 15px 50px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 500;
  width: 80vw;
  background-color: rgba(255, 255, 255);
  margin-top: 10px;

  &::placeholder {
    font-size: 18px;
    font-weight: 300;
    color: #cacaca;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
    padding: 12px 50px;

    &::placeholder {
      font-size: 14px;
    }
  }
`;

export const BannerForm = () => {
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
      <Title>가족이랑 친구들이랑</Title>
      <Title>
        캠핑갈땐 캠핑갈까<Dot>.</Dot>
      </Title>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="검색" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Input
          {...register("search", {
            required: true,
          })}
          id="검색"
          type="text"
          placeholder="지역을 검색해보세요"
        />
      </Form>
    </FormWrap>
  );
};
