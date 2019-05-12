class Button{
	constructor(container,width,height,text)
	{
		this.container = container;
		this.width = width;
		this.height = height;
		this.text = text;

		this.button = document.createElement("button");
		this.button.style.width = this.width + "px";
		this.button.style.height = this.height + "px";
		this.button.innerText = this.text;
		this.button.style.background = "url('./res/but.jpg')";
		this.button.style.backgroundSize = 100 + "%" + 100 + "%";
		this.button.style.fontSize = 20 + "px";
		this.button.style.border = 0;
		this.button.style.outline = 0;
		this.button.style.float = "left";
		this.button.style.margin = "20px";
		this.button.addEventListener("click",()=>{
			score_count(this);
			show(this);
			setTimeout("setting()",1000);
		});
		this.container.appendChild(this.button);
	}
}