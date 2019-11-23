const input = document.querySelector(['input']),
      results = document.getElementById('results'); 
      userData = {
        username: '',
        repos: []
      }

function clearResults() {
  results.innerHTML = "";
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, element) {
  return parent.appendChild(element);
}

function addClass(element, className) {
  return element.classList.add(className);
}