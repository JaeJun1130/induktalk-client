import React from "react";
import { Box, Button, Input, Wrapper } from "../styles/styles";
import { LOGIN_ACTION } from "../routes/Auth/AuthContainer";
import { IProps } from "../routes/Auth/AuthPresenter";

const JoinForm = ({ joinData, setjoinData, onSubmit, setForm }: IProps) => {
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
                >
                    <Input
                        placeholder={"학번"}
                        padding={"15px"}
                        width={"250px"}
                        value={joinData.studentId}
                        onChange={(e) => {
                            setjoinData({ ...joinData, studentId: e.target.value });
                        }}
                    />
                    <Input
                        placeholder={"비밀번호"}
                        type={"password"}
                        margin={"20px"}
                        padding={"15px"}
                        width={"250px"}
                        value={joinData.password}
                        onChange={(e) => {
                            setjoinData({ ...joinData, password: e.target.value });
                        }}
                    />

                    <Input
                        placeholder={"성"}
                        margin={"20px"}
                        padding={"15px"}
                        width={"250px"}
                        value={joinData.firstName}
                        onChange={(e) => {
                            setjoinData({ ...joinData, firstName: e.target.value });
                        }}
                    />

                    <Input
                        placeholder={"이름"}
                        margin={"20px"}
                        padding={"15px"}
                        width={"250px"}
                        value={joinData.lastName}
                        onChange={(e) => {
                            setjoinData({ ...joinData, lastName: e.target.value });
                        }}
                    />

                    <Button onClick={onSubmit}>회원가입</Button>
                    <Button onClick={() => setForm(LOGIN_ACTION)}>돌아가기</Button>
                </Box>
            </Wrapper>
        </>
    );
};

export default JoinForm;
