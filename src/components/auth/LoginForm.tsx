import React from "react";
import { Box, Button, Input, Wrapper } from "../../styles/styles";
import { JOIN_ACTION, LOGIN_ACTION } from "../../routes/Auth/AuthContainer";
import { IProps } from "../../routes/Auth/AuthPresenter";

const LoginForm = ({ userData, setUserData, onSubmit, setForm }: IProps) => {
    return (
        <>
            <Wrapper
                width={"100%"}
                height={"100vh"}
                backgroundColor={"#82dd70"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    display={"flex"}
                    width={"500px"}
                    height={"700px"}
                    backgroundColor={"#acacac"}
                    borderRadius={"10px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    position={"relative"}
                >
                    <img src={"/image/logo.png"} style={{ position: "absolute", top: 0 }} />
                    <Input
                        placeholder={"학번"}
                        padding={"15px"}
                        width={"250px"}
                        value={userData.studentId}
                        onChange={(e) => {
                            setUserData({ ...userData, studentId: e.target.value });
                        }}
                    />
                    <Input
                        placeholder={"비밀번호"}
                        type={"password"}
                        margin={"20px"}
                        padding={"15px"}
                        width={"250px"}
                        value={userData.password}
                        onChange={(e) => {
                            setUserData({ ...userData, password: e.target.value });
                        }}
                    />

                    <Button
                        padding={"10px"}
                        borderRadius={"5px"}
                        width={"250px;"}
                        onClick={(e) => onSubmit(e, LOGIN_ACTION)}
                    >
                        로그인
                    </Button>
                    <Button
                        padding={"10px"}
                        borderRadius={"5px"}
                        width={"250px"}
                        margin={"20px"}
                        onClick={() => setForm(JOIN_ACTION)}
                    >
                        회원가입
                    </Button>
                </Box>
            </Wrapper>
        </>
    );
};

export default LoginForm;
