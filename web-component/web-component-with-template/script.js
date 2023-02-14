class WebComponentWithTemplate extends HTMLElement {
  connectedCallback () {
    console.log('connectedCallback')
    const shadowRoot = this.attachShadow({ mode: 'closed' })

    const template = document.getElementById('my-template').content
    shadowRoot.appendChild(template.cloneNode(true))
  }
}

window.customElements.define('web-component-with-template', WebComponentWithTemplate)