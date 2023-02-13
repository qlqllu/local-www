class MySimpleWebComponent extends HTMLElement {
  constructor () {
    super()
    console.log('constructor')
  }

  static get observedAttributes() {
    return ['p1']
  }

  connectedCallback () {
    console.log('connectedCallback')

    const div1 = document.createElement('div')
    div1.setAttribute('class', 'my-div1')
    div1.innerHTML = 'This is my div 1'

    // when attach using "open", the "shadowRoot" equals "this.shadowRoot"

    // const shadowRoot = this.attachShadow({ mode: 'open' })
    // console.log('is equal:', shadowRoot === this.shadowRoot)
    // this.shadowRoot.append(div1)

    // when attach using "open", this.shadowRoot is null
    const shadowRoot = this.attachShadow({ mode: 'closed' })
    console.log('is equal:', shadowRoot === this.shadowRoot)
    shadowRoot.append(div1)
  }

  disconnectedCallback () {
    console.log('disconnectedCallback')
  }

  adoptedCallback () {
    console.log('adoptedCallback')
  }

  attributeChangedCallback (name, oldValue, newValue) {
    console.log('attributeChangedCallback', name, oldValue, newValue)
  }
}

window.customElements.define('my-simple-web-component', MySimpleWebComponent)