## Re-server

You can use one common HTML-temlate defined for each resource directory.

To make it work, set it in your `project.json` file:

```json
{
  "serve": {
    "port": 5000,
    "src_cfg": [
      {
        "type": "html",
        "src_path": "/src/sections",
        "out_path": "/dist/sections",
        "template": {
          "path": "./src/htm/base-template.htm",
          "set_values": {
            "TITLE": "🎈re4ma",
            "DESCRIPTION": "re4ma",
            "HEADER_TXT": "🎈re4ma",
            "FOOTER_TXT": "&copy; 2021",
            "BASE_PATH": "../",
            "CSS_PATH": "./css/styles.css"
          }
        }
      }
    ]
  }
}
```

And create auto-template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{TITLE}}</title>
  <meta name="description" content="{{DESCRIPTION}}">
  <base href="{{BASE_PATH}}">
  <link rel="stylesheet" href="{{CSS_PATH}}">
  <script src="../re4ma/render/render.js" type="module" re-move></script>
</head>
<body>
<re-htm 
  src="./htm/page-layout.htm"
  --header-txt="{{HEADER_TXT}}"
  --footer-txt="{{FOOTER_TXT}}">{{CONTENT}}</re-htm>
</body>
</html>
```

