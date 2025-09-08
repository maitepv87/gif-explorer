import { useTheme } from "@mui/material/styles";
import { Card, CardMedia } from "@mui/material";
import { styles } from "./GifCard.styles";

export const GifCard = ({ url }) => {
  const theme = useTheme();

  return (
    <Card elevation={1} sx={styles.card(theme)}>
      <CardMedia component="img" image={url} alt="gif" sx={styles.media} />
    </Card>
  );
};
