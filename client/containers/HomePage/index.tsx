import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import { useGuard } from "@/hooks";

export default function HomePage() {
  useGuard(false, "/practice");

  return (
    <Container className="flex-col items-center py-8">
      <Typography className="text-heading font-thin text-center" variant="h3">
        Welcome to MVP!
      </Typography>
    </Container>
  );
}
