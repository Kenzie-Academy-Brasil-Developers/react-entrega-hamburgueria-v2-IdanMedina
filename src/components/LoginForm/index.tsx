import React from "react";
import { useContext, useState } from "react";
import { useForm, SubmitHandler, UseFormRegisterReturn } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iDataLogin, UserContext } from "../../providers/userContext";
import { FormDiv, Formulary } from "../../styles/forms";
import { LoginBtn, RegisterLink } from "../../styles/buttons";
import { Paragraph, Title1 } from "../../styles/typography";
import { Input } from "../../styles/inputs";
import { FieldError } from "react-hook-form/dist/types";

const schema = yup.object().shape({
  email: yup.string().required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo 6 caracteres"),
});

/* export interface iInputRegister {
  id: any,
  placeholder: any,
  type: any,
  register: UseFormRegisterReturn,
  error?: FieldError
} */

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataLogin>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<iDataLogin> = (data) => {
    userLogin(data, setLoading);
  };

  return (
      <Formulary onSubmit={handleSubmit(submit)}>
        <Title1>Login</Title1>
        <FormDiv>
          <label>Email</label>
          <Input
            id="email"
            placeholder="Digite aqui seu email"
            type="email"
            {...register("email")}
            /* error={errors.email} */
          />
          {errors.email && <Paragraph>Email incorreto</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Senha</label>
          <Input
            id="password"
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
            /* error={errors.password} */
          />
          {errors.password && <Paragraph>Senha incorreta</Paragraph>}
        </FormDiv>
        <LoginBtn type="submit" disabled={loading}>
          {loading ? "Logando..." : "Logar"}
        </LoginBtn>
        <Paragraph>
          Crie sua conta para saborear muitas delícias e matar a sua fome!
        </Paragraph>
        <RegisterLink to="register">Cadastrar</RegisterLink>
      </Formulary>
  );
};

export default LoginForm;
