# Styleguide starter

Netlife Research Metalsmith starter for living stylguides with Knyle Style Sheets (KSS).

Install the package:
`npm i starter-styleguide`

Require and run like this:
```javascript
var kss = require('starter-styleguide');
kss();
```

Use KSS like this:
```javascript
// A button suitable for giving a star to someone.
//
// :hover             - Subtle hover highlight.
// .star-given        - A highlight indicating you've already given a star.
// .star-given:hover  - Subtle hover highlight on top of star-given styling.
// .disabled          - Dims the button to indicate it cannot be used.
//
// Styleguide 2.1.3.
a.button.star{
  ...
  &.star-given{
    ...
  }
  &.disabled{
    ...
  }
}
```
[kss documentation](http://warpspire.com/kss/syntax/)

### Dependencies
* [kss](http://warpspire.com/kss/)
* [Handlebars](http://handlebarsjs.com/)
