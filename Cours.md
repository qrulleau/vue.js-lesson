**introduction :** 

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

computed: {} = permet une dependance des fonctionnalités notamment grace a la mise en cache ce celle ci, les function appeler dedans ont aucun arguments comparé a methods, essentiellement des fonctions pour formatter / afficher des datas.

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

pour introduire du style qui sera uniquement viable dans un composant il faut inserer la propriété **scoped** sinon le style sera viable pour tout le html.VueJs crée par cette attribus une id propre au composant data-v-... et crée des liens css dans la partie head et cela permet de voir si le css est bien affecté uniquement au composant choisis.

**pour communiquer entre chaque composant**

parent/enfant :

il faut utiliser des props qui est une methodes qui permet de set une property qui sera settable en dehors du composant

```vue
<script>
export default {
    props: ['name']
}
</script>
```
puis mettre la props en attribus, sur le composant concerné et de le v-bind pour rentre dynamique la data qui sera dedans 

```html
<mon-composant :name="name"></mon-composant>
<script>
export default {
    data(){
        return {
            name: "max"
        },
    },
}
</script>
```

!!! attention dans un template single file il est possible de mettre des noms de variables en uppercase "myName" mais dans les autres templates il est impossible a cause du DOM restriction

**pour forcer le type d'un props**

il faut déclaré props comme un objet et lui faire passé la valeur d'un props et le type de donné voulus ( possible de mettre plusieurs type grace a un tableau)

```js
props: {
    name : String,
    name : [String , Array],
    name : {
        type: string,
        //required : true,
        default: "max" 
    },
    name : {
        type: object,
        default : function(){
            return {
                name: "max"
            }
        }
    }
},
```
si le type est un object ou array alors il faudra passé une fonction dans default 

**pour faire passer une props du child jusqu'au parent :**

lors de la création d'une methods pour qu'elle soit valabla dans l'element parent il faut déclaré $emit dans l'elemet enfant :

```js
( "nomDeVariableRandom" , laDataEnQuestion )
```
puis dans l'element parent déclaré un v-on avec le nom de la data = $event
```html
<nom-du-component @nomDeVariableRandom="laDataEnQuestion = $event"></nom-du-component>
```

**pour passer des datas entre deux child :**

1er methode : 

il faut faire comme une route avec le parent component pour ce faire il faut utilisé la méthode pour passer des props du child jusqu'au parent

2eme methode : 

callback solution cad de definir une methods dans le parent component ensuite de le passer dans une fonction et executé la fonction dans le componsant voulus

3eme methode : 

utlisation d'une classe / objet global pour passer des datas cad que dans le fichier main.js on va exporter une constante qui va contenir l'instanciation d'une vue et par cette constance 

```js
export const eventsBus = new Vue();
```

puis on va importer l'importer dans nos composant

```js
import { eventsBus } from '../main';
```
puis il faut emet a partir de cette objet , c'est reproduire la methode 1 en passant par cette objet. Puis crée un ecouteur sur cette object
```js
methods:{
    function(){
        eventsBus.$emit("NomDeVariable", this.variable)
    }
},
created(){
    this.eventsbus.$on();
}
```
https://pro.academind.com/courses/766397/lectures/13879565

4eme methode ( plus simple ) :

passer les props directement dans l'instanciation de vue crée dans main.js 

```js
export const eventsBus = new Vue({
    methods : {

    },
    data : {

    }
});
etc etc 
``` 

**pour faire apparaitre le contenu du component dans l'element parent :**

pour ce faire vue a un tag dédié a cette manipulation "<slot></slot>", il faut le mettre dans l'element enfant , et dans la parent il faut mettre le contenu crée dans le composant !

```html

element parent : 

<template>
    <div>
        <mon-composant>
        <h2>Nouveau contenu</h2>
        <p>super il va s'afficher</p>
        </mon-composant>
    </div>
</template>

element enfant :

<template>
    <div>
        <slot></slot>
    </div>
</template>

```

pour styliser l'interieur d'un scope il faut comme stylisé un component mettre tout le css dans la balise style de l'enfant en n'oubliant pas l'attribus scoped.

**differencier deux slot dans un meme composant :**

pour utiliser deux slots il faut utiliser le names slots qui est le faite d'attribuer un attribus name au slot et attribuer l'attribus slot a l'interieur du composant parent avec la valeur donné dans l'attribus name dans l'element enfant

```html 

parent : 

<template>
    <mon-composant>
        <div>
            <h2 slot="premierSlot">j'adore les fruit</h2>
            <h2 slot="secondSlot">m'en branle</h2>
        </div>
    </mon-composant>
</template>


enfants :

<template>
    <div>
        <slot name="premierSlot"></slot>
    </div>
    <div>
        <slot name="secondSlot"></slot>
    </div>
</template>

```

!!! si dans le cas au dessus l'element parent n'a pas l'attribus slot le contenu qui lui sera attribué correspondra dans l'element enfant qui n'a pas d'attribus name  

**Les dynamiques composants :**

pour crée des composants dynamique il faut utiliser la balise component et lui mettre comme attribus :is="" avec la méthode voulus, il faut au préalable définir plusieurs composant dans la meme instanciations

```html
<my-component :is="fonctionChoisis"></my-component>
```

