import React from 'react'

function SideBar() {
    return (
        <>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sidenav shadow-right sidenav-light">
                        <div className="sidenav-menu">
                            <div className="nav accordion" id="accordionSidenav">
                                {/* <!-- Sidenav Menu Heading (Account)-->
                                <!-- * * Note: * * Visible only on and above the sm breakpoint--> */}
                                <div className="sidenav-menu-heading d-sm-none">Account</div>
                                {/* <!-- Sidenav Link (Alerts)--> */}
                                {/* <!-- * * Note: * * Visible only on and above the sm breakpoint--> */}
                                <a className="nav-link d-sm-none" href="#!">
                                    <div className="nav-link-icon"><i data-feather="bell"></i></div>
                                    Alerts
                                    <span className="badge bg-warning-soft text-warning ms-auto">4 New!</span>
                                </a>
                                {/* <!-- Sidenav Link (Messages)--> */}
                                {/* <!-- * * Note: * * Visible only on and above the sm breakpoint--> */}
                                <a className="nav-link d-sm-none" href="#!">
                                    <div className="nav-link-icon"><i data-feather="mail"></i></div>
                                    Messages
                                    <span className="badge bg-success-soft text-success ms-auto">2 New!</span>
                                </a>
                                {/* <!-- Sidenav Menu Heading (Core)--> */}
                                <div className="sidenav-menu-heading">Core</div>
                                {/* <!-- Sidenav Accordion (Dashboard)--> */}
                                <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                                    <div className="nav-link-icon"><i data-feather="activity"></i></div>
                                    Dashboards
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseDashboards" data-bs-parent="#accordionSidenav">
                                    <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                        <a className="nav-link" href="dashboard-1.html">
                                            Default
                                            <span className="badge bg-primary-soft text-primary ms-auto">Updated</span>
                                        </a>
                                        <a className="nav-link" href="dashboard-2.html">Multipurpose</a>
                                        <a className="nav-link" href="dashboard-3.html">Affiliate</a>
                                    </nav>
                                </div>
                                {/* <!-- Sidenav Heading (Custom)--> */}
                                <div className="sidenav-menu-heading">Custom</div>
                                {/* <!-- Sidenav Accordion (Pages)--> */}
                                <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="nav-link-icon"><i data-feather="grid"></i></div>
                                    Pages
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapsePages" data-bs-parent="#accordionSidenav">
                                    <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                        {/* <!-- Nested Sidenav Accordion (Pages -> Account)--> */}
                                        <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAccount" aria-expanded="false" aria-controls="pagesCollapseAccount">
                                            Account
                                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseAccount" data-bs-parent="#accordionSidenavPagesMenu">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="account-profile.html">Profile</a>
                                                <a className="nav-link" href="account-billing.html">Billing</a>
                                                <a className="nav-link" href="account-security.html">Security</a>
                                                <a className="nav-link" href="account-notifications.html">Notifications</a>
                                            </nav>
                                        </div>
                                        {/* <!-- Nested Sidenav Accordion (Pages -> Authentication)--> */}
                                        <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                            Authentication
                                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseAuth" data-bs-parent="#accordionSidenavPagesMenu">
                                            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">
                                                {/* <!-- Nested Sidenav Accordion (Pages -> Authentication -> Basic)--> */}
                                                <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthBasic" aria-expanded="false" aria-controls="pagesCollapseAuthBasic">
                                                    Basic
                                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                                </a>
                                                <div className="collapse" id="pagesCollapseAuthBasic" data-bs-parent="#accordionSidenavPagesAuth">
                                                    <nav className="sidenav-menu-nested nav">
                                                        <a className="nav-link" href="auth-login-basic.html">Login</a>
                                                        <a className="nav-link" href="auth-register-basic.html">Register</a>
                                                        <a className="nav-link" href="auth-password-basic.html">Forgot Password</a>
                                                    </nav>
                                                </div>
                                                {/* <!-- Nested Sidenav Accordion (Pages -> Authentication -> Social)--> */}
                                                <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthSocial" aria-expanded="false" aria-controls="pagesCollapseAuthSocial">
                                                    Social
                                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                                </a>
                                                <div className="collapse" id="pagesCollapseAuthSocial" data-bs-parent="#accordionSidenavPagesAuth">
                                                    <nav className="sidenav-menu-nested nav">
                                                        <a className="nav-link" href="auth-login-social.html">Login</a>
                                                        <a className="nav-link" href="auth-register-social.html">Register</a>
                                                        <a className="nav-link" href="auth-password-social.html">Forgot Password</a>
                                                    </nav>
                                                </div>
                                            </nav>
                                        </div>
                                        {/* <!-- Nested Sidenav Accordion (Pages -> Error)--> */}
                                        <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                            Error
                                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseError" data-bs-parent="#accordionSidenavPagesMenu">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="error-400.html">400 Error</a>
                                                <a className="nav-link" href="error-401.html">401 Error</a>
                                                <a className="nav-link" href="error-403.html">403 Error</a>
                                                <a className="nav-link" href="error-404-1.html">404 Error 1</a>
                                                <a className="nav-link" href="error-404-2.html">404 Error 2</a>
                                                <a className="nav-link" href="error-500.html">500 Error</a>
                                                <a className="nav-link" href="error-503.html">503 Error</a>
                                                <a className="nav-link" href="error-504.html">504 Error</a>
                                            </nav>
                                        </div>
                                        <a className="nav-link" href="pricing.html">Pricing</a>
                                        <a className="nav-link" href="invoice.html">Invoice</a>
                                    </nav>
                                </div>
                                {/* <!-- Sidenav Accordion (Applications)--> */}
                                <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseApps" aria-expanded="false" aria-controls="collapseApps">
                                    <div className="nav-link-icon"><i data-feather="globe"></i></div>
                                    Applications
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseApps" data-bs-parent="#accordionSidenav">
                                    <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavAppsMenu">
                                        {/* <!-- Nested Sidenav Accordion (Apps -> Knowledge Base)--> */}
                                        <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#appsCollapseKnowledgeBase" aria-expanded="false" aria-controls="appsCollapseKnowledgeBase">
                                            Knowledge Base
                                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="appsCollapseKnowledgeBase" data-bs-parent="#accordionSidenavAppsMenu">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="knowledge-base-home-1.html">Home 1</a>
                                                <a className="nav-link" href="knowledge-base-home-2.html">Home 2</a>
                                                <a className="nav-link" href="knowledge-base-category.html">Category</a>
                                                <a className="nav-link" href="knowledge-base-article.html">Article</a>
                                            </nav>
                                        </div>
                                        {/* <!-- Nested Sidenav Accordion (Apps -> User Management)--> */}
                                        <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#appsCollapseUserManagement" aria-expanded="false" aria-controls="appsCollapseUserManagement">
                                            User Management
                                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="appsCollapseUserManagement" data-bs-parent="#accordionSidenavAppsMenu">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="user-management-list.html">Users List</a>
                                                <a className="nav-link" href="user-management-edit-user.html">Edit User</a>
                                                <a className="nav-link" href="user-management-add-user.html">Add User</a>
                                                <a className="nav-link" href="user-management-groups-list.html">Groups List</a>
                                                <a className="nav-link" href="user-management-org-details.html">Organization Details</a>
                                            </nav>
                                        </div>
                                        {/* <!-- Nested Sidenav Accordion (Apps -> Posts Management)--> */}
                                        <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#appsCollapsePostsManagement" aria-expanded="false" aria-controls="appsCollapsePostsManagement">
                                            Posts Management
                                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="appsCollapsePostsManagement" data-bs-parent="#accordionSidenavAppsMenu">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="blog-management-posts-list.html">Posts List</a>
                                                <a className="nav-link" href="blog-management-create-post.html">Create Post</a>
                                                <a className="nav-link" href="blog-management-edit-post.html">Edit Post</a>
                                                <a className="nav-link" href="blog-management-posts-admin.html">Posts Admin</a>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                                {/* <!-- Sidenav Accordion (Flows)--> */}
                                <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseFlows" aria-expanded="false" aria-controls="collapseFlows">
                                    <div className="nav-link-icon"><i data-feather="repeat"></i></div>
                                    Flows
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseFlows" data-bs-parent="#accordionSidenav">
                                    <nav className="sidenav-menu-nested nav">
                                        <a className="nav-link" href="multi-tenant-select.html">Multi-Tenant Registration</a>
                                        <a className="nav-link" href="wizard.html">Wizard</a>
                                    </nav>
                                </div>
                                {/* <!-- Sidenav Heading (UI Toolkit)--> */}
                                <div className="sidenav-menu-heading">UI Toolkit</div>
                                {/* <!-- Sidenav Accordion (Layout)--> */}
                                <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="nav-link-icon"><i data-feather="layout"></i></div>
                                    Layout
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseLayouts" data-bs-parent="#accordionSidenav">
                                    <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                        {/* <!-- Nested Sidenav Accordion (Layout -> Navigation)--> */}
                                        <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayoutSidenavVariations" aria-expanded="false" aria-controls="collapseLayoutSidenavVariations">
                                            Navigation
                                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="collapseLayoutSidenavVariations" data-bs-parent="#accordionSidenavLayout">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="layout-static.html">Static Sidenav</a>
                                                <a className="nav-link" href="layout-dark.html">Dark Sidenav</a>
                                                <a className="nav-link" href="layout-rtl.html">RTL Layout</a>
                                            </nav>
                                        </div>
                                        {/* <!-- Nested Sidenav Accordion (Layout -> Container Options)--> */}
                                        <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayoutContainers" aria-expanded="false" aria-controls="collapseLayoutContainers">
                                            Container Options
                                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="collapseLayoutContainers" data-bs-parent="#accordionSidenavLayout">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="layout-boxed.html">Boxed Layout</a>
                                                <a className="nav-link" href="layout-fluid.html">Fluid Layout</a>
                                            </nav>
                                        </div>
                                        {/* <!-- Nested Sidenav Accordion (Layout -> Page Headers)--> */}
                                        <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayoutsPageHeaders" aria-expanded="false" aria-controls="collapseLayoutsPageHeaders">
                                            Page Headers
                                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="collapseLayoutsPageHeaders" data-bs-parent="#accordionSidenavLayout">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="header-simplified.html">Simplified</a>
                                                <a className="nav-link" href="header-compact.html">Compact</a>
                                                <a className="nav-link" href="header-overlap.html">Content Overlap</a>
                                                <a className="nav-link" href="header-breadcrumbs.html">Breadcrumbs</a>
                                                <a className="nav-link" href="header-light.html">Light</a>
                                            </nav>
                                        </div>
                                        {/* <!-- Nested Sidenav Accordion (Layout -> Starter Layouts)--> */}
                                        <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayoutsStarterTemplates" aria-expanded="false" aria-controls="collapseLayoutsStarterTemplates">
                                            Starter Layouts
                                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="collapseLayoutsStarterTemplates" data-bs-parent="#accordionSidenavLayout">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="starter-default.html">Default</a>
                                                <a className="nav-link" href="starter-minimal.html">Minimal</a>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                                {/* <!-- Sidenav Accordion (Components)--> */}
                                <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseComponents" aria-expanded="false" aria-controls="collapseComponents">
                                    <div className="nav-link-icon"><i data-feather="package"></i></div>
                                    Components
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseComponents" data-bs-parent="#accordionSidenav">
                                    <nav className="sidenav-menu-nested nav">
                                        <a className="nav-link" href="alerts.html">Alerts</a>
                                        <a className="nav-link" href="avatars.html">Avatars</a>
                                        <a className="nav-link" href="badges.html">Badges</a>
                                        <a className="nav-link" href="buttons.html">Buttons</a>
                                        <a className="nav-link" href="cards.html">
                                            Cards
                                            <span className="badge bg-primary-soft text-primary ms-auto">Updated</span>
                                        </a>
                                        <a className="nav-link" href="dropdowns.html">Dropdowns</a>
                                        <a className="nav-link" href="forms.html">
                                            Forms
                                            <span className="badge bg-primary-soft text-primary ms-auto">Updated</span>
                                        </a>
                                        <a className="nav-link" href="modals.html">Modals</a>
                                        <a className="nav-link" href="navigation.html">Navigation</a>
                                        <a className="nav-link" href="progress.html">Progress</a>
                                        <a className="nav-link" href="step.html">Step</a>
                                        <a className="nav-link" href="timeline.html">Timeline</a>
                                        <a className="nav-link" href="toasts.html">Toasts</a>
                                        <a className="nav-link" href="tooltips.html">Tooltips</a>
                                    </nav>
                                </div>
                                {/* <!-- Sidenav Accordion (Utilities)--> */}
                                <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseUtilities" aria-expanded="false" aria-controls="collapseUtilities">
                                    <div className="nav-link-icon"><i data-feather="tool"></i></div>
                                    Utilities
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseUtilities" data-bs-parent="#accordionSidenav">
                                    <nav className="sidenav-menu-nested nav">
                                        <a className="nav-link" href="animations.html">Animations</a>
                                        <a className="nav-link" href="background.html">Background</a>
                                        <a className="nav-link" href="borders.html">Borders</a>
                                        <a className="nav-link" href="lift.html">Lift</a>
                                        <a className="nav-link" href="shadows.html">Shadows</a>
                                        <a className="nav-link" href="typography.html">Typography</a>
                                    </nav>
                                </div>
                                {/* <!-- Sidenav Heading (Addons)--> */}
                                <div className="sidenav-menu-heading">Plugins</div>
                                {/* <!-- Sidenav Link (Charts)--> */}
                                <a className="nav-link" href="charts.html">
                                    <div className="nav-link-icon"><i data-feather="bar-chart"></i></div>
                                    Charts
                                </a>
                                {/* <!-- Sidenav Link (Tables)--> */}
                                <a className="nav-link" href="tables.html">
                                    <div className="nav-link-icon"><i data-feather="filter"></i></div>
                                    Tables
                                </a>
                            </div>
                        </div>
                        {/* <!-- Sidenav Footer--> */}
                        <div className="sidenav-footer">
                            <div className="sidenav-footer-content">
                                <div className="sidenav-footer-subtitle">Logged in as:</div>
                                <div className="sidenav-footer-title">Valerie Luna</div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                            <div className="container-xl px-4">
                                <div className="page-header-content pt-4">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-auto mt-4">
                                            <h1 className="page-header-title">
                                                <div className="page-header-icon"><i data-feather="users"></i></div>
                                                Avatars
                                            </h1>
                                            <div className="page-header-subtitle">Create single and group avatars of different sizes with this custom component.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        {/* <!-- Main page content--> */}
                        <div className="container-xl px-4 mt-n10">
                            <div className="row">
                                <div className="col-lg-9">
                                    {/* <!-- Avatar Sizing--> */}
                                    <div id="sizing">
                                        <div className="card mb-4">
                                            <div className="card-header">Avatar Sizing</div>
                                            <div className="card-body">
                                                {/* <!-- Component Preview--> */}
                                                <div className="sbp-preview">
                                                    <div className="sbp-preview-content d-flex align-items-center">
                                                        <div className="avatar avatar-xxl me-1"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                        <div className="avatar avatar-xl me-1"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                        <div className="avatar avatar-lg me-1"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                        <div className="avatar me-1"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                        <div className="avatar avatar-sm me-1"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                        <div className="avatar avatar-xs"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                    </div>
                                                    <div className="sbp-preview-code">
                                                        {/* <!-- Code sample--> */}
                                                        <ul className="nav nav-tabs" id="avatarSizesTabs" role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active me-1" id="avatarSizesHtmlTab" data-bs-toggle="tab" href="#avatarSizesHtml" role="tab" aria-controls="avatarSizesHtml" aria-selected="true">
                                                                    <i className="fab fa-html5 text-orange me-1"></i>
                                                                    HTML
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" id="avatarSizesPugTab" data-bs-toggle="tab" href="#avatarSizesPug" role="tab" aria-controls="avatarSizesPug" aria-selected="false">
                                                                    <img className="img-pug me-1" src="assets/img/demo/pug.svg" />
                                                                    PUG
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        {/* <!-- Tab panes--> */}
                                                        <div className="tab-content">
                                                            <div className="tab-pane active" id="avatarSizesHtml" role="tabpanel" aria-labelledby="avatarSizesHtmlTab">
                                                                <pre className="language-markup"><code><script type="text/plain">
                                                                    {/* <!-- XXL Avatar --> */}
                                                                    <div className="avatar avatar-xxl">
                                                                        <img className="avatar-img img-fluid" src="path/to/image"/>
                                                                    </div>

                                                                    {/* <!-- Extra Large Avatar --> */}
                                                                    <div className="avatar avatar-xl">
                                                                        <img className="avatar-img img-fluid" src="path/to/image"/>
                                                                    </div>

                                                                    {/* <!-- Large Avatar --> */}
                                                                    <div className="avatar avatar-lg">
                                                                        <img className="avatar-img img-fluid" src="path/to/image"/>
                                                                    </div>

                                                                    {/* <!-- Default Avatar --> */}
                                                                    <div className="avatar">
                                                                        <img className="avatar-img img-fluid" src="path/to/image"/>
                                                                    </div>

                                                                    {/* <!-- Small Avatar --> */}
                                                                    <div className="avatar avatar-sm">
                                                                        <img className="avatar-img img-fluid" src="path/to/image"/>
                                                                    </div>

                                                                    {/* <!-- Extra Small Avatar --> */}
                                                                    <div className="avatar avatar-xs">
                                                                        <img className="avatar-img img-fluid" src="path/to/image"/>
                                                                    </div></script></code></pre>
                                                            </div>
                                                            <div className="tab-pane" id="avatarSizesPug" role="tabpanel" aria-labelledby="avatarSizesPugTab">
                                                                <pre className="language-pug"><code>//- XXL Avatar
                                                                    .avatar.avatar-xxl
                                                                    img.avatar-img.img-fluid(src='path/to/image')

                                                                    //- Extra Large Avatar
                                                                    .avatar.avatar-xl
                                                                    img.avatar-img.img-fluid(src='path/to/image')

                                                                    //- Large Avatar
                                                                    .avatar.avatar-lg
                                                                    img.avatar-img.img-fluid(src='path/to/image')

                                                                    //- Default Avatar
                                                                    .avatar
                                                                    img.avatar-img.img-fluid(src='path/to/image')

                                                                    //- Small Avatar
                                                                    .avatar.avatar-sm
                                                                    img.avatar-img.img-fluid(src='path/to/image')

                                                                    //- Extra Small Avatar
                                                                    .avatar.avatar-xs
                                                                    img.avatar-img.img-fluid(src='path/to/image')    </code></pre>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sbp-preview-text">
                                                        Square images work best when using the
                                                        <code>.avatar</code>
                                                        component. Using an image double the resoulution of the avatar size can improve image quality on high resoulution screens.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Avatar Status Indicators--> */}
                                    <div id="status">
                                        <div className="card mb-4">
                                            <div className="card-header">Avatar Status Inidicators</div>
                                            <div className="card-body">
                                                {/* <!-- Component Preview--> */}
                                                <div className="sbp-preview">
                                                    <div className="sbp-preview-content d-flex align-items-center">
                                                        <div className="avatar avatar-offline avatar-xxl me-1"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                        <div className="avatar avatar-idle avatar-xl me-1"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                        <div className="avatar avatar-online avatar-lg me-1"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                        <div className="avatar avatar-busy me-1"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></div>
                                                    </div>
                                                    <div className="sbp-preview-code">
                                                        {/* <!-- Code sample--> */}
                                                        <ul className="nav nav-tabs" id="avatarIndicatorsTabs" role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active me-1" id="avatarIndicatorsHtmlTab" data-bs-toggle="tab" href="#avatarIndicatorsHtml" role="tab" aria-controls="avatarIndicatorsHtml" aria-selected="true">
                                                                    <i className="fab fa-html5 text-orange me-1"></i>
                                                                    HTML
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" id="avatarIndicatorsPugTab" data-bs-toggle="tab" href="#avatarIndicatorsPug" role="tab" aria-controls="avatarIndicatorsPug" aria-selected="false">
                                                                    <img className="img-pug me-1" src="assets/img/demo/pug.svg" />
                                                                    PUG
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        {/* <!-- Tab panes--> */}
                                                        <div className="tab-content">
                                                            <div className="tab-pane active" id="avatarIndicatorsHtml" role="tabpanel" aria-labelledby="avatarIndicatorsHtmlTab">
                                                                <pre className="language-markup"><code><script type="text/plain">
                                                                    {/* <!-- Offline Indicator --> */}
                                                                    <div className="avatar avatar-offline avatar-xxl mr-1">
                                                                        <img className="avatar-img img-fluid" src="path/to/image"/>
                                                                    </div>

                                                                    {/* <!-- Idle Indicator --> */}
                                                                    <div className="avatar avatar-idle avatar-xl mr-1">
                                                                        <img className="avatar-img img-fluid" src="path/to/image"/>
                                                                    </div>

                                                                    {/* <!-- Online Indicator --> */}
                                                                    <div className="avatar avatar-online avatar-lg mr-1">
                                                                        <img className="avatar-img img-fluid" src="path/to/image"/>
                                                                    </div>

                                                                    {/* <!-- Busy Indicator --> */}
                                                                    <div className="avatar avatar-busy mr-1">
                                                                        <img className="avatar-img img-fluid" src="path/to/image"/>
                                                                    </div></script></code></pre>
                                                            </div>
                                                            <div className="tab-pane" id="avatarIndicatorsPug" role="tabpanel" aria-labelledby="avatarIndicatorsPugTab">
                                                                <pre className="language-pug"><code>//- Offline Indicator
                                                                    .avatar.avatar-offline.avatar-xxl
                                                                    img.avatar-img.img-fluid(src='path/to/image')

                                                                    //- Idle Indicator
                                                                    .avatar.avatar-idle.avatar-xl
                                                                    img.avatar-img.img-fluid(src='path/to/image')

                                                                    //- Online Indicator    
                                                                    .avatar.avatar-online.avatar-lg
                                                                    img.avatar-img.img-fluid(src='path/to/image')

                                                                    //- Busy Indicator
                                                                    .avatar.avatar-busy
                                                                    img.avatar-img.img-fluid(src='path/to/image')  </code></pre>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sbp-preview-text">
                                                        Use one of the four status indicator options shown above by appending the class to your
                                                        <code>.avatar</code>
                                                        component. The indicator is supported on all sizes of the avatar component.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Sticky Navigation--> */}
                                <div className="col-lg-3">
                                    <div className="nav-sticky">
                                        <div className="card">
                                            <div className="card-body">
                                                <ul className="nav flex-column" id="stickyNav">
                                                    <li className="nav-item"><a className="nav-link" href="#sizing">Sizing</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#status">Status Indicators</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="footer-admin mt-auto footer-light">
                        <div className="container-xl px-4">
                            <div className="row">
                                <div className="col-md-6 small">Copyright &copy; Your Website 2021</div>
                                <div className="col-md-6 text-md-end small">
                                    <a href="#!">Privacy Policy</a>
                                    &middot;
                                    <a href="#!">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default SideBar