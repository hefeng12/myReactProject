import React from 'react';
import './App.scss';

function strockArc(ctx,mX,cY,s,r,n){//圆心(x,y)，半径r
  switch (n) {
      case 0:
          //上凸下凹
          ctx.arc(mX+s/2,cY,r,Math.PI,2*Math.PI);
          ctx.lineTo(mX+s,cY);
          ctx.lineTo(mX+s,cY+s);
          ctx.lineTo(mX+s/2+r,cY+s);
          ctx.arc(mX+s/2,cY+s,r,2*Math.PI,Math.PI,true);
          ctx.lineTo(mX,cY+s);
          break
      case 1:
          //上凸右凹
          ctx.arc(mX+s/2,cY,r,Math.PI,2*Math.PI);
          ctx.lineTo(mX+s,cY);
          ctx.lineTo(mX+s,cY+s/2-r);
          ctx.arc(mX+s,cY+s/2,r,1.5*Math.PI,0.5*Math.PI,true);
          ctx.lineTo(mX+s,cY+s);
          ctx.lineTo(mX,cY+s);
          break
      case 2 :
          //上凸左凹
          ctx.arc(mX+s/2,cY,r,Math.PI,2*Math.PI);
          ctx.lineTo(mX+s,cY);
          ctx.lineTo(mX+s,cY+s);
          ctx.lineTo(mX,cY+s);
          ctx.lineTo(mX,cY+s/2+r);
          ctx.arc(mX,cY+s/2,r,0.5*Math.PI,1.5*Math.PI,true);
          break
      case 3 :
          //上凸下凸
          ctx.arc(mX+s/2,cY,r,Math.PI,2*Math.PI);
          ctx.lineTo(mX+s,cY);
          ctx.lineTo(mX+s,cY+s);
          ctx.lineTo(mX+s/2+r,cY+s);
          ctx.arc(mX+s/2,cY+s,r,0,Math.PI);
          ctx.lineTo(mX,cY+s);
          break
      case 4 :
          //上凸右凸
          ctx.arc(mX+s/2,cY,r,Math.PI,2*Math.PI);
          ctx.lineTo(mX+s,cY);
          ctx.lineTo(mX+s,cY+s/2-r);
          ctx.arc(mX+s,cY+s/2,r,1.5*Math.PI,0.5*Math.PI);
          ctx.lineTo(mX+s,cY+s);
          ctx.lineTo(mX,cY+s);
          break
      case 5 :
          //上凸右凸下凹
          ctx.arc(mX+s/2,cY,r,Math.PI,2*Math.PI);
          ctx.lineTo(mX+s,cY);
          ctx.lineTo(mX+s,cY+s/2-r);
          ctx.arc(mX+s,cY+s/2,r,1.5*Math.PI,0.5*Math.PI);
          ctx.lineTo(mX+s,cY+s);
          ctx.lineTo(mX+s/2+r,cY+s);
          ctx.arc(mX+s/2,cY+s,r,2*Math.PI,Math.PI,true);
          ctx.lineTo(mX,cY+s);
          break
      case 6 :
          //上凸右凸左凹
          ctx.arc(mX+s/2,cY,r,Math.PI,2*Math.PI);
          ctx.lineTo(mX+s,cY);
          ctx.lineTo(mX+s,cY+s/2-r);
          ctx.arc(mX+s,cY+s/2,r,1.5*Math.PI,0.5*Math.PI);
          ctx.lineTo(mX+s,cY+s);
          ctx.lineTo(mX,cY+s);
          ctx.lineTo(mX,cY+s/2+r);
          ctx.arc(mX,cY+s/2,r,0.5*Math.PI,1.5*Math.PI,true);
          break
      case 7 :
          //上凸下凸右凹
          ctx.arc(mX+s/2,cY,r,Math.PI,2*Math.PI);
          ctx.lineTo(mX+s,cY);
          ctx.lineTo(mX+s,cY+s/2-r);
          ctx.arc(mX+s,cY+s/2,r,1.5*Math.PI,0.5*Math.PI,true);
          ctx.lineTo(mX+s,cY+s);
          ctx.lineTo(mX+s/2+r,cY+s);
          ctx.arc(mX+s/2,cY+s,r,0,Math.PI);
          ctx.lineTo(mX,cY+s);
          break
      case 8 :
          //上凸左凹右凹
          ctx.arc(mX+s/2,cY,r,Math.PI,2*Math.PI);
          ctx.lineTo(mX+s,cY);
          ctx.lineTo(mX+s,cY+s/2-r);
          ctx.arc(mX+s,cY+s/2,r,1.5*Math.PI,0.5*Math.PI,true);
          ctx.lineTo(mX+s,cY+s);
          ctx.lineTo(mX,cY+s);
          ctx.lineTo(mX,cY+s/2+r);
          ctx.arc(mX,cY+s/2,r,0.5*Math.PI,1.5*Math.PI,true);
          break
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      r:10,
      s:50,
      imgurl:require('./assets/bc3.jpg'),
      isdrag:false,
      isAdopt:false,
      content:''
    }
  }

  componentDidMount(){
    this.renderImage(this.state.imgurl)
  }

  renderImage=(url)=>{
    let img=new Image(300,200)
    const that=this
    const {s,r}=this.state
    img.addEventListener('load',function(){
      let left=parseInt(Math.random()*180+40),top=parseInt(Math.random()*100+40)
      const bigCanvas = that.bigCanvas.getContext('2d')
      const smallCanvas = that.smallCanvas.getContext('2d')
      const n=parseInt(Math.random()*9)
      bigCanvas.clearRect(0,0,300,200)
      bigCanvas.drawImage(img,0,0,300,200)
      bigCanvas.save();
      bigCanvas.lineWidth = 2;
      bigCanvas.strokeStyle = '#ffffff';
      bigCanvas.beginPath()
      bigCanvas.moveTo(left,top)
      bigCanvas.lineTo(left+s/2-r,top)
      strockArc(bigCanvas,left,top,s,r,n)
      bigCanvas.closePath();
      bigCanvas.stroke();
      bigCanvas.clip();
      let imgData = bigCanvas.getImageData(left,top-r,s+r+1,s+2*r+1);
      bigCanvas.fillStyle = 'rgba(255,255,255,0.5)';
      bigCanvas.fillRect(0,0,300,200);
      bigCanvas.restore();
      // bigCanvas.fillStyle = 'rgba(255,255,255,0.0)';
      // bigCanvas.fillRect(0,0,300,200);

      smallCanvas.clearRect(0,0,300,200);
      smallCanvas.lineWidth = 2;
      smallCanvas.strokeStyle = '#ffffff';
      smallCanvas.putImageData(imgData,1,top-r)
      smallCanvas.globalCompositeOperation="destination-in";
      smallCanvas.save();
      smallCanvas.beginPath();
      smallCanvas.moveTo(0, top);
      smallCanvas.lineTo(0+s/2-r,top);
      strockArc(smallCanvas,1,top,s,r,n);
      smallCanvas.closePath();
      smallCanvas.fillStyle = 'green';
      smallCanvas.fill();
      smallCanvas.clip();
      smallCanvas.restore();
      that.setState({imgData,top,n,left})
    })
    img.src=url
  }
  moveStart=(e)=>{
    // console.log(e)
    this.setState({start:e.pageX,isdrag:true})
  }
  move=(e)=>{
    const {start,isdrag,top,n,imgData,s,r}=this.state
    if(isdrag){
      let mX=e.pageX-start
      mX=mX>250?250:(mX<0?0:mX)
      const smallCanvas = this.smallCanvas.getContext('2d')
      smallCanvas.clearRect(0,0,300,200);
      smallCanvas.lineWidth = 2;
      smallCanvas.strokeStyle = '#ffffff';
      smallCanvas.putImageData(imgData,mX,top-r)
      smallCanvas.globalCompositeOperation="destination-in";
      smallCanvas.save();
      smallCanvas.beginPath();
      smallCanvas.moveTo(mX, top);
      smallCanvas.lineTo(mX+s/2-r,top);
      strockArc(smallCanvas,mX,top,s,r,n);
      smallCanvas.closePath();
      smallCanvas.fillStyle = 'green';
      smallCanvas.fill();
      smallCanvas.clip();
      smallCanvas.restore();
      this.moved.style.width=mX+40+'px'
      this.circle.style.left=mX+'px'
    }
  }
  moveEnd=(e)=>{
    const {start,imgurl,left}=this.state
    if(Math.abs(e.pageX-start-left)<5){
      this.setState({isdrag:false,start:e.pageX,content:'通过啦，完结撒发！！！',isAdopt:true})
    }else{
      this.setState({isdrag:false,start:0,content:'没通过，菜！！！',isAdopt:true})
      // this.moved.style.width=0+'px'
      // this.circle.style.left=0+'px'
      // this.renderImage(imgurl)
    }
  }

  reFresh=()=>{
    this.setState({isAdopt:false})
    this.moved.style.width=0+'px'
    this.circle.style.left=0+'px'
    const num=parseInt(Math.random()*4)+1
    const imgurl=require(`./assets/bc${num}.jpg`)
    this.renderImage(imgurl)
  }

  render(){
    const{content,isAdopt}=this.state
  return (
    <div className="App">
      <div className='canvas-div'>
        <canvas 
        width={300}
        height={200}
        ref={ref=>this.bigCanvas=ref}
        />
        <canvas
        className='canvas-ceng'
        width={300}
        height={200}
        ref={ref=>this.smallCanvas=ref}
        />
      </div>
      <div className='slider-div' onMouseMove={this.move}>
        <div className='slider-moved' ref={ref=>this.moved=ref}></div>
        <div className='slider-circle' onMouseDown={this.moveStart} ref={ref=>this.circle=ref} onMouseUp={this.moveEnd}></div>
      </div>
      <div className='refresh'>
        <span onClick={this.reFresh}>刷新验证码</span>
      </div>
      <div style={{display:isAdopt?'block':'none'}} className='adopt'>
        <span onClick={this.reFresh}>{content}再来一次！</span>
      </div>
    </div>
  )
  }
}

export default App;
