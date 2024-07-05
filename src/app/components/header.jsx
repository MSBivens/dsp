"use client";

// import Image from "next/image";

// import Logo from "../../../public/images/logo.png";

import { Button, Navbar, Dropdown } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold ">
          Gamma Iota
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Donate</Button>
        <Button>Volunteer</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Dropdown label="Our Brotherhood" inline>
          <Dropdown.Item>
            <a>About Us</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a>History</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a>Philanthropy</a>
          </Dropdown.Item>
        </Dropdown>
        <Dropdown label="Get Involved" inline>
          <Dropdown.Item>
            <a>Alumni Chapter</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a>Volunteer</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a>Donate</a>
          </Dropdown.Item>
        </Dropdown>

        <Dropdown label="Stay Connected" inline>
          <Dropdown.Item>
            <a>Events</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a>News</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a>Gamma Eye</a>
          </Dropdown.Item>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}
