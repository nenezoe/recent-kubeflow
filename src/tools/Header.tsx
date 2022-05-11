import React from 'react'

interface Props {}

function Header(props: Props) {
    const {} = props

    return (
        <>
        <header>
        <nav className="js-navbar-scroll navbar navbar-expand-md navbar-dark td-navbar">
          <a className="navbar-brand" href="/">
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
          </a>
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
                <a className="nav-link" href="/docs/">
                  <i className="fas fa-book pr-2"></i>
                  <span>Documentation</span>
                </a>
              </li>
              <li className="nav-item mr-2 mr-lg-4 mt-1 mt-lg-0">
                <a
                  className="nav-link"
                  href="https://blog.kubeflow.org/"
                  target="_blank"
                >
                  <i className="fas fa-rss pr-2"></i>
                  <span>Blog</span>
                </a>
              </li>
              <li className="nav-item mr-2 mr-lg-4 mt-1 mt-lg-0">
                <a
                  className="nav-link"
                  href="https://github.com/kubeflow/"
                  target="_blank"
                >
                  <i className="fab fa-github pr-2"></i>
                  <span>GitHub</span>
                </a>
              </li>
              <li className="nav-item dropdown mt-1 mt-lg-0 mr-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kubeflow Version
                </a>
                <div
                  className="dropdown-menu dropdown-menu-md-right dropdown-menu-lg-left"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    className="dropdown-item"
                    href="https://master.kubeflow.org"
                  >
                    master
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://v1-5-branch.kubeflow.org"
                  >
                    v1.5
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://v1-4-branch.kubeflow.org"
                  >
                    v1.4
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://v1-3-branch.kubeflow.org"
                  >
                    v1.3
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://v1-2-branch.kubeflow.org"
                  >
                    v1.2
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://v1-1-branch.kubeflow.org"
                  >
                    v1.1
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://v1-0-branch.kubeflow.org"
                  >
                    v1.0
                  </a>
                  <a className="dropdown-item" href="https://v0-7.kubeflow.org">
                    v0.7
                  </a>
                  <a className="dropdown-item" href="https://v0-6.kubeflow.org">
                    v0.6
                  </a>
                  <a className="dropdown-item" href="https://v0-5.kubeflow.org">
                    v0.5
                  </a>
                  <a className="dropdown-item" href="https://v0-4.kubeflow.org">
                    v0.4
                  </a>
                  <a className="dropdown-item" href="https://v0-3.kubeflow.org">
                    v0.3
                  </a>
                  <a className="dropdown-item" href="https://v0-2.kubeflow.org">
                    v0.2
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
        </>
        
    )
}

export default Header