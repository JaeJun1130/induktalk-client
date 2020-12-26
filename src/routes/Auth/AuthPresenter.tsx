import React, { Dispatch, SetStateAction } from "react";
import JoinForm from "../../components/JoinForm";
import LoginForm from "../../components/LoginForm";
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

    onSubmit: () => void;

    form: string;
    setForm: Dispatch<SetStateAction<string>>;
}

const AuthPresenter: React.FC<IProps> = (props) => {
    return (
        <>
            {props.form === LOGIN_ACTION && <LoginForm {...props} />}

            {props.form === JOIN_ACTION && <JoinForm {...props} />}
        </>
    );
};

export default AuthPresenter;

// { userData, setUserData, joinData, setjoinData, onSubmit, form, setForm } props
