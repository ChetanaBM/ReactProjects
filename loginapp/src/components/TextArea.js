import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD


=======
>>>>>>> 5f9689891c375fcd2b50250c8c574e1e0e76aa74
const TextArea = (props) => (
	<div className="form-group">
		<label className="form-label">{props.title}</label>
		<textarea
			className="form-input"
			style={props.resize ? null : {resize: 'none'}}
			name={props.name}
			rows={props.rows}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
	</div>
);

TextArea.propTypes = {
	title: PropTypes.string.isRequired,
	rows: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
<<<<<<< HEAD
	content: PropTypes.string.isRequired,
	resize: PropTypes.bool,
	placeholder: PropTypes.string,
=======
	content:PropTypes.string.isRequired,
	resize: PropTypes.bool,
	placeholder:PropTypes.string,
>>>>>>> 5f9689891c375fcd2b50250c8c574e1e0e76aa74
	controlFunc: PropTypes.func.isRequired
};

export default TextArea;