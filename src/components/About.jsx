/** @format */

import React from "react"
import Profile from "../assets/portfolio/image1.png"

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white my-auto flex justify-center "
		>
			<div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<p className="text-xl mt-5">
					I took a BSED in Mathematics from Universidad de Manila. I've been a
					Risk assistant at Pacific Sea BPO Services Inc. for two years. My
					interests are playing and watching basketball, creating logos,
					learning web code, and watching KDrama.
				</p>
				<br />
				<p className="text-xl">
					I possess a diverse and promising skill set. A hardworking web
					developer who can create elegant solutions in the shortest amount of
					time. Proficient in HTML, CSS, JavaScript, ReactJS, NodeJS, PHP, and
					other programming languages, as well as the ability to effectively
					self-manage projects and collaborate in a team setting.
				</p>

				<div
					className="mt-5"
					id="myImage"
				>
					<img
						src={Profile}
						alt="my profile"
						className=" mx-auto hidden rounded-2xl w-1/3 duration-200 hover:scale-105 sm:flex"
					/>
				</div>
			</div>
		</div>
	)
}

export default About
