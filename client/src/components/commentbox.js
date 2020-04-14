import React from 'react';

function CommentBox(props) {

    return (
        <form>
          <div className="form-group">
            <label htmlFor="comment">comment:</label>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="comment"
              type="text"
              className="form-control"
              placeholder="comment something"
              id="comment"
            />
            <br />
            <button onClick={props.handleFormSubmit} className="btn btn-primary">
              comment
            </button>
          </div>
        </form>
      );
    }

export default CommentBox