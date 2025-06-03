function isEvenlyDivisible(a, b) {
return a % b === 0
}

function halfSquare(num) {
  return num ** 2 / 2
}

function isLong(str) {
  return str.length >= 15;
}

function exclaim(str) {
  const splitStr = str.split("")
   for(let i = str.length - 1; i >= 0; i--){
        if(str[i] !== "!"){
      return str +"!"
    }else if(splitStr[i - 1] === "!"){
      splitStr.pop()
    }else{
      return splitStr.join("")
    }
    }
  }
      
      
exclaim("NOOOOOOO, WAAAAYYYYYY")

function countWords(str) {
  let words = str.split(' ')
  return words.length
}

function containsDigit(str) {
  for(const char of str){
    if(char >= '0' && char <= "9"){
      return true
    }
  }
  return false
}

function containsLowerCase(str) {
for(let char of str){
  if(char === char.toLowerCase() && char !== char.toUpperCase()){
    return true
  }
}
return false
}

function containsUpperCase(str) {
for(let char of str){
  if(char === char.toUpperCase() && char !== char.toLowerCase()){
    return true
  }
}
return false
}

function containsNonAlphanumeric(str) {
  for(let char of str){
    if(!char.match(/[a-z0-9]/i)){
      return true
    }
  }
  return false
}

function containsSpace(str) {
  for(let char of str){
    if(char === ' '){
      return true
    }
  }
  return false
}

function digits(num) {
  let numStr = Math.abs(num).toString()
  let digits = []
  for(let char of numStr){
    if(!isNaN(char)){
      digits.push(parseInt(char))
    }
  }
  return digits
}

function truncate(str){
  return str.length >= 15 ? str.slice(0, 8) + "..." : str;
}


function isValidPassword(str) {
  return containsLowerCase(str) && containsUpperCase(str) && containsDigit(str) && containsNonAlphanumeric(str) && !containsSpace(str)
}


function onlyPunchy(titles) {
  let result = []
  for(let title of titles){
    let trimmedTitle = title.replace(/!+/g, '')
    if(trimmedTitle.length < 15){
      result.push(trimmedTitle + '!')
    }
  }
  return result
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
