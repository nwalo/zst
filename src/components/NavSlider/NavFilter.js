import { Stack, Typography } from "@mui/material";
import React from "react";
import Modal from "../Modal/Modal";

const NavFilter = () => {
  return (
    <div>
      <Modal>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            padding: "10px 10px",
            borderRadius: "10px",
            border: "1px solid #dddddd",
            marginRight: "5px",
          }}
          gap={2}
        >
          <Typography fontSize="20px">
            <svg
              viewBox="0 0 21 21"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6.5 4a1 1 0 011 1v2a1 1 0 11-2 0V5a1 1 0 011-1zM18.5 6h-11M5.5 6h-3M6.5 14a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM18.5 16h-11M5.5 16h-3M14.5 9a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM13.5 11h-11M18.5 11h-3" />
              </g>
            </svg>{" "}
          </Typography>
          <Typography fontSize={"12px"} fontWeight={500}>
            Filters
          </Typography>
        </Stack>
      </Modal>
    </div>
  );
};

export default NavFilter;
