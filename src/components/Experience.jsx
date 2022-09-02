import React from "react"
import html from "../assets/exp/html.png"
import css from "../assets/exp/css.png"
import javascript from "../assets/exp/javascript.png"
import php from "../assets/exp/php.png"
import laravel from "../assets/exp/laravel.png"
import node from "../assets/exp/node.png"
import react from "../assets/exp/react.png"
import tailwind from "../assets/exp/tailwind.png"
import mongo from "../assets/exp/mongo.png"
import vba from "../assets/exp/vba.png"
import github from "../assets/exp/github.png"

const Experience = () => {
	const experience = [
		{
			id: 1,
			src: html,
			title: "HTML",
			style: "shadow-orange-500",
		},
		{
			id: 2,
			src: css,
			title: "CSS",
			style: "shadow-blue-500",
		},
		{
			id: 3,
			src: javascript,
			title: "JAVASCRIPT",
			style: "shadow-yellow-300",
		},
		{
			id: 4,
			src: php,
			title: "PHP",
			style: "shadow-sky-500",
		},
		{
			id: 5,
			src: laravel,
			title: "LARAVEL",
			style: "shadow-red-600",
		},
		{
			id: 6,
			src: node,
			title: "NODE",
			style: "shadow-lime-300",
		},
		{
			id: 7,
			src: vba,
			title: "VBA",
			style: "shadow-blue-600",
		},
		{
			id: 8,
			src: react,
			title: "REACT",
			style: "shadow-sky-400",
		},
		{
			id: 9,
			src: tailwind,
			title: "TAILWIND",
			style: "shadow-sky-300",
		},
		{
			id: 10,
			src: mongo,
			title: "MONGO DB",
			style: "shadow-green-500",
		},

		{
			id: 11,
			src: github,
			title: "GITHUB",
			style: "shadow-gray-500",
		},
	]

	return (
		<div
			name="experience"
			className="bg-gradient-to-b from-blue-600 to-blue-900 w-full h-full"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
						Experience
					</p>
					<p className="py-6">These are the technologies I've worked with</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
					{experience.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
						>
							<img
								src={src}
								className="w-20 mx-auto"
								alt="my experiences"
							/>
							<p className="mt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Experience
