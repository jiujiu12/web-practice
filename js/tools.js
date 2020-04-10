//工具对象，用于生成指定范围内的随机数
var Tools={
	getRandom: function(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	}
}