/**
 * Created by admin on 2017/10/16.
 */

function Pet(words){
    this.words = words
    this.speak = function(){
        console.log(this.words);
    }
}

function Dog(words){
    Pet.call(this,words);
}

function pig(words){
    Pet.call(this,words);
}

var dog = new Dog('ppp');
dog.speak();
