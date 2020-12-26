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
`;

export const Box = styled.div`
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
`;

export const Input = styled.input`
    width: ${(props: Istyle) => (props.width ? props.width : null)};
    height: ${(props: Istyle) => (props.height ? props.height : null)};
    margin: ${(props: Istyle) => (props.margin ? props.margin : null)};
    padding: ${(props: Istyle) => (props.padding ? props.padding : null)};
    outline-style: none;
    border: none;
`;

export const Button = styled.button;
