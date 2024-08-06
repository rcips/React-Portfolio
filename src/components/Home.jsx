/** @format */

import React from "react"
import HeroImage from "../assets/portfolio/coding.gif"
import { MdKeyboardArrowRight } from "react-icons/md"
import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { Link } from "react-scroll"

const Home = () => {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const toRotate = [
		"Web Developer",
		"Web Designer",
		"UI/UX Designer",
		"Junior Backend Developer",
	]
	const [text, setText] = useState("")
	const [delta, setDelta] = useState(300 - Math.random() * 100)
	const period = 800

	useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)
		return () => {
			clearInterval(ticker)
		}
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length
		let fullText = toRotate[i]
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1)

		setText(updatedText)
		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2)
		}
		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setDelta(period)
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setDelta(200)
		}
	}

	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black via-gray-800 to-blue-600 text-white"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl mt-10  sm:text-5xl font-bold ">
						Hi! I'm Rallion
					</h2>
					<h3 className="text-4xl sm:text-5xl font-bold">{text}</h3>
					<p className="text-gray-200 py-4 max-w-md ">
						Welcome to my official Portfolio Website Where I put all my work
						related to my codes , design and many more.
					</p>
					<div className="flex flex-row gap-1 cursor-pointer">
						<a
							href="https://www.linkedin.com/in/rallion-antonio-cipriano-238a38205/"
							className=" hover:scale-105 duration-200"
						>
							<FaLinkedin size={25} />
						</a>
						<a
							href="https://github.com/rcips/"
							className=" hover:scale-105 duration-200"
						>
							<FaGithub size={25} />
						</a>
						<a
							href="mailto:cipriano.rallion@gmail.com"
							className=" hover:scale-105 duration-200"
						>
							<HiOutlineMail size={25} />
						</a>

						<a
							href="/Rallion Antonio N. Cipriano.pdf"
							className=" hover:scale-105 duration-200"
						>
							<FaUser size={25} />
						</a>
					</div>
					<div>
						<Link
							to="projects"
							smooth={true}
							offset={5}
							duration={500}
							className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-full bg-gradient-to-r from-lime-500 to-lime-800 cursor-pointer"
						>
							<p className="font-bold text-1xl">Project</p>
							<span className="group-hover:rotate-90 duration-300">
								<MdKeyboardArrowRight
									size={25}
									className="ml-1"
								/>
							</span>
						</Link>
					</div>
				</div>
				<div>
					<img
						src={HeroImage}
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 mb-20 sm:w-full mt-10 "
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
