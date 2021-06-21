// components
import Page from '../components/Page';

import {
  RightSideBar,
  CalendarContent
} from '../components/dashboard-calendar';

// ----------------------------------------------------------------------

export default function CalendarPage() {
  return (
    <Page title="Thimble | Calendar" sx={{ display: 'flex' }}>
      <CalendarContent />
      <RightSideBar />
    </Page>
  );
}
