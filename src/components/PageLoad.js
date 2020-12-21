import React from "react";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import { colors } from "../theme";

const override = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export class PageLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <PacmanLoader
          css={override}
          size={30}
          color={colors.yellow}
          loading={this.state.loading}
        />
      </div>
    );
  }
}