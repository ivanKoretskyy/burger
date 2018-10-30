import React, { Component } from "react";

import Modal from "../../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentWillMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        res => res,
        err => {
          this.setState({ error: err });
        }
      );
    }
    render() {
      return (
        <>
          {this.state.error ? (
            <>
              <Modal
                show={this.state.error}
                backdropClicked={this.errorRemoveHandler.bind(this)}
                errorHandler
              >
                {this.state.error.message}
              </Modal>
            </>
          ) : null}
          <WrappedComponent {...this.props} />
        </>
      );
    }

    errorRemoveHandler() {
      this.setState({ error: null });
    }
  };
};

export default withErrorHandler;
