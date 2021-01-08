import { Container, createStyles, makeStyles, Paper, Theme } from "@material-ui/core";
import styled from "styled-components";

export const useStyled = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            width: 400,
            minHeight: 400,
        },
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 60,
            width: "100%",
            padding: 9,
            borderBottom: "1px solid red",
        },
        avatar: {
            width: 30,
            height: 30,
            borderRadius: "70%",
            border: "1px solid red",
        },
        img_box: {
            borderBottom: "1px solid blue",
            height: 250,
            width: "100%",
        },
        btn_box: {
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid red",
        },
        wrapper: {
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            overflow: "y",
        },
        comment: {
            width: 100,
            height: 500,
        },
    })
);

export const MuiPaper = styled(Paper)``;
