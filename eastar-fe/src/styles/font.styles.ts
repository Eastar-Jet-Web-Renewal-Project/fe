import { css } from "styled-components";
const sfProFont = {
  fontFamily: "SF Pro Display",
  src: "url('https://fonts.cdnfonts.com/css/sf-pro-display')",
};

export const fontSize = {
  Hero: "36px",
  Heading: {
    1: "32px",
    2: "24px",
    3: "21px",
  },
  subHeading: {
    1: "18px",
  },
  body: {
    1: "16px",
    2: "14px",
    3: "12px",
    4: "10px",
  },
};

export const fontWeight = {
  extraBold: 800,
  bold: 700,
  semiBold: 600,
  normal: 500,
  light: 300,
};

//TODO: 데스크탑 스타일도 지원..?
export const textStyle = {
  Hero: {
    normal: css`
      font-size: ${fontSize.Hero};
      font-weight: ${fontWeight.extraBold};
    `,
  },
  Heading: {
    1: {
      normal: css`
        font-size: ${fontSize.Heading[1]};
        font-weight: ${fontWeight.bold};
      `,
    },
    2: {
      normal: css`
        font-size: ${fontSize.Heading[2]};
        font-weight: ${fontWeight.bold};
      `,
    },
    3: {
      normal: css`
        font-size: ${fontSize.Heading[3]};
        font-weight: ${fontWeight.bold};
      `,
    },
  },
  subHeading: {
    1: {
      normal: css`
        font-size: ${fontSize.subHeading[1]};
        font-weight: ${fontWeight.bold};
      `,
    },
  },
  body: {
    1: {
      normal: css`
        font-size: ${fontSize.body[1]};
        font-weight: ${fontWeight.normal};
      `,
    },
    2: {
      normal: css`
        font-size: ${fontSize.body[2]};
        font-weight: ${fontWeight.normal};
      `,
    },
    3: {
      normal: css`
        font-size: ${fontSize.body[3]};
        font-weight: ${fontWeight.normal};
      `,
    },
    4: {
      normal: css`
        font-size: ${fontSize.body[4]};
        font-weight: ${fontWeight.normal};
      `,
    },
  },
};

export const fontStyle = css`
  @font-face {
    font-family: ${sfProFont.fontFamily};
    src: ${sfProFont.src};
  }

  font-family: ${sfProFont.fontFamily};
`;
