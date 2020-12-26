import React, { Dispatch, SetStateAction } from "react";
import { Box, Button, Input, Wrapper } from "../../styles/styles";
import { JOIN_ACTION, LOGIN_ACTION } from "./AuthContainer";

interface IProps {
    userData: {
        studentId: string;
        password: string;
    };
    setUserData: Dispatch<SetStateAction<{ studentId: string; password: string }>>;

    joinData: {
        studentId: string;
        password: string;
        firstName: string;
        lastName: string;
    };
    setjoinData: Dispatch<SetStateAction<{ studentId: string; password: string; firstName: string; lastName: string }>>;

    onSubmit: () => void;

    form: string;
    setForm: Dispatch<SetStateAction<string>>;
}

const AuthPresenter: React.FC<IProps> = (props) => {
    return (
        <>
            {props.form === LOGIN_ACTION && (
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
                            value={props.userData.studentId}
                            onChange={(e) => {
                                props.setUserData({ ...props.userData, studentId: e.target.value });
                            }}
                        />
                        <Input
                            placeholder={"비밀번호"}
                            type={"password"}
                            margin={"20px"}
                            padding={"15px"}
                            width={"250px"}
                            value={props.userData.password}
                            onChange={(e) => {
                                props.setUserData({ ...props.userData, password: e.target.value });
                            }}
                        />

                        <Button onClick={props.onSubmit}>로그인</Button>
                        <Button onClick={() => props.setForm(JOIN_ACTION)}>회원가입</Button>
                    </Box>
                </Wrapper>
            )}

            {props.form === JOIN_ACTION && (
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
                            value={props.joinData.studentId}
                            onChange={(e) => {
                                props.setjoinData({ ...props.joinData, studentId: e.target.value });
                            }}
                        />
                        <Input
                            placeholder={"비밀번호"}
                            type={"password"}
                            margin={"20px"}
                            padding={"15px"}
                            width={"250px"}
                            value={props.joinData.password}
                            onChange={(e) => {
                                props.setjoinData({ ...props.joinData, password: e.target.value });
                            }}
                        />

                        <Input
                            placeholder={"성"}
                            margin={"20px"}
                            padding={"15px"}
                            width={"250px"}
                            value={props.joinData.firstName}
                            onChange={(e) => {
                                props.setjoinData({ ...props.joinData, firstName: e.target.value });
                            }}
                        />

                        <Input
                            placeholder={"이름"}
                            margin={"20px"}
                            padding={"15px"}
                            width={"250px"}
                            value={props.joinData.lastName}
                            onChange={(e) => {
                                props.setjoinData({ ...props.joinData, lastName: e.target.value });
                            }}
                        />

                        <Button onClick={props.onSubmit}>회원가입</Button>
                        <Button onClick={() => props.setForm(LOGIN_ACTION)}>돌아가기</Button>
                    </Box>
                </Wrapper>
            )}
        </>
    );
};

export default AuthPresenter;
