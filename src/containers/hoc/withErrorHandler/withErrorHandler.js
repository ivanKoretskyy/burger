import React, { Component } from "react";

import Modal from "../../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {

  return class extends Component {
    alive = false;
    state = {
      error: null
    };
    componentWillMount() {
      this.alive = true;
      axios.interceptors.request.use(req => {
        console.log('set state withErrorHandler')
        this.alive && this.setState({ error: null });
        console.log('set state end withErrorHandler')
        return req;
      });
      axios.interceptors.response.use(
        res => res,
        err => {
          this.alive && this.setState({ error: err });
        }
      );
    }
    componentWillUnmount() {
      this.alive = false;
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
