//Spec
expect(kata.fizzBuzz(3)).toEqual('Fizz');

expect(kata.fizzBuzz(0)).toEqual( '' );

//fizzBuzz.js
var fizzBuzz : function( test ){
  if ( test % 3 === 0 ){
      return 'Fizz';
  }
  return '';
}