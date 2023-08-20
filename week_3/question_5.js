function generateElements(textColor) {
  return function addElement(tag, text) {
    const element = document.createElement(tag)
    element.textContent = text
    element.style.color = textColor
    document.body.appendChild(element)
  }
}

const addRedElement = generateElements("red")
const addBlueElement = generateElements("blue")

addRedElement("div", "Hello World")
addRedElement("span", "Hello Span")
addBlueElement("h1", "Hello All")
