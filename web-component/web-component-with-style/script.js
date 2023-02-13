class WebComponentWithStyle extends HTMLElement {
  connectedCallback () {
    console.log('connectedCallback')

    const div1 = document.createElement('div')
    div1.setAttribute('class', 'my-div1')
    div1.innerHTML = 'This is my div 1 in web component.'

    const div2 = document.createElement('div')
    div2.setAttribute('class', 'my-div2')
    div2.innerHTML = 'This is my div 2 in web component.'

    const shadowRoot = this.attachShadow({ mode: 'closed' })
    shadowRoot.append(div1)
    shadowRoot.append(div2)

    const style = document.createElement("style")
    style.textContent = `
      div {
        background: blue;
      }
      div.my-div2 {
        background: var(--my-css-var, yellow);
      }
      :host {
        background: green;
      }
    ` // the :host selects the shadow host only
    shadowRoot.append(style);
  }
}

window.customElements.define('web-component-with-style', WebComponentWithStyle)