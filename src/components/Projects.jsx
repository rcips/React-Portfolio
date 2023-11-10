import React from "react"
import restaurant from "../assets/portfolio/Triple-R.JPG"
import rubiks from "../assets/portfolio/Rubriks.JPG"
import cpb from "../assets/portfolio/CPB.jpg"
import onlineLibrary from "../assets/portfolio/Onlinelibrary.jpg"
import simple from "../assets/portfolio/Converter.jpg"
import rps from "../assets/portfolio/Rockpaper.jpg"
import entrego from "../assets/portfolio/Entrego.JPG"

const Projects = () => {
	const portfolios = [
		{
			id: 1,
			src: restaurant,
			href: "https://github.com/rcips/TripleR-Fastfood",
			href2: "https://rcips.github.io/TripleR-Fastfood/",
		},
		{
			id: 2,
			src: rubiks,
			href: "https://github.com/Elayism/NO-EROR",
			href2: "https://elayism.github.io/NO-EROR/",
		},
		{
			id: 3,
			src: cpb,
			href: "https://github.com/ChrlnSaez/Cyberpunk_API",
			href2: "https://cypberpunk-client.vercel.app/",
		},
		{
			id: 4,
			src: onlineLibrary,
			href: "https://github.com/rcips/OnlineLibrary-JS",
			href2: "https://rcips.github.io/OnlineLibrary-JS/",
		},
		{
			id: 5,
			src: simple,
			href: "https://github.com/rcips/simpleconversion",
			href2: "https://rcips.github.io/simpleconversion/",
		},
		{
			id: 6,
			src: entrego,
			href: "https://gitlab.entrego.com.ph/entrego/microservice/booking-service/",
			href2: "https://my.entrego.com.ph/",
		},
	]

	return (
		<div
			name="projects"
			className="bg-gradient-to-b from-blue-800 to-blue-600 w-full  text-white md:h-screen"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Portfolio
					</p>
					<p className="py-6">Check out some of my work right here</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-2">
					{portfolios.map(({ id, src, href, href2 }) => (
						<div
							key={id}
							className="shadow-md shadow-black rounded-lg"
						>
							<img
								src={src}
								className="rounded-md duration-200 hover:scale-105"
								alt="my projects"
							/>
							<div className="flex text-center justify-center">
								<a
									href={href2}
									className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
								>
									Demo
								</a>
								<a
									href={href}
									className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
								>
									Code
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
