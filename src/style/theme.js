import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button } = chakraTheme.components;

export const _theme = extendBaseTheme({
  components: {
    Button,
  },
});