!!! le probleme est le cycle de vie du component effectivement si on choisis de faire un tableau dynamique en fonction du clique , l'objet va se " détruire " pour converser son etat il faut utiliser la balise <keep-alive></keep-alive>

```html
<keep-alive>
    <my-component :is="fonctionChoisis"></my-component>
</keep-alive>
```

**native modifyier**

il permet d'ecouter un evenement natif au composant
https://fr.vuejs.org/v2/guide/components-custom-events.html#Relier-des-evenements-natifs-aux-composants

```html
<template>
    <div>
    <un-composant @click.native=""></un-composant>
    </div>
</template>
```

**Les forms :**

**lazy modifyier**
il permet de prendre la valeur de l'input lorsque l'utilisateur a écris au complet son MDP ( par exemple ) / lorsque l'utilisateur change de champs

```html
<template>
   <input v-model.lazy="">
</template>
```

**string / number modifyier**

il permet de forcer le type de donné que l'on veux dans un champs

```html
<template>
   <input v-model.number="">
</template>
```
**mettre par default une valeur**

1er methode:

directement dans la balise ( dans l'exemple option )  avec l'attribus selected

```html
<select>
    <option :selected="priority"></option>
</select>
```
2eme methode:

elle consite a definir l'element par default par l'element parent ( valable pour les balises select )

```html
<select v-model="fonctionRandom">
    <option></option>
</select>

<script>
export default {
  data() {
    return {
      selectedPriority: "High"
    };
  }
};
</script>
```

**v-model fait maison**

```html
<input :value="dataRMD" @click="dataRMD = $event.target.value">

<script>
export default {
  data() {
    return {
      dataRMD: ""
    };
  }
};
</script>
```

**Les directives**

on peux concevoir nos propres directives sur vue en effet un attribus qui commence par v- va signaler a vue que ce n'est pas un attribus normal.

pour crée une directive il faut commencer par l'ecrire dans le main.js

```js
vue.directive("Nom", hook{
    bind(el, binding, vnode){
        el.style.backgroundColor = "green";
        el.style.backgroundColor = binding.value;
    }
});
```
il y a 5 types de hooks :

bind(el, binding, vnode) --> once directive is attached
inserted(el, binding, vnode) --> inserted in Parent Node
update(el, binding, vnode, oldVnode) --> Once component is updated ( without children )
componentUpdated(el, binding, vnode,oldVnode) --> Once component is update ( with children )
unbind(el, binding, vnode) --> once directive is remove

ensuite il faut en prendre un ( les plus utilisé sont update et bind)

!! l'utilisation du binding , lors de l'utlisation de la directive bien mettre entre simple quote la valeur v-maDirective="''"

**utilisation des arguments**

on peux mettre un argument a un attribus 
```html
<p v-maDirective:monArgument="'red'"></p>
```
**creer une local directive**

pour crée une directive en local il suffit de mettre dans la partie script de la page vue la methode directives

```html
<script>
export default {
    directives : {

    }
}
</script>
```


**filtre et mixins**

un filtre est une syntax pour transformer des output dans un template

pôur le crée en global :

dans le fichier main.js 

```js
Vue.filter('nomRMD',)
```

puis intégré comme dans la version local c'est a dire mettre un | a côté de la data bindé

en local : 

crée une props filters 

```html
<template>
<p>{{ text | functionExemple}}</p>
<template>
<script>
export default {
    mixins: [fruitMixin],
    data(){
        return {
            text : "hello there"
        }
    },
    filters : {
        functionExemple(value){
            return value.toUpperCase();
        }
    }
}
</script>
```
ensuite dans le teamplate 

pour mettre plusieurs filter il faut juste les mettres a la suite
```html
<p>{{ text | FilterExemple | anotherFilterExemple}}</p>


la méthode la plus conventionnel est de passé par une computed pour filter notamment des rechercher cf le dossier filter&MixinLesson

**les mixins**

lorsque deux composants utilisent des memes fonctionnalités on va créer un fichier js que l'on apelle un mixin pour pouvoir mieux séparé les fichiers et pouvoir eviter la répétition.

https://fr.vuejs.org/v2/guide/mixins.html
https://www.vuemastery.com/courses/next-level-vue/mixins

lors de la création du fichier il faut penser à le stocker dans une constante pour pourvoir l'importer 

```html
<script>
import { constanteStocker } from "./nomDuMixin.js"
</script>
```
mixin a une particularité dans le file d'execution , il sera toujours en premier par rapport au local component.

**global mixin**
a ecrire dans le main.js

```js
Vue.mixin({
    created(){
        console.log('global mixin')
    }
});
```


**transition et animation**

pour crée une transition sur vue , il faut wrap l'element voulus par la meta tag transition

```html
<transition>
    <div></div>
<transition>
```

attention on ne peux wrap qu'un seul element , on peux pas animer une liste non plus.

lors de l'animation avec vue , la meta tag transition 4 classes pendant son changement d'etat : 

-enter
-enter-active
-leave
-leave-active

et pour les utilisé du coup il faut définir un attribus name dans la méta tag transition et ensuite utilisé l'attribus comme prefix avec les état ex : 

```html
<template>
<transition name="animation">
    <div></div>
<transition>
</template>

<style>
.animation-enter {

}
</style>
```