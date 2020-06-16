new Vue ({
  el : '#conditionnal',
  data: {
    show: true
  },
});

new Vue ({
  el : '#renderingList',
  data: {
    ingredients : ['meat','fruit','cookies'],
    persons : [
      {name: 'max', age:24, color : 'red'},
      {name: 'anna', age:'unknow', color : 'blue'}
    ]
  },
});

new Vue ({
  el : '#exerciceConditionnalRenderingList',
  data : {
    show : true,
    panier : ['pain','fruit','babibel','yaourt','glace','kebab'],
    LOTR : [{
      title : 'lord of the rings',
      author : 'JRR tolkiens',
      books : 3
    },
  ],
  NewObject : {
    name : 'TESTOBJECT',
    data : [1.67,1.33,0.98,2.21]
  }
  }
});