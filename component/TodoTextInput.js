import React, {Component, PropTypes} from 'react'
import classname from "classnames"
class TodoTextInput extends Component {
    handleSubmit= e =>{
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
        }
    }
    Render() {
        return(
            <input
            type="text"
            autoFocus="true"
            placeholder="what needs to be done?"
            classname='new-todo'
            onKeyDown={this.handleSubmit.binf(this)
            }
            />
        )
    }
}
export default TodoTextInput;
