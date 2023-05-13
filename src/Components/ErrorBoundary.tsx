import React, { Component } from "react";

type PropTypes = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};
type StateTypes = { hasError: boolean };

export default class ErrorBoundary extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
