import React, { MutableRefObject } from "react";
import { img } from "../../imgData";
import { A, Button, Div, Header, Img, Input, Span, Wrapper, Form, Article } from "../../styles/feedStyles";

interface IProps {
    scrollEl: MutableRefObject<any>;
    handleScroll: () => void;
    count: number;
}

const FeedPresetner: React.FC<IProps> = ({ scrollEl, count }) => {
    return (
        <>
            <Wrapper
                id="wrapper"
                ref={scrollEl}
                width={"100%"}
                height={"100vh"}
                display={"flex"}
                justifyContent={"center"}
                overflowy={"scroll"}
            >
                <Div width={"600px"} height={"100vh"} display={"grid"} gridTemplate={"repeat(1,1fr)"}>
                    {img.map((element, index) => {
                        if (index <= count)
                            return (
                                <>
                                    <Article border={"1px solid rgba(0,0,0,0.3)"} borderRadius={"5px"}>
                                        <Header>
                                            <Div
                                                height={"50px"}
                                                display={"flex"}
                                                alignItems={"center"}
                                                justifyContent={"space-between"}
                                            >
                                                <Div display={"flex"} alignItems={"center"} margin={"0 15px"}>
                                                    <Img width={"30px"} height={"30px"} src={"/image/logo.png"}></Img>
                                                    <Span>
                                                        <A>제목</A>
                                                    </Span>
                                                </Div>
                                                <Div margin={" 0 15px 0 0"}>
                                                    <Button width={"100%"}>버튼</Button>
                                                </Div>
                                            </Div>
                                        </Header>
                                        <Img width={"100%"} height={"450px"} src={element.src}></Img>
                                        <Div
                                            width={"100%"}
                                            height={"50px"}
                                            display={"flex"}
                                            alignItems={"center"}
                                            justifyContent={"space-between"}
                                        >
                                            <Div margin={"0 15px"}>
                                                <Button width={"35px"} height={"35px"}>
                                                    1
                                                </Button>
                                                <Button width={"35px"} height={"35px"}>
                                                    2
                                                </Button>
                                                <Button width={"35px"} height={"35px"}>
                                                    3
                                                </Button>
                                            </Div>
                                            <Div margin={"0 15px"}>
                                                <Button width={"35px"} height={"35px"}>
                                                    1
                                                </Button>
                                            </Div>
                                        </Div>
                                        <Div
                                            width={"100%"}
                                            height={"20px"}
                                            display={"flex"}
                                            alignItems={"center"}
                                            margin={"0 15px"}
                                        >
                                            <Span>
                                                <A>좋아요</A>
                                            </Span>
                                        </Div>

                                        <Div
                                            width={"100%"}
                                            height={"50px"}
                                            display={"flex"}
                                            alignItems={"center"}
                                            margin={"0 15px"}
                                        >
                                            <Span>
                                                <A>작성자:댓글</A>
                                            </Span>
                                        </Div>

                                        <Div
                                            width={"100%"}
                                            height={"50px"}
                                            display={"flex"}
                                            alignItems={"center"}
                                            margin={"0 15px"}
                                        >
                                            <Form>
                                                <Input type="text" placeholder="댓글 달기.."></Input>
                                            </Form>
                                        </Div>
                                    </Article>
                                </>
                            );
                    })}
                </Div>
            </Wrapper>
        </>
    );
};

export default FeedPresetner;

// onScroll={props.handleScroll}
