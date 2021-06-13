import { Icon } from '@iconify/react';
import { useState, useRef } from 'react';
import homeFill from '@iconify/icons-eva/home-fill';
import roundSpeed from '@iconify/icons-ic/round-speed';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';

// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import {
  Box,
  List,
  Link,
  Button,
  AppBar,
  Hidden,
  Toolbar,
  MenuItem,
  Container,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
// routes
import { PATH_HOME, PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import { MIconButton } from '../../components/@material-extend';
import Logo from '../../components/Logo';
import MenuPopover from '../../components/MenuPopover';
// ----------------------------------------------------------------------

const MENU_LINKS = [
  { title: 'How it works', icon: homeFill, href: PATH_HOME.how_it_works },
  { title: 'Pricing', icon: roundSpeed, href: PATH_HOME.pricing }
];

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 96;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  '& .isDesktopActive': {
    color: `${theme.palette.primary.main} !important`
  },
  '& .isMobileActive': {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    )
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: { height: APP_BAR_DESKTOP }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

const ToolbarHeight = styled('div')(() => ({
  height: '76px'
}));

const ManropeRegular = "'ManropeRegular', sans-serif";
// ----------------------------------------------------------------------

export default function HomeNavbar() {
  const anchorRef = useRef(null);
  const { pathname } = useLocation();
  const offset = useOffSetTop(64);
  const [openMenu, setOpenMenu] = useState(false);
  const isHome = pathname === '/';

  const renderMenuDesktop = (
    <>
      {MENU_LINKS.map((link) => (
        <Link
          exact
          to={link.href}
          key={link.title}
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          activeClassName="isDesktopActive"
          sx={{
            mr: 3,
            ...(isHome && { color: 'common.white' }),
            ...(offset && { color: 'text.info' })
          }}
        >
          <Button
            size="large"
            key={link.title}
            sx={{
              color: 'black',
              fontWeight: 400,
              fontFamily: ManropeRegular
            }}
          >
            {link.title}
          </Button>
        </Link>
      ))}
    </>
  );

  const renderMenuMobile = (
    <MenuPopover
      disablePortal
      open={openMenu}
      anchorEl={anchorRef.current}
      onClose={() => setOpenMenu(false)}
    >
      <List>
        {MENU_LINKS.map((link) => (
          <MenuItem
            exact
            to={link.href}
            key={link.title}
            component={RouterLink}
            onClick={() => setOpenMenu(false)}
            activeClassName="isMobileActive"
            sx={{ color: 'text.secondary', py: 1 }}
          >
            <ListItemIcon>
              <Icon icon={link.icon} width={20} height={20} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ typography: 'body2' }}>
              {link.title}
            </ListItemText>
          </MenuItem>
        ))}
      </List>
    </MenuPopover>
  );

  return (
    <>
      <RootStyle
        color="transparent"
        sx={{
          position: 'relative',
          ...(offset && {
            position: 'fixed'
          })
        }}
      >
        {/* {!offset && <HomeTopBar sx={{ transition: 'all 5s' }} />} */}
        <ToolbarStyle
          disableGutters
          position="static"
          sx={{
            backgroundColor: '#FCEEE2',
            ...(offset && {
              bgcolor: 'background.default',
              height: { md: APP_BAR_DESKTOP - 20 }
            })
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <RouterLink to="/">
              <Logo />
            </RouterLink>
            <Box sx={{ flexGrow: 1 }} />

            <Hidden mdDown>{renderMenuDesktop}</Hidden>

            <Button variant="outlined" href={PATH_DASHBOARD.root}>
              Get Started
            </Button>

            <Hidden mdUp>
              <MIconButton
                ref={anchorRef}
                onClick={() => setOpenMenu(true)}
                sx={{
                  ml: 1,
                  ...(isHome && { color: 'common.black' }),
                  ...(offset && { color: 'text.primary' })
                }}
              >
                <Icon icon={menu2Fill} />
              </MIconButton>
              {renderMenuMobile}
            </Hidden>
          </Container>
        </ToolbarStyle>

        {offset && <ToolbarShadowStyle />}
      </RootStyle>
      {offset && <ToolbarHeight />}
    </>
  );
}
