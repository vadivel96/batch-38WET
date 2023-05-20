class uber{
    constructor(km,vehiclemodel)
    {
    this.km=km;
    this.vehiclemodel=vehiclemodel
    }
}
 class uberprice extends uber
 {
    constructor(km,vehiclemodel){
        super(km,vehiclemodel)
  }
  pricedetail(){
    if (this.vehiclemodel=="suv") 
    {
        if (this.km>=50){
        console.log(`vehiclemodel is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*10)}$`)     
        } 
        else 
        {
            console.log(`vehiclemodel is ${this.vehiclemodel}`)
            console.log(`kilometer is ${this.km}km`)
            console.log(`price is ${(this.km*13)}$`)
        }
    } 
    
    else if (this.vehiclemodel=="hatchbag") { 
             
        if (this.km>=50)
        {
        console.log(`vehiclemodel is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*7)}$`)   
      } 
      else 
      {
        console.log(`vehiclemodel is ${this.vehiclemodel}`)
       console.log(`kilometer is ${this.km}km`)
       console.log(`price is ${(this.km*8)}$`)
      }
    
}
     else 
     {
        if (this.vehiclemodel=="serdan")
        {
        if (this.km>=50)
        {
        console.log(`vehiclemodel is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*9)}$`)
            
        } 
        else 
        {
        console.log(`vehiclemodel is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`);
        console.log(`price is ${(this.km*10)}$`);
        } 

        }
        
    }
  
  }
}
const r=new uberprice(10,"serdan")
r.pricedetail();