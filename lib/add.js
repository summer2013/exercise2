/*function add() {
	// 实现该函数
	var arr = [].slice.call(arguments);
	var result = 0;
	arr.forEach(function(item, index, array) {
		var tmpItem = 0
		try{
			tempItem = parseInt(item);
		}catch(e){
		}
		result += tempItem;
	})
	return result.toString();
}*/

function add(a, b) {
	var alist = a.split('').reverse();
	var blist = b.split('').reverse();
	var max = Math.max(alist.length, blist.length);
	var flag = 0;
	var clist = [];
	for(var i=0; i< max; i++) {
		var temp = parseInt(alist[i] || 0 ) + parseInt(blist[i] || 0) + flag;
		if (temp > 9) {
			flag = 1;
			temp -= 10;
		} else {
			flag = 0;
		}
		clist.push(temp);
	}
	if(flag === 1) {
		clist.push(flag);
	}
	return clist.reverse().join('');
}

module.exports = add
