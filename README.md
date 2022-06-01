# tailwindcss-react-native-snack

Precompiled styles for tailwindcss-react-native designed to be used in the snack examples.

Add Tailwind CDN for web.

Not all tailwindcss-react-native features are supported - just enough for the demos.

Additional classes can be added via `content.txt`

ClassNames can be extracted from the Tailwind CSS docs with this snippet

```
console.log(...[...document.getElementsByTagName('table')[0].children[1].children].map(child => child.children[0].innerHTML).join("|\n").split("|"))
```
