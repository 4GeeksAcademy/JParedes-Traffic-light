import React, {useState} from "react";

//include images into your bundle


//create your first component

const Home = () => {
	
	
		const [color, setColor] = useState("null");
		

		let redExtraClass = " ";
		if(color === "red") redExtraClass = "selected"
		let yellowExtraClass = " ";
		if(color === "yellow") yellowExtraClass = "selected"
		let greenExtraClass = " ";
		if(color === "green") greenExtraClass = "selected"

		

		return (
			<div className="container">
			<div id = "trafficTop"></div>
			<div id="semaforo">
			<div className = {"red light " + redExtraClass} onClick={()=>{setColor("red")}}></div>
			<div className={"yellow light " + yellowExtraClass} onClick={()=>{setColor("yellow")}}></div>
			<div className={"green light " + greenExtraClass} onClick={()=>{setColor("green")}}></div>
			</div>
			
			</div>
			
		  
		);
	  };
	  

export default Home;
