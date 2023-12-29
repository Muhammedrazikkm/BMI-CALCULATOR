function bmi(){
    let hegt=id_he.value
    let height=hegt/100
    let wegt=id_we.value
    let bmi=(wegt/height**2)
    bmi=bmi.toFixed(2)
    let underweightImage="https://thumbs.dreamstime.com/b/young-man-white-shirt-underweight-comic-cartoon-illustration-unhealthy-nutrition-article-image-vector-character-79246727.jpg"
    let heatlthyImage="https://www.healthifyme.com/blog/wp-content/uploads/2021/09/Cover-image.jpg"
    let overWeightImage="https://w7.pngwing.com/pngs/55/157/png-transparent-man-fat-overweight-fatness-person-standing.png"
    let obesityImage="https://www.netmeds.com/images/cms/wysiwyg/blog/2020/07/1594712425_obesity_big_600.jpg"
    let result={height:height,weight:wegt,bmi:bmi}
    if(bmi<18.5){
        console.log("Underweight");
        result.status="underweight"
        result.image=underweightImage
    
    }
    else if(bmi>18.5 && bmi<24.9){
        console.log("Healthy");
        result.status="Healthy"
        result.image=heatlthyImage
    }
    else if(bmi>24.9 && bmi<29.9){
        console.log("OverWeight");
        result.status="Overweight"
        result.image=overWeightImage
    }
    else{
        console.log("Obesity");
        result.status="obesity"
        result.image=obesityImage
    }
    //console.log(result);
    populateResult(result)
}
function populateResult(result){
    console.log(result);
    let htmlData=`<div class="card" style="width:100%">
    <img src="${result.image}" class="card-img-top" alt="..." style="height:300px">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${result.weight}</li>
      <li class="list-group-item">${result.height}</li>
      <li class="list-group-item">${result.bmi}</li>
      <li class="list-group-item">${result.status}</li>
    </ul>
   
  </div>`
  document.querySelector("#id_result").innerHTML=htmlData
}