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
				Ral is an experienced backend developer specializing in Node.js, Java, React.js, CQL, SQL, and GraphQL. With a strong commitment to delivering robust and scalable applications, they adhere to industry best practices, including KISS, DRY , and clean code principles, ensuring that their code is always polished and maintainable. They are also well-versed in AWS, Docker, and Kubernetes, allowing them to deploy and manage applications with ease. Ral is a team player who is always willing to help others and share their knowledge, making them a valuable asset to any development team.
				</p>
				<br />
				<p className="text-xl">
				When they're not coding, Ral enjoys reading, playing video games, and spending time with their family. They are also passionate about learning new technologies and staying up to date with the latest trends in the industry. Ral is currently seeking new opportunities to further develop their skills and contribute to exciting projects. If you're looking for a talented and dedicated developer to join your team, Ral would be an excellent choice. Contact them today to discuss how they can help you achieve your development goals.
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
