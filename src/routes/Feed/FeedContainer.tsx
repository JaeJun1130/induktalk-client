import React, { useEffect, useRef, useState } from "react";
import FeedPresenter from "./FeedPresenter";

const FeedContainer = () => {
    const scrollEl = useRef(null);
    const [count, setCount] = useState(8);

    const handleScroll = () => {
        const { scrollHeight, clientHeight, scrollTop } = scrollEl.current;

        console.log(scrollHeight, scrollTop, clientHeight);
        if (clientHeight + scrollTop >= scrollHeight - 1500) {
            setCount(count + 4);
        }
    };

    useEffect(() => {
        document.getElementById("wrapper").addEventListener("scroll", handleScroll);

        return () => {
            document.getElementById("wrapper").removeEventListener("scroll", handleScroll);
        };
    });

    console.log(scrollEl);
    return <FeedPresenter scrollEl={scrollEl} handleScroll={handleScroll} count={count} />;
};

export default FeedContainer;
