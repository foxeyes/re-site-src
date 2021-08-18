## File Uploads with HTML

It is quite common for websites or apps to allow a user to upload files as a feature or part of a feature. For example, HTML file uploads could be used to allow users to upload avatars, or allow an internal team to upload photos of products to a website or app. In this tutorial we will briefly look at file uploads, and how to set this up in your coding. This tutorial assumes some knowledge and understanding of coding and web development. This post is meant as a brief overview. Let’s get into it!

```html
<label for="photo">Choose a photo!</label>

<input 
  type="file"
  id="photo" name="photo"
  accept="image/*">
```

