import React from 'react'

interface Props {}

function Footer(props: Props) {
    const {} = props

    return (
        <>
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
                  <a
                    className="text-white"
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/kubeflow/"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li
                  className="list-inline-item mx-2 h3"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  aria-label="Slack"
                  data-original-title="Slack"
                >
                  <a
                    className="text-white"
                    target="_blank"
                    rel="noopener"
                    href="/docs/about/community/#slack"
                    aria-label="Slack"
                  >
                    <i className="fab fa-slack"></i>
                  </a>
                </li>
                <li
                  className="list-inline-item mx-2 h3"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  aria-label="Mailing list"
                  data-original-title="Mailing list"
                >
                  <a
                    className="text-white"
                    target="_blank"
                    rel="noopener"
                    href="/docs/about/community/#mailing-list"
                    aria-label="Mailing list"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
                <li
                  className="list-inline-item mx-2 h3"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  aria-label="Weekly Community Call"
                  data-original-title="Weekly Community Call"
                >
                  <a
                    className="text-white"
                    target="_blank"
                    rel="noopener"
                    href="/docs/about/community/#weekly-community-call"
                    aria-label="Weekly Community Call"
                  >
                    <i className="fa fa-calendar"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-6 col-sm-4 text-right text-xs-center order-sm-3"
            ></div>
            <div className="col-12 col-sm-5 text-center py-2 order-sm-2">
              <small className="text-white"
                >© 2022 The Kubeflow Authors. | Documentation Distributed under
                CC BY 4.0</small
              >
              <p>
                <small className="ml-1"
                  ><a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener"
                    >Privacy Policy</a
                  ></small
                >
              </p>
            </div>
          </div>
        </div>
      </footer>
        </>
        
    )
}

export default Footer
