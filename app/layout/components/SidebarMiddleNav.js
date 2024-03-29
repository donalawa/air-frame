import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboards"
        >
            <SidebarMenu.Item title="Analytics" to='/dashboards/analytics' exact />
            {/* <SidebarMenu.Item title="Projects" to='/dashboards/projects' exact />
            <SidebarMenu.Item title="System" to='/dashboards/system' exact />
            <SidebarMenu.Item title="Monitor" to='/dashboards/monitor' exact />
            <SidebarMenu.Item title="Financial" to='/dashboards/financial' exact />
            <SidebarMenu.Item title="Stock" to='/dashboards/stock' exact />
            <SidebarMenu.Item title="Reports" to='/dashboards/reports' exact /> */}
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-th"></i>}
            title="Widgets"
            to='/widgets'
        />
  
        { /* -------- Interface ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-toggle-on"></i>}
            title="Interface"
        >
            <SidebarMenu.Item title="Colors" to='/interface/colors' />
            <SidebarMenu.Item title="Typography" to='/interface/typography' />
            <SidebarMenu.Item title="Buttons" to='/interface/buttons' />
            <SidebarMenu.Item title="Paginations" to='/interface/paginations' />
            <SidebarMenu.Item title="Images" to='/interface/images' />
            <SidebarMenu.Item title="Avatars" to='/interface/avatars' />
            <SidebarMenu.Item title="Progress Bars" to='/interface/progress-bars' />
            <SidebarMenu.Item title="Badges &amp; Labels" to='/interface/badges-and-labels' />
            <SidebarMenu.Item title="Media Objects" to='/interface/media-objects' />
            <SidebarMenu.Item title="List Groups" to='/interface/list-groups' />
            <SidebarMenu.Item title="Alerts" to='/interface/alerts' />
            <SidebarMenu.Item title="Accordions" to='/interface/accordions' />
            <SidebarMenu.Item title="Tabs Pills" to='/interface/tabs-pills' />
            <SidebarMenu.Item title="Tooltips &amp; Popovers" to='/interface/tooltips-and-popovers' />
            <SidebarMenu.Item title="Dropdowns" to='/interface/dropdowns' />
            <SidebarMenu.Item title="Modals" to='/interface/modals' />
            <SidebarMenu.Item title="Breadcrumbs" to='/interface/breadcrumbs' />
            <SidebarMenu.Item title="Navbars" to='/interface/navbars' />
            <SidebarMenu.Item title="Notifications" to='/interface/notifications' />
            <SidebarMenu.Item title="Crop Image" to='/interface/crop-image' />
            <SidebarMenu.Item title="Drag &amp; Drop Elements" to='/interface/drag-and-drop-elements' />
            <SidebarMenu.Item title="Calendar" to='/interface/calendar' />
        </SidebarMenu.Item>
    
        { /* -------- Forms ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-check-square-o"></i>}
            title="Forms"
        >
            <SidebarMenu.Item title="Forms" to='/forms/forms' />
            <SidebarMenu.Item title="Forms Layouts" to='/forms/forms-layouts' />
            <SidebarMenu.Item title="Input Groups" to='/forms/input-groups' />
            <SidebarMenu.Item title="Wizard" to='/forms/wizard' />
            <SidebarMenu.Item title="Text Mask" to='/forms/text-mask' />
            <SidebarMenu.Item title="Typeahead" to='/forms/typeahead' />
            <SidebarMenu.Item title="Toggles" to='/forms/toggles' />
            <SidebarMenu.Item title="Editor" to='/forms/editor' />
            <SidebarMenu.Item title="Date Picker" to='/forms/date-picker' />
            <SidebarMenu.Item title="Dropzone" to='/forms/dropzone' />
            <SidebarMenu.Item title="Sliders" to='/forms/sliders' />
        </SidebarMenu.Item>
        { /* -------- Tables ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-trello"></i>}
            title="Tables"
        >
            <SidebarMenu.Item title="Tables" to='/tables/tables' />
            <SidebarMenu.Item title="Extended Tables" to='/tables/extended-table' />
            <SidebarMenu.Item title="AgGrid" to='/tables/ag-grid' />
        </SidebarMenu.Item>

        { /* -------- Pages ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-copy"></i>}
            title="Pages"
        >
            <SidebarMenu.Item title="Register" to="/pages/register" />
            <SidebarMenu.Item title="Login" to="/pages/login" />
            <SidebarMenu.Item title="Forgot Password" to="/pages/forgot-password" />
            <SidebarMenu.Item title="Lock Screen" to="/pages/lock-screen" />
            <SidebarMenu.Item title="Error 404" to="/pages/error-404" />
            <SidebarMenu.Item title="Confirmation" to="/pages/confirmation" />
            <SidebarMenu.Item title="Success" to="/pages/success" />
            <SidebarMenu.Item title="Danger" to="/pages/danger" />
            <SidebarMenu.Item title="Coming Soon" to="/pages/coming-soon" />
            <SidebarMenu.Item title="Timeline" to="/pages/timeline" />
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-star-o"></i>}
            title="Icons"
            to='/icons'
        />

    </SidebarMenu >
);
