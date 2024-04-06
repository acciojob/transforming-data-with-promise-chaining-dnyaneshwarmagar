//your JS code here. If required.
let div = document.getElementById("output");
let input = document.getElementById("ip").value;

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
	let num = document.getElementById("ip").value;		
	let promise1 = new Promise((resolve,reject)=>{	
	setTimeout(()=>{		
		resolve(num)
	},2000);
		
})
	
	function promise2fn(num){return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			
			resolve(num*2)
		},2000)
	})
	}
	function promise3fn(num){return new Promise((resolve,reject)=>{
		setTimeout(()=>{			
			resolve(num*2)
		},1000)
	})
	}

	function promise4fn(num){return new Promise((resolve,reject)=>{
		setTimeout(()=>{			
			resolve(num-3)
		},1000)
	})
	}
	function promise5fn(num){return new Promise((resolve,reject)=>{
		setTimeout(()=>{			
			resolve(num/2)
		},1000)
	})
	}

	function promise6fn(num){return new Promise((resolve,reject)=>{
		setTimeout(()=>{			
			resolve(num+10)
		},1000)
	})
	}
	promise1.then((data)=>{div.textContent ="Result: "+ data; return promise2fn(data)}).then((data)=>{div.textContent ="Result: "+ data;  return promise3fn(data);}).then((data)=>{div.textContent ="Result: "+ data; return promise4fn(data);}).then((data)=>{div.textContent ="Result: "+ data;  return promise5fn(data);}).then((data)=>{div.textContent ="Result: "+ data;  return promise6fn(data);}).then((data)=>{div.textContent ="Final Result: "+ data; });
})
	 



