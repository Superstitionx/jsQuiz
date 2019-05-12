		function getRandom(num)
		{
			//함수 중 return 에 값을 명시하여, 호출한 자가 그 값을 반환받도록 처리하는 함수를 return 값 있는 함수 
			var r = Math.random();
			var n = parseInt(r*num);
			return n;
		}

		function mix_random(array){ 
			var arr = [];
			for (var i = 0; i < array.length ; i++){	
				arr[i] = getRandom(array.length); 
				for (j = 0; j < i  ; j++){
					if (arr[i] == arr[j]){	
						i--;
						continue;
					}
				}
			}
			return arr; 
		}

		function random_setting1(b_arr,q_arr){ 
			var x = getRandom(q_arr.length);
			for (var i = 1; i < 4; i++) { 
				b_arr[i] = q_arr[getRandom(q_arr.length)];
				for (var j = 0; j < i; j++) {
					if (b_arr[i] == b_arr[j]) { 
						i--;
						break;
					}
				}
			}
			return b_arr; 
		}

		function random_setting2(array){ 
		   var temp = 0;
		   var w = 0;
		   var r = 0;
			while (w < array.length){ 
				r = getRandom(array.length);
				if (w != r) {  
					temp = array[w]; 
					array[w] = array[r]; 
					array[r] = temp;
					w++;
				}
			}
			return array; 
		}