import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.scss"

interface Experience {
	years: number;
	description: string;
}

interface CVData {
	photo: string;
	name: string;
	lastName: string;
	position: string;
	experience: Array<Experience>;
	education: Array<string>;
}

const cvData: CVData = {
	photo: "https://placehold.co/400x400?text=Jeba%C4%87\\nPIS",
	name: "Mariusz",
	lastName: "Sokołowski",
	position: " Junior Development Java",
	experience: [
		{years: 2022, description: "Java, React, Js, TS, Node"},
		{years: 2012, description: "Kierowca ce"}
	],
	education: [
		"Wsb Academie Ingenieour",
		"Liceum W szczurowej"
	]
}
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<main className={"cv-main"}>
			<header className={"cv-header"}>
				<h1> CV {cvData.name} {cvData.lastName}</h1>
			</header>
			<aside className={'cv-personal'}>
				<h2>Personal data</h2>
				<img className={"cv-photo"} src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} profile photo`}/>
				<section className={"cv-owner"}>
					<p>{cvData.name} {cvData.lastName}</p>
					<small>{cvData.position}</small>
				</section>
			</aside>
			<section className={"cv-details"}>
				<h2>Experience</h2>
				<ul>
					{cvData.experience.map(experience =>
						<li key={cvData.name}><strong>{experience.years}</strong> - {experience.description}</li>)
					}
				</ul>
				<h2>Education</h2>
				<ul>
					{cvData.education.map(education =>
						<li key={education}>{education}</li>
					)}
				</ul>
			</section>
		</main>
	</React.StrictMode>,
)
