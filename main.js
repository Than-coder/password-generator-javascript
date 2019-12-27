// dom
function _(data){
  return window.document.querySelector(data);
}

// character code 
const charCode = {
  capital_letter:{min:65,max:90},
  small_leter:{min:97,max:122},
  number:{min:48,max:57}
}

function random(min,max){
  let ran = Math.floor(Math.random() * (max - min)) + min;
  return ran;
}

// capital leter
function getCapitalLetter(){
  let capiRan = random(charCode.capital_letter.min,charCode.capital_letter.max);
  return String.fromCharCode(capiRan);
}

//small letter
function getSmallLetter(){
  let smallRan = random(charCode.small_leter.min,charCode.small_leter.max);
  return String.fromCharCode(smallRan);
}

// number
function getNumber(){
  let number = random(charCode.number.min,charCode.number.max);
  return String.fromCharCode(number);
}


// symbols
function getSymbol(){
  let symbols = [33,35,36,37,38,42,45,63];
  let ran = random(symbols.length,0);
  return String.fromCharCode(symbols[ran]);
}

class PassGen {
  static Main(){
    this.isCheckNumber = true;
    this.isCheckUpper = true;
    this.isCheckLower = true;
    this.isCheckSymbol = true;
    this.keyLength = 20;

    this.passGen = null;
  }

  static Init(){
    let pass = '';
    let i = 1;
    _('.pass-length input').value = this.keyLength;

    while(i <= this.keyLength){
      if(!this.isCheckUpper && !this.isCheckLower && !this.isCheckNumber && !this.isCheckSymbol){
        return false;
      }

      // upper case
      if(this.isCheckUpper && i <= this.keyLength){
        pass += getCapitalLetter();
        i++;
      }
      // lower case
      if(this.isCheckLower && i <= this.keyLength){
        pass += getSmallLetter();
        i++;
      }
      // number
      if(this.isCheckNumber && i <= this.keyLength ){
        pass += getNumber();
        i++;
      }
      // symbol
      if(this.isCheckSymbol && i <= this.keyLength){
        pass += getSymbol();
        i++;
      }
    }
    this.showPassword(pass);
  }

  static showPassword(pass){
    this.passGen = pass;
    _('.password-input').value = pass;
  }

  static changePassLength(length){
    this.keyLength = length;
    this.Init();
  }

  static changeUpperCaseCheck(value){
    this.isCheckUpper = value;
    this.Init();
  }
  static changeLowerCaseCheck(value){
    this.isCheckLower = value;
    this.Init();
  }
  static changeNumberCheck(value){
    this.isCheckNumber = value;
    this.Init();
  }
  static changeSymbolCheck(value){
    this.isCheckSymbol = value;
    this.Init();
  }
  static copyBtnClick(){
    _('.password-input').select();
    window.document.execCommand('copy');
    // alert
    window.alert('Password Copied');
  }

}

// window init
PassGen.Main();
window.onload = ()=>{
  PassGen.Init();
}


// event listener
_('.pass-length input').addEventListener('input',e =>{
  let passLength = e.target.value;
  if(passLength == '') return false;
  // change password length
  PassGen.changePassLength(passLength);
})

// change upper case
_('.uppercase input').addEventListener('change',e =>{
  PassGen.changeUpperCaseCheck(e.target.checked);
})

// change lower case
_('.lowercase input').addEventListener('change',e =>{
  PassGen.changeLowerCaseCheck(e.target.checked);
})

// change number
_('.number input').addEventListener('change',e =>{
  PassGen.changeNumberCheck(e.target.checked);
})

// change symbol
_('.symbol input').addEventListener('change',e =>{
  PassGen.changeSymbolCheck(e.target.checked);
})

// generate btn click
_('.generate-btn').addEventListener('click',e =>{
  PassGen.Init();
})

// copy btn click
_('.copy-btn').addEventListener('click',e =>{
  PassGen.copyBtnClick();
})