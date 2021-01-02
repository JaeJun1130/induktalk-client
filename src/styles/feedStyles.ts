import styled from "styled-components";

interface Istyle {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    backgroundColor?: string;
    border?: string;
    borderRadius?: string;
    flexDirection?: string; //flex-bos안에 내용들을 정렬
    position?: string;
    gridTemplate?: string;
    gridgap?: string;
    overflowy?: string;
    float?: string;
    flexD?: string;
}

export const Wrapper = styled.div`
    width: ${(props: Istyle) => (props.width ? props.width : null)};
    height: ${(props: Istyle) => (props.height ? props.height : null)};
    margin: ${(props: Istyle) => (props.margin ? props.margin : null)};
    padding: ${(props: Istyle) => (props.padding ? props.padding : null)};
    display: ${(props: Istyle) => (props.display ? props.display : null)};
    justify-content: ${(props: Istyle) => (props.justifyContent ? props.justifyContent : null)};
    align-items: ${(props: Istyle) => (props.alignItems ? props.alignItems : null)};
    background-color: ${(props: Istyle) => (props.backgroundColor ? props.backgroundColor : null)};
    border-radius: ${(props: Istyle) => (props.borderRadius ? props.borderRadius : null)};
    border: ${(props: Istyle) => (props.border ? props.border : null)};
    overflow-y: ${(props: Istyle) => (props.overflowy ? props.overflowy : null)};
`;

export const Div = styled.div`
    width: ${(props: Istyle) => (props.width ? props.width : null)};
    height: ${(props: Istyle) => (props.height ? props.height : null)};
    margin: ${(props: Istyle) => (props.margin ? props.margin : null)};
    padding: ${(props: Istyle) => (props.padding ? props.padding : null)};
    display: ${(props: Istyle) => (props.display ? props.display : null)};
    justify-content: ${(props: Istyle) => (props.justifyContent ? props.justifyContent : null)};
    align-items: ${(props: Istyle) => (props.alignItems ? props.alignItems : null)};
    background-color: ${(props: Istyle) => (props.backgroundColor ? props.backgroundColor : null)};
    border-radius: ${(props: Istyle) => (props.borderRadius ? props.borderRadius : null)};
    border: ${(props: Istyle) => (props.border ? props.border : null)};
    flex-direction: ${(props: Istyle) => (props.flexDirection ? props.flexDirection : null)};
    position: ${(props: Istyle) => (props.position ? props.position : null)};
    grid-template-columns: ${(props: Istyle) => (props.gridTemplate ? props.gridTemplate : null)};
    grid-gap: ${(props: Istyle) => (props.gridgap ? props.gridgap : null)};
`;

export const Input = styled.input`
    width: ${(props: Istyle) => (props.width ? props.width : null)};
    height: ${(props: Istyle) => (props.height ? props.height : null)};
    margin: ${(props: Istyle) => (props.margin ? props.margin : null)};
    padding: ${(props: Istyle) => (props.padding ? props.padding : null)};
    outline-style: none;
    border: none;
`;

export const Article = styled.article`
    border: ${(props: Istyle) => (props.border ? props.border : null)};
    border-radius: ${(props: Istyle) => (props.borderRadius ? props.borderRadius : null)};
`;

export const Header = styled.header`
    width: ${(props: Istyle) => (props.width ? props.width : null)};
    height: ${(props: Istyle) => (props.height ? props.height : null)};
    border: ${(props: Istyle) => (props.border ? props.border : null)};
`;

export const Img = styled.img`
    width: ${(props: Istyle) => (props.width ? props.width : null)};
    height: ${(props: Istyle) => (props.height ? props.height : null)};
`;

export const Span = styled.span``;

export const A = styled.a``;

export const Form = styled.form``;

export const Button = styled.button`
    width: ${(props: Istyle) => (props.width ? props.width : null)};
    flex-direction: ${(props: Istyle) => (props.flexD ? props.flexD : null)};
    justify-content: ${(props: Istyle) => (props.justifyContent ? props.justifyContent : null)};
    margin: ${(props: Istyle) => (props.margin ? props.margin : null)};
    height: ${(props: Istyle) => (props.height ? props.height : null)};
`;
