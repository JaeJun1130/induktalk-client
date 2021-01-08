import { Box, IconButton, Input } from "@material-ui/core";
import React from "react";
import { MuiPaper, useStyled } from "../../../routes/Test/styles";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import { Favorite } from "@material-ui/icons";

interface ICard {
    toggleLike: () => void;
    fill: boolean;
    handleText: (args: string) => void;
    text: string;
    onSubmit: (e: any) => void;

    toggleComment: () => void;
    comment: boolean;

    comments: any[];
}

const CardPresenter = ({
    toggleLike,
    fill,
    handleText,
    text,
    onSubmit,
    toggleComment,
    comment,
    comments,
}: ICard) => {
    const classes = useStyled();
    return (
        <MuiPaper className={classes.paper} elevation={3}>
            <Box className={classes.header}>
                <Box className={classes.avatar}>1</Box>
                <Box>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box className={classes.img_box}>
                <img
                    style={{ width: "100%", height: 250 }}
                    src={"https://i.pinimg.com/564x/e9/f0/e6/e9f0e6e070bacc54f332229890a661f1.jpg"}
                />
            </Box>
            <Box className={classes.btn_box}>
                <Box>
                    <IconButton onClick={toggleLike}>
                        {fill ? <Favorite style={{ fill: "red" }} /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutlineIcon onClick={toggleComment}></ChatBubbleOutlineIcon>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <TurnedInNotIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box>
                {comment && (
                    <form onSubmit={onSubmit}>
                        <Input value={text} onChange={(e) => handleText(e.target.value)}></Input>
                    </form>
                )}
                {comment && comments.map((e) => <Box>{e}</Box>)}
            </Box>
        </MuiPaper>
    );
};
export default CardPresenter;

{
    /* <form onSubmit={onSubmit}>
                                <Input value={text} onChange={(e) => handleText(e.target.value)} />
                            </form> */
}
