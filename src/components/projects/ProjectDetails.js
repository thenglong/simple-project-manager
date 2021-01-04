import { useParams } from "react-router-dom";

export default function ProjectDetails() {
	const { id } = useParams();
	return (
		<div className="container section project-details">
			<div className="card z-delpth-0">
				<div className="card-content">
					<span className="card-title">Project Title {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
						doloremque, repellat porro natus illum iste nisi unde repudiandae
						dolore, accusantium mollitia adipisci, sapiente quis. Dicta impedit
						sed corporis eum consectetur!
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by Thenglong</div>
					<div>2nd Dec, 2am</div>
				</div>
			</div>
		</div>
	);
}
