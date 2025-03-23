import styled from "styled-components";

export const Container = styled.div<{selected : boolean;}>`
    display: flex;
    border: 2px solid ${props => props.selected ? 'rgb(0, 0, 0)' : 'rgb(222, 222, 222)'}; /* rgb(0, 0, 0) */
    margin-top: 30px;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;
    &:hover {
        border: 2px solid rgb(3, 3, 4);
    }
    background-color: rgb(235, 235, 235);
`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(7, 5, 8);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
`;

export const Description = styled.div`
    font-size: 14px;
   
`;