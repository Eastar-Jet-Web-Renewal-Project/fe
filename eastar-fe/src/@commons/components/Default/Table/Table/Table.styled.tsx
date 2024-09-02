import { Variants } from "@commons/types/style";
import { border } from "@styles/border.styles";
import theme from "@styles/Theme/light.theme";
import styled, { css } from "styled-components";

export type TableVariant = "Filled" | "Outlined" | "Text";

const TableVariantStyles: Variants<TableVariant> = {
  Filled: css`
    border-radius: ${border.radius.small};
    border: 1px solid ${theme.surfaceContainer};

    thead {
      th {
        background-color: ${theme.surfaceContainer};
        color: ${theme.onSurfaceContainer};
        border-radius: ${border.radius.small};
      }
    }

    tbody {
      tr {
        border-bottom: ${`${border.width.thin} ${border.style.solid} ${theme.divider}`};
      }
    }
  `,
  Outlined: css``,
  Text: css``,
  Disabled: css``,
};

type StyledTableProps = {
  $variant: TableVariant;
  $isDisabled?: boolean;
};

export const StyledTableContainer = styled.div<StyledTableProps>`
  width: 100%;

  ${({ $variant }) => TableVariantStyles[$variant]}
  ${({ $isDisabled }) => $isDisabled && TableVariantStyles["Disabled"]}
`;

export const StyledTable = styled.table`
  width: 100%;
`;
