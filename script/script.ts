class Locations {
    city:string;
    zipCode:number;
    adress:string;
    image:string;

    constructor(city:string, zipCode:number, adress:string, image:string){
        this.city = city;
        this.zipCode = zipCode;
        this.adress = adress;
        this.image = image;
    
    }
	

methodCreated(){
    return` <div class="jumbotron jumbotron-fluid">
            <div class="row px-2">
                <div class="col-md-6">
                    <h1 class="display-4">${this.city}</h1>
                    <p class="lead"><b>Zip-Code:</b> ${this.zipCode}</p>
                    <p class="lead"><b>Address:</b> ${this.adress}</p>
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Events</h5>
                                    <p class="card-text">Here some events I visited</p>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${this.city}1">
                                    See more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Restaurants</h5>
                                    <p class="card-text">Some good restaurants to recommend</p>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${this.city}">
                                    See more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5 col-sm-12">
                    <img src=${this.image} alt="" height="100%" width="100%">
                </div>
            </div>
        </div>
       `
}
}


/*    methodCreatedRest(){
    return`     <div class="card" style="width: 18rem;">
                <img src=${this.restImage} class="card-img-top" alt="restaurant">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><p class="Display-3"><b>Type</b>${this.restName}</p></li>
                    <li class="list-group-item"><p><b>Type</b>${this.type}</p></li>
                    <li class="list-group-item"><p><b>Type</b>${this.telephone}</p></li>
                    <li class="list-group-item"><p><b>Type</b>${this.homepage}</p></li>
                </ul>
               
            </div>
       `
}
    
}*/
class Restaurant extends Locations {
    restName;
    type;
    telephone;
    homepage;
    restImage;

    constructor(city:string, zipCode:number, adress:string, image:string, restName:string, type:string, telephone:number, homepage:string, restImage:string){
        super(city, zipCode, adress, image);
        this.restName = restName;
        this.type = type;
        this.telephone = telephone;
        this.homepage = homepage;
        this.restImage = restImage;
    
    }
    
    methodCreatedRest(){
    return`  <div class="modal fade" id="${this.city}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title display-3" id="exampleModalLabel">${this.city}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                       <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5">
                                <p><b>Restaurant:</b> ${this.restName}</p>
                                <p><b>Type:</b> ${this.type}</p>
                                <p><b>Phone:</b> ${this.telephone}</p>
                                <p><b>Homepage:</b> <a href="${this.homepage}">${this.homepage}</p></a>
                                
                            </div>
                            <div class="col-md-6 ">
                                <img src=${this.restImage} alt="" height="100%" width="100%">


                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       `
}
    
}

class Events extends Locations {
    eveName;
    eventDate;
    eventTime;
    ticketPrice;
    eveImage;

    constructor(city:string, zipCode:number, adress:string, image:string, eveName:string, eventDate:string, eventTime:string, ticketPrice:number, eveImage:string){
        super(city, zipCode, adress, image);
        this.eveName = eveName;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
        this.eveImage = eveImage;
    }
    methodCreatedEve(){
    return`  <div class="modal fade" id="${this.city}1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title display-3" id="exampleModalLabel">${this.city}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                       <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5">
                                <p><b>Event:</b> ${this.eveName}</p>
                                <p><b>Date:</b> ${this.eventDate}</p>
                                <p><b>Time:</b> ${this.eventTime}</p>
                                <p><b>Price:</b> ${this.ticketPrice}€</p>
                                
                            </div>
                            <div class="col-md-6 ">
                                <img src=${this.eveImage} alt="" height="100%" width="100%">


                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       `
}
}

/*-------------------------------------------------------------Locations parent class--------------------------------------------------------------------*/
let rio = new Locations("Rio-de-Janeiro",5407002,"Rio de janeiro 05407-002","image/rio.jpg");
let tokyo = new Locations("Tokyo",1000000,"Tokyo 100-0000","image/tokyo.jpg");
let sydney = new Locations("Sydney", 2000, "Sydney 2000", "image/sydney1.jpg")

var array: any[]=[rio,tokyo,sydney];

for( let val of array){
	document.getElementById("result").innerHTML += val.methodCreated();
}
/*-------------------------------------------------------------Restaurant child class--------------------------------------------------------------------*/
let rioRest = new Restaurant("Rio-de-Janeiro",5407002,"Rio de janeiro 05407-002","image/rio.jpg","Meat&Greet","Bar", 45896215762, "www.meat&greet.com", "image/restaurant1.jpg")
let tokyoRest = new Restaurant("Tokyo",1000000,"Tokyo 100-0000","image/tokyo.jpg","King Sushi","Sushi Bar", 5986284110, "www.suhsibar.com", "image/sushi.jpg")
let sydneyRest = new Restaurant("Sydney", 2000, "Sydney 2000", "image/sydney1.jpg","Beer Pub","Pub", 1256328746, "www.beerpub.com", "image/bar.jpg")

var restArray: any[]=[rioRest,tokyoRest,sydneyRest]
for(let val1 of restArray){
    document.getElementById("modal").innerHTML += val1.methodCreatedRest();
}
/*-------------------------------------------------------------Events child class--------------------------------------------------------------------*/
let rioEve = new Events("Rio-de-Janeiro",5407002,"Rio de janeiro 05407-002","image/rio.jpg","Carneval", "21.02.2020", "12:00 - open end", 0, "image/rio-mask.jpg")
let tokyoEve = new Events("Tokyo",1000000,"Tokyo 100-0000","image/tokyo.jpg","Cosplay-Convention", "11.08.2020", "12:00 - 23:00", 75, "image/cosplay.jpg")
let sydneyEve = new Events("Sydney", 2000, "Sydney 2000", "image/sydney1.jpg","Famous Opera visit", "02.05.2020", "19:00 - 24:00", 139, "image/sydney.jpg")

var eveArray: any[]=[rioEve,tokyoEve,sydneyEve]
for(let val2 of eveArray){
    document.getElementById("modal").innerHTML += val2.methodCreatedEve();
}



/*-------------------------------------------------------------Events child class--------------------------------------------------------------------*/






