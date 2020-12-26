import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";

export const LOGIN_ACTION = "LOGIN_ACTION";
export const JOIN_ACTION = "JOIN_ACTION";

const AuthContainer = () => {
    //로그인,회원가입 폼
    const [form, setForm] = useState(JOIN_ACTION);

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

    const onSubmit = () => {
        console.log("userData", userData);
        console.log("joinData", joinData);
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
