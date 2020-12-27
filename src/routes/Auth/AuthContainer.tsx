import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { JOIN, LOCAL_LOGIN, LOGIN } from "../../graphql/auth";
import AuthPresenter from "./AuthPresenter";

export const LOGIN_ACTION = "LOGIN_ACTION";
export const JOIN_ACTION = "JOIN_ACTION";

const AuthContainer = () => {
    const { enqueueSnackbar } = useSnackbar(); //스넥바
    //로그인,회원가입 폼
    const [form, setForm] = useState(LOGIN_ACTION);

    //로그인
    const [userData, setUserDatae] = useState({
        studentId: "",
        password: "",
    });

    //회원가입
    const [joinData, setjoinData] = useState({
        studentId: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const [loginMutation] = useMutation(LOGIN); //로그인 gql
    const [localLoginMutation] = useMutation(LOCAL_LOGIN); //isLogin gql(cache 값 가져오기)

    const [joinMutation] = useMutation(JOIN); //로그아웃 gql

    const onSubmit = async (e: any, action: string) => {
        e.preventDefault();

        switch (action) {
            //로그인
            case LOGIN_ACTION: {
                try {
                    const {
                        data: { login: token },
                    } = await loginMutation({
                        variables: {
                            studentId: userData.studentId,
                            password: userData.password,
                        },
                    });
                    if (token) {
                        //로컬스토리지에 토큰값 넣어줌
                        localStorage.setItem("ACCESS_TOKEN", token);
                        //토큰이 있으면 캐쉬에 true값이 들어감
                        const data = await localLoginMutation({
                            variables: {
                                token: token,
                            },
                        });
                        console.log(data);
                        enqueueSnackbar("환영합니다", { variant: "success" });
                    } else {
                        localStorage.removeItem("ACCESS_TOKEN");
                        enqueueSnackbar("값 없음", { variant: "error" });
                    }
                } catch {
                    localStorage.removeItem("ACCESS_TOKEN");
                    enqueueSnackbar("다시 로그인 해주세요", { variant: "error" });
                }
                break;
            }
            //회원가입
            case JOIN_ACTION: {
                try {
                    const data = await joinMutation({
                        variables: {
                            studentId: joinData.studentId,
                            password: joinData.password,
                            firstName: joinData.firstName,
                            lastName: joinData.lastName,
                        },
                    });
                    enqueueSnackbar("회원가입이 되었습니다", { variant: "success" });
                    console.log(data);
                    setjoinData({ ...joinData, studentId: "", firstName: "", lastName: "", password: "" });
                } catch (error) {
                    console.log(error);
                    enqueueSnackbar("정보를 다시 입력하세요", { variant: "error" });
                }
                break;
            }
        }
    };

    return (
        <AuthPresenter
            userData={userData}
            setUserData={setUserDatae}
            joinData={joinData}
            setjoinData={setjoinData}
            onSubmit={onSubmit}
            form={form}
            setForm={setForm}
        />
    );
};

export default AuthContainer;
