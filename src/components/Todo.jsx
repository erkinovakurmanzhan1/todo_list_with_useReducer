import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../store/TodoContext";

const Todo = ({ todo, text }) => {
  const { dispatch, setInputText } = useContext(TodoContext);
  const deleteHandler = () => {
    dispatch({
      type: "delete",
      payload: todo.id,
    });
  };

  const compliteHandler = () => {
    dispatch({
      type: "complete",
      payload: todo.id,
    });
  };

  const editHandler = (text, id) => {

    setInputText(text);
    deleteHandler(id);
  };


  return (
    <StyledDivTodo>
      <StyleLi className={`${todo.completed && "todo" }`}>
        {text}
      </StyleLi>
      <Container>
        <CompleteBtn onClick={compliteHandler}>
          <StyledIBtn>
            <SpanDoneIcon>✔️</SpanDoneIcon>
          </StyledIBtn>
        </CompleteBtn>

        <StyleEdit onClick={() => editHandler(todo.text, todo.id)}>
          <b>✎</b>
        </StyleEdit>
        <TrashBtn onClick={deleteHandler}>
          <StyledIBtn>✖️</StyledIBtn>
        </TrashBtn>
      </Container>
    </StyledDivTodo>
  );
};

export default Todo;

const StyleLi = styled.li`
  padding: 0rem 0.5rem;
      list-style: none;
    padding: 0rem 0.5rem;
    display: flex;
    width: 100%;
    font-size: 40px;
    font-style: italic;
    font-weight: 900;
    color: rgb(195, 111, 125);
    &.todo{
      text-decoration: line-through;
    opacity: 0.5;
  }
`

const StyledDivTodo = styled.div`
  background: #98e9e9;
  border-radius: 30px;
  font-size: 1.5rem;
  color: #1b1919;
  display: flex;
  align-items: center;
  width: 65%;
  margin: 20px auto;
  transition: all 1s ease;
  padding: 5px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StyleEdit = styled.button`
  background: none;
  border: none;
  font-size: 2.9rem;
  color: #3d065d9f;
  font-weight: 900;
`;

const StyledIBtn = styled.i`
  pointer-events: none;
`;

const CompleteBtn = styled.button`
  border-radius: 50px;
  width: 80px;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 2rem;
  background: none;
`;

const TrashBtn = styled.button`
  font-size: 2rem;
  background: none;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
`;
const SpanDoneIcon = styled.span`
  color: #ed9090;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
