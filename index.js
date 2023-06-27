const canvasSketch = require('canvas-sketch');

const settings = {

  dimmensions:[1080,1080], 

};

const sketch = () => {

  return ({context,width,height}) => {

    context.fillStyle = 'black';
    context.fillRect (0,0,width,height);

    context.beginPath();
    context.moveTo(200,540);
    context.lineTo(880,540);
    context.stroke();
  }

  canvasSketch(sketch,settings);


}