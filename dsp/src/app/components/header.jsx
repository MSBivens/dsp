"use client";

import { Button, Navbar, Dropdown } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded className="max-w-screen-xl mx-auto">
      <Navbar.Brand href="/">
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
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Dropdown label="Our Brotherhood" inline>
          <Dropdown.Item>
            <a href="/aboutUs">About Us</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/history">History</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/philanthropy">Philanthropy</a>
          </Dropdown.Item>
        </Dropdown>
        <Dropdown label="Get Involved" inline>
          <Dropdown.Item>
            <a href="alumniChapter">Alumni Chapter</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/volunteer">Volunteer</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/donate">Donate</a>
          </Dropdown.Item>
        </Dropdown>
        <Dropdown label="Stay Connected" inline>
          <Dropdown.Item>
            <a href="/events">Events</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/news">News</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="gammaEye">Gamma Eye</a>
          </Dropdown.Item>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}
