import React, { Dispatch, SetStateAction } from "react";
import JoinForm from "../../components/auth/JoinForm";
import LoginForm from "../../components/auth/LoginForm";
import { JOIN_ACTION, LOGIN_ACTION } from "./AuthContainer";

export interface IProps {
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

    onSubmit: (e: any, action: string) => void;

    form: string;
    setForm: Dispatch<SetStateAction<string>>;
}

const AuthPresenter = (props: IProps) => {
    return (
        <>
            {props.form === LOGIN_ACTION && <LoginForm {...props} />}

            {props.form === JOIN_ACTION && <JoinForm {...props} />}
        </>
    );
};

export default AuthPresenter;

// { userData, setUserData, joinData, setjoinData, onSubmit, form, setForm } props
