import React from "react";
import { useContext, useState } from "react";
import { useForm, SubmitHandler} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iDataRegister, UserContext } from "../../providers/userContext";
import { FormDiv, Formulary, RegDiv } from "../../styles/forms";
import { LoginLink, RegisterBtn } from "../../styles/buttons";
import { Paragraph, Title1 } from "../../styles/typography";
import { Input } from "../../styles/inputs";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo 6 caracteres"),
    passwordConfirm: yup
    .string()
    .required("Senha obrigatória")
    .oneOf([yup.ref("password")], "As senhas não conferem"),
    name: yup.string().required("Nome obrigatório")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataRegister>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<iDataRegister> = (data) => {
    userRegister(data, setLoading);
  };

  return (
      <Formulary onSubmit={handleSubmit(submit)}>
        <RegDiv>
          <Title1>Cadastro</Title1>
          <LoginLink to="/">Retornar para o login</LoginLink>
        </RegDiv>
        <FormDiv>
          <label>Nome</label>
          <Input
            id="name"
            placeholder="Digite aqui seu nome"
            type="text"
            {...register("name")}
          />
          {errors.name && <Paragraph>{errors.name.message}</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Email</label>
          <Input
            id="email"
            placeholder="Digite aqui seu email"
            type="email"
            {...register("email")}
          />
          {errors.email && <Paragraph>{errors.email.message}</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Senha</label>
          <Input
            id="password"
            placeholder="Digite aqui seu senha"
            type="password"
            {...register("password")}
          />
          {errors.password && <Paragraph>{errors.password.message}</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Confirmar Senha</label>
          <Input
            id="passwordConfirm"
            placeholder="Digite aqui novamente sua senha"
            type="password"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <Paragraph>{errors.passwordConfirm.message}</Paragraph>
          )}
        </FormDiv>
        <RegisterBtn type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </RegisterBtn>
      </Formulary>
  );
};

export default RegisterForm;
