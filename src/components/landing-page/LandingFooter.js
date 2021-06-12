import { Link as ScrollLink } from 'react-scroll';
// material
import { Container, Button } from '@material-ui/core';
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
//
import Logo from '../Logo';

// ----------------------------------------------------------------------

const LINKS = [
  {
    title: 'We are hiring!',
    href: 'https://www.notion.so/Caf-is-hiring-1b7ccd5e78fb4e6c965a98602f58f830'
  },
  {
    title: 'LinkedIn',
    href: 'https://www.notion.so/Caf-is-hiring-1b7ccd5e78fb4e6c965a98602f58f830'
  },
  {
    title: 'Press',
    href: 'https://www.notion.so/Caf-is-hiring-1b7ccd5e78fb4e6c965a98602f58f830'
  },
  {
    title: 'Privacy and Conditions',
    href: 'https://www.notion.so/Caf-is-hiring-1b7ccd5e78fb4e6c965a98602f58f830'
  },
  {
    title: 'Terms and Conditions',
    href: 'https://www.notion.so/Caf-is-hiring-1b7ccd5e78fb4e6c965a98602f58f830'
  },
  {
    title: 'Terms of Use',
    href: 'https://www.notion.so/Caf-is-hiring-1b7ccd5e78fb4e6c965a98602f58f830'
  },
  {
    title: 'Contact',
    href: 'https://www.notion.so/Caf-is-hiring-1b7ccd5e78fb4e6c965a98602f58f830'
  }
];

const Links = styled('div')(() => ({
  width: '900px'
}));

const ManropeRegular = "'ManropeRegular', sans-serif";

export default function LandingFooter() {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'block',
        width: '100%',
        justifyContent: 'space-between',
        py: 3,
        [theme.breakpoints.up('md')]: {
          display: 'flex'
        }
      }}
    >
      <ScrollLink to="move_top" spy smooth>
        <Logo sx={{ mb: 1, mx: 'auto' }} />
      </ScrollLink>
      <Links
        sx={{
          display: 'block',
          width: '100%',
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            width: '900px'
          }
        }}
      >
        {LINKS.map((link, index) => (
          <Button
            size="large"
            key={link.title}
            href={link.href}
            target="_blank"
            sx={{
              color: 'black',
              fontWeight: 400,
              fontFamily: ManropeRegular,
              ...(index === 0 && {
                fontWeight: 600
              }),
              [theme.breakpoints.down('md')]: {
                width: '100%'
              }
            }}
          >
            {link.title}
          </Button>
        ))}
      </Links>
    </Container>
  );
}
