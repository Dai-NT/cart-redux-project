import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../components/Message';

class MessageContainer extends Component {
  render(){
      return (
          <Message messages = {this.props.messages}/>
      )
}
}

MessageContainer.propTypes = {messages: PropTypes.string.isRequired}

const mapStateToProps = (state) => {
    return {  
        messages: state.messages,
    }
}

export default connect(mapStateToProps, null)(MessageContainer);
