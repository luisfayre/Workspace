(function () {
	var scene = new THREE.Scene();
	const aspectRatio = window.innerWidth / window.innerHeight;
	var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	camera.position.z = 25;
	camera.position.y = 0;
	let sol;
	let mercurio;
	let venus;
	let tierra;
	let marte;

	var loader = new THREE.TextureLoader();
	loader.load('public/sun.jpg', function (texture) {
		let geometry = new THREE.SphereGeometry(5, 100, 100);
		let material = new THREE.MeshBasicMaterial({
			map: texture
		});
		sol = new THREE.Mesh(geometry, material);
		sol.position.y = 0;
		scene.add(sol);
	});

	loader.load('public/mercurio.jpg', function (texture) {
		let geometry = new THREE.SphereGeometry(0.5, 100, 100);
		let material = new THREE.MeshBasicMaterial({
			map: texture
		});
		mercurio = new THREE.Mesh(geometry, material);
		mercurio.position.y = 5;
		mercurio.position.z = 7;
		scene.add(mercurio);
	});

	loader.load('public/venus.jpg', function (texture) {
		let geometry = new THREE.SphereGeometry(0.6, 100, 100);
		let material = new THREE.MeshBasicMaterial({
			map: texture
		});
		venus = new THREE.Mesh(geometry, material);
		venus.position.y = 6.6;
		venus.position.z = 7;
		scene.add(venus);
	});

	loader.load('public/tierra.jpg', function (texture) {
		let geometry = new THREE.SphereGeometry(0.7, 100, 100);
		let material = new THREE.MeshBasicMaterial({
			map: texture
		});
		tierra = new THREE.Mesh(geometry, material);
		tierra.position.y = 8.2;
		tierra.position.z = 7;
		scene.add(tierra);
	});

	loader.load('public/marte.jpg', function (texture) {
		let geometry = new THREE.SphereGeometry(0.62, 100, 100);
		let material = new THREE.MeshBasicMaterial({
			map: texture
		});
		marte = new THREE.Mesh(geometry, material);
		marte.position.y = 10;
		marte.position.z = 7;
		scene.add(marte);
	});

	loader.load('public/jupiter.jpg', function (texture) {
		let geometry = new THREE.SphereGeometry(1, 100, 100);
		let material = new THREE.MeshBasicMaterial({
			map: texture
		});
		jupiter = new THREE.Mesh(geometry, material);
		jupiter.position.y = 12.5;
		jupiter.position.z = 7;
		scene.add(jupiter);
	});

	loader.load('public/hola.jpg', function (texture) {
		let geometry = new THREE.PlaneGeometry(100, 100,32);
		let material = new THREE.MeshBasicMaterial({
			map: texture
		});
		pr = new THREE.Mesh(geometry, material);
		scene.add(pr);
	});

	let pointLight = new THREE.PointLight(0x404040)
	pointLight.position.y = 80;
	scene.add(new THREE.AmbientLight(0x404040));
	scene.add(pointLight);

	function loop() {
		requestAnimationFrame(loop);
		//console.log("new frame");
		sol.rotation.y += 0.002;
		//sol.rotation.z += 0.002;
		mercurio.rotation.z += 0.002;
		venus.rotation.z += 0.002;
		tierra.rotation.z += 0.002;
		marte.rotation.z += 0.002;
		jupiter.rotation.z += 0.002;
		jupiter.rotation.y += 0.002;
		pr.rotation.y += 0.0002;
		pr.rotation.x += 0.0002;
		renderer.render(scene, camera);
	}

	loop();

})();