class TagBox extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const className = this.attributes.class.value;
    const text = this.attributes.text.value;

    this.innerHTML = `
       <div class="tag ${className} text-sm text-dark_grey">${text}</div>  
      `;

  }
}

customElements.define("tag-box", TagBox);
