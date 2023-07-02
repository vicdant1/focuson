import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box } from "@mui/material";

interface ISolvingElementProps {
  expression: string;
  order: number;
}
const SolvingElement = ({ expression, order }: ISolvingElementProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: order,
    });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    }

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners} >
      <Box
        p={4}
        borderRadius={4}
        sx={{
          backgroundColor: "#FFA",
          cursor: "move",
        }}
      >
        {expression}
      </Box>
    </div>
  );
};

export default SolvingElement;
