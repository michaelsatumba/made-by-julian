'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Navbar() {
	const [display, setDisplay] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
		// Check if the screen is large when the component mounts
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};

		// Add event listener to check screen size on resize
		window.addEventListener('resize', handleResize);
		handleResize(); // Check initial screen size

		// Clean up the event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div>
			<nav className="flex items-center justify-between flex-wrap bg-yellow-900 p-6">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<a href="/">
						<span className="font-semibold text-xl tracking-tight">
							madeByJulian
						</span>
					</a>
				</div>
				<div className="block lg:hidden">
					<button
						className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
						onClick={() => setDisplay(!display)}
					>
						<svg
							className="fill-current h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				{isLargeScreen || display ? (
					<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<div className="text-sm lg:flex-grow">
							<Link
								href="/"
								className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
							>
								Home
							</Link>
							<Link
								href="/about"
								className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
							>
								About
							</Link>
							<Link
								href="/contact"
								className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
							>
								Contact
							</Link>
						</div>
					</div>
				) : null}
			</nav>
		</div>
	);
}

export default Navbar;
