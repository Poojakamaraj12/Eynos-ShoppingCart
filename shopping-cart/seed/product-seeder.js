var Product= require('../models/product');

var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
  product_id: 001,
  imagePath: '/images/item1.jpeg',
  name:'Cornflakes',
  price: 150
}),
new Product({
product_id: 002,
imagePath: '/images/item2.jpeg',
name:'Crunchy Biscuits',
price: 100
}),
new Product({
product_id: 003,
imagePath: '/images/item3.jpeg',
name:'Moong Dal',
price: 60
}),

new Product({
product_id: 004,
imagePath: '/images/item4.jpeg',
name:'Dal Makhani',
price: 80
}),

new Product({
product_id: 005,
imagePath: '/images/item5.jpeg',
name:'Pinto Beans',
price: 230
}),

new Product({
product_id: 006,
imagePath: '/images/item6.jpg',
name:'Mayonnaise',
price: 300
}),

new Product({
product_id: 007,
imagePath: '/images/item7.jpg',
name:'Peanut Butter',
price: 400
}),

new Product({
product_id: 008,
imagePath: '/images/item8.jpg',
name:'Sliced Mixed Fruits',
price: 280
}),

new Product({
product_id: 009,
imagePath: '/images/item9.jpeg',
name:'Lychee',
price: 200
}),

new Product({
product_id: 010,
imagePath: '/images/item10.jpg',
name:'Banana Nut Bread',
price: 90
}),

new Product({
product_id: 011,
imagePath: '/images/item11.jpeg',
name:'Tositos',
price: 400,
}),

new Product({
product_id: 012,
imagePath: '/images/item12.jpeg',
name:'Madras Mixture',
price: 160,
})
];
 var done=0;
for(var i=0;i<products.length;i++)
{
  products[i].save(function(err,result){
    done++;
    if(done===products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
