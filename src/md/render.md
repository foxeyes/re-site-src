## Import resources

```html
<!-- Import any external HTML chunk or component: -->
<re-htm src="htm/page.htm"><re-htm>

<!-- Import and render Markdown: -->
<re-md src="md/article.md"><re-md>

<!-- Import and render code snippet: -->
<re-code src="js/snippet.js"><re-code>

<!-- Import Javascript on demand: -->
<re-js src="js/app.js"><re-js>

<!-- Import styles: -->
<re-css src="css/styles.css"><re-css>

<!-- Adaptive images: -->
<re-img src="img/picture.jpg"><re-img>

<!-- Rendering from external data endpoint: -->
<re-peat 
  template-src="htm/user-card-template.htm"
  data-src="data/users.json">
<re-peat>
```
Use *.html file names for entry points and *.htm for chunks and templates

### Named Slots:

```html
<re-htm src="html/page.htm">
  <div slot="content"></div>
<re-htm>
```
In HTML Chunk:
```html
<div>
  <slot name="content"></slot>
</div>
```
### Placeholders for arttribute values:

Set custom HTML attributes:
```html
<re-htm src="html/page.htm" --text="My Text"><re-htm>
```
Then use values in template:
```html
<div>{{text}}</div>
```
### Build stage helper attributes
Clear element content (remove children):
```html
<my-component re-clear><my-component>
```

Remove cetrain element after render:
```html
<my-component re-move><my-component>
```