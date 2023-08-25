import React, { useState } from "react";
import axios from "axios";
import { EmailAPI } from "../StaticInfo/ContactInfo";
import "./Contact.css";

const Contact = (props) => {
	const [formData, setFormData] = useState({
		sendersEmailId: "",
		sendersSubject: "",
		sendersMessage: "",
	});

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault(formData);
		let email = {
			method: "post",
			contentType: "application/json",
			url: EmailAPI,
			data: formData,
		};
		await axios(email).then(
			(res) => {
				if (res.data.success) {
					alert("Thanks for your Email. I will respond as soon as possible!");
				}
			},
			(error) => console.log(error)
		);
	};

	return (
		<section className="section" id="Contact">
			<h4 className="heading-contact">CONTACT ME</h4>
			<br />
			<div className="container">
				<div className="contact-card">
					<form method="POST" onSubmit={handleSubmit}>
						<div className="input-field">
							<input
								type="email"
								name="sendersEmailId"
								id="sendersEmailId"
								value={formData.sendersEmailId}
								onChange={handleChange}
								required
							/>
							<label htmlFor="sendersEmailId">Your Email</label>
						</div>

						<div className="input-field">
							<input
								type="text"
								name="sendersSubject"
								id="sendersSubject"
								value={formData.sendersSubject}
								onChange={handleChange}
								required
							/>
							<label htmlFor="sendersSubject">Subject</label>
						</div>

						<div className="input-field">
							<textarea
								id="sendersMessage"
								name="sendersMessage"
								className="materialize-textarea"
								value={formData.sendersMessage}
								onChange={handleChange}
								required></textarea>
							<label htmlFor="sendersMessage">Message</label>
						</div>
						<br />
						<div className="center">
							<button
								className="btn waves-effect waves-light"
								type="submit"
								name="submit">
								Submit<i className="material-icons right">send</i>
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
