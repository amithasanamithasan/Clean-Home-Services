import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = ({children}) => {
    return (
        <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-slate-200 w-full">
        <Navbar></Navbar>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <Sidebar></Sidebar>
        </div>
      </div>
    );
};
MainLayout.propTypes={
    children:PropTypes.node,
}
export default MainLayout;