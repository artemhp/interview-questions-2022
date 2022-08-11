import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

const List = () => {
  const listQuestions = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const variantList = (status) => {
    if (status === 0) return 'danger';
    if (status === 1) return 'warning';
    return 'success';
  };
  return (
    <Container className="mb-3 mt-3">
      <ListGroup>
        {listQuestions.map(({ question, id, statusText, status, answer }) => (
          <ListGroup.Item key={id} variant={variantList(status)}>
            {question}
            <div className="float-end">
              <ButtonGroup size="sm">
                {status !== 2 && (
                  <Button
                    onClick={() => {
                      dispatch({
                        type: 'DONE',
                        payload: id,
                      });
                    }}
                  >
                    Done
                  </Button>
                )}
                {status !== 1 && (
                  <Button
                    onClick={() => {
                      dispatch({
                        type: 'IN PROGRESS',
                        payload: id,
                      });
                    }}
                  >
                    In Progress
                  </Button>
                )}
              </ButtonGroup>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

List.propTypes = {};

List.defaultProps = {};

export default List;
