import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import PageTitArea from '../../../layout/PageTitArea';

const WithIcons = () => {
  return (
    <>
      <PageTitArea pageTitHeading="Button Widh Icon" pageTitSubHeading="아이콘을 포함하고 있는 버튼 유형" />

      <Tabs
        defaultActiveKey="horizontalIcons"
        id="bs-nav"
        className="mb-3"
      >
      </Tabs>
    </>
  );
}

export default WithIcons;
