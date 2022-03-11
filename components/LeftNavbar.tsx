import React, { useState } from 'react';
import { createStyles, Navbar } from '@mantine/core';
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

import { FiSettings } from 'react-icons/fi';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
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
  { link: 'notifications', label: 'Notifications', icon: FaBell },
  { link: 'billing', label: 'Billing', icon: FaReceipt },
  { link: 'security', label: 'Security', icon: FaFingerprint },
  { link: 'ssh', label: 'SSH Keys', icon: FaKey },
  { link: 'databases', label: 'Databases', icon: FaDatabase },
  { link: 'auth', label: 'Authentication', icon: FaDiceTwo },
  { link: 'settings', label: 'Other Settings', icon: FiSettings },
];

interface Props {
  // hidden: boolean;
  setHidden: (value: boolean) => void;
}

export const LeftNavbar = (props: Props) => {
  const router = useRouter();
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
        router.push(`/${item.link}`)
        props.setHidden(true);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <>
      <Navbar.Section grow>
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
    </>
  );
};