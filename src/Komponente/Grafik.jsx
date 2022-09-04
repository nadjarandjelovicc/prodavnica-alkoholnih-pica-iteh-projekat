import './GrafikCss.css'
import {
 XYPlot,
 LineSeries,
 XAxis,
 YAxis,
 VerticalGridLines,
 HorizontalGridLines,
} from "react-vis";

const Grafik = ({pica} ) => {
  const data = [
   
  
  ];
 
  
   for(var i=0;i<pica.length;i++){
 

     data.push({x:pica[i].id,y:pica[i].cena})
      console.log(data)
   }





 return (
   <div style={{ margin: "15px" }}>
     <XYPlot height={300} width={600}>
       <VerticalGridLines />
       <HorizontalGridLines />
       <XAxis />
       <YAxis /> 
       <LineSeries data={data} color="yellow" />
     </XYPlot>
   </div>
 );
};

export default Grafik;
