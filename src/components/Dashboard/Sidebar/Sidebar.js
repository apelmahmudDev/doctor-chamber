import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PeopleIcon from '@material-ui/icons/People';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import ReplyIcon from '@material-ui/icons/Reply';

const Sidebar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-default sticky-top sidebar">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav flex-column sidebar-nav">
					<li className="nav-item">
						<Link to="/dashboard/dashboard">
							<DashboardIcon className="text-light mr-2" />
							<span>Dashboard</span>
						</Link>
					</li>
					<li className="nav-item">
						<CalendarTodayIcon className="text-light mr-2" />
						<Link to="/dashboard/appointments">Appointments</Link>
					</li>
					<li className="nav-item">
						<PeopleIcon className="text-light mr-2" />
						<Link to="/dashboard/patients">Patients</Link>
					</li>
					<li className="nav-item">
						<NoteIcon className="text-light mr-2" />
						<Link to="/dashboard/prescriptions">Prescriptions</Link>
					</li>
					<li className="nav-item">
						<SettingsIcon className="text-light mr-2" />
						<Link to="/dashboard/settings">Settings</Link>
					</li>
					<li className="nav-item">
						<ReplyIcon className="text-light mr-2" />
						<Link to="/">Go Back</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Sidebar;
