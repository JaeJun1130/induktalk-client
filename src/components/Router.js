import { gql, useQuery } from "@apollo/client";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Auth from "../routes/Auth";
import Feed from "../routes/Feed";

//로그인 라우터
const LoginRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Feed />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

//로그아웃 라우터
const LogoutRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Auth />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

const Router = () => {
    const IS_LOGIN = gql`
        {
            isLogin @client #client = >cache에 있는 데이터를 뽑아옴
        }
    `;
    console.log(IS_LOGIN);

    const {
        data: { isLogin },
    } = useQuery(IS_LOGIN);

    console.log(isLogin);

    //true 로그인 else 로그인창
    return true ? <LoginRoute /> : <LogoutRoute />;
};

export default Router;
