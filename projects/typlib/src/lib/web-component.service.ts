export class WebComponentService {
  private components = new Map<string, CustomElementConstructor>(); // Store registered components

  // Register a custom web component
  registerComponent(tagName: string, componentClass: CustomElementConstructor): void {
    if (!this.components.has(tagName)) {
      customElements.define(tagName, componentClass);
      this.components.set(tagName, componentClass);
    }
  }

  // Get a registered custom web component
  getComponent(tagName: string): CustomElementConstructor {
    const component = this.components.get(tagName);

    if (!component) {
      throw new Error(
        `Component with tag name "${tagName}" is not registered. ` +
        `Please ensure the component is registered using the "registerComponent" method.`
      );
    }

    return component;
  }
}

// Export a singleton instance of the service
export const webComponentService = new WebComponentService();