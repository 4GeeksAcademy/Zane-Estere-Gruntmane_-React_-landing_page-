import React from "react";
import Navbar from "./component/Navbar";
import Head from "./component/Head";
import Card from "./component/Card";
import Button from "./component/Button";


const Home = () => {

	return (
		<div>
			<Navbar />
			<Head /> 
			<div className = "Containar-Card container-fluid  d-inline-flex"> 
			<Card
			imageUrl="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/545a20ba-bc78-4a39-9eb7-790c2eb64919-0.png"
			title="X-Men Universe"
			description="Why do the X-Men always excel in spelling bees? Because they have a real Magneto when it comes to finding the right words!"
			/>
			<Card
			imageUrl="https://chat-gpt.photos/image-proxy/35581523-cab8-4a72-971c-24cc80eb743a-0.png"
			title="The Infinity Saga"
			description="Why did Marvel's Infinity Saga feel like the longest road trip ever? Because they took more detours than a GPS with a sense of adventure!"
			/>
			<Card
			imageUrl="https://chat-gpt.photos/image-proxy/aed9ca4e-80a1-43c8-b917-b51dc8575a3c-2.png"
			title="The Multiverse Saga"
			description="I am Groot! Translating - In the Multiverse Saga, it's like a forest of possibilities, but with more capes and fewer leaves!"
			/>
			<Card
			imageUrl="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/545a20ba-bc78-4a39-9eb7-790c2eb64919-0.png"
			title="Future"
			description="In the Avengers' future, Thor's hammer will have a built-in espresso machine, and the Hulk's secret weapon will be his newfound ability to understand tech support without getting angry."
			/>
			</div> 
			<div className = "Container-button container-fluid  d-inline-flex space-between"> 
			<Button text= "Come and Find" /> 
            <Button text= "Take a Long Road" />
            <Button text = "Walk the Forest"  />
            <Button text = "Found the Future" /> 
			</div>

         </div>
	);
};
export default Home; 
