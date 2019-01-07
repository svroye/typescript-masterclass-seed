/**
 * Numeric enums and Reverse mappings
 */

 /**
 // ENUM = data type, compiles down to JS code. Can be used to define a specific set of rules
 // or variables and then reference those enums. By default, it parses down to JS with a set 
 // of numeric values. 

 // compiles down to IIFE = Immediately Invoced Function Expression
 enum Sizes {
     Small,
     Medium,
     Large
 }

 // We can use the string lookup or the number lookup
 console.log(Sizes.Medium); // returns number '1', i.e. the index
 console.log(Sizes[1]); // returns the key 'Medium'
 console.log(Sizes[Sizes.Medium]); // returns the key 'Medium'

 // we can extend the same enum later on, but we then need to define a hard coded index value
 enum Sizes {
     ExtraLarge = 3
 }

 console.log(Sizes[Sizes.ExtraLarge]);
  */