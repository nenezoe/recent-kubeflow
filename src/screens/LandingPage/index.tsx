import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardBodyWrapper,
  CardDeckWrapper,
  CardImageWrapper,
  CardWrapper,
  ContainerFluidWrapper,
  ContainerWrapper,
  NavBarWrapper,
  PageButtonWrapper,
  PageLnkWrapper,
  PageSectionWrapper,
} from "../../styles";
import Footer from "../../tools/Footer";

interface Props {}

function LandingPage(props: Props) {
  const {} = props;
  const [navDropdown, setNavDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);

  //  let eld = document.getElementById("overview").offsetTop

  // make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 625);  // reset the scroll position to the top left of the document.
}
// window.scrollByPages(1);

  return (
    <>
      <div className="td-home">
        <header>
          <nav className={`js-navbar-scroll navbar navbar-expand-md navbar-dark td-navbar-cover td-navbar navbar-bg-onscroll--fade ${!!toggle ? "navbar-bg-onscroll" : ""}`}>
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
            <div
              className="collapse navbar-collapse ml-md-auto"
              id="main_navbar"
            >
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
                <li
                  className={`nav-item dropdown mt-1 mt-lg-0 mr-2 ${
                    !!navDropdown ? "show" : ""
                  }`}
                  onClick={() => {
                    setNavDropdown(!navDropdown);
                  }}
                >
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
                    className={`dropdown-menu dropdown-menu-md-right dropdown-menu-lg-left ${
                      !!navDropdown ? "show" : ""
                    }`}
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
                    <Link
                      className="dropdown-item"
                      to="https://v0-7.kubeflow.org"
                    >
                      v0.7
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="https://v0-6.kubeflow.org"
                    >
                      v0.6
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="https://v0-5.kubeflow.org"
                    >
                      v0.5
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="https://v0-4.kubeflow.org"
                    >
                      v0.4
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="https://v0-3.kubeflow.org"
                    >
                      v0.3
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="https://v0-2.kubeflow.org"
                    >
                      v0.2
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="container-fluid td-default td-outer">
          <main role="main" className="td-main">
            <link
              rel="preload"
              as="image"
              href="/homepage-background_huac7d4ee4bcda6617c71a2dd699485ce4_55788_960x540_fill_catmullrom_center_3.png"
              media="(max-width: 1200px)"
            />
            <link
              rel="preload"
              as="image"
              href="/homepage-background_huac7d4ee4bcda6617c71a2dd699485ce4_55788_1920x1080_fill_catmullrom_center_3.png"
              media="(min-width: 1200px)"
            />
            <section
              id="td-cover-block-0"
              className="row td-cover-block td-cover-block--height-max js-td-cover td-overlay td-overlay--dark -bg-dark"
            >
              <div className="container td-overlay__inner">
                <div className="row">
                  <div className="col-12">
                    <div className="text-center">
                      <h1 className="display-1 mt-0 mt-md-5 pb-4">Kubeflow</h1>
                      <div className="pt-3 lead">
                        <div className="mx-auto">
                          <p className="lead mt-5">
                            The Machine Learning Toolkit for Kubernetes
                          </p>
                          <Link
                            className="btn btn-lg btn-primary mr-3 mb-4"
                            to="/docs/started/"
                          >
                            Get Started
                            <i className="fas fa-arrow-alt-circle-right ml-2"></i>
                          </Link>
                          <Link
                            className="btn btn-lg btn-secondary mr-3 mb-4"
                            to="/docs/about/contributing/"
                          >
                            Contribute{" "}
                            <i className="fas fa-pencil-alt ml-2"></i>
                          </Link>
                          <div className="mx-auto mt-5">
                            <Link
                              className="btn btn-link text-light"
                              to="#overview"
                            >
                              <i
                                className="fa fa-chevron-circle-down"
                                style={{ fontSize: "400%" }}
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div id="overview">
              <div className="contain">
                <h4 className="section-head">What is Kubeflow?</h4>
                <p>
                  The Kubeflow project is dedicated to making deployments of
                  machine learning (ML) workflows on Kubernetes simple, portable
                  and scalable. Our goal is not to recreate other services, but
                  to provide a straightforward way to deploy best-of-breed
                  open-source systems for ML to diverse infrastructures.
                  Anywhere you are running Kubernetes, you should be able to run
                  Kubeflow.
                </p>
              </div>
            </div>
            <section id="pageContent">
              <div className="container">
                <div className="card-deck">
                  <div className="card border-primary-dark">
                    <img
                      src="/docs/images/logos/Jupyter.png"
                      className="card-img-top"
                      draggable="false"
                      style={{ padding: "2rem" }}
                      alt="Jupyter Logo"
                    />
                    <div className="card-body bg-primary-dark">
                      <h5 className="card-title text-white section-head">
                        Notebooks
                      </h5>
                      <p className="card-text text-white">
                        Kubeflow includes services to create and manage
                        interactive
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/components/notebooks/"
                        >
                          Jupyter notebooks
                        </Link>
                        . You can customize your notebook deployment and your
                        compute resources to suit your data science needs.
                        Experiment with your workflows locally, then deploy them
                        to a cloud when you're ready.
                      </p>
                    </div>
                  </div>
                  <div className="card border-primary-dark">
                    <img
                      src="/docs/images/logos/TensorFlow.png"
                      className="card-img-top"
                      draggable="false"
                      style={{ padding: "2rem" }}
                      alt="TensorFlow"
                    />
                    <div className="card-body bg-primary-dark">
                      <h5 className="card-title text-white section-head">
                        TensorFlow model training
                      </h5>
                      <p className="card-text text-white">
                        Kubeflow provides a custom
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/components/training/tftraining/"
                        >
                          TensorFlow training job operator
                        </Link>
                        that you can use to train your ML model. In particular,
                        Kubeflow's job operator can handle distributed
                        TensorFlow training jobs. Configure the training
                        controller to use CPUs or GPUs and to suit various
                        cluster sizes.
                      </p>
                    </div>
                  </div>
                  <div className="card border-primary-dark">
                    <img
                      src="/docs/images/logos/Models.png"
                      className="card-img-top"
                      draggable="false"
                      style={{ padding: "2rem" }}
                      alt="Model serving image"
                    />
                    <div className="card-body bg-primary-dark">
                      <h5 className="card-title text-white section-head">
                        Model serving
                      </h5>
                      <p className="card-text text-white">
                        Kubeflow supports a
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/external-add-ons/serving/tfserving_new/"
                        >
                          TensorFlow Serving
                        </Link>
                        container to export trained TensorFlow models to
                        Kubernetes. Kubeflow is also integrated with
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/external-add-ons/serving/seldon/"
                        >
                          Seldon Core
                        </Link>
                        , an open source platform for deploying machine learning
                        models on Kubernetes,
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/external-add-ons/serving/tritoninferenceserver/"
                        >
                          NVIDIA Triton Inference Server
                        </Link>
                        for maximized GPU utilization when deploying ML/DL
                        models at scale, and
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/external-add-ons/serving/mlrun/"
                        >
                          MLRun Serving
                        </Link>
                        , an open-source serverless framework for deployment and
                        monitoring of real-time ML/DL pipelines.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="card-deck">
                  <div className="card border-primary-dark">
                    <img
                      src="/docs/images/logos/Pipeline.png"
                      className="card-img-top"
                      draggable="false"
                      style={{ padding: "2rem" }}
                      alt="Pipelines Logo"
                    />
                    <div className="card-body bg-primary-dark">
                      <h5 className="card-title text-white section-head">
                        Pipelines
                      </h5>
                      <p className="card-text text-white">
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/components/pipelines/introduction/"
                        >
                          Kubeflow Pipelines
                        </Link>
                        is a comprehensive solution for deploying and managing
                        end-to-end ML workflows. Use Kubeflow Pipelines for
                        rapid and reliable experimentation. You can schedule and
                        compare runs, and examine detailed reports on each run.
                      </p>
                    </div>
                  </div>
                  <div className="card border-primary-dark">
                    <img
                      src="/docs/images/logos/MultiPlatform.png"
                      className="card-img-top"
                      draggable="false"
                      style={{ padding: "2rem" }}
                      alt="Multiple Framework Logos"
                    />
                    <div className="card-body bg-primary-dark">
                      <h5 className="card-title text-white section-head">
                        Multi-framework
                      </h5>
                      <p className="card-text text-white">
                        Our development plans extend beyond TensorFlow. We're
                        working hard to extend the support of
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/components/training/pytorch/"
                        >
                          PyTorch
                        </Link>
                        ,
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/components/training/mxnet/"
                        >
                          Apache MXNet
                        </Link>
                        ,
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/components/training/mpi/"
                        >
                          MPI
                        </Link>
                        ,
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/components/training/xgboost/"
                        >
                          XGBoost
                        </Link>
                        ,
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/components/training/chainer/"
                        >
                          Chainer
                        </Link>
                        , and more. We also integrate with
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="https://istio.io/"
                        >
                          Istio
                        </Link>
                        and
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="https://www.getambassador.io/"
                        >
                          Ambassador
                        </Link>
                        for ingress,
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="https://nuclio.io/"
                        >
                          Nuclio
                        </Link>
                        as a fast multi-purpose serverless framework, and
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="https://www.pachyderm.io/"
                        >
                          Pachyderm
                        </Link>
                        for managing your data science pipelines.
                      </p>
                    </div>
                  </div>
                  <div className="card border-primary-dark">
                    <img
                      src="/docs/images/logos/Community.png"
                      className="card-img-top"
                      draggable="false"
                      style={{ padding: "2rem" }}
                      alt="People Icon"
                    />
                    <div className="card-body bg-primary-dark">
                      <h5 className="card-title text-white section-head">
                        Community
                      </h5>
                      <p className="card-text text-white">
                        We are an open and welcoming community of software
                        developers, data scientists, and organizations! Join our
                        <Link
                          target="_blank"
                          rel="noopener"
                          to="/docs/about/community/#slack"
                        >
                          Slack Workspace
                        </Link>
                        !
                      </p>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </section>
            <div id="community">
              <div className="contain">
                <h4 className="section-head">Join our community</h4>
                <p>
                  Check out the
                  <Link to="/docs/about/community/#weekly-community-call">
                    weekly community call
                  </Link>
                  , get involved in discussions on the
                  <Link to="/docs/about/community/#mailing-list">
                    mailing list
                  </Link>{" "}
                  or chat with others on the
                  <Link to="/docs/about/community/#slack">Slack Workspace</Link>!
                </p>
                <Link
                  className="btn btn-lg btn-primary mr-3 mb-4"
                  to="/docs/about/community/"
                >
                  Join the community
                  <i className="fas fa-arrow-alt-circle-right ml-2"></i>
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
