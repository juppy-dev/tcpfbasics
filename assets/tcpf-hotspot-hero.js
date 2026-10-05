class TCPFHotspotHero extends HTMLElement {
  #controller;
  #activeButton;

  connectedCallback() {
    this.#controller = new AbortController();
    const { signal } = this.#controller;
    this.addEventListener('click', this.#onClick, { signal });
    this.addEventListener('keydown', this.#onKeydown, { signal });
    document.addEventListener('pointerdown', this.#onOutsidePointer, { signal });

    // Keep content and links available when JavaScript is unavailable.
    this.querySelectorAll('[data-panel]').forEach((panel) => { panel.hidden = true; });
    this.querySelectorAll('[data-hotspot], [data-close]').forEach((button) => { button.hidden = false; });
    this.dataset.enhanced = '';
  }

  disconnectedCallback() {
    this.#controller?.abort();
    this.#close(false);
  }

  #onClick = (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest('[data-hotspot]');
    if (button) {
      const wasOpen = this.#activeButton === button;
      this.#close(false);
      if (wasOpen) return;
      const panel = this.querySelector(`[data-panel="${button.dataset.hotspot}"]`);
      if (!panel) return;
      this.#activeButton = button;
      button.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
      panel.querySelector('h2')?.focus();
    } else if (event.target.closest('[data-close]')) {
      this.#close(true);
    }
  };

  #onKeydown = (event) => {
    if (event.key === 'Escape' && this.#activeButton) {
      event.preventDefault();
      this.#close(true);
    }
  };

  #onOutsidePointer = (event) => {
    if (!this.#activeButton || !(event.target instanceof Node)) return;
    if (this.querySelector('[data-panel]:not([hidden])')?.contains(event.target)) return;
    if (event.target instanceof Element && this.contains(event.target.closest('[data-hotspot]'))) return;
    this.#close(false);
  };

  #close(returnFocus) {
    this.querySelectorAll('[data-panel]').forEach((panel) => { panel.hidden = true; });
    if (!this.#activeButton) return;
    this.#activeButton.setAttribute('aria-expanded', 'false');
    if (returnFocus) this.#activeButton.focus({ preventScroll: true });
    this.#activeButton = undefined;
  }
}

if (!customElements.get('tcpf-hotspot-hero')) {
  customElements.define('tcpf-hotspot-hero', TCPFHotspotHero);
}
