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
					Hello, my name is Rallion Cipriano and I hold a degree in BSED in
					Mathematics from Universidad de Manila. For the past two years, I have
					served as a Risk Assistant at Pacific Sea BPO Services Inc. While my
					professional background lies in risk management and currently work as
					Junior Backend Developer at Entrego, my interests are diverse. I'm
					passionate about playing and watching basketball, enjoy the art of
					creating logos, constantly strive to expand my knowledge of web
					coding, and find relaxation in indulging in KDrama. Thank you for
					having me here.
				</p>
				<br />
				<p className="text-xl">
					I possess a diverse and promising skill set. A hardworking web
					developer who can create elegant solutions in the shortest amount of
					time. Proficient in HTML, CSS, Java, AWS,PostgreSQL JavaScript,
					ReactJS, NodeJS, PHP, and other programming languages, as well as the
					ability to effectively self-manage projects and collaborate in a team
					setting.
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
