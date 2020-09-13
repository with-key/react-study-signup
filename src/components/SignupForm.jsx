import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

/* 

formik tutorial 

1. initialValues 생성
  initialValues 객체에 저장된 key, value 는 formik의 value 객체로 저장됨
  즉, Values는 formik.values.key 임

  initialValues객체의 키는 jsx의 input의 name 속성과 일치 시켜야 함


2. valiedate 로직 생성
  valiedate()는 파라미터로 fromik.value를 가져와야 함




*/
const initialValues = {
  email: "",
  name: "",
  password: "",
  repassword: "",
  channel: "",
};

// input의 values를 객체로 반환함
const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "이름을 입력해주세요";
  }

  if (!values.email) {
    errors.email = "필수";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "형식이 올바르지 않습니다";
  }

  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요";
  } else if (values.password.length < 4) {
    errors.password = "4자 이상 입력해주세요";
  }

  if (!values.channel) {
    errors.channel = "필수";
  }

  return errors;
};

//
const SignupForm = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <Conatainer>
      <Form onSubmit={formik.handleSubmit}>
        <Label>이메일</Label>
        <ContentBx>
          <Input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          ></Input>
          <ValidElert>{formik.errors.email}</ValidElert>
        </ContentBx>

        <Label>비밀번호</Label>
        <ContentBx>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></Input>
          <ValidElert>{formik.errors.password}</ValidElert>
        </ContentBx>

        <Label>비밀번호 확인</Label>
        <ContentBx>
          <Input
            type="password"
            id="repassword"
            name="repassword"
            onChange={formik.handleChange}
            value={formik.values.repassword}
          ></Input>
          <ValidElert>{formik.errors.repassword}</ValidElert>
        </ContentBx>

        <Label>이름</Label>
        <ContentBx>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></Input>
          <ValidElert>{formik.errors.name}</ValidElert>
        </ContentBx>

        <Label>유입경로</Label>
        <ContentBx>
          <Input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          ></Input>
          <ValidElert>{formik.errors.channel}</ValidElert>
        </ContentBx>
        <Submitbtn type="submit">가입하기</Submitbtn>
      </Form>
    </Conatainer>
  );
};

//style

const Conatainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Label = styled.label`
  display: block;
  margin-top: 30px;
`;

const ContentBx = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const ValidElert = styled.div`
  color: red;
`;

const Form = styled.form`
  width: 500px;
  border: 1px solid #ddd;
  padding: 30px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 400px;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 10px 0;
  padding: 0 20px;
  outline: none;
  :focus {
    box-shadow: 0 0 0 2px #ffeb33;
    border: none;
  }
`;

const Submitbtn = styled.button`
  margin-top: 100px;
  width: 100%;
  border: none;
  height: 40px;
  transition: ease-in-out 300ms;
  :hover {
    background-color: #ffeb33;
  }
`;

export default SignupForm;
