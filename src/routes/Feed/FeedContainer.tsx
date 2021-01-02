import React, { useEffect, useRef, useState } from "react";
import FeedPresenter from "./FeedPresenter";

const FeedContainer = () => {
    //1. React 스럽게 코드를 짜는방식
    //2. 자바스크립트 방식으로  짜는게 있어
    const scrollEl = useRef(null); //해당 ID값 가져오기
    const [count, setCount] = useState<number>(12);
    const [loading, setLoding] = useState(false);

    const handleTimer = () => {
        setTimeout(() => {
            setCount(count + 4);
            setLoding(false);
        }, 1000);
    };

    const handleScroll = () => {
        const { scrollHeight, scrollTop, clientHeight }: any = scrollEl.current;
        console.log("top:", scrollTop, "sH:", scrollHeight, "cH:", clientHeight); //top+client => sH 바닥

        if (scrollTop + clientHeight >= scrollHeight) {
            setLoding(true);
            handleTimer();
        }
    };

    useEffect(() => {
        document.getElementById("wrapper").addEventListener("scroll", handleScroll);

        //구독해제
        return () => {
            document.getElementById("wrapper").removeEventListener("scroll", handleScroll);
        };
    });

    console.log(scrollEl);
    console.log(document.getElementById("wrapper"));

    return <FeedPresenter scrollEl={scrollEl} handleScroll={handleScroll} count={count} loading={loading} />;
};

export default FeedContainer;
