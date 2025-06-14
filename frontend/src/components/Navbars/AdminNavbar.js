import React from "react";
import classNames from "classnames";

// ✅ Use this to avoid confusion
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  Nav as ReactstrapNav,
  NavLink as ReactstrapNavLink,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");

  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    return () => window.removeEventListener("resize", updateColor);
  });

  const updateColor = () => {
    setcolor(window.innerWidth < 993 && collapseOpen ? "bg-white" : "navbar-transparent");
  };

  const toggleCollapse = () => {
    setcolor(collapseOpen ? "navbar-transparent" : "bg-white");
    setcollapseOpen(!collapseOpen);
  };

  const toggleModalSearch = () => setmodalSearch(!modalSearch);

  return (
    <>
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse navbar isOpen={collapseOpen}>
            <ReactstrapNav className="ml-auto" navbar>
              <InputGroup className="search-bar">
                <Button color="link" onClick={toggleModalSearch}>
                  <i className="tim-icons icon-zoom-split" />
                  <span className="d-lg-none d-md-block">Search</span>
                </Button>
              </InputGroup>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" data-toggle="dropdown" nav>
                  <div className="notification d-none d-lg-block d-xl-block" />
                  <i className="tim-icons icon-sound-wave" />
                  <p className="d-lg-none">Notifications</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <ReactstrapNavLink tag="li">
                    <DropdownItem className="nav-item">
                      Mike John responded to your email
                    </DropdownItem>
                  </ReactstrapNavLink>
                  <ReactstrapNavLink tag="li">
                    <DropdownItem className="nav-item">
                      You have 5 more tasks
                    </DropdownItem>
                  </ReactstrapNavLink>
                  <ReactstrapNavLink tag="li">
                    <DropdownItem className="nav-item">
                      Your friend Michael is in town
                    </DropdownItem>
                  </ReactstrapNavLink>
                  <ReactstrapNavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another notification
                    </DropdownItem>
                  </ReactstrapNavLink>
                  <ReactstrapNavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another one
                    </DropdownItem>
                  </ReactstrapNavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav onClick={(e) => e.preventDefault()}>
                  <div className="photo">
                    <img alt="..." src={require("assets/img/anime3.png")} />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">Log out</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <ReactstrapNavLink tag="li">
                    <DropdownItem className="nav-item">Profile</DropdownItem>
                  </ReactstrapNavLink>
                  <ReactstrapNavLink tag="li">
                    <DropdownItem className="nav-item">Settings</DropdownItem>
                  </ReactstrapNavLink>
                  <DropdownItem divider tag="li" />
                  <ReactstrapNavLink tag="li">
                    <DropdownItem className="nav-item">Log out</DropdownItem>
                  </ReactstrapNavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none" />
            </ReactstrapNav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal modalClassName="modal-search" isOpen={modalSearch} toggle={toggleModalSearch}>
        <ModalHeader>
          <Input placeholder="SEARCH" type="text" />
          <button aria-label="Close" className="close" onClick={toggleModalSearch}>
            <i className="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
      </Modal>
    </>
  );
}

export default AdminNavbar;
