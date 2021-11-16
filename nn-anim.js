button = document.querySelector(".button")
layer1 = document.querySelectorAll(".layer1")
layer2 = document.querySelectorAll(".layer2")
layer3 = document.querySelectorAll(".layer3")
layer4 = document.querySelectorAll(".layer4")
const LAYERS = [layer1, layer2, layer3, layer4]

layer12_conn = document.querySelectorAll(".layer12")
layer23_conn = document.querySelectorAll(".layer23")
layer34_conn = document.querySelectorAll(".layer34")
const CONNECTIONS = [layer12_conn, layer23_conn, layer34_conn]

button.addEventListener("click", changeLayer)

function changeLayer() {
    changeLayerAnimation(LAYERS)
}

const changeLayerAnimation = (LAYERS) => {
    // Keep in mind that all the neurons of a layer have the animation.
    // Therefore, layer[0] will contain the same class as the rest
    // of the layers
    let prevLayer = LAYERS.find(layer => layer[0].classList.contains("animate-circle"))
    let prevLayerIndex = LAYERS.indexOf(prevLayer)
    // If prevLayer is the last layer, set the nextLayer as the first layer
    let nextLayer = prevLayerIndex == LAYERS.length - 1 ? LAYERS[0] : LAYERS[prevLayerIndex + 1]
    let nextLayerIndex = LAYERS.indexOf(nextLayer)

    for (let i = 0; i < prevLayer.length; i++) {
        prevLayer[i].classList.remove("animate-circle")
        prevLayer[i].classList.remove("circle-stroke")
    }

    for (let i = 0; i < nextLayer.length; i++) {
        nextLayer[i].classList.add("animate-circle")
        nextLayer[i].classList.add("circle-stroke")
    }

    // Now we want to get the previous animated connections (prevConn) and the
    // connections we're going to animate nextConn
    // 
    // Keep in mind, it will always be 1 less "layer of connections" than the number
    // of neuron layers. Therefore, LAYERS.length-2 == CONNECTIONS.length-1.
    //
    // Also, take into account that in the following code, the animated connection is intentionally
    // repeated if the animated layer is the penultimate or the last one
    let nextConnIndex = nextLayerIndex == LAYERS.length - 1 ? CONNECTIONS.length - 1 : nextLayerIndex
    let prevConnIndex = nextConnIndex == 0 ? CONNECTIONS.length - 1 : nextConnIndex - 1
    let prevConn = CONNECTIONS[prevConnIndex]
    let nextConn = CONNECTIONS[nextConnIndex]

    for (let i = 0; i < prevConn.length; i++) {
        prevConn[i].classList.remove("animate-connection")
    }

    for (let i = 0; i < nextConn.length; i++) {
        nextConn[i].classList.add("animate-connection")
    }
}