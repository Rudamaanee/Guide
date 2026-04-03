import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import PageTitArea from '../../../layout/PageTitArea';
import Standard from './Standard';

const Buttons = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Buttons" pageTitSubHeading="" />

      <Tabs
        defaultActiveKey="standard"
        id="bs-nav"
        className="mb-3"
      >
        <Tab eventKey="standard" title="Standard">
          <Standard />
        </Tab>
      </Tabs>
    </>
  );
}

export default Buttons;
