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

exemple : v-bind

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

pour stop un event sur un element

```js
stopEvent(event){
    event.stopPropagation();
}
```
ou simplement mettre comme argument stop ou prevent ( pour un form par exemple )

```html
<span v-on:mousemove.stop="endEvent">over event</span>
```


keyup est un event pour ecouter le clavier 
il faut rajouter un key modifier pour ecouter la touche voulus .enter .y .a etc 
```html
<input type="text" v-on:keyup.y="alertMe">
```

annotation de condition et else directement dans le html ( javascript code in the teamplates)

```html
<p>{{ argument > condition ? `condition validé` : `sinon condition non validé` }}</p>
```


v-model permet de faire du data binding sans passé par une fonction se qui rend plus simple et permet d'adapter la valeur dynamiquement ( surtout pour des forms )
il combine le v-bind et le v-on

lorsque l'on instancie une Vue, elle comprend :

el: "", = connecté la vue au DOM avec l'element choisis

data: { value = "", }, = endroit pour stocker des valeurs

methods: { function(){}, }, = endroit pour stocker des fonction qu'on apelle des methods

computed: {} = permet une dependance des fonctionnalités notamment grace a la mise en cache ce celle ci, les function appeler dedans ont aucun arguments comparé a methods 

watch :{} = code qui s'execute a la fin de l'utilisation d'une fonction

shortcut pour les v-:

v-on: ---> @:
v-bind ---> :