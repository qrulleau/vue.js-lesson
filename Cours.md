Why vues js :

extremly lean & small (16kb)
best runtime performance ( react 3rd wtf )

sous vue pour instancier une vue il faut toujours :

```html
v-on est une directive changeTitle est une methode

<script src="https://unpkg.com/vue/dist/vue"></script>

<div id="app">
  <input type="text" v-on:input="changeTitle" />
  <p>{{ title }}</p>
  <div />
</div>
```

```js

// Vue est une fonction constructeur
// data est un object
new Vue ({
el : "#app";
data : {
    title : "hello world!"
},
methods : {
    changeTitle: function(e){
        this.title = e.target.value;
    }
}

});
```

{{  }} = interpolation string interpolation


directive est une instruction que tu places dans ton code.

exemple : v-ind

v-once : instruction qui permet de pas prendre en compte le changement pour l'element
On met la fonction dans l'interpolation !!!

un des default de vue : 
mettre un a dans une data et le faire afficher dans uen interpolation, ca affichera la stringe complete et non pas l'element il ne render pas du html exemple :

```js
data : {
    finishedLink: '<a href="test">google</>'
}
```
dans le cas ou il y a vraiment besoin de render du html on doit utiliser le v-html
```html
<p v-html="finishedLink"></p>
```

v-on permet d'ecouter un evenemenet ( = addEventListener )