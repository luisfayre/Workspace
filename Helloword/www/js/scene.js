(function () {
	var scene = new THREE.Scene();
	const aspectRatio = window.innerWidth/window.innerHeight;
	var camera = new THREE.PerspectiveCamera(75,aspectRatio,0.1,100);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth,window.innerHeight);

	document.body.appendChild(renderer.domElement);

	//renderer.render(scene, camera);

	function loop(){
		requestAnimationFrame(loop);
		console.log("new frame");
		renderer.render(scene, camera);
	}

	loop();
	
})();