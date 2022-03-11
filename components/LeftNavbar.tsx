import React, { useState } from 'react';
import { createStyles, Navbar, Group, Code } from '@mantine/core';
import {
  FaBell,
  FaFingerprint,
  FaSignOutAlt,
  FaReceipt,
  FaDiceTwo,
  FaDatabase,
  FaRulerHorizontal,
  FaKey
} from 'react-icons/fa';

import {
  FiSettings
} from 'react-icons/fi';

// import { MantineLogo } from '../../shared/MantineLogo';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    navbar: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },

    version: {
      backgroundColor: theme.colors[theme.primaryColor][7],
      color: theme.white,
      fontWeight: 700,
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.colors[theme.primaryColor][7]}`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colors[theme.primaryColor][7]}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colors[theme.primaryColor][5],
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.white,
      opacity: 0.75,
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          opacity: 0.9,
        },
      },
    },
  };
});

const data = [
  { link: '', label: 'Notifications', icon: FaBell },
  { link: '', label: 'Billing', icon: FaReceipt },
  { link: '', label: 'Security', icon: FaFingerprint },
  { link: '', label: 'SSH Keys', icon: FaKey },
  { link: '', label: 'Databases', icon: FaDatabase },
  { link: '', label: 'Authentication', icon: FaDiceTwo },
  { link: '', label: 'Other Settings', icon: FiSettings },
];

interface Props {
  hidden: boolean;
  setHidden: (value: boolean) => void;
}

export const LeftNavbar = (props: Props) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        props.setHidden(true);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar
      fixed
      position={{ top: 0, left: 0 }}
      // height={700}
      className={classes.navbar}
      p="md"
      // Breakpoint at which navbar will be hidden if hidden prop is true
      hiddenBreakpoint="sm"
      // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
      hidden={props.hidden}
      // when viewport size is less than theme.breakpoints.sm navbar width is 100%
      // viewport size > theme.breakpoints.sm – width is 300px
      // viewport size > theme.breakpoints.lg – width is 400px
      width={{ sm: 300, lg: 400 }}
    >
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          {/* <MantineLogo variant="white" /> */}
          <div>Mantine</div>
          <Code className={classes.version}>v3.1.2</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <FaRulerHorizontal className={classes.linkIcon} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <FaSignOutAlt className={classes.linkIcon} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
};