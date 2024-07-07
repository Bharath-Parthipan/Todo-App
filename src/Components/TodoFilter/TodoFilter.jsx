import Form from "react-bootstrap/Form";
import PropTypes from "prop-types"
import "./TodoFilter.css"

export const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Form.Group className="d-flex flex-wrap align-items-center gap-sm-3">
        <Form.Label>Filter by status :</Form.Label>
        <Form.Select className="dropdown1-box" as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
};

TodoFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};