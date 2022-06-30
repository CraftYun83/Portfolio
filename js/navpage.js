import {TextGeometry} from "./TextGeometry.js"
import {FontLoader} from "./FontLoader.js"

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x444751 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
var domEvents = new THREEx.DomEvents(camera, renderer.domElement)

const light = new THREE.DirectionalLight( 0xffffff, 5 );
light.castShadow = true;
scene.add( light );

light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500;

const geometry = new THREE.BoxGeometry( 8, 2, 2 );
const material1 = new THREE.MeshBasicMaterial( { color: 0x2f3335 } );
const material2 = new THREE.MeshBasicMaterial( { color: 0x2f3335 } );
const material3 = new THREE.MeshBasicMaterial( { color: 0x2f3335 } );
const material4 = new THREE.MeshBasicMaterial( { color: 0x2f3335 } );

const rec1 = new THREE.Mesh( geometry, material1 );
const rec2 = new THREE.Mesh( geometry, material2 );
const rec3 = new THREE.Mesh( geometry, material3 );
const rec4 = new THREE.Mesh( geometry, material4 );

var rec1intersect = false;
var rec2intersect = false;
var rec3intersect = false;
var rec4intersect = false;
var txt1intersect = false;
var txt2intersect = false;
var txt3intersect = false;
var txt4intersect = false;  

var anyhighlighted = false;

rec2.position.y = 2
rec3.position.y = 4
rec4.position.y = 6

light.position.set(camera.position);


// --------------------

domEvents.addEventListener(rec1, "mouseover", () => { rec1intersect = true; })
domEvents.addEventListener(rec1, "mouseout", () => { rec1intersect = false; })

domEvents.addEventListener(rec2, "mouseover", () => { rec2intersect = true; })
domEvents.addEventListener(rec2, "mouseout", () => { rec2intersect = false; })

domEvents.addEventListener(rec3, "click", () => {window.location.href = "projects.html"})
domEvents.addEventListener(rec3, "mouseover", () => { rec3intersect = true; })
domEvents.addEventListener(rec3, "mouseout", () => { rec3intersect = false; })

domEvents.addEventListener(rec4, "mouseover", () => { rec4intersect = true; })
domEvents.addEventListener(rec4, "mouseout", () => { rec4intersect = false; })

// --------------------

var loader = new FontLoader();

loader.load('./helvetiker_regular.typeface.json',function(font){

    var textgeometry1 = new TextGeometry( 'Contact', {
        font: font,
        size: 1.4,
        height: 1,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 0.1
    } );
    var txt_mat = new THREE.MeshBasicMaterial({color:0xcbcbcb});
    var txt1 = new THREE.Mesh(textgeometry1, txt_mat);
    txt1.position.z += 0.1
    txt1.position.x -= 3.6
    txt1.position.y -= 0.6
    
    rec1.add(txt1);

    domEvents.addEventListener(txt1, "mouseover", () => { txt1intersect = true; })
    domEvents.addEventListener(txt1, "mouseout", () => { txt1intersect = false; })

    var textgeometry2 = new TextGeometry( 'About Me', {
        font: font,
        size: 1.3,
        height: 1,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 0.1
    } );
    var txt2 = new THREE.Mesh(textgeometry2, txt_mat);
    txt2.position.z += 0.1
    txt2.position.x -= 3.9
    txt2.position.y -= 0.6
    
    rec2.add(txt2);

    domEvents.addEventListener(txt2, "mouseover", () => { txt2intersect = true; })
    domEvents.addEventListener(txt2, "mouseout", () => { txt2intersect = false; })

    var textgeometry3 = new TextGeometry( 'Projects', {
        font: font,
        size: 1.3,
        height: 1,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 0.1
    } );
    var txt3 = new THREE.Mesh(textgeometry3, txt_mat);
    txt3.position.z += 0.1
    txt3.position.x -= 3.4
    txt3.position.y -= 0.6
    
    rec3.add(txt3);

    domEvents.addEventListener(txt3, "mouseover", () => {txt3intersect = true;})
    domEvents.addEventListener(txt3, "click", () => {window.location.href = "projects.html"})
    domEvents.addEventListener(txt3, "mouseout", () => {txt3intersect = false;})

    var textgeometry4 = new TextGeometry( 'Home', {
        font: font,
        size: 1.4,
        height: 1,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 0.1
    } );
    var txt4 = new THREE.Mesh(textgeometry4, txt_mat);
    txt4.position.z += 0.1
    txt4.position.x -= 2.6
    txt4.position.y -= 0.6
    
    rec4.add(txt4);

    domEvents.addEventListener(txt4, "mouseover", () => {txt4intersect = true;})
    domEvents.addEventListener(txt4, "mouseout", () => {txt4intersect = false;})
})

// --------------------
// Intersect: rec3.material.color.setHex(0x32a3ea)
// Normal: rec4.material.color.setHex(0x2f3335)
// --------------------

rec1.receiveShadow = true;
rec2.receiveShadow = true;
rec3.receiveShadow = true;
rec4.receiveShadow = true;
rec1.castShadow = true;
rec2.castShadow = true;
rec3.castShadow = true;
rec4.castShadow = true;

scene.add( rec1 );
scene.add( rec2 );
scene.add( rec3 );
scene.add( rec4 );

camera.position.x = -1.8662874327764594;
camera.position.y = 5.495582865373693;
camera.position.z = 10.451758501211435;
camera.rotation.x = -0.19683223898040414;
camera.rotation.y = -0.6046704081680452;
camera.rotation.z = -0.00394647046439155;

var currentimg = ""

function animate() {
    requestAnimationFrame( animate );

    if (rec1intersect || txt1intersect) {
        rec1.position.lerp(new THREE.Vector3(-1, 0, 0), 0.1);
        rec1.material.color.setHex(0x32a3ea)
    } else {
        rec1.position.lerp(new THREE.Vector3(0, 0, 0), 0.1);
        rec1.material.color.setHex(0x2f3335)
    }

    ;

    if (rec2intersect || txt2intersect) {
        rec2.position.lerp(new THREE.Vector3(-1, 2, 0), 0.1);
        rec2.material.color.setHex(0x32a3ea)
    } else {
        rec2.position.lerp(new THREE.Vector3(0, 2, 0), 0.1);
        rec2.material.color.setHex(0x2f3335)
    }

    ;

    if (rec3intersect || txt3intersect) {
        rec3.position.lerp(new THREE.Vector3(-1, 4, 0), 0.1);
        rec3.material.color.setHex(0x32a3ea)
    } else {
        rec3.position.lerp(new THREE.Vector3(0, 4, 0), 0.1);
        rec3.material.color.setHex(0x2f3335)
    }

    ;

    if (rec4intersect || txt4intersect) {
        rec4.position.lerp(new THREE.Vector3(-1, 6, 0), 0.1);
        rec4.material.color.setHex(0x32a3ea)
    } else {
        rec4.position.lerp(new THREE.Vector3(0, 6, 0), 0.1);
        rec4.material.color.setHex(0x2f3335)
    }

    renderer.render( scene, camera );

}
animate();