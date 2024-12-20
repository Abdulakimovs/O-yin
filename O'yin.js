// Three.js uchun asosiy sahnani yaratish
const scene = new THREE.Scene();

// Kamera yaratish
const camera = new THREE.PerspectiveCamera(
    75, // FOV
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near
    1000 // Far
);
camera.position.z = 5; // Kameraning boshlang'ich joylashuvi

// Renderer yaratish
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("game").appendChild(renderer.domElement);

// O'yin kubini yaratish
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Oddiy tuproq va boshqa kublarni joylashtirish
const generateBlocks = () => {
    const blockSize = 1;
    const blockCount = 10;
    for (let x = 0; x < blockCount; x++) {
        for (let z = 0; z < blockCount; z++) {
            const blockGeo = new THREE.BoxGeometry(blockSize, blockSize, blockSize);
            const blockMat = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
            const block = new THREE.Mesh(blockGeo, blockMat);

            block.position.set(x - blockCount / 2, -1, z - blockCount / 2);
            scene.add(block);
        }
    }
};
generateBlocks();

// Animatsiya uchun funksiya
function animate() {
    requestAnimationFrame(animate);

    // Kubni aylantirish (demo uchun)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();

// Oyna o'lchami o'zgarganda qayta o'lchash
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
