/** @format */ import React from "react"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "projects",
		},
		{
			id: 4,
			link: "experience",
		},
		{
			id: 5,
			link: "contact",
		},
	]

	return (
		<div className="flex justify-between items-center w-full h-20 text-white px-4 bg-gradient-to-tr from-sky-800  to-black fixed">
			<h1 className="text-5xl font-signature ml-2">
				Rals<span className="text-sky-500">.</span>
			</h1>

			<ul className="hidden md:flex">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
					>
						<Link
							to={link}
							smooth={true}
							offset={5}
							duration={500}
						>
							{link}
						</Link>
					</li>
				))}
			</ul>

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b  from-black to-sky-500 text-white">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-6 text-3xl"
						>
							<Link
								onClick={() => setNav(!nav)}
								to={link}
								smooth={true}
								offset={5}
								duration={500}
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Navbar
