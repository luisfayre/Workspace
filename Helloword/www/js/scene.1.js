(function () {
	var scene = new THREE.Scene();
	const aspectRatio = window.innerWidth / window.innerHeight;
	var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	var controls = new THREE.TrackballControls(camera);

	camera.position.z = 30;
	camera.position.y = 0;

	//MATERIAL
	let groundMaterial = new THREE.MeshPhongMaterial({
		color: Math.random() * 0xfffff00,
	});
	//TAZA DE TE
	var taza = new THREE.SphereBufferGeometry(9, 32, 32, 6, 6.3, 1, 4.3);
	var cil = new THREE.CylinderGeometry(6.9, 9, 4, 64, 64, true, 6, 6.3);
	var plato = new THREE.ConeGeometry(12, 1, 61, 64, false, 6, 6.3);
	var agaradera = new THREE.TorusGeometry(4, 0.4, 22, 200, 3.5);

	var torus_agaradera = new THREE.Mesh(agaradera, groundMaterial);
	torus_agaradera.rotation.set(0, 0, 1.4);
	torus_agaradera.position.set(-8, -0.8, 0);

	var sphere_taza = new THREE.Mesh(taza, groundMaterial);
	var sphere_plato = new THREE.Mesh(plato, groundMaterial);
	sphere_plato.position.set(0, -9.4, 0);
	var cylinder = new THREE.Mesh(cil, groundMaterial);
	cylinder.position.set(0, -7.8, 0);


	for (var i = 0; i < 5; i++) {
		var sphere_taza = new THREE.Mesh(taza, groundMaterial);
		var sphere_plato = new THREE.Mesh(plato, groundMaterial);
		var cylinder = new THREE.Mesh(cil, groundMaterial);
		var torus_agaradera = new THREE.Mesh(agaradera, groundMaterial);

		var torus_agaradera = new THREE.Mesh(agaradera, groundMaterial);
		torus_agaradera.rotation.set(0, 0, 1.4);
		torus_agaradera.position.x = Math.random() * 200 - 100;
		torus_agaradera.position.y = -0.8;
		torus_agaradera.position.z = Math.random() * 200 - 100;

		var sphere_taza = new THREE.Mesh(taza, groundMaterial);
		sphere_taza.position.x = torus_agaradera.position.x + 8;
		sphere_taza.position.z = torus_agaradera.position.z;

		var sphere_plato = new THREE.Mesh(plato, groundMaterial);
		sphere_plato.position.x = sphere_taza.position.x;
		sphere_plato.position.y = sphere_taza.position.y - 9.4;
		sphere_plato.position.z = sphere_taza.position.z;

		var cylinder = new THREE.Mesh(cil, groundMaterial);
		cylinder.position.x = sphere_taza.position.x;
		cylinder.position.y = sphere_taza.position.y - 7.8;
		cylinder.position.z = sphere_taza.position.z;

		scene.add(torus_agaradera);
		scene.add(sphere_taza);
		scene.add(sphere_plato);
		scene.add(cylinder);
	}

	let pointLight = new THREE.PointLight(0x404040);
	pointLight.position.y = 80;
	let pointLight2 = new THREE.PointLight(0x404040);
	pointLight2.position.z = 80;
	pointLight2.position.x = 80;
	scene.add(new THREE.AmbientLight(0x404040));
	scene.add(pointLight);
	scene.add(pointLight2);

	//	scene.add(torus_agaradera);

	function loop() {
		controls.update();
		requestAnimationFrame(loop);
		renderer.render(scene, camera);
	}

	loop();

})();