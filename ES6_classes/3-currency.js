export default Class Currency{
  constructor(code,name){
    this.code = code;
    this.name = name;
  };
  get code(){
    return this._code;
  }

  set code(value){
    if(typeOf(value)!== 'string'){
      Throw new TypeError("code value must be string");
    }
    this._code = value;
  }

  get name(){
    return this._name;
  }

  set name(value){
    if(typeOf(value)!== 'string'){
      Throw new TypeError("name must be string")
    }
    this._name = value
  }
  displayFullCurrency(){
    return `${this.name} ${this.code}`
  };
}
