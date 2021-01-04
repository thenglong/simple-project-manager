import { useSelector } from "react-redux";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

export default function Dashboard() {
	const { projects } = useSelector(state => state.project);
	return (
		<div className="dashboard container">
			<div className="row">
				<div className="col s12 m6">
					<ProjectList projects={projects} />
				</div>
				<div className="col s12 m5 offset-m1">
					<Notifications />
				</div>
			</div>
		</div>
	);
}
