import { useState } from 'react';
import { LeftNavbar } from './LeftNavbar';
import {
  AppShell,
  Burger,
  createStyles,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme
} from '@mantine/core';

const useStyles = createStyles((theme) => {
  return {
    navbar: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },

    header: {
      backgroundColor: theme.colors[theme.primaryColor][6],
      color: theme.white,
    },
  };
});

export const Shell: React.FC = (props) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          className={classes.navbar}
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 240 }}
        >
          <LeftNavbar setHidden={(i) => setOpened(!i)} />
        </Navbar>
      }
      header={
        <Header height={70} p="md" className={classes.header}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.white}
                mr="xl"
              />
            </MediaQuery>
            <Text>Reporting Portal</Text>
          </div>
        </Header>
      }
    >
      <div>
        {props.children}
      </div>
    </AppShell>
  );
};