import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

function Started(props: Props) {
  const {} = props;
  const [navDropdown, setNavDropdown] = useState(false);

  return (
    <>
      <header>
        <nav className="js-navbar-scroll navbar navbar-expand-md navbar-dark td-navbar">
          <Link className="navbar-brand" to="/">
            <span className="navbar-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 276.93 274.55"
              >
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path
                      d="M95.9 62.15l4.1 102.1 73.75-94.12a6.79 6.79.0 019.6-1.11l46 36.92-15-65.61z"
                      fill="#4279f4"
                    ></path>
                    <path
                      fill="#0028aa"
                      d="M102.55 182.98h65.42l-40.17-32.23-25.25 32.23z"
                    ></path>
                    <path
                      fill="#014bd1"
                      d="M180.18 83.92l-44 56.14 46.88 37.61 44.47-55.76-47.35-37.99z"
                    ></path>
                    <path
                      fill="#bedcff"
                      d="M83.56 52.3l.01-.01 38.69-48.52-62.39 30.05-15.41 67.51 39.1-49.03z"
                    ></path>
                    <path
                      fill="#6ca1ff"
                      d="M45.32 122.05l41.44 51.96-3.95-98.98-37.49 47.02z"
                    ></path>
                    <path
                      fill="#a1c3ff"
                      d="M202.31 28.73 142.65.0l-37.13 46.56 96.79-17.83z"
                    ></path>
                    <path
                      d="M1.6 272v-44.78h5.74v23.41l20.48-23.41h6.4l-17.39 19.7 19 25.07H29.1l-15.92-20.8-5.84 6.65V272zm40.02-9.79V240h5.43v22.39a4.67 4.67.0 002.35 4.19 11 11 0 0011 0 4.69 4.69.0 002.33-4.19V240h5.43v22.19a9.08 9.08.0 01-4.1 7.87 16.2 16.2.0 01-18.37.0 9.07 9.07.0 01-4.07-7.85zM77.46 272v-48h5.43v16.81a29.29 29.29.0 019.32-1.73 13.1 13.1.0 016.2 1.41 10.71 10.71.0 014.18 3.74 18.07 18.07.0 012.23 5.06 21.26 21.26.0 01.73 5.58q0 8.43-4.38 12.79T87.35 272zm5.43-4.87h4.55q6.77.0 9.72-2.95t3-9.51a14.21 14.21.0 00-2-7.52 6.55 6.55.0 00-6-3.22 24.73 24.73.0 00-9.25 1.54zm29.47-11.19q0-7.71 4.09-12.3a13.75 13.75.0 0110.8-4.59q13.35.0 13.36 18.86h-22.82a12.3 12.3.0 002.9 7.07q2.59 3.11 7.9 3.1a24.92 24.92.0 0010.55-2v5a27.74 27.74.0 01-9.86 1.87 19.83 19.83.0 01-7.7-1.37 13.31 13.31.0 01-5.28-3.76 16.21 16.21.0 01-3-5.38 20.84 20.84.0 01-.94-6.5zm5.62-2.12h17.26a14.91 14.91.0 00-2.37-7.12 6.44 6.44.0 00-5.62-2.78 8.2 8.2.0 00-6.21 2.72 12.07 12.07.0 00-3.04 7.18z"
                      fill="#4279f4"
                      stroke="#4279f4"
                      stroke-miterlimit="10"
                      stroke-width="3.2"
                    ></path>
                    <path
                      d="M147.32 244.89V240h5v-7.59a8.14 8.14.0 012.31-6.05 7.79 7.79.0 015.69-2.28h7.86V229h-5c-2.21.0-3.67.45-4.37 1.34s-1.06 2.55-1.06 5V240h8.46v4.87h-8.46V272h-5.44v-27.1zM175.26 272v-48h5.43v48zm19.15-3.95a17.86 17.86.0 1112.33 4.9 16.57 16.57.0 01-12.33-4.9zm3.84-20.65a13.16 13.16.0 000 17.2 12.07 12.07.0 0017 0 13.09 13.09.0 000-17.2 12.07 12.07.0 00-17 0zm30.2-7.4h5.75l7.3 25.32 7.43-25.32h5.36l7.34 25.34L269 240h5.74l-10.04 32h-6.12l-6.83-24.58L245 272h-6.47z"
                      fill="#0028aa"
                      stroke="#0028aa"
                      stroke-miterlimit="10"
                      stroke-width="3.2"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
            <span className="text-uppercase font-weight-bold">Kubeflow</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_navbar"
            aria-controls="main_navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ml-md-auto" id="main_navbar">
            <ul className="navbar-nav ml-auto pt-4 pt-md-0 my-2 my-md-1">
              <li className="nav-item mr-2 mr-lg-4 mt-1 mt-lg-0">
                <Link className="nav-link" to="/docs/">
                  <i className="fas fa-book pr-2"></i>
                  <span>Documentation</span>
                </Link>
              </li>
              <li className="nav-item mr-2 mr-lg-4 mt-1 mt-lg-0">
                <Link
                  className="nav-link"
                  to="https://blog.kubeflow.org/"
                  target="_blank"
                >
                  <i className="fas fa-rss pr-2"></i>
                  <span>Blog</span>
                </Link>
              </li>
              <li className="nav-item mr-2 mr-lg-4 mt-1 mt-lg-0">
                <Link
                  className="nav-link"
                  to="https://github.com/kubeflow/"
                  target="_blank"
                >
                  <i className="fab fa-github pr-2"></i>
                  <span>GitHub</span>
                </Link>
              </li>
              <li className={`nav-item dropdown mt-1 mt-lg-0 mr-2 ${
                    !!navDropdown ? "show" : ""
                  }`}
                  onClick={() => {
                    setNavDropdown(!navDropdown);
                  }}>
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={!!navDropdown ? "true" : `false`}
                >
                  Kubeflow Version
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-md-right dropdown-menu-lg-left"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link
                    className="dropdown-item"
                    to="https://master.kubeflow.org"
                  >
                    master
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="https://v1-5-branch.kubeflow.org"
                  >
                    v1.5
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="https://v1-4-branch.kubeflow.org"
                  >
                    v1.4
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="https://v1-3-branch.kubeflow.org"
                  >
                    v1.3
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="https://v1-2-branch.kubeflow.org"
                  >
                    v1.2
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="https://v1-1-branch.kubeflow.org"
                  >
                    v1.1
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="https://v1-0-branch.kubeflow.org"
                  >
                    v1.0
                  </Link>
                  <Link className="dropdown-item" to="https://v0-7.kubeflow.org">
                    v0.7
                  </Link>
                  <Link className="dropdown-item" to="https://v0-6.kubeflow.org">
                    v0.6
                  </Link>
                  <Link className="dropdown-item" to="https://v0-5.kubeflow.org">
                    v0.5
                  </Link>
                  <Link className="dropdown-item" to="https://v0-4.kubeflow.org">
                    v0.4
                  </Link>
                  <Link className="dropdown-item" to="https://v0-3.kubeflow.org">
                    v0.3
                  </Link>
                  <Link className="dropdown-item" to="https://v0-2.kubeflow.org">
                    v0.2
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="container-fluid td-outer">
        <div className="td-main">
          <div className="row flex-xl-nowrap">
            <aside className="col-12 col-md-3 col-xl-2 td-sidebar d-print-none">
              <div id="td-sidebar-menu" className="td-sidebar__inner">
                <form className="td-sidebar__search d-flex align-items-center">
                  <input
                    type="search"
                    className="form-control td-search-input"
                    placeholder=" Search this site…"
                    aria-label="Search this site…"
                    autoComplete="off"
                  />
                  <button
                    className="btn btn-link td-sidebar__toggle d-md-none p-0 ml-3 fas fa-bars"
                    type="button"
                    data-toggle="collapse"
                    data-target="#td-section-nav"
                    aria-controls="td-docs-nav"
                    aria-expanded="false"
                    aria-label="Toggle section navigation"
                  ></button>
                </form>
                <nav
                  className="collapse td-sidebar-nav foldable-nav"
                  id="td-section-nav"
                >
                  <ul className="td-sidebar-nav__section pr-md-3 ul-0">
                    <li
                      className="td-sidebar-nav__section-title td-sidebar-nav__section with-child active-path"
                      id="m-docs-li"
                    >
                      <Link
                        to="/docs/"
                        className="align-left pl-0 td-sidebar-link td-sidebar-link__section tree-root"
                        id="m-docs"
                      >
                        <span>Documentation</span>
                      </Link>
                      <ul className="ul-1">
                        <li
                          className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                          id="m-docsabout-li"
                        >
                          <input type="checkbox" id="m-docsabout-check" />
                          <label htmlFor="m-docsabout-check">
                            <Link
                              to="/docs/about/"
                              className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                              id="m-docsabout"
                            >
                              <span>About</span>
                            </Link>
                          </label>
                          <ul className="ul-2 foldable">
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsaboutcommunity-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsaboutcommunity-check"
                              />
                              <label htmlFor="m-docsaboutcommunity-check">
                                <Link
                                  to="/docs/about/community/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsaboutcommunity"
                                >
                                  <span>Community</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsaboutcontributing-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsaboutcontributing-check"
                              />
                              <label htmlFor="m-docsaboutcontributing-check">
                                <Link
                                  to="/docs/about/contributing/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsaboutcontributing"
                                >
                                  <span>Contributing</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsaboutstyle-guide-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsaboutstyle-guide-check"
                              />
                              <label htmlFor="m-docsaboutstyle-guide-check">
                                <Link
                                  to="/docs/about/style-guide/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsaboutstyle-guide"
                                >
                                  <span>Documentation Style Guide</span>
                                </Link>
                              </label>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="td-sidebar-nav__section-title td-sidebar-nav__section with-child active-path"
                          id="m-docsstarted-li"
                        >
                          <input
                            type="checkbox"
                            id="m-docsstarted-check"
                            //   checked=""
                          />
                          <label htmlFor="m-docsstarted-check">
                            <Link
                              to="/docs/started/"
                              className="align-left pl-0 active td-sidebar-link td-sidebar-link__section"
                              id="m-docsstarted"
                            >
                              <span className="td-sidebar-nav-active-item">
                                Getting Started
                              </span>
                            </Link>
                          </label>
                          <ul className="ul-2 foldable">
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsstartedintroduction-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsstartedintroduction-check"
                              />
                              <label htmlFor="m-docsstartedintroduction-check">
                                <Link
                                  to="/docs/started/introduction/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsstartedintroduction"
                                >
                                  <span>Introduction</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsstartedarchitecture-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsstartedarchitecture-check"
                              />
                              <label htmlFor="m-docsstartedarchitecture-check">
                                <Link
                                  to="/docs/started/architecture/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsstartedarchitecture"
                                >
                                  <span>Architecture</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsstartedinstalling-kubeflow-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsstartedinstalling-kubeflow-check"
                              />
                              <label htmlFor="m-docsstartedinstalling-kubeflow-check">
                                <Link
                                  to="/docs/started/installing-kubeflow/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsstartedinstalling-kubeflow"
                                >
                                  <span>Installing Kubeflow</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsstartedsupport-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsstartedsupport-check"
                              />
                              <label htmlFor="m-docsstartedsupport-check">
                                <Link
                                  to="/docs/started/support/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsstartedsupport"
                                >
                                  <span>Get Support</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsstartedkubeflow-examples-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsstartedkubeflow-examples-check"
                              />
                              <label htmlFor="m-docsstartedkubeflow-examples-check">
                                <Link
                                  to="/docs/started/kubeflow-examples/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsstartedkubeflow-examples"
                                >
                                  <span>Examples</span>
                                </Link>
                              </label>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                          id="m-docscomponents-li"
                        >
                          <input type="checkbox" id="m-docscomponents-check" />
                          <label htmlFor="m-docscomponents-check">
                            <Link
                              to="/docs/components/"
                              className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                              id="m-docscomponents"
                            >
                              <span>Components</span>
                            </Link>
                          </label>
                          <ul className="ul-2 foldable">
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docscomponentscentral-dash-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docscomponentscentral-dash-check"
                              />
                              <label htmlFor="m-docscomponentscentral-dash-check">
                                <Link
                                  to="/docs/components/central-dash/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docscomponentscentral-dash"
                                >
                                  <span>Central Dashboard</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentscentral-dashoverview-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentscentral-dashoverview-check"
                                  />
                                  <label htmlFor="m-docscomponentscentral-dashoverview-check">
                                    <Link
                                      to="/docs/components/central-dash/overview/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentscentral-dashoverview"
                                    >
                                      <span>Central Dashboard</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentscentral-dashcustomizing-menu-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentscentral-dashcustomizing-menu-check"
                                  />
                                  <label htmlFor="m-docscomponentscentral-dashcustomizing-menu-check">
                                    <Link
                                      to="/docs/components/central-dash/customizing-menu/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentscentral-dashcustomizing-menu"
                                    >
                                      <span>Customizing menu items</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentscentral-dashregistration-flow-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentscentral-dashregistration-flow-check"
                                  />
                                  <label htmlFor="m-docscomponentscentral-dashregistration-flow-check">
                                    <Link
                                      to="/docs/components/central-dash/registration-flow/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentscentral-dashregistration-flow"
                                    >
                                      <span>Registration Flow</span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docscomponentsnotebooks-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docscomponentsnotebooks-check"
                              />
                              <label htmlFor="m-docscomponentsnotebooks-check">
                                <Link
                                  to="/docs/components/notebooks/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docscomponentsnotebooks"
                                >
                                  <span>Kubeflow Notebooks</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentsnotebooksoverview-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentsnotebooksoverview-check"
                                  />
                                  <label htmlFor="m-docscomponentsnotebooksoverview-check">
                                    <Link
                                      to="/docs/components/notebooks/overview/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentsnotebooksoverview"
                                    >
                                      <span>Overview</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentsnotebooksquickstart-guide-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentsnotebooksquickstart-guide-check"
                                  />
                                  <label htmlFor="m-docscomponentsnotebooksquickstart-guide-check">
                                    <Link
                                      to="/docs/components/notebooks/quickstart-guide/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentsnotebooksquickstart-guide"
                                    >
                                      <span>Quickstart Guide</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentsnotebookscontainer-images-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentsnotebookscontainer-images-check"
                                  />
                                  <label htmlFor="m-docscomponentsnotebookscontainer-images-check">
                                    <Link
                                      to="/docs/components/notebooks/container-images/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentsnotebookscontainer-images"
                                    >
                                      <span>Container Images</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentsnotebooksjupyter-tensorflow-examples-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentsnotebooksjupyter-tensorflow-examples-check"
                                  />
                                  <label htmlFor="m-docscomponentsnotebooksjupyter-tensorflow-examples-check">
                                    <Link
                                      to="/docs/components/notebooks/jupyter-tensorflow-examples/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentsnotebooksjupyter-tensorflow-examples"
                                    >
                                      <span>Jupyter TensorFlow Examples</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentsnotebookssubmit-kubernetes-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentsnotebookssubmit-kubernetes-check"
                                  />
                                  <label htmlFor="m-docscomponentsnotebookssubmit-kubernetes-check">
                                    <Link
                                      to="/docs/components/notebooks/submit-kubernetes/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentsnotebookssubmit-kubernetes"
                                    >
                                      <span>Submit Kubernetes Resources</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentsnotebookstroubleshooting-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentsnotebookstroubleshooting-check"
                                  />
                                  <label htmlFor="m-docscomponentsnotebookstroubleshooting-check">
                                    <Link
                                      to="/docs/components/notebooks/troubleshooting/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentsnotebookstroubleshooting"
                                    >
                                      <span>Troubleshooting</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docscomponentsnotebooksapi-reference-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentsnotebooksapi-reference-check"
                                  />
                                  <label htmlFor="m-docscomponentsnotebooksapi-reference-check">
                                    <Link
                                      to="/docs/components/notebooks/api-reference/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docscomponentsnotebooksapi-reference"
                                    >
                                      <span>API Reference</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentsnotebooksapi-referencenotebook-v1-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentsnotebooksapi-referencenotebook-v1-check"
                                      />
                                      <label htmlFor="m-docscomponentsnotebooksapi-referencenotebook-v1-check">
                                        <Link
                                          to="/docs/components/notebooks/api-reference/notebook-v1/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentsnotebooksapi-referencenotebook-v1"
                                        >
                                          <span>Notebook (v1)</span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docscomponentspipelines-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docscomponentspipelines-check"
                              />
                              <label htmlFor="m-docscomponentspipelines-check">
                                <Link
                                  to="/docs/components/pipelines/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docscomponentspipelines"
                                >
                                  <span>Kubeflow Pipelines</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentspipelinesintroduction-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentspipelinesintroduction-check"
                                  />
                                  <label htmlFor="m-docscomponentspipelinesintroduction-check">
                                    <Link
                                      to="/docs/components/pipelines/introduction/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentspipelinesintroduction"
                                    >
                                      <span>Introduction</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docscomponentspipelinesoverview-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentspipelinesoverview-check"
                                  />
                                  <label htmlFor="m-docscomponentspipelinesoverview-check">
                                    <Link
                                      to="/docs/components/pipelines/overview/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docscomponentspipelinesoverview"
                                    >
                                      <span>Overview</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesoverviewquickstart-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesoverviewquickstart-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesoverviewquickstart-check">
                                        <Link
                                          to="/docs/components/pipelines/overview/quickstart/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesoverviewquickstart"
                                        >
                                          <span>Quickstart</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesoverviewinterfaces-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesoverviewinterfaces-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesoverviewinterfaces-check">
                                        <Link
                                          to="/docs/components/pipelines/overview/interfaces/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesoverviewinterfaces"
                                        >
                                          <span>Pipelines Interfaces</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesoverviewmulti-user-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesoverviewmulti-user-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesoverviewmulti-user-check">
                                        <Link
                                          to="/docs/components/pipelines/overview/multi-user/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesoverviewmulti-user"
                                        >
                                          <span>
                                            Multi-user Isolation for Pipelines
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesoverviewcaching-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesoverviewcaching-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesoverviewcaching-check">
                                        <Link
                                          to="/docs/components/pipelines/overview/caching/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesoverviewcaching"
                                        >
                                          <span>Caching</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesoverviewcaching-v2-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesoverviewcaching-v2-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesoverviewcaching-v2-check">
                                        <Link
                                          to="/docs/components/pipelines/overview/caching-v2/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesoverviewcaching-v2"
                                        >
                                          <span>Caching v2</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesoverviewpipeline-root-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesoverviewpipeline-root-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesoverviewpipeline-root-check">
                                        <Link
                                          to="/docs/components/pipelines/overview/pipeline-root/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesoverviewpipeline-root"
                                        >
                                          <span>Pipeline Root</span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docscomponentspipelinesconcepts-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentspipelinesconcepts-check"
                                  />
                                  <label htmlFor="m-docscomponentspipelinesconcepts-check">
                                    <Link
                                      to="/docs/components/pipelines/concepts/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docscomponentspipelinesconcepts"
                                    >
                                      <span>Concepts</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesconceptspipeline-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesconceptspipeline-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesconceptspipeline-check">
                                        <Link
                                          to="/docs/components/pipelines/concepts/pipeline/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesconceptspipeline"
                                        >
                                          <span>Pipeline</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesconceptscomponent-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesconceptscomponent-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesconceptscomponent-check">
                                        <Link
                                          to="/docs/components/pipelines/concepts/component/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesconceptscomponent"
                                        >
                                          <span>Component</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesconceptsgraph-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesconceptsgraph-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesconceptsgraph-check">
                                        <Link
                                          to="/docs/components/pipelines/concepts/graph/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesconceptsgraph"
                                        >
                                          <span>Graph</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesconceptsexperiment-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesconceptsexperiment-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesconceptsexperiment-check">
                                        <Link
                                          to="/docs/components/pipelines/concepts/experiment/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesconceptsexperiment"
                                        >
                                          <span>Experiment</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesconceptsrun-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesconceptsrun-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesconceptsrun-check">
                                        <Link
                                          to="/docs/components/pipelines/concepts/run/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesconceptsrun"
                                        >
                                          <span>Run and Recurring Run</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesconceptsrun-trigger-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesconceptsrun-trigger-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesconceptsrun-trigger-check">
                                        <Link
                                          to="/docs/components/pipelines/concepts/run-trigger/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesconceptsrun-trigger"
                                        >
                                          <span>Run Trigger</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesconceptsstep-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesconceptsstep-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesconceptsstep-check">
                                        <Link
                                          to="/docs/components/pipelines/concepts/step/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesconceptsstep"
                                        >
                                          <span>Step</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesconceptsoutput-artifact-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesconceptsoutput-artifact-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesconceptsoutput-artifact-check">
                                        <Link
                                          to="/docs/components/pipelines/concepts/output-artifact/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesconceptsoutput-artifact"
                                        >
                                          <span>Output Artifact</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesconceptsmetadata-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesconceptsmetadata-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesconceptsmetadata-check">
                                        <Link
                                          to="/docs/components/pipelines/concepts/metadata/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesconceptsmetadata"
                                        >
                                          <span>ML Metadata</span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docscomponentspipelinesinstallation-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentspipelinesinstallation-check"
                                  />
                                  <label htmlFor="m-docscomponentspipelinesinstallation-check">
                                    <Link
                                      to="/docs/components/pipelines/installation/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docscomponentspipelinesinstallation"
                                    >
                                      <span>Installation</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesinstallationoverview-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesinstallationoverview-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesinstallationoverview-check">
                                        <Link
                                          to="/docs/components/pipelines/installation/overview/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesinstallationoverview"
                                        >
                                          <span>Installation Options</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesinstallationlocalcluster-deployment-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesinstallationlocalcluster-deployment-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesinstallationlocalcluster-deployment-check">
                                        <Link
                                          to="/docs/components/pipelines/installation/localcluster-deployment/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesinstallationlocalcluster-deployment"
                                        >
                                          <span>Local Deployment</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesinstallationstandalone-deployment-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesinstallationstandalone-deployment-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesinstallationstandalone-deployment-check">
                                        <Link
                                          to="/docs/components/pipelines/installation/standalone-deployment/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesinstallationstandalone-deployment"
                                        >
                                          <span>Standalone Deployment</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesinstallationchoose-executor-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesinstallationchoose-executor-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesinstallationchoose-executor-check">
                                        <Link
                                          to="/docs/components/pipelines/installation/choose-executor/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesinstallationchoose-executor"
                                        >
                                          <span>
                                            Choosing an Argo Workflows Executor
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesinstallationupgrade-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesinstallationupgrade-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesinstallationupgrade-check">
                                        <Link
                                          to="/docs/components/pipelines/installation/upgrade/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesinstallationupgrade"
                                        >
                                          <span>Upgrade Notes</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesinstallationcompatibility-matrix-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesinstallationcompatibility-matrix-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesinstallationcompatibility-matrix-check">
                                        <Link
                                          to="/docs/components/pipelines/installation/compatibility-matrix/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesinstallationcompatibility-matrix"
                                        >
                                          <span>Compatibility Matrix</span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docscomponentspipelinessdk-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentspipelinessdk-check"
                                  />
                                  <label htmlFor="m-docscomponentspipelinessdk-check">
                                    <Link
                                      to="/docs/components/pipelines/sdk/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docscomponentspipelinessdk"
                                    >
                                      <span>Pipelines SDK</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdksdk-overview-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdksdk-overview-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdksdk-overview-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/sdk-overview/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdksdk-overview"
                                        >
                                          <span>
                                            Introduction to the Pipelines SDK
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkinstall-sdk-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkinstall-sdk-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkinstall-sdk-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/install-sdk/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkinstall-sdk"
                                        >
                                          <span>
                                            Install the Kubeflow Pipelines SDK
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkconnect-api-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkconnect-api-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkconnect-api-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/connect-api/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkconnect-api"
                                        >
                                          <span>
                                            Connecting to Kubeflow Pipelines
                                            using the SDK client
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkbuild-pipeline-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkbuild-pipeline-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkbuild-pipeline-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/build-pipeline/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkbuild-pipeline"
                                        >
                                          <span>Build a Pipeline</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkcomponent-development-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkcomponent-development-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkcomponent-development-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/component-development/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkcomponent-development"
                                        >
                                          <span>Building Components</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkpython-function-components-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkpython-function-components-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkpython-function-components-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/python-function-components/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkpython-function-components"
                                        >
                                          <span>
                                            Building Python function-based
                                            components
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkbest-practices-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkbest-practices-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkbest-practices-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/best-practices/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkbest-practices"
                                        >
                                          <span>
                                            Best Practices for Designing
                                            Components
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkparameters-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkparameters-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkparameters-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/parameters/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkparameters"
                                        >
                                          <span>Pipeline Parameters</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkoutput-viewer-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkoutput-viewer-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkoutput-viewer-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/output-viewer/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkoutput-viewer"
                                        >
                                          <span>
                                            Visualize Results in the Pipelines
                                            UI
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkpipelines-metrics-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkpipelines-metrics-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkpipelines-metrics-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/pipelines-metrics/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkpipelines-metrics"
                                        >
                                          <span>Pipeline Metrics</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkstatic-type-checking-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkstatic-type-checking-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkstatic-type-checking-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/static-type-checking/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkstatic-type-checking"
                                        >
                                          <span>DSL Static Type Checking</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkdsl-recursion-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkdsl-recursion-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkdsl-recursion-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/dsl-recursion/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkdsl-recursion"
                                        >
                                          <span>DSL Recursion</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkenviroment_variables-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkenviroment_variables-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkenviroment_variables-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/enviroment_variables/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkenviroment_variables"
                                        >
                                          <span>
                                            Using environment variables in
                                            pipelines
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkgcp-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkgcp-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkgcp-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/gcp/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkgcp"
                                        >
                                          <span>
                                            GCP-specific Uses of the SDK
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkpipelines-with-tekton-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkpipelines-with-tekton-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkpipelines-with-tekton-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/pipelines-with-tekton/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkpipelines-with-tekton"
                                        >
                                          <span>
                                            Kubeflow Pipelines SDK for Tekton
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkmanipulate-resources-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkmanipulate-resources-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkmanipulate-resources-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/manipulate-resources/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkmanipulate-resources"
                                        >
                                          <span>
                                            Manipulate Kubernetes Resources as
                                            Part of a Pipeline
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkpython-based-visualizations-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkpython-based-visualizations-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkpython-based-visualizations-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/python-based-visualizations/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkpython-based-visualizations"
                                        >
                                          <span>
                                            Python Based Visualizations
                                            (Deprecated)
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdkowners-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdkowners-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdkowners-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk/owners/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdkowners"
                                        >
                                          <span></span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docscomponentspipelinessdk-v2-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentspipelinessdk-v2-check"
                                  />
                                  <label htmlFor="m-docscomponentspipelinessdk-v2-check">
                                    <Link
                                      to="/docs/components/pipelines/sdk-v2/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docscomponentspipelinessdk-v2"
                                    >
                                      <span>Pipelines SDK (v2)</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdk-v2v2-compatibility-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdk-v2v2-compatibility-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdk-v2v2-compatibility-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk-v2/v2-compatibility/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdk-v2v2-compatibility"
                                        >
                                          <span>
                                            Introducing Kubeflow Pipelines SDK
                                            v2
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdk-v2v2-component-io-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdk-v2v2-component-io-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdk-v2v2-component-io-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk-v2/v2-component-io/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdk-v2v2-component-io"
                                        >
                                          <span>
                                            Kubeflow Pipelines v2 Component I/O
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdk-v2build-pipeline-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdk-v2build-pipeline-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdk-v2build-pipeline-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk-v2/build-pipeline/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdk-v2build-pipeline"
                                        >
                                          <span>Build a Pipeline</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdk-v2component-development-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdk-v2component-development-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdk-v2component-development-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk-v2/component-development/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdk-v2component-development"
                                        >
                                          <span>Building Components</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinessdk-v2python-function-components-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinessdk-v2python-function-components-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinessdk-v2python-function-components-check">
                                        <Link
                                          to="/docs/components/pipelines/sdk-v2/python-function-components/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinessdk-v2python-function-components"
                                        >
                                          <span>
                                            Building Python Function-based
                                            Components
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docscomponentspipelinestutorials-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentspipelinestutorials-check"
                                  />
                                  <label htmlFor="m-docscomponentspipelinestutorials-check">
                                    <Link
                                      to="/docs/components/pipelines/tutorials/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docscomponentspipelinestutorials"
                                    >
                                      <span>Samples and Tutorials</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinestutorialsbenchmark-examples-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinestutorialsbenchmark-examples-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinestutorialsbenchmark-examples-check">
                                        <Link
                                          to="/docs/components/pipelines/tutorials/benchmark-examples/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinestutorialsbenchmark-examples"
                                        >
                                          <span>
                                            Using the Kubeflow Pipelines
                                            Benchmark Scripts
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinestutorialssdk-examples-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinestutorialssdk-examples-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinestutorialssdk-examples-check">
                                        <Link
                                          to="/docs/components/pipelines/tutorials/sdk-examples/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinestutorialssdk-examples"
                                        >
                                          <span>
                                            Using the Kubeflow Pipelines SDK
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinestutorialsapi-pipelines-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinestutorialsapi-pipelines-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinestutorialsapi-pipelines-check">
                                        <Link
                                          to="/docs/components/pipelines/tutorials/api-pipelines/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinestutorialsapi-pipelines"
                                        >
                                          <span>
                                            Experiment with the Kubeflow
                                            Pipelines API
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinestutorialsbuild-pipeline-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinestutorialsbuild-pipeline-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinestutorialsbuild-pipeline-check">
                                        <Link
                                          to="/docs/components/pipelines/tutorials/build-pipeline/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinestutorialsbuild-pipeline"
                                        >
                                          <span>
                                            Experiment with the Pipelines
                                            Samples
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinestutorialscloud-tutorials-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinestutorialscloud-tutorials-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinestutorialscloud-tutorials-check">
                                        <Link
                                          to="/docs/components/pipelines/tutorials/cloud-tutorials/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinestutorialscloud-tutorials"
                                        >
                                          <span>
                                            Run a Cloud-specific Pipelines
                                            Tutorial
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentspipelinestroubleshooting-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentspipelinestroubleshooting-check"
                                  />
                                  <label htmlFor="m-docscomponentspipelinestroubleshooting-check">
                                    <Link
                                      to="/docs/components/pipelines/troubleshooting/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentspipelinestroubleshooting"
                                    >
                                      <span>Troubleshooting</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docscomponentspipelinesreference-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentspipelinesreference-check"
                                  />
                                  <label htmlFor="m-docscomponentspipelinesreference-check">
                                    <Link
                                      to="/docs/components/pipelines/reference/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docscomponentspipelinesreference"
                                    >
                                      <span>Reference</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesreferencecomponent-spec-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesreferencecomponent-spec-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesreferencecomponent-spec-check">
                                        <Link
                                          to="/docs/components/pipelines/reference/component-spec/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesreferencecomponent-spec"
                                        >
                                          <span>Component Specification</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesreferenceapikubeflow-pipeline-api-spec-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesreferenceapikubeflow-pipeline-api-spec-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesreferenceapikubeflow-pipeline-api-spec-check">
                                        <Link
                                          to="/docs/components/pipelines/reference/api/kubeflow-pipeline-api-spec/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesreferenceapikubeflow-pipeline-api-spec"
                                        >
                                          <span>Pipelines API Reference</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docscomponentspipelinesreferencesdk-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docscomponentspipelinesreferencesdk-check"
                                      />
                                      <label htmlFor="m-docscomponentspipelinesreferencesdk-check">
                                        <Link
                                          to="/docs/components/pipelines/reference/sdk/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docscomponentspipelinesreferencesdk"
                                        >
                                          <span>Pipelines SDK Reference</span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docscomponentskatib-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docscomponentskatib-check"
                              />
                              <label htmlFor="m-docscomponentskatib-check">
                                <Link
                                  to="/docs/components/katib/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docscomponentskatib"
                                >
                                  <span>Katib</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentskatiboverview-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentskatiboverview-check"
                                  />
                                  <label htmlFor="m-docscomponentskatiboverview-check">
                                    <Link
                                      to="/docs/components/katib/overview/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentskatiboverview"
                                    >
                                      <span>Introduction to Katib</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentskatibhyperparameter-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentskatibhyperparameter-check"
                                  />
                                  <label htmlFor="m-docscomponentskatibhyperparameter-check">
                                    <Link
                                      to="/docs/components/katib/hyperparameter/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentskatibhyperparameter"
                                    >
                                      <span>Getting Started with Katib</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentskatibexperiment-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentskatibexperiment-check"
                                  />
                                  <label htmlFor="m-docscomponentskatibexperiment-check">
                                    <Link
                                      to="/docs/components/katib/experiment/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentskatibexperiment"
                                    >
                                      <span>Running an Experiment</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentskatibresume-experiment-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentskatibresume-experiment-check"
                                  />
                                  <label htmlFor="m-docscomponentskatibresume-experiment-check">
                                    <Link
                                      to="/docs/components/katib/resume-experiment/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentskatibresume-experiment"
                                    >
                                      <span>Resuming an Experiment</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentskatibtrial-template-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentskatibtrial-template-check"
                                  />
                                  <label htmlFor="m-docscomponentskatibtrial-template-check">
                                    <Link
                                      to="/docs/components/katib/trial-template/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentskatibtrial-template"
                                    >
                                      <span>Overview of Trial Templates</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentskatibearly-stopping-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentskatibearly-stopping-check"
                                  />
                                  <label htmlFor="m-docscomponentskatibearly-stopping-check">
                                    <Link
                                      to="/docs/components/katib/early-stopping/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentskatibearly-stopping"
                                    >
                                      <span>Using Early Stopping</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentskatibkatib-config-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentskatibkatib-config-check"
                                  />
                                  <label htmlFor="m-docscomponentskatibkatib-config-check">
                                    <Link
                                      to="/docs/components/katib/katib-config/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentskatibkatib-config"
                                    >
                                      <span>Katib Configuration Overview</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentskatibenv-variables-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentskatibenv-variables-check"
                                  />
                                  <label htmlFor="m-docscomponentskatibenv-variables-check">
                                    <Link
                                      to="/docs/components/katib/env-variables/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentskatibenv-variables"
                                    >
                                      <span>
                                        Environment Variables for Katib
                                        Components
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docscomponentstraining-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docscomponentstraining-check"
                              />
                              <label htmlFor="m-docscomponentstraining-check">
                                <Link
                                  to="/docs/components/training/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docscomponentstraining"
                                >
                                  <span>Training Operators</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentstrainingtftraining-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentstrainingtftraining-check"
                                  />
                                  <label htmlFor="m-docscomponentstrainingtftraining-check">
                                    <Link
                                      to="/docs/components/training/tftraining/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentstrainingtftraining"
                                    >
                                      <span>TensorFlow Training (TFJob)</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentstrainingpytorch-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentstrainingpytorch-check"
                                  />
                                  <label htmlFor="m-docscomponentstrainingpytorch-check">
                                    <Link
                                      to="/docs/components/training/pytorch/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentstrainingpytorch"
                                    >
                                      <span>PyTorch Training (PyTorchJob)</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentstrainingmxnet-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentstrainingmxnet-check"
                                  />
                                  <label htmlFor="m-docscomponentstrainingmxnet-check">
                                    <Link
                                      to="/docs/components/training/mxnet/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentstrainingmxnet"
                                    >
                                      <span>MXNet Training (MXJob)</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentstrainingxgboost-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentstrainingxgboost-check"
                                  />
                                  <label htmlFor="m-docscomponentstrainingxgboost-check">
                                    <Link
                                      to="/docs/components/training/xgboost/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentstrainingxgboost"
                                    >
                                      <span>XGBoost Training (XGBoostJob)</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentstrainingmpi-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentstrainingmpi-check"
                                  />
                                  <label htmlFor="m-docscomponentstrainingmpi-check">
                                    <Link
                                      to="/docs/components/training/mpi/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentstrainingmpi"
                                    >
                                      <span>MPI Training (MPIJob)</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentstrainingjob-scheduling-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentstrainingjob-scheduling-check"
                                  />
                                  <label htmlFor="m-docscomponentstrainingjob-scheduling-check">
                                    <Link
                                      to="/docs/components/training/job-scheduling/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentstrainingjob-scheduling"
                                    >
                                      <span>Job Scheduling</span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docscomponentsmulti-tenancy-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docscomponentsmulti-tenancy-check"
                              />
                              <label htmlFor="m-docscomponentsmulti-tenancy-check">
                                <Link
                                  to="/docs/components/multi-tenancy/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docscomponentsmulti-tenancy"
                                >
                                  <span>Multi-Tenancy</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentsmulti-tenancyoverview-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentsmulti-tenancyoverview-check"
                                  />
                                  <label htmlFor="m-docscomponentsmulti-tenancyoverview-check">
                                    <Link
                                      to="/docs/components/multi-tenancy/overview/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentsmulti-tenancyoverview"
                                    >
                                      <span>
                                        Introduction to Multi-user Isolation
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentsmulti-tenancydesign-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentsmulti-tenancydesign-check"
                                  />
                                  <label htmlFor="m-docscomponentsmulti-tenancydesign-check">
                                    <Link
                                      to="/docs/components/multi-tenancy/design/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentsmulti-tenancydesign"
                                    >
                                      <span>
                                        Design for Multi-user Isolation
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docscomponentsmulti-tenancygetting-started-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docscomponentsmulti-tenancygetting-started-check"
                                  />
                                  <label htmlFor="m-docscomponentsmulti-tenancygetting-started-check">
                                    <Link
                                      to="/docs/components/multi-tenancy/getting-started/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docscomponentsmulti-tenancygetting-started"
                                    >
                                      <span>
                                        Getting Started with Multi-user
                                        Isolation
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                          id="m-docsexternal-add-ons-li"
                        >
                          <input
                            type="checkbox"
                            id="m-docsexternal-add-ons-check"
                          />
                          <label htmlFor="m-docsexternal-add-ons-check">
                            <Link
                              to="/docs/external-add-ons/"
                              className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                              id="m-docsexternal-add-ons"
                            >
                              <span>External Add-Ons</span>
                            </Link>
                          </label>
                          <ul className="ul-2 foldable">
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsexternal-add-onselyra-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsexternal-add-onselyra-check"
                              />
                              <label htmlFor="m-docsexternal-add-onselyra-check">
                                <Link
                                  to="/docs/external-add-ons/elyra/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsexternal-add-onselyra"
                                >
                                  <span>Elyra</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsexternal-add-onsistio-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsexternal-add-onsistio-check"
                              />
                              <label htmlFor="m-docsexternal-add-onsistio-check">
                                <Link
                                  to="/docs/external-add-ons/istio/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsexternal-add-onsistio"
                                >
                                  <span>Istio</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsistioistio-in-kubeflow-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsistioistio-in-kubeflow-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsistioistio-in-kubeflow-check">
                                    <Link
                                      to="/docs/external-add-ons/istio/istio-in-kubeflow/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsistioistio-in-kubeflow"
                                    >
                                      <span>Istio Usage in Kubeflow</span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsexternal-add-onskale-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsexternal-add-onskale-check"
                              />
                              <label htmlFor="m-docsexternal-add-onskale-check">
                                <Link
                                  to="/docs/external-add-ons/kale/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsexternal-add-onskale"
                                >
                                  <span>Kale</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsexternal-add-onskserve-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsexternal-add-onskserve-check"
                              />
                              <label htmlFor="m-docsexternal-add-onskserve-check">
                                <Link
                                  to="/docs/external-add-ons/kserve/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsexternal-add-onskserve"
                                >
                                  <span>KServe</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onskservekserve-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onskservekserve-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onskservekserve-check">
                                    <Link
                                      to="/docs/external-add-ons/kserve/kserve/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onskservekserve"
                                    >
                                      <span>KServe</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onskservemigration-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onskservemigration-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onskservemigration-check">
                                    <Link
                                      to="/docs/external-add-ons/kserve/migration/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onskservemigration"
                                    >
                                      <span>Migration</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onskservewebapp-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onskservewebapp-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onskservewebapp-check">
                                    <Link
                                      to="/docs/external-add-ons/kserve/webapp/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onskservewebapp"
                                    >
                                      <span>Models UI</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onskservefirst_isvc_kserve-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onskservefirst_isvc_kserve-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onskservefirst_isvc_kserve-check">
                                    <Link
                                      to="/docs/external-add-ons/kserve/first_isvc_kserve/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onskservefirst_isvc_kserve"
                                    >
                                      <span>
                                        Run your first InferenceService
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsexternal-add-onsfairing-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsexternal-add-onsfairing-check"
                              />
                              <label htmlFor="m-docsexternal-add-onsfairing-check">
                                <Link
                                  to="/docs/external-add-ons/fairing/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsexternal-add-onsfairing"
                                >
                                  <span>Fairing</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsfairingfairing-overview-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsfairingfairing-overview-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsfairingfairing-overview-check">
                                    <Link
                                      to="/docs/external-add-ons/fairing/fairing-overview/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsfairingfairing-overview"
                                    >
                                      <span>Overview of Kubeflow Fairing</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsfairinginstall-fairing-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsfairinginstall-fairing-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsfairinginstall-fairing-check">
                                    <Link
                                      to="/docs/external-add-ons/fairing/install-fairing/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsfairinginstall-fairing"
                                    >
                                      <span>Install Kubeflow Fairing</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsfairingconfigure-fairing-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsfairingconfigure-fairing-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsfairingconfigure-fairing-check">
                                    <Link
                                      to="/docs/external-add-ons/fairing/configure-fairing/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsfairingconfigure-fairing"
                                    >
                                      <span>Configure Kubeflow Fairing</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsfairingazure-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsfairingazure-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsfairingazure-check">
                                    <Link
                                      to="/docs/external-add-ons/fairing/azure/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docsexternal-add-onsfairingazure"
                                    >
                                      <span>Fairing on Azure</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docsexternal-add-onsfairinggcp-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsfairinggcp-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsfairinggcp-check">
                                    <Link
                                      to="/docs/external-add-ons/fairing/gcp/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docsexternal-add-onsfairinggcp"
                                    >
                                      <span>Fairing on GCP</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsexternal-add-onsfairinggcpconfigure-gcp-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsexternal-add-onsfairinggcpconfigure-gcp-check"
                                      />
                                      <label htmlFor="m-docsexternal-add-onsfairinggcpconfigure-gcp-check">
                                        <Link
                                          to="/docs/external-add-ons/fairing/gcp/configure-gcp/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsexternal-add-onsfairinggcpconfigure-gcp"
                                        >
                                          <span>
                                            Configure Kubeflow Fairing with
                                            Access to GCP
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                      id="m-docsexternal-add-onsfairinggcptutorials-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsexternal-add-onsfairinggcptutorials-check"
                                      />
                                      <label htmlFor="m-docsexternal-add-onsfairinggcptutorials-check">
                                        <Link
                                          to="/docs/external-add-ons/fairing/gcp/tutorials/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                          id="m-docsexternal-add-onsfairinggcptutorials"
                                        >
                                          <span>GCP Samples and Tutorials</span>
                                        </Link>
                                      </label>
                                      <ul className="ul-5 foldable">
                                        <li
                                          className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                          id="m-docsexternal-add-onsfairinggcptutorialsgcp-local-notebook-li"
                                        >
                                          <input
                                            type="checkbox"
                                            id="m-docsexternal-add-onsfairinggcptutorialsgcp-local-notebook-check"
                                          />
                                          <label htmlFor="m-docsexternal-add-onsfairinggcptutorialsgcp-local-notebook-check">
                                            <Link
                                              to="/docs/external-add-ons/fairing/gcp/tutorials/gcp-local-notebook/"
                                              className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                              id="m-docsexternal-add-onsfairinggcptutorialsgcp-local-notebook"
                                            >
                                              <span>
                                                Train and Deploy on GCP from a
                                                Local Notebook
                                              </span>
                                            </Link>
                                          </label>
                                        </li>
                                        <li
                                          className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                          id="m-docsexternal-add-onsfairinggcptutorialsgcp-kubeflow-notebook-li"
                                        >
                                          <input
                                            type="checkbox"
                                            id="m-docsexternal-add-onsfairinggcptutorialsgcp-kubeflow-notebook-check"
                                          />
                                          <label htmlFor="m-docsexternal-add-onsfairinggcptutorialsgcp-kubeflow-notebook-check">
                                            <Link
                                              to="/docs/external-add-ons/fairing/gcp/tutorials/gcp-kubeflow-notebook/"
                                              className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                              id="m-docsexternal-add-onsfairinggcptutorialsgcp-kubeflow-notebook"
                                            >
                                              <span>
                                                Train and Deploy on GCP from a
                                                Kubeflow Notebook
                                              </span>
                                            </Link>
                                          </label>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docsexternal-add-onsfairingtutorials-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsfairingtutorials-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsfairingtutorials-check">
                                    <Link
                                      to="/docs/external-add-ons/fairing/tutorials/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docsexternal-add-onsfairingtutorials"
                                    >
                                      <span>Tutorials</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsexternal-add-onsfairingtutorialsother-tutorials-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsexternal-add-onsfairingtutorialsother-tutorials-check"
                                      />
                                      <label htmlFor="m-docsexternal-add-onsfairingtutorialsother-tutorials-check">
                                        <Link
                                          to="/docs/external-add-ons/fairing/tutorials/other-tutorials/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsexternal-add-onsfairingtutorialsother-tutorials"
                                        >
                                          <span>
                                            Other Samples and Tutorials
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docsexternal-add-onsfairingreference-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsfairingreference-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsfairingreference-check">
                                    <Link
                                      to="/docs/external-add-ons/fairing/reference/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docsexternal-add-onsfairingreference"
                                    >
                                      <span>Reference</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsexternal-add-onsfairingreferencesdk-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsexternal-add-onsfairingreferencesdk-check"
                                      />
                                      <label htmlFor="m-docsexternal-add-onsfairingreferencesdk-check">
                                        <Link
                                          to="/docs/external-add-ons/fairing/reference/sdk/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsexternal-add-onsfairingreferencesdk"
                                        >
                                          <span>
                                            Kubeflow Fairing SDK Reference
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsexternal-add-onsfeature-store-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsexternal-add-onsfeature-store-check"
                              />
                              <label htmlFor="m-docsexternal-add-onsfeature-store-check">
                                <Link
                                  to="/docs/external-add-ons/feature-store/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsexternal-add-onsfeature-store"
                                >
                                  <span>Feature Store</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsfeature-storeoverview-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsfeature-storeoverview-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsfeature-storeoverview-check">
                                    <Link
                                      to="/docs/external-add-ons/feature-store/overview/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsfeature-storeoverview"
                                    >
                                      <span>Introduction to Feast</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsfeature-storegetting-started-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsfeature-storegetting-started-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsfeature-storegetting-started-check">
                                    <Link
                                      to="/docs/external-add-ons/feature-store/getting-started/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsfeature-storegetting-started"
                                    >
                                      <span>Getting started with Feast</span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsexternal-add-onsserving-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsexternal-add-onsserving-check"
                              />
                              <label htmlFor="m-docsexternal-add-onsserving-check">
                                <Link
                                  to="/docs/external-add-ons/serving/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsexternal-add-onsserving"
                                >
                                  <span>Tools for Serving</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsservingoverview-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsservingoverview-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsservingoverview-check">
                                    <Link
                                      to="/docs/external-add-ons/serving/overview/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsservingoverview"
                                    >
                                      <span>Overview</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsservingseldon-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsservingseldon-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsservingseldon-check">
                                    <Link
                                      to="/docs/external-add-ons/serving/seldon/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsservingseldon"
                                    >
                                      <span>Seldon Core Serving</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsservingbentoml-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsservingbentoml-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsservingbentoml-check">
                                    <Link
                                      to="/docs/external-add-ons/serving/bentoml/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsservingbentoml"
                                    >
                                      <span>BentoML</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsservingmlrun-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsservingmlrun-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsservingmlrun-check">
                                    <Link
                                      to="/docs/external-add-ons/serving/mlrun/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsservingmlrun"
                                    >
                                      <span>MLRun Serving Pipelines</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsservingtritoninferenceserver-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsservingtritoninferenceserver-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsservingtritoninferenceserver-check">
                                    <Link
                                      to="/docs/external-add-ons/serving/tritoninferenceserver/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsservingtritoninferenceserver"
                                    >
                                      <span>
                                        NVIDIA Triton Inference Server
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsservingtfserving_new-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsservingtfserving_new-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsservingtfserving_new-check">
                                    <Link
                                      to="/docs/external-add-ons/serving/tfserving_new/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsservingtfserving_new"
                                    >
                                      <span>TensorFlow Serving</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsexternal-add-onsservingtfbatchpredict-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsexternal-add-onsservingtfbatchpredict-check"
                                  />
                                  <label htmlFor="m-docsexternal-add-onsservingtfbatchpredict-check">
                                    <Link
                                      to="/docs/external-add-ons/serving/tfbatchpredict/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsexternal-add-onsservingtfbatchpredict"
                                    >
                                      <span>TensorFlow Batch Prediction</span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                          id="m-docsdistributions-li"
                        >
                          <input
                            type="checkbox"
                            id="m-docsdistributions-check"
                          />
                          <label htmlFor="m-docsdistributions-check">
                            <Link
                              to="/docs/distributions/"
                              className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                              id="m-docsdistributions"
                            >
                              <span>Distributions</span>
                            </Link>
                          </label>
                          <ul className="ul-2 foldable">
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsdistributionsaws-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsdistributionsaws-check"
                              />
                              <label htmlFor="m-docsdistributionsaws-check">
                                <Link
                                  to="/docs/distributions/aws/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsdistributionsaws"
                                >
                                  <span>Kubeflow on AWS</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsdistributionsazure-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsdistributionsazure-check"
                              />
                              <label htmlFor="m-docsdistributionsazure-check">
                                <Link
                                  to="/docs/distributions/azure/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsdistributionsazure"
                                >
                                  <span>Kubeflow on Azure</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docsdistributionsazuredeploy-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsazuredeploy-check"
                                  />
                                  <label htmlFor="m-docsdistributionsazuredeploy-check">
                                    <Link
                                      to="/docs/distributions/azure/deploy/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docsdistributionsazuredeploy"
                                    >
                                      <span>Deployment</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsazuredeployinstall-kubeflow-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsazuredeployinstall-kubeflow-check"
                                      />
                                      <label htmlFor="m-docsdistributionsazuredeployinstall-kubeflow-check">
                                        <Link
                                          to="/docs/distributions/azure/deploy/install-kubeflow/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsazuredeployinstall-kubeflow"
                                        >
                                          <span>Install Kubeflow</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsazuredeployexisting-cluster-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsazuredeployexisting-cluster-check"
                                      />
                                      <label htmlFor="m-docsdistributionsazuredeployexisting-cluster-check">
                                        <Link
                                          to="/docs/distributions/azure/deploy/existing-cluster/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsazuredeployexisting-cluster"
                                        >
                                          <span>
                                            Initial cluster setup for existing
                                            cluster
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsazuredeployuninstall-kubeflow-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsazuredeployuninstall-kubeflow-check"
                                      />
                                      <label htmlFor="m-docsdistributionsazuredeployuninstall-kubeflow-check">
                                        <Link
                                          to="/docs/distributions/azure/deploy/uninstall-kubeflow/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsazuredeployuninstall-kubeflow"
                                        >
                                          <span>Uninstall Kubeflow</span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsazureauthentication-oidc-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsazureauthentication-oidc-check"
                                  />
                                  <label htmlFor="m-docsdistributionsazureauthentication-oidc-check">
                                    <Link
                                      to="/docs/distributions/azure/authentication-oidc/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsazureauthentication-oidc"
                                    >
                                      <span>
                                        Authentication using OIDC in Azure
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsazuremachinelearningcomponent-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsazuremachinelearningcomponent-check"
                                  />
                                  <label htmlFor="m-docsdistributionsazuremachinelearningcomponent-check">
                                    <Link
                                      to="/docs/distributions/azure/machinelearningcomponent/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsazuremachinelearningcomponent"
                                    >
                                      <span>
                                        Azure Machine Learning Components
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsazureazureendtoend-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsazureazureendtoend-check"
                                  />
                                  <label htmlFor="m-docsdistributionsazureazureendtoend-check">
                                    <Link
                                      to="/docs/distributions/azure/azureendtoend/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsazureazureendtoend"
                                    >
                                      <span>
                                        End-to-End Pipeline Example on Azure
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsazureauthentication-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsazureauthentication-check"
                                  />
                                  <label htmlFor="m-docsdistributionsazureauthentication-check">
                                    <Link
                                      to="/docs/distributions/azure/authentication/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsazureauthentication"
                                    >
                                      <span>
                                        Access Control for Azure Deployment
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsazureazuremysql-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsazureazuremysql-check"
                                  />
                                  <label htmlFor="m-docsdistributionsazureazuremysql-check">
                                    <Link
                                      to="/docs/distributions/azure/azuremysql/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsazureazuremysql"
                                    >
                                      <span>
                                        Configure Azure MySQL database to store
                                        metadata
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsazuretroubleshooting-azure-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsazuretroubleshooting-azure-check"
                                  />
                                  <label htmlFor="m-docsdistributionsazuretroubleshooting-azure-check">
                                    <Link
                                      to="/docs/distributions/azure/troubleshooting-azure/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsazuretroubleshooting-azure"
                                    >
                                      <span>
                                        Troubleshooting Deployments on Azure AKS
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsdistributionsgke-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsdistributionsgke-check"
                              />
                              <label htmlFor="m-docsdistributionsgke-check">
                                <Link
                                  to="/docs/distributions/gke/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsdistributionsgke"
                                >
                                  <span>Kubeflow on Google Cloud</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docsdistributionsgkedeploy-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsgkedeploy-check"
                                  />
                                  <label htmlFor="m-docsdistributionsgkedeploy-check">
                                    <Link
                                      to="/docs/distributions/gke/deploy/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docsdistributionsgkedeploy"
                                    >
                                      <span>Deployment</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkedeployoverview-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkedeployoverview-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkedeployoverview-check">
                                        <Link
                                          to="/docs/distributions/gke/deploy/overview/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkedeployoverview"
                                        >
                                          <span>Overview</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkedeployproject-setup-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkedeployproject-setup-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkedeployproject-setup-check">
                                        <Link
                                          to="/docs/distributions/gke/deploy/project-setup/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkedeployproject-setup"
                                        >
                                          <span>Set up Project</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkedeployoauth-setup-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkedeployoauth-setup-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkedeployoauth-setup-check">
                                        <Link
                                          to="/docs/distributions/gke/deploy/oauth-setup/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkedeployoauth-setup"
                                        >
                                          <span>Set up OAuth client</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkedeploymanagement-setup-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkedeploymanagement-setup-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkedeploymanagement-setup-check">
                                        <Link
                                          to="/docs/distributions/gke/deploy/management-setup/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkedeploymanagement-setup"
                                        >
                                          <span>Deploy Management cluster</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkedeploydeploy-cli-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkedeploydeploy-cli-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkedeploydeploy-cli-check">
                                        <Link
                                          to="/docs/distributions/gke/deploy/deploy-cli/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkedeploydeploy-cli"
                                        >
                                          <span>Deploy Kubeflow cluster</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkedeployupgrade-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkedeployupgrade-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkedeployupgrade-check">
                                        <Link
                                          to="/docs/distributions/gke/deploy/upgrade/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkedeployupgrade"
                                        >
                                          <span>Upgrade Kubeflow</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkedeploymonitor-iap-setup-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkedeploymonitor-iap-setup-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkedeploymonitor-iap-setup-check">
                                        <Link
                                          to="/docs/distributions/gke/deploy/monitor-iap-setup/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkedeploymonitor-iap-setup"
                                        >
                                          <span>Monitor Cloud IAP Setup</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkedeploydelete-cli-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkedeploydelete-cli-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkedeploydelete-cli-check">
                                        <Link
                                          to="/docs/distributions/gke/deploy/delete-cli/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkedeploydelete-cli"
                                        >
                                          <span>Delete Kubeflow</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkedeploydeploy-ui-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkedeploydeploy-ui-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkedeploydeploy-ui-check">
                                        <Link
                                          to="/docs/distributions/gke/deploy/deploy-ui/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkedeploydeploy-ui"
                                        >
                                          <span>Deploy using UI</span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docsdistributionsgkepipelines-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsgkepipelines-check"
                                  />
                                  <label htmlFor="m-docsdistributionsgkepipelines-check">
                                    <Link
                                      to="/docs/distributions/gke/pipelines/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docsdistributionsgkepipelines"
                                    >
                                      <span>Pipelines on Google Cloud</span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkepipelinesauthentication-sdk-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkepipelinesauthentication-sdk-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkepipelinesauthentication-sdk-check">
                                        <Link
                                          to="/docs/distributions/gke/pipelines/authentication-sdk/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkepipelinesauthentication-sdk"
                                        >
                                          <span>
                                            Connecting to Kubeflow Pipelines on
                                            Google Cloud using the SDK
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkepipelinesauthentication-pipelines-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkepipelinesauthentication-pipelines-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkepipelinesauthentication-pipelines-check">
                                        <Link
                                          to="/docs/distributions/gke/pipelines/authentication-pipelines/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkepipelinesauthentication-pipelines"
                                        >
                                          <span>
                                            Authenticating Pipelines to Google
                                            Cloud
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkepipelinesupgrade-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkepipelinesupgrade-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkepipelinesupgrade-check">
                                        <Link
                                          to="/docs/distributions/gke/pipelines/upgrade/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkepipelinesupgrade"
                                        >
                                          <span>Upgrading</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkepipelinesenable-gpu-and-tpu-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkepipelinesenable-gpu-and-tpu-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkepipelinesenable-gpu-and-tpu-check">
                                        <Link
                                          to="/docs/distributions/gke/pipelines/enable-gpu-and-tpu/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkepipelinesenable-gpu-and-tpu"
                                        >
                                          <span>Enabling GPU and TPU</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsgkepipelinespreemptible-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsgkepipelinespreemptible-check"
                                      />
                                      <label htmlFor="m-docsdistributionsgkepipelinespreemptible-check">
                                        <Link
                                          to="/docs/distributions/gke/pipelines/preemptible/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsgkepipelinespreemptible"
                                        >
                                          <span>
                                            Using Preemptible VMs and GPUs on
                                            Google Cloud
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsgkecustomizing-gke-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsgkecustomizing-gke-check"
                                  />
                                  <label htmlFor="m-docsdistributionsgkecustomizing-gke-check">
                                    <Link
                                      to="/docs/distributions/gke/customizing-gke/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsgkecustomizing-gke"
                                    >
                                      <span>Customize Kubeflow on GKE</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsgkecustom-domain-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsgkecustom-domain-check"
                                  />
                                  <label htmlFor="m-docsdistributionsgkecustom-domain-check">
                                    <Link
                                      to="/docs/distributions/gke/custom-domain/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsgkecustom-domain"
                                    >
                                      <span>Using Your Own Domain</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsgkeauthentication-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsgkeauthentication-check"
                                  />
                                  <label htmlFor="m-docsdistributionsgkeauthentication-check">
                                    <Link
                                      to="/docs/distributions/gke/authentication/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsgkeauthentication"
                                    >
                                      <span>
                                        Authenticating Kubeflow to Google Cloud
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsgkeprivate-clusters-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsgkeprivate-clusters-check"
                                  />
                                  <label htmlFor="m-docsdistributionsgkeprivate-clusters-check">
                                    <Link
                                      to="/docs/distributions/gke/private-clusters/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsgkeprivate-clusters"
                                    >
                                      <span>Securing Your Clusters</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsgketroubleshooting-gke-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsgketroubleshooting-gke-check"
                                  />
                                  <label htmlFor="m-docsdistributionsgketroubleshooting-gke-check">
                                    <Link
                                      to="/docs/distributions/gke/troubleshooting-gke/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsgketroubleshooting-gke"
                                    >
                                      <span>
                                        Troubleshooting Deployments on GKE
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsgkeanthos-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsgkeanthos-check"
                                  />
                                  <label htmlFor="m-docsdistributionsgkeanthos-check">
                                    <Link
                                      to="/docs/distributions/gke/anthos/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsgkeanthos"
                                    >
                                      <span>
                                        Kubeflow On-premises on Anthos
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsdistributionsibm-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsdistributionsibm-check"
                              />
                              <label htmlFor="m-docsdistributionsibm-check">
                                <Link
                                  to="/docs/distributions/ibm/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsdistributionsibm"
                                >
                                  <span>Kubeflow on IBM Cloud</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsibmcreate-cluster-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsibmcreate-cluster-check"
                                  />
                                  <label htmlFor="m-docsdistributionsibmcreate-cluster-check">
                                    <Link
                                      to="/docs/distributions/ibm/create-cluster/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsibmcreate-cluster"
                                    >
                                      <span>
                                        Create or access an IBM Cloud Kubernetes
                                        cluster
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsibmcreate-cluster-vpc-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsibmcreate-cluster-vpc-check"
                                  />
                                  <label htmlFor="m-docsdistributionsibmcreate-cluster-vpc-check">
                                    <Link
                                      to="/docs/distributions/ibm/create-cluster-vpc/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsibmcreate-cluster-vpc"
                                    >
                                      <span>
                                        Create or access an IBM Cloud Kubernetes
                                        cluster on a VPC
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                                  id="m-docsdistributionsibmdeploy-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsibmdeploy-check"
                                  />
                                  <label htmlFor="m-docsdistributionsibmdeploy-check">
                                    <Link
                                      to="/docs/distributions/ibm/deploy/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                      id="m-docsdistributionsibmdeploy"
                                    >
                                      <span>
                                        Kubeflow Deployment on IBM Cloud
                                      </span>
                                    </Link>
                                  </label>
                                  <ul className="ul-4 foldable">
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsibmdeploydeployment-process-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsibmdeploydeployment-process-check"
                                      />
                                      <label htmlFor="m-docsdistributionsibmdeploydeployment-process-check">
                                        <Link
                                          to="/docs/distributions/ibm/deploy/deployment-process/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsibmdeploydeployment-process"
                                        >
                                          <span>
                                            Kubeflow Deployment Process
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsibmdeployiks-compatibility-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsibmdeployiks-compatibility-check"
                                      />
                                      <label htmlFor="m-docsdistributionsibmdeployiks-compatibility-check">
                                        <Link
                                          to="/docs/distributions/ibm/deploy/iks-compatibility/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsibmdeployiks-compatibility"
                                        >
                                          <span>
                                            IBM Cloud Kubernetes and Kubeflow
                                            Compatibility
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsibmdeployinstall-kubeflow-on-iks-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsibmdeployinstall-kubeflow-on-iks-check"
                                      />
                                      <label htmlFor="m-docsdistributionsibmdeployinstall-kubeflow-on-iks-check">
                                        <Link
                                          to="/docs/distributions/ibm/deploy/install-kubeflow-on-iks/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsibmdeployinstall-kubeflow-on-iks"
                                        >
                                          <span>Install Kubeflow on IKS</span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsibmdeployinstall-kubeflow-on-ibm-openshift-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsibmdeployinstall-kubeflow-on-ibm-openshift-check"
                                      />
                                      <label htmlFor="m-docsdistributionsibmdeployinstall-kubeflow-on-ibm-openshift-check">
                                        <Link
                                          to="/docs/distributions/ibm/deploy/install-kubeflow-on-ibm-openshift/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsibmdeployinstall-kubeflow-on-ibm-openshift"
                                        >
                                          <span>
                                            Install Kubeflow on OpenShift
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsibmdeployauthentication-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsibmdeployauthentication-check"
                                      />
                                      <label htmlFor="m-docsdistributionsibmdeployauthentication-check">
                                        <Link
                                          to="/docs/distributions/ibm/deploy/authentication/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsibmdeployauthentication"
                                        >
                                          <span>
                                            Securing the Kubeflow authentication
                                            with HTTPS
                                          </span>
                                        </Link>
                                      </label>
                                    </li>
                                    <li
                                      className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                      id="m-docsdistributionsibmdeployuninstall-kubeflow-li"
                                    >
                                      <input
                                        type="checkbox"
                                        id="m-docsdistributionsibmdeployuninstall-kubeflow-check"
                                      />
                                      <label htmlFor="m-docsdistributionsibmdeployuninstall-kubeflow-check">
                                        <Link
                                          to="/docs/distributions/ibm/deploy/uninstall-kubeflow/"
                                          className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                          id="m-docsdistributionsibmdeployuninstall-kubeflow"
                                        >
                                          <span>Uninstall Kubeflow</span>
                                        </Link>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsibmpipelines-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsibmpipelines-check"
                                  />
                                  <label htmlFor="m-docsdistributionsibmpipelines-check">
                                    <Link
                                      to="/docs/distributions/ibm/pipelines/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsibmpipelines"
                                    >
                                      <span>
                                        Pipelines on IBM Cloud Kubernetes
                                        Service (IKS)
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsibmusing-icr-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsibmusing-icr-check"
                                  />
                                  <label htmlFor="m-docsdistributionsibmusing-icr-check">
                                    <Link
                                      to="/docs/distributions/ibm/using-icr/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsibmusing-icr"
                                    >
                                      <span>
                                        Using IBM Cloud Container Registry (ICR)
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsibmiks-e2e-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsibmiks-e2e-check"
                                  />
                                  <label htmlFor="m-docsdistributionsibmiks-e2e-check">
                                    <Link
                                      to="/docs/distributions/ibm/iks-e2e/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsibmiks-e2e"
                                    >
                                      <span>
                                        End-to-end Kubeflow on IBM Cloud
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsdistributionsnutanix-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsdistributionsnutanix-check"
                              />
                              <label htmlFor="m-docsdistributionsnutanix-check">
                                <Link
                                  to="/docs/distributions/nutanix/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsdistributionsnutanix"
                                >
                                  <span>Kubeflow on Nutanix Karbon</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsnutanixinstall-kubeflow-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsnutanixinstall-kubeflow-check"
                                  />
                                  <label htmlFor="m-docsdistributionsnutanixinstall-kubeflow-check">
                                    <Link
                                      to="/docs/distributions/nutanix/install-kubeflow/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsnutanixinstall-kubeflow"
                                    >
                                      <span>
                                        Install Kubeflow on Nutanix Karbon
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsnutanixnutanix-storage-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsnutanixnutanix-storage-check"
                                  />
                                  <label htmlFor="m-docsdistributionsnutanixnutanix-storage-check">
                                    <Link
                                      to="/docs/distributions/nutanix/nutanix-storage/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsnutanixnutanix-storage"
                                    >
                                      <span>
                                        Integrate with Nutanix Storage
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsnutanixuninstall-kubeflow-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsnutanixuninstall-kubeflow-check"
                                  />
                                  <label htmlFor="m-docsdistributionsnutanixuninstall-kubeflow-check">
                                    <Link
                                      to="/docs/distributions/nutanix/uninstall-kubeflow/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsnutanixuninstall-kubeflow"
                                    >
                                      <span>Uninstall Kubeflow</span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsdistributionsekf-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsdistributionsekf-check"
                              />
                              <label htmlFor="m-docsdistributionsekf-check">
                                <Link
                                  to="/docs/distributions/ekf/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsdistributionsekf"
                                >
                                  <span>Arrikto Enterprise Kubeflow</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsdistributionsminikf-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsdistributionsminikf-check"
                              />
                              <label htmlFor="m-docsdistributionsminikf-check">
                                <Link
                                  to="/docs/distributions/minikf/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsdistributionsminikf"
                                >
                                  <span>Arrikto MiniKF</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsminikfminikf-aws-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsminikfminikf-aws-check"
                                  />
                                  <label htmlFor="m-docsdistributionsminikfminikf-aws-check">
                                    <Link
                                      to="/docs/distributions/minikf/minikf-aws/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsminikfminikf-aws"
                                    >
                                      <span>MiniKF on AWS Marketplace</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsminikfminikf-gcp-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsminikfminikf-gcp-check"
                                  />
                                  <label htmlFor="m-docsdistributionsminikfminikf-gcp-check">
                                    <Link
                                      to="/docs/distributions/minikf/minikf-gcp/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsminikfminikf-gcp"
                                    >
                                      <span>MiniKF on GCP Marketplace</span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsdistributionscharmed-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsdistributionscharmed-check"
                              />
                              <label htmlFor="m-docsdistributionscharmed-check">
                                <Link
                                  to="/docs/distributions/charmed/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsdistributionscharmed"
                                >
                                  <span>Charmed Kubeflow</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionscharmedinstall-kubeflow-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionscharmedinstall-kubeflow-check"
                                  />
                                  <label htmlFor="m-docsdistributionscharmedinstall-kubeflow-check">
                                    <Link
                                      to="/docs/distributions/charmed/install-kubeflow/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionscharmedinstall-kubeflow"
                                    >
                                      <span>
                                        Charmed Kubeflow deployment guide
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsdistributionsoperator-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsdistributionsoperator-check"
                              />
                              <label htmlFor="m-docsdistributionsoperator-check">
                                <Link
                                  to="/docs/distributions/operator/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsdistributionsoperator"
                                >
                                  <span>Kubeflow Operator</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsoperatorintroduction-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsoperatorintroduction-check"
                                  />
                                  <label htmlFor="m-docsdistributionsoperatorintroduction-check">
                                    <Link
                                      to="/docs/distributions/operator/introduction/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsoperatorintroduction"
                                    >
                                      <span>Introduction</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsoperatorinstall-operator-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsoperatorinstall-operator-check"
                                  />
                                  <label htmlFor="m-docsdistributionsoperatorinstall-operator-check">
                                    <Link
                                      to="/docs/distributions/operator/install-operator/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsoperatorinstall-operator"
                                    >
                                      <span>Installing Kubeflow Operator</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsoperatorinstall-kubeflow-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsoperatorinstall-kubeflow-check"
                                  />
                                  <label htmlFor="m-docsdistributionsoperatorinstall-kubeflow-check">
                                    <Link
                                      to="/docs/distributions/operator/install-kubeflow/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsoperatorinstall-kubeflow"
                                    >
                                      <span>Installing Kubeflow</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsoperatoruninstall-kubeflow-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsoperatoruninstall-kubeflow-check"
                                  />
                                  <label htmlFor="m-docsdistributionsoperatoruninstall-kubeflow-check">
                                    <Link
                                      to="/docs/distributions/operator/uninstall-kubeflow/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsoperatoruninstall-kubeflow"
                                    >
                                      <span>Uninstalling Kubeflow</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsoperatoruninstall-operator-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsoperatoruninstall-operator-check"
                                  />
                                  <label htmlFor="m-docsdistributionsoperatoruninstall-operator-check">
                                    <Link
                                      to="/docs/distributions/operator/uninstall-operator/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsoperatoruninstall-operator"
                                    >
                                      <span>
                                        Uninstalling Kubeflow Operator
                                      </span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsoperatortroubleshooting-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsoperatortroubleshooting-check"
                                  />
                                  <label htmlFor="m-docsdistributionsoperatortroubleshooting-check">
                                    <Link
                                      to="/docs/distributions/operator/troubleshooting/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsoperatortroubleshooting"
                                    >
                                      <span>Troubleshooting</span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                              id="m-docsdistributionsopenshift-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsdistributionsopenshift-check"
                              />
                              <label htmlFor="m-docsdistributionsopenshift-check">
                                <Link
                                  to="/docs/distributions/openshift/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                                  id="m-docsdistributionsopenshift"
                                >
                                  <span>Kubeflow on OpenShift</span>
                                </Link>
                              </label>
                              <ul className="ul-3 foldable">
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsopenshiftinstall-kubeflow-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsopenshiftinstall-kubeflow-check"
                                  />
                                  <label htmlFor="m-docsdistributionsopenshiftinstall-kubeflow-check">
                                    <Link
                                      to="/docs/distributions/openshift/install-kubeflow/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsopenshiftinstall-kubeflow"
                                    >
                                      <span>Install Kubeflow on OpenShift</span>
                                    </Link>
                                  </label>
                                </li>
                                <li
                                  className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                                  id="m-docsdistributionsopenshiftuninstall-kubeflow-li"
                                >
                                  <input
                                    type="checkbox"
                                    id="m-docsdistributionsopenshiftuninstall-kubeflow-check"
                                  />
                                  <label htmlFor="m-docsdistributionsopenshiftuninstall-kubeflow-check">
                                    <Link
                                      to="/docs/distributions/openshift/uninstall-kubeflow/"
                                      className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                      id="m-docsdistributionsopenshiftuninstall-kubeflow"
                                    >
                                      <span>Uninstall Kubeflow</span>
                                    </Link>
                                  </label>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="td-sidebar-nav__section-title td-sidebar-nav__section with-child"
                          id="m-docsreleases-li"
                        >
                          <input type="checkbox" id="m-docsreleases-check" />
                          <label htmlFor="m-docsreleases-check">
                            <Link
                              to="/docs/releases/"
                              className="align-left pl-0 td-sidebar-link td-sidebar-link__section"
                              id="m-docsreleases"
                            >
                              <span>Releases</span>
                            </Link>
                          </label>
                          <ul className="ul-2 foldable">
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsreleaseskubeflow-15-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsreleaseskubeflow-15-check"
                              />
                              <label htmlFor="m-docsreleaseskubeflow-15-check">
                                <Link
                                  to="/docs/releases/kubeflow-1.5/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsreleaseskubeflow-15"
                                >
                                  <span>Kubeflow 1.5</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsreleaseskubeflow-14-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsreleaseskubeflow-14-check"
                              />
                              <label htmlFor="m-docsreleaseskubeflow-14-check">
                                <Link
                                  to="/docs/releases/kubeflow-1.4/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsreleaseskubeflow-14"
                                >
                                  <span>Kubeflow 1.4</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsreleaseskubeflow-13-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsreleaseskubeflow-13-check"
                              />
                              <label htmlFor="m-docsreleaseskubeflow-13-check">
                                <Link
                                  to="/docs/releases/kubeflow-1.3/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsreleaseskubeflow-13"
                                >
                                  <span>Kubeflow 1.3</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsreleaseskubeflow-12-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsreleaseskubeflow-12-check"
                              />
                              <label htmlFor="m-docsreleaseskubeflow-12-check">
                                <Link
                                  to="/docs/releases/kubeflow-1.2/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsreleaseskubeflow-12"
                                >
                                  <span>Kubeflow 1.2</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsreleaseskubeflow-11-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsreleaseskubeflow-11-check"
                              />
                              <label htmlFor="m-docsreleaseskubeflow-11-check">
                                <Link
                                  to="/docs/releases/kubeflow-1.1/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsreleaseskubeflow-11"
                                >
                                  <span>Kubeflow 1.1</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsreleaseskubeflow-10-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsreleaseskubeflow-10-check"
                              />
                              <label htmlFor="m-docsreleaseskubeflow-10-check">
                                <Link
                                  to="/docs/releases/kubeflow-1.0/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsreleaseskubeflow-10"
                                >
                                  <span>Kubeflow 1.0</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsreleaseskubeflow-07-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsreleaseskubeflow-07-check"
                              />
                              <label htmlFor="m-docsreleaseskubeflow-07-check">
                                <Link
                                  to="/docs/releases/kubeflow-0.7/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsreleaseskubeflow-07"
                                >
                                  <span>Kubeflow 0.7</span>
                                </Link>
                              </label>
                            </li>
                            <li
                              className="td-sidebar-nav__section-title td-sidebar-nav__section without-child"
                              id="m-docsreleaseskubeflow-06-li"
                            >
                              <input
                                type="checkbox"
                                id="m-docsreleaseskubeflow-06-check"
                              />
                              <label htmlFor="m-docsreleaseskubeflow-06-check">
                                <Link
                                  to="/docs/releases/kubeflow-0.6/"
                                  className="align-left pl-0 td-sidebar-link td-sidebar-link__page"
                                  id="m-docsreleaseskubeflow-06"
                                >
                                  <span>Kubeflow 0.6</span>
                                </Link>
                              </label>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>
            <aside className="d-none d-xl-block col-xl-2 td-sidebar-toc d-print-none">
              <div className="td-page-meta ml-2 pb-1 pt-2 mb-0">
                <Link
                  to="https://github.com/kubeflow/website/tree/master/content/en/docs/started/_index.md"
                  className="td-page-meta--view"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fa fa-file-alt fa-fw"></i> View page source
                </Link>
                <Link
                  to="https://github.com/kubeflow/website/edit/master/content/en/docs/started/_index.md"
                  className="td-page-meta--edit"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fa fa-edit fa-fw"></i> Edit this page
                </Link>
                <Link
                  to="https://github.com/kubeflow/website/new/master/content/en/docs/started/_index.md?filename=change-me.md&amp;value=---%0Atitle%3A+%22Long+Page+Title%22%0AlinkTitle%3A+%22Short+Nav+Title%22%0Aweight%3A+100%0Adescription%3A+%3E-%0A+++++Page+description+for+heading+and+indexes.%0A---%0A%0A%23%23+Heading%0A%0AEdit+this+template+to+create+your+new+page.%0A%0A%2A+Give+it+a+good+name%2C+ending+in+%60.md%60+-+e.g.+%60getting-started.md%60%0A%2A+Edit+the+%22front+matter%22+section+at+the+top+of+the+page+%28weight+controls+how+its+ordered+amongst+other+pages+in+the+same+directory%3B+lowest+number+first%29.%0A%2A+Add+a+good+commit+message+at+the+bottom+of+the+page+%28%3C80+characters%3B+use+the+extended+description+field+for+more+detail%29.%0A%2A+Create+a+new+branch+so+you+can+preview+your+new+file+and+request+a+review+via+Pull+Request.%0A"
                  className="td-page-meta--child"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fa fa-edit fa-fw"></i> Create child page
                </Link>
                <Link
                  to="https://github.com/kubeflow/website/issues/new?title=Getting%20Started"
                  className="td-page-meta--issue"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-github fa-fw"></i> Create documentation
                  issue
                </Link>
                <Link
                  to="https://github.com/kubeflow/kubeflow/issues/new"
                  className="td-page-meta--project-issue"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fas fa-tasks fa-fw"></i> Create project issue
                </Link>
              </div>
            </aside>
            <main className="col-12 col-md-9 col-xl-8 pl-md-5" role="main">
              <nav
                aria-label="breadcrumb"
                className="d-none d-md-block d-print-none"
              >
                <ol className="breadcrumb spb-1">
                  <li className="breadcrumb-item">
                    <Link to="/docs/">Documentation</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/docs/started/">Getting Started</Link>
                  </li>
                </ol>
              </nav>
              <div className="td-content">
                <h1>Getting Started</h1>
                <div className="lead">How to get started with Kubeflow</div>
                <header className="article-meta"></header>
                <div className="section-index">
                  <hr className="panel-line" />
                  <div className="entry">
                    <h5>
                      <Link to="/docs/started/introduction/">Introduction</Link>
                    </h5>
                    <p>An introduction to Kubeflow</p>
                  </div>
                  <div className="entry">
                    <h5>
                      <Link to="/docs/started/architecture/">Architecture</Link>
                    </h5>
                    <p>An overview of Kubeflow’s architecture</p>
                  </div>
                  <div className="entry">
                    <h5>
                      <Link to="/docs/started/installing-kubeflow/">
                        Installing Kubeflow
                      </Link>
                    </h5>
                    <p>Deployment options for Kubeflow</p>
                  </div>
                  <div className="entry">
                    <h5>
                      <Link to="/docs/started/support/">Get Support</Link>
                    </h5>
                    <p>Where to get support for Kubeflow</p>
                  </div>
                  <div className="entry">
                    <h5>
                      <Link to="/docs/started/kubeflow-examples/">Examples</Link>
                    </h5>
                    <p>
                      Examples that demonstrate machine learning with Kubeflow
                    </p>
                  </div>
                </div>

                <div className="card mt-4 col-12 col-sm-6">
                  <div className="card-body">
                    <h3 className="card-title">Feedback</h3>
                    <p className="card-text">Was this page helpful?</p>
                    <button
                      className="btn btn-primary feedback--answer feedback--answer-yes"
                      style={{ width: "5rem" }}
                    >
                      Yes
                    </button>
                    <button
                      className="btn btn-primary feedback--answer feedback--answer-no"
                      style={{ width: "5rem" }}
                    >
                      No
                    </button>
                    <p className="feedback--response feedback--response-yes">
                      Glad to hear it! Please
                      <Link to="https://github.com/kubeflow/website/issues/new">
                        tell us how we can improve
                      </Link>
                      .
                    </p>
                    <p className="feedback--response feedback--response-no">
                      Sorry to hear that. Please
                      <Link to="https://github.com/kubeflow/website/issues/new">
                        tell us how we can improve
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <br />
                <div className="text-muted mt-5 pt-3 border-top">
                  Last modified November 29, 2021:
                  <Link to="https://github.com/kubeflow/website/commit/6c527dd09a1f45f7d878e7cfcb94ba01c13ade73">
                    restructure `About` section (#3007) (6c527dd0)
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
        <footer className="bg-dark pt-3 row d-print-none">
          <div className="container-fluid mx-sm-5">
            <div className="row">
              <div className="col-6 col-sm-4 text-xs-center order-sm-2">
                <ul className="list-inline mb-0">
                  <li
                    className="list-inline-item mx-2 h3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    aria-label="Twitter"
                    data-original-title="Twitter"
                  >
                    <Link
                      className="text-white"
                      target="_blank"
                      rel="noopener"
                      to="https://twitter.com/kubeflow/"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li
                    className="list-inline-item mx-2 h3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    aria-label="Slack"
                    data-original-title="Slack"
                  >
                    <Link
                      className="text-white"
                      target="_blank"
                      rel="noopener"
                      to="/docs/about/community/#slack"
                      aria-label="Slack"
                    >
                      <i className="fab fa-slack"></i>
                    </Link>
                  </li>
                  <li
                    className="list-inline-item mx-2 h3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    aria-label="Mailing list"
                    data-original-title="Mailing list"
                  >
                    <Link
                      className="text-white"
                      target="_blank"
                      rel="noopener"
                      to="/docs/about/community/#mailing-list"
                      aria-label="Mailing list"
                    >
                      <i className="fa fa-envelope"></i>
                    </Link>
                  </li>
                  <li
                    className="list-inline-item mx-2 h3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    aria-label="Weekly Community Call"
                    data-original-title="Weekly Community Call"
                  >
                    <Link
                      className="text-white"
                      target="_blank"
                      rel="noopener"
                      to="/docs/about/community/#weekly-community-call"
                      aria-label="Weekly Community Call"
                    >
                      <i className="fa fa-calendar"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-4 text-right text-xs-center order-sm-3"></div>
              <div className="col-12 col-sm-5 text-center py-2 order-sm-2">
                <small className="text-white">
                  © 2022 The Kubeflow Authors. | Documentation Distributed under
                  CC BY 4.0
                </small>
                <p>
                  <small className="ml-1">
                    <Link
                      to="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener"
                    >
                      Privacy Policy
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Started;
