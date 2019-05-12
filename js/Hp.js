class Hp{
	constructor(container){
		this.div=document.createElement("div");
		this.div.style.width = 40+"px";
		this.div.style.height = 40+"px";
		this.div.style.background = "url('./res/heart.jpg')";
		this.div.style.backgroundSize = 100 +"% " + 100 + "%";
		this.div.style.float="left";
		container.appendChild(this.div);
	}
	//이 객체의 색상을 변경한다
	setBg(bg){
		this.div.style.background = bg;
	}
}