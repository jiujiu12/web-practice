class user{
    constructor(data,message){
        this.data=data||'';
        this.message=message||'';
    }
}
class success extends user{
    constructor(data,message){
        super(data,message);
        this.statusno=0;
    }
}
class erro extends user{
    constructor(data,message){
        super(data,message);
        this.statusno=-1;
    }
}