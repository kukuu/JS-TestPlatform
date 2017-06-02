toBe( 'expected' ); //exact compare (===);

toEqual( 'expected' ); //more general compare, can compare objects

toBeUndefined( ); //checks for undefined 

toBeDefined( ); //checks if var is not undefined

toMatch( /regex/ ); //matches against regex

toBeNull( /regex/ ); //checks if a var is null

toBeTruthy( ); //checks if var is truthy

toBeFalsy( ); //checks if var is falsy

toBeLessThan( number ); //checks if value is less than number

toBeGreaterThan( number ); //checks if value is greater than number

toContain( item ); //look for item in array

expect( function(){ fn(); }).toThrow( e ) //fn() should throw an error