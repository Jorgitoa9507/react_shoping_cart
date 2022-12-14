import { Box, Button, Stack, Typography } from "@mui/material";
import CartItem from "../../models/CartItem";
import ShoppingItem from "../../models/ShoppingItem";
import { RiDeleteBinLine } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import QuantitySelector from "./QuantitySelector";

export const DeleteButton = styled(Button)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.dark.main,
  fontWeight: theme.typography.fontWeightMedium,
  padding: "4px 4px 4px 0px",
  justifyContent: "left",
  width: "auto",
  minWidth: "auto",
  ":hover": {
    color: theme.palette.dark["03"],
    backgroundColor: "none",
    background: "none",
  },
}));

export interface SingleCartItemProps {
  cartItem: CartItem;
  onDelete: (id: string) => void;
  onChangeQuantity: (quantity: number) => void;
}

const SingleCartItem: React.FC<SingleCartItemProps> = ({
  cartItem,
  onDelete,
  onChangeQuantity,
}) => {
  const item = cartItem.item as ShoppingItem;

  return (
    <Box>
      <Stack direction={"row"} spacing={2}>
        <Box
          sx={(theme) => ({
            width: 120,
            height: 120,
            maxHeight: { xs: 120, md: 167 },
            maxWidth: { xs: 120, md: 250 },
            background: `url(${item.image}) no-repeat center center`,
            backgroundColor: theme.palette.dark["10"],
            backgroundSize: "contain",
          })}
        />
        <Stack direction="column" spacing={1}>
          <Typography
            variant="subtitle1"
            fontWeight={(theme) => theme.typography.fontWeightBold}>
            {item.name}
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={(theme) => theme.typography.fontWeightBold}>
            Quantity:{" "}
            <QuantitySelector
              onChange={onChangeQuantity}
              deafultValue={cartItem.amount}
              values={item.posibleAmounts}
            />
            {/* cartItem.amount */}
          </Typography>
          <DeleteButton
            onClick={() => onDelete(cartItem.id)}
            variant="text"
            disableRipple={true}
            startIcon={<RiDeleteBinLine />}>
            Remove
          </DeleteButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleCartItem;
