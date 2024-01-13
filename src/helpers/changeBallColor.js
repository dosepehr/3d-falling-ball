const changeBallColor = (ballMesh) => {
    const ballY = ballMesh.position.y;
    if (ballY < 8) {
        ballMesh.material.color.set('#90EE90');
    } else {
        ballMesh.material.color.set('red');
    }
};

export default changeBallColor;
