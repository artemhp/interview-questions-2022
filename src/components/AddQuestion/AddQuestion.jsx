import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

const AddQuestion = () => {
  const title = useSelector((state) => state.question.title);
  const answer = useSelector((state) => state.question.answer);
  const dispatch = useDispatch();
  return (
    <Container>
      <Form
        onSubmit={(el) => {
          el.preventDefault();
          dispatch({
            type: 'ADD_QUESTION',
          });
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Question"
            onChange={(event) => {
              dispatch({
                type: 'CHANGE_QUESTION_TITLE',
                payload: event.target.value,
              });
            }}
            value={title}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Answer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Answer"
            onChange={(event) => {
              dispatch({
                type: 'CHANGE_QUESTION_ANSWER',
                payload: event.target.value,
              });
            }}
            value={answer}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

AddQuestion.propTypes = {};

AddQuestion.defaultProps = {};

export default AddQuestion;
