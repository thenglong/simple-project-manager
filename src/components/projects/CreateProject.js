import { useState } from "react";

export default function CreateProject() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log(title, content);
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="white">
				<h5 className="grey-text text-darken-3">Create Project</h5>
				<div className="input-field">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div className="input-field">
					<label htmlFor="content">Project Content</label>
					<textarea
						id="content"
						className="materialize-textarea"
						onChange={e => setContent(e.target.value)}
					></textarea>
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Sign Up</button>
				</div>
			</form>
		</div>
	);
}
