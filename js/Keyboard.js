class Keyboard{
	constructor(container, width, height, text){
		this.container = container;
		this.width = width;
		this.height = height;
		this.text = text;

		this.button = document.createElement("button");
		this.button.style.width = this.width + "px";
		this.button.style.height = this.height + "px";
		this.button.style.float = "left";
		this.button.style.background = "url('./res/key.jpg')";
		this.button.style.backgroundSize = 100 + "%" + 100 + "%";
		this.button.innerText = this.text;
		this.button.addEventListener("click",()=>{
			pushKeyboard(this);	
		});
		this.container.appendChild(this.button);
	}
}	