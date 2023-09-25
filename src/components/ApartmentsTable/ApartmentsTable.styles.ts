import styled from "styled-components";
import { device } from "../../devices";

export const ApartmentsTableContainer = styled.div`
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;

  @media ${device.laptop} {
    margin-top: 40px;
  }

  .ui.table:first-child {
    margin-top: auto;
  }
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .ui.table {
    text-align: center;
    @media ${device.mobileL} {
      width: 100%;
    }
    @media ${device.tablet} {
      width: 50%;
    }
    @media ${device.laptop} {
      width: auto;
    }
    tbody {
      font-size: 0.8rem;
      white-space: nowrap;

      @media ${device.laptopL} {
        font-size: 1rem;
      }
    }
    thead th {
      background: var(--primary);
      color: var(--neutralLightest);
      font-size: 0.9rem;

      @media ${device.laptopL} {
        font-size: 1.1rem;
      }
    }
  }
  .blueprint-button {
    box-shadow: 0 0 2px var(--neutral) !important;
    white-space: nowrap;
    width: 100%;
  }

  .mobile-fraction-table {
    padding: 2px 0;
    font-size: 1rem;
  }
`;
