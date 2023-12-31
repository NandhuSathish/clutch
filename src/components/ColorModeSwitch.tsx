import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={() => {
        toggleColorMode();
      }}
    >
      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ColorModeSwitch;
