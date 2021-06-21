// components
import Page from '../components/Page';

import { RightSideBar, HomeContent } from '../components/dashboard-home';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Thimble | Home" sx={{ display: 'flex' }}>
      <HomeContent />
      <RightSideBar />
    </Page>
  );
}
