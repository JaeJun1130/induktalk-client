import React, { useState } from "react";
import CardPresenter from "./CardPresenter";

const CardContainer = () => {
    const [fill, setFile] = useState(false);
    const [comment, setComment] = useState(false);

    const [text, setText] = useState("");
    const [comments, setComments] = useState([]);

    const toggleLike = () => {
        setFile(!fill);
        console.log(fill);
    };

    const toggleComment = () => {
        setComment(!comment);
        console.log(comment);
    };

    const handleText = (args: string) => {
        setText(args);
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        setComments((prev) => {
            return [...prev, text];
        });
        setText("");
    };

    console.log(comments);

    return (
        <CardPresenter
            toggleLike={toggleLike}
            handleText={handleText}
            fill={fill}
            text={text}
            onSubmit={onSubmit}
            toggleComment={toggleComment}
            comment={comment}
            comments={comments}
        />
    );
};
export default CardContainer;
