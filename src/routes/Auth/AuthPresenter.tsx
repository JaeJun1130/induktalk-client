import * as React from "react";
import { Box, Input, Wrapper } from "../../styles/styles";

const AuthPresenter = () => {
    return (
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
                <Input placeholder={"학번"} padding={"15px"} width={"250px"} />
                <Input placeholder={"비밀번호"} type={"password"} margin={"20px"} padding={"15px"} width={"250px"} />
            </Box>
        </Wrapper>
    );
};

export default AuthPresenter;
