import React from "react";
import Link from 'next/link'

const Navbar = ({ categories }) => {
    //console.log("navbar", categories );
    return (
        <div
            data-collapse="small"
            data-animation="default"
            data-duration="400"
            role="banner"
            className="navigation-2 w-nav"
        >
            <div className="navigation-container-2">
                <div className="navigation-left-2">
					<Link href="/">
                    <a className="brand-2 w-nav-brand">
                        <img
                            src="/images/Group-1.png"
                            alt=""
                            className="flowbase-logo-2"
                        />
                    </a>
					</Link>
                </div>
                <div className="navigation-right-2">
                    <nav role="navigation" className="nav-menu w-nav-menu">
                        <div
                            data-hover="1"
                            data-delay="0"
                            className="dropdown-2 w-dropdown"
                        >
                            <div className="dropdown-toggle-2 w-dropdown-toggle">
                                <div className="icon-4 w-icon-dropdown-toggle"></div>
                                <div className="text-block">Kategoriler</div>
                            </div>
                            <nav className="navigation-dropdown w-dropdown-list">
                                <div className="dropdown-pointer">
                                    <div className="dropdown-wrapper">
									{categories.map(c => (
										<Link href={`/category/${c.fields.slug}`} key={"nav" + c.fields.slug}>
                                        <a className="dropdown-link-1 w-inline-block">
                                            <div className="icon-wrap-2">
                                                <img
                                                    src={`images/${c.fields.slug}.png`}
                                                    alt={`${c.fields.name} icon`}
                                                    className="icon-5"
                                                />
                                            </div>
                                            <div className="nav-content-wrap">
                                                <div className="dropdown-title">
                                                    {c.fields.name}
                                                </div>
                                                <div className="nav-link-details">
                                                    {c.fields.bilgi.slice(0,60)}
                                                </div>
                                            </div>
                                        </a>
										</Link>
									))}
                                    </div>
                                    <div className="pointer"></div>
                                </div>
                            </nav>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
