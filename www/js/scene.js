	(function () {
		var scene = new THREE.Scene();
		const aspectRatio = window.innerWidth/window.innerHeight;
		var camera = new THREE.PerspectiveCamera(75,aspectRatio,0.1,100);

		var renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth,window.innerHeight);

		document.body.appendChild(renderer.domElement);
		renderer.shadowMap.enabled = true;
    	renderer.shadowMap.soft = true;
    	renderer.shadowMap.type = THREE.PCFShadowMap;



		camera.position.z = 20;
		camera.position.y = 0;
		let mesh;

  let planeGeometry = new THREE.PlaneGeometry(200,900);
    planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
    let plane = new THREE.Mesh(planeGeometry, groundMaterial);
    plane.receiveShadow  = true;

		var loader = new THREE.TextureLoader();
		loader.load('public/sun.jpg', function(texture){
			let geometry = new THREE.SphereGeometry(5,100,100);
			let material = new THREE.MeshBasicMaterial({
				map: texture
				});
			mesh = new THREE.Mesh(geometry, material);
			mesh.position.y= 0;
			mesh.castShadow = true;
			scene.add(mesh);
		});
	//	let geometry1 = new THREE.BoxGeometry(5,5,5,5);
	//	let geometry2 = new THREE.SphereGeometry( 5, 32, 32 );
	//	let geometry3 = new THREE.SphereGeometry( 5, 2, 10 );
	//	let geometry4 = new THREE.CylinderGeometry( 5, 5, 10, 16 );
		//console.log(groundMaterial);

	//	let mesh1 = new THREE.Mesh(geometry1, groundMaterial);
	//	let mesh2 = new THREE.Mesh(geometry2, groundMaterial);
	//	let mesh3 = new THREE.Mesh(geometry3, groundMaterial);
	//	let mesh4 = new THREE.Mesh(geometry4, groundMaterial);

	//	mesh2.position.x = 10;
	//	mesh3.position.x = -10;
	//	mesh4.position.y = 10;

		let pointLight = new THREE.PointLight(0x404040)

		pointLight.position.y = 80;
		 pointLight.castShadow = true;

		//scene.add(mesh1);
		//scene.add(mesh2);
		//scene.add(mesh3);
		scene.add(plane);
		//scene.add(mesh4);
		scene.background = new THREE.Color(0xeeeeee);
		scene.add(new THREE.AmbientLight(0x404040));
		scene.add(pointLight);

		let controls = new THREE.OrbitControls(camera, renderer.domElement);

		function loop(){
			requestAnimationFrame(loop);
			//console.log("new frame");
			//mesh.rotation.y += 0.002;
			//mesh.rotation.z += 0.002;
			/*mesh2.rotation.y += 0.05;
			mesh2.rotation.z += 0.02;
			mesh3.rotation.y += 0.05;
			mesh3.rotation.z += 0.02;
			mesh4.rotation.y += 0.05;
			mesh4.rotation.z += 0.02;*/
			renderer.render(scene, camera);
		}

		loop();
		
	})();