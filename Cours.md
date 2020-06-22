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


pour faire du conditionnal rendering :

on utilise v-if , le point important sur le v-if , c'est qu'il ne cache pas , il ne passe pas en commentaire l'element , il le supprime.

on peux notamment utilisé v-else qui va référé au dernier v-if utilisé

template tag est une balise html 5 qui n'apparait pas dans le rendu html, il permet d'utilisé v-if etc

la difference avec d'autre balise c'est qu'on peut wrap plusieurs elements

```html
<template v-if="show">
    <h1>Heading</h1>
    <p>Inside a teamplate</p>
</template>
```
il y a aussi v-show qui va avoir le meme comportment que v-if mais le contenu sera en display none donc toujours present

rendering List : 

pour boucler sur vue, on utilise v-for
```html
<ul>
    <li v-for="(ingredient , i) in ingredients" >{{ ingredient }} ({{ i }})</li>
</ul>
le premier argument a mettre dans v for est le nom de la variable , puis on doit mettre le mot " in " puis la data sur lequel on veut boucle. Pour avoir l'index de chaque , on doit rentrer comme second argument i et le faire apparaitre dans le contenu

syntax alternative pour v-for :
```html
<template v-for="(ingredient,index) in ingredient">
    <p>{{ ingredient }}<p>
    <p>{{ index }}<p>
</template>
```

pour utilisé plusieurs instance de vue : changer la valeur de l'element " el : '#' "

pour acceder a l'instance en etant en dehors , il faut stocker l'instance de la vue dans une valeur pour pouvoir la manipuler ( utilisation du vanilla pur )

On ne peux pas rajouter des props en etant a l'exterieur de l'instance de la Vue.

ref est un attribus html qui peut etre utilisé n'importe ou et qui permet de faire du DOM
```js
this.$refs.valeurDonné.innerHTML = "nouvelle value"
```

pour instancier la vue , il faut passer par l'element ' el ' mais on peut le faire aussi en passant par la méthode mount natif de vue ( vm1 variable ou l'on stock la vue )

```js
vm1.$mount('#app');
```
la methode teamplate permet de généré du contenu dans la vue
```js
template : '<h1>Hello !</h1>
```

VueJs est un framework tres rapide dans l'utilisation du DOM car il passe par un virtual DOM pour faire ces changements ce qui allege le DOM puisqu'il que le virtual DOM n'aura qu'a update les props qui sont dans la vue instance dans le DOM


Pour installer un projet vue il faut : installer vue CLI il permet l'utilisation de template 

npm install -g vue-cli (ou commande plus actuel npm install -g @vue/cli)

ensuite il faut crée le projet Vue : 

vue init (template voulus) (nom du projet) / (ou commande plus actuel vue create (nom du projet))
https://cli.vuejs.org/
le template webpack-simple ne supporte pas le SASS ni le css local a évité !


il est important de mettre dans la balise script  export default car il permet l'interpolation de donnée ce qui permet et de rendre dynamique l'interface
```js
<script>
export default {

}
</script>
```
**commande pour le terminal**

pour lancer un projet dans le navigateur il faut faire la commande :

npm run dev

pour deployer le projet / mettre en production il faut faire la commande :

npm run build

**les composants : ** 

le principe d'un composant est de séparé chaque partie d'une page en un composant indépendant qu'on l'on peut réutilisé a volonté. elle permet une indépendance des elements donc si le composant crash ca ne fais pas crash toute l'application

pour en crée un component : 
```js

Vue.component('nomChoisisPourLeComponent');  

// + instanciation de la Vue
```
```html 
<nomChoisisPourLeComponent></nomChoisisPourLeComponent>
```

**pour stocker des datas dans un composant** 

il faut transformer la props data en fonction :

```js
Vue.component('nomChoisisPourLeComponent', {
    data(){
        return {
            status : 'crtical',
        }
    },
    template : '<p>Server Status: {{ status}} </p>'
});  
```
cependant si il y a deux composant qui ont utilisé sur la meme page , les changements de props vont se faire un par un pour que les deux composant soit synchrone il faut passé par un objet crée en dehors de la Vue

```js
let data = {
    status : 'critical'
};

Vue.component('nomChoisisPourLeComponent', {
    data(){
        return data;
    },
    template : '<p>Server Status: {{ status}} </p>'
});
```

**mettre un component en local / global**

en local :

pour mettre un component en local il faut stocker les methodes de l'instanciation de la vue dans une variable puis déclaré la props component dans l'instantiation de la vue
```js

var localComp = {
    data(){
        
        }
    },
    template: '',
    methods : {

    },    
};

new Vue ({
    el : ''
    components : {
        'my-component' : localComp
    }
})

```

en global :

```js
vue.component('my-component', {
    // les props du component 
    })
```

**pour crée un component**

il faut crée un component avec vue.component dans le main.js avec comme argument le nom du fichier ou est crée le component

il faut penser a wrap tout ton element dans la balise template sinon il va detecter l'erreur comme quoi tu root sur plusieurs element.

**Styliser ces composants**

pour introduire du style qui sera uniquement viable dans un composant il faut inserer la propriété **scoped** sinon le style sera viable pour tout le html.VueJs crée par cette propriété une id propre au composant data-v-... et crée des liens css dans la partie head