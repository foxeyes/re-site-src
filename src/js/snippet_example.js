import { BaseComponent } from '../../symbiote/core/BaseComponent.js';

class SnippetExample extends BaseComponent {}

SnippetExample.template = /*html*/ `
<div class="wrapper">
  <div class="data" loc="textContent: first"></div>
  <div class="data" loc="textContent: second"></div>
</div>
`;

SnippetExample.bindAttributes({
  first: ['local'],
  second: ['local'],
});

SnippetExample.reg();