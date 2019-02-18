module.exports = class Fingerprint {
  constructor(params) {
    this.params = Object.assign({
      size: '30px',
      color: '#f1f1f1', 
      id: 'fingerprint',
      text: 'Jay',
      density: 150,
      clarity: 1,
      supportTip: '你的浏览器不支持Canvas'
    }, params);

    this._init();
    this._intervalometer();
  }

  resetText(text) {
    this.params.text = text;
    this._init();
  }

  _init() {
    this._createCanvas();
    this._fill();
  }

  _intervalometer() {
    let self = this;
    window.setInterval(function(){
      if (!document.getElementById(self.params.id)) {
        self._init();
      }
    }, 1000);
  }

  _createCanvas() {
    let oldNode = document.getElementById(this.params.id);
    if (oldNode) {
      oldNode.parentNode.removeChild( oldNode );
    }

    let body = document.getElementsByTagName('body');
    let width = window.screen.width;
    let height = window.screen.height;
    let canvas = document.createElement('canvas');
    canvas.setAttribute('id', this.params.id);
    canvas.innerHTML = this.params.supportTip;
    canvas.width = width * this.params.clarity;
    canvas.height = height * this.params.clarity;
    canvas.style.cssText= 'position: fixed;width: 100%;height: 100%;left:0;top:0;z-index: -1;';
    body[0].appendChild(canvas);
  }

  _fill() {
    let redundance = 10;
    let canvas = document.getElementById(this.params.id);
    let cxt = canvas.getContext('2d');
    let times = window.screen.width * this.params.clarity / this.params.density + redundance;
    let heightTimes = window.screen.height * this.params.clarity * 1.5/ this.params.density;
    cxt.rotate(-15*Math.PI/180);
    
    for(let i = 0; i < times; i++) {
      for(let j = 0; j < heightTimes; j++) {
        cxt.fillStyle = this.params.color;
        cxt.font = this.params.size + ' Arial';
        cxt.fillText(this.params.text, this.params.density*(i-redundance/2), j*this.params.density); 
      }
    }
  }
};