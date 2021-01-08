import { Container } from "@material-ui/core";
import React from "react";
import CardContainer from "../../components/test/Card";
import { img } from "../../imgData";
import { useStyled } from "./styles";

const TestPresenter = () => {
    const classes = useStyled();
    return (
        <Container className={classes.wrapper}>
            {img.map((e) => {
                return <CardContainer />;
            })}
        </Container>
    );
};

export default TestPresenter;
