import styled from "styled-components";

const Form = ({ inputText, setInputText, dispatch }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: inputText,
    });

    setInputText("");
  };
  return (
    <form>
      <StyledInput value={inputText} onChange={inputTextHandler} type="text" />

      <ButtonAdd
        onClick={submitTodoHandler}
        type="submit"
        disabled={!inputText}
      >
        Add
      </ButtonAdd>
    </form>
  );
};

export default Form;

const StyledInput = styled.input`
  width: 50%;

  padding: 22px;
  border-radius: 30px;
  outline: none;
  background-color: #afeeee;
  border-style: none;
  margin-right: 1rem;
  color: #cb586b;
  font-size: 20px;
  font-style: italic;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonAdd = styled.button`
  width: 10%;
  padding: 17px;
  border-radius: 30px;
  background-color: #afeeee;
  border: none;
  /* border: 1px solid grey; */
  border-style: none;

  font-size: 25px;
  color: #f9758b;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
