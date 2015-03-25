# cleanslate.less
An extreme css reset mixin for embeddable widgets. Based on premasagar/cleanslate

## Why?
Sometimes, you want to reset the CSS for a specific element to avoid the parent page styles to blead into your CSS. This is often
 the case when you write embeddable widgets or ads.

## Install

You can chose between _bower and npm to install:

````bash
bower install cleanslate.less
````

or

````bash
npm install cleanslate.less
````

## Usage
Import the ``mixin.less`` and call it from your widget selector.

````less
@import "bower_components/cleanslate.less/src/mixin.less";
      
.my-widget {
  .cleanslate();
}
````
    
    
