import { css } from "styled-components";

export const mobil = (props) => {
  return css`
    @media only screen and (max-width: 414px) {
      display: none;
      backgound-color: green;
    }
  `;
};
