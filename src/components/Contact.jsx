import React from "react"

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-gradient-to-b from-blue-900  to-black p-4 text-white "
		>
			<div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Contact
					</p>
					<p className="py-6">Fill out the form below to reach me.</p>
				</div>

				<div className="flex justify-center items-center">
					<form
						action="https://getform.io/f/67e7640b-5272-405c-ab4a-3dedbeda7dbf"
						method="POST"
						className="flex flex-col w-full md:w-1/2"
					>
						<input
							type="text"
							name="name"
							placeholder="Enter your name"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						/>
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						/>
						<textarea
							name="message"
							rows="10"
							placeholder="Enter your message"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						></textarea>
						<button className="text-white bg-gradient-to-r from-lime-600 to-lime-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
							Let's talk
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
