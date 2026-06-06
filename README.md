# Anniversary Surprise Website

## Files

- `index.html` = page structure
- `style.css` = design and responsive layout
- `script.js` = memories, sunset photos, intro text, and dynamic effects
- `/images` = put your photos and sticker images here
- `/audio` = put your music file here

## Where to edit

Most of your edits will happen in `script.js`.

### Memory sections

Edit the `memories` array:

```js
const memories = [
  {
    title: "Your title",
    subtitle: "Your subtitle",
    image: "images/your-photo.jpg",
    text: "Your write-up"
  }
];
```

### Sunset photos

Edit the `sunsetPhotos` array:

```js
const sunsetPhotos = [
  {
    image: "images/your-sunset.jpg",
    caption: "Your caption"
  }
];
```

### Music

Put your song into the `/audio` folder.

Then in `index.html`, change:

```html
<source src="audio/YOUR-MUSIC-FILE-HERE.mp3" type="audio/mpeg" />
```

to your real file name.

Example:

```html
<source src="audio/song.mp3" type="audio/mpeg" />
```

## Important

The placeholder image paths will not display until you add real images with matching names.
