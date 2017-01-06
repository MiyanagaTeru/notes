import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	words: state.words
})

const Editing = ({ words }) =>
	<div className='editing'>
	{
		JSON.stringify(words)
	}
	</div>

export default connect(mapStateToProps, {})(Editing);