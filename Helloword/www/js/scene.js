(function () {
	var scene = new THREE.Scene();
	const aspectRatio = window.innerWidth/window.innerHeight;
	var camera = new THREE.PerspectiveCamera(75,aspectRatio,0.1,100);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth,window.innerHeight);

	document.body.appendChild(renderer.domElement);

	camera.position.z = 2;
	camera.position.y = 2;

	let geometry = new THREE.BoxGeometry(1,1,1,1);
	let groundMaterial = new THREE.MeshPhongMaterial({
		color: Math.random() * 0xffff00
	});
	//console.log(groundMaterial);
	let mesh = new THREE.Mesh(geometry, groundMaterial);

	let pointLight = new THREE.PointLight(0x404040)

	pointLight.position.y = 80;

	scene.add(mesh);
	scene.add(new THREE.AmbientLight(0x404040));
	scene.add(pointLight);

	function loop(){
		requestAnimationFrame(loop);
		//console.log("new frame");
		renderer.render(scene, camera);
	}

	loop();
	
})();