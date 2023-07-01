import { Box } from "@mui/material";

interface ISolvingElementProps {
  expression: string;
}
const SolvingElement = ({ expression }: ISolvingElementProps) => {
  return (
    <div>
      <Box
        p={4}
        borderRadius={4}
        sx={{
          backgroundColor: "#FFA",
          cursor: "move"
        }}
      >
        {expression}
      </Box>
    </div>
  );
};

export default SolvingElement;
