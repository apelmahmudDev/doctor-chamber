import React from 'react';
import './NotFound.css';
import error from '../../images/error404.png';
import { Link } from 'react-router-dom';
import ReplyIcon from '@material-ui/icons/Reply';

const NotFound = () => {
	return (
		<div className="notfound-container">
			<div className="notfound-child">
				<img src={error} alt=""/>
                <h4 className="font-weight-bold text-brand">Page not found</h4>
                <p className="text-brand">We're sorry, the page you requested could not be found.
                <br/> Please go back to the home or contact us at support@demo.co</p>
				<Link to="/">
                    <button className="btn brand-bg text-light">
                        <ReplyIcon className="text-light mr-2" />
                        <span>Go to HomePage</span>
                    </button>
                </Link>
			</div>
		</div>
	);
};

export default NotFound;
