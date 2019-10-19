var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(city, zipCode, adress, image) {
        this.city = city;
        this.zipCode = zipCode;
        this.adress = adress;
        this.image = image;
    }
    Locations.prototype.methodCreated = function () {
        return " <div class=\"jumbotron jumbotron-fluid\">\n            <div class=\"row px-2\">\n                <div class=\"col-md-6\">\n                    <h1 class=\"display-4\">" + this.city + "</h1>\n                    <p class=\"lead\"><b>Zip-Code:</b> " + this.zipCode + "</p>\n                    <p class=\"lead\"><b>Address:</b> " + this.adress + "</p>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-6\">\n                            <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">Events</h5>\n                                    <p class=\"card-text\">Here some events I visited</p>\n                                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#" + this.city + "1\">\n                                    See more\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-6\">\n                            <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">Restaurants</h5>\n                                    <p class=\"card-text\">Some good restaurants to recommend</p>\n                                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#" + this.city + "\">\n                                    See more\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-5 col-lg-5 col-sm-12\">\n                    <img src=" + this.image + " alt=\"\" height=\"100%\" width=\"100%\">\n                </div>\n            </div>\n        </div>\n       ";
    };
    return Locations;
}());
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
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zipCode, adress, image, restName, type, telephone, homepage, restImage) {
        var _this = _super.call(this, city, zipCode, adress, image) || this;
        _this.restName = restName;
        _this.type = type;
        _this.telephone = telephone;
        _this.homepage = homepage;
        _this.restImage = restImage;
        return _this;
    }
    Restaurant.prototype.methodCreatedRest = function () {
        return "  <div class=\"modal fade\" id=\"" + this.city + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title display-3\" id=\"exampleModalLabel\">" + this.city + "</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                       <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <p><b>Restaurant:</b> " + this.restName + "</p>\n                                <p><b>Type:</b> " + this.type + "</p>\n                                <p><b>Phone:</b> " + this.telephone + "</p>\n                                <p><b>Homepage:</b> <a href=\"" + this.homepage + "\">" + this.homepage + "</p></a>\n                                \n                            </div>\n                            <div class=\"col-md-6 \">\n                                <img src=" + this.restImage + " alt=\"\" height=\"100%\" width=\"100%\">\n\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n       ";
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zipCode, adress, image, eveName, eventDate, eventTime, ticketPrice, eveImage) {
        var _this = _super.call(this, city, zipCode, adress, image) || this;
        _this.eveName = eveName;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        _this.eveImage = eveImage;
        return _this;
    }
    Events.prototype.methodCreatedEve = function () {
        return "  <div class=\"modal fade\" id=\"" + this.city + "1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title display-3\" id=\"exampleModalLabel\">" + this.city + "</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                       <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <p><b>Event:</b> " + this.eveName + "</p>\n                                <p><b>Date:</b> " + this.eventDate + "</p>\n                                <p><b>Time:</b> " + this.eventTime + "</p>\n                                <p><b>Price:</b> " + this.ticketPrice + "\u20AC</p>\n                                \n                            </div>\n                            <div class=\"col-md-6 \">\n                                <img src=" + this.eveImage + " alt=\"\" height=\"100%\" width=\"100%\">\n\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n       ";
    };
    return Events;
}(Locations));
/*-------------------------------------------------------------Locations parent class--------------------------------------------------------------------*/
var rio = new Locations("Rio-de-Janeiro", 5407002, "Rio de janeiro 05407-002", "image/rio.jpg");
var tokyo = new Locations("Tokyo", 1000000, "Tokyo 100-0000", "image/tokyo.jpg");
var sydney = new Locations("Sydney", 2000, "Sydney 2000", "image/sydney1.jpg");
var array = [rio, tokyo, sydney];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    document.getElementById("result").innerHTML += val.methodCreated();
}
/*-------------------------------------------------------------Restaurant child class--------------------------------------------------------------------*/
var rioRest = new Restaurant("Rio-de-Janeiro", 5407002, "Rio de janeiro 05407-002", "image/rio.jpg", "Meat&Greet", "Bar", 45896215762, "www.meat&greet.com", "image/restaurant1.jpg");
var tokyoRest = new Restaurant("Tokyo", 1000000, "Tokyo 100-0000", "image/tokyo.jpg", "King Sushi", "Sushi Bar", 5986284110, "www.suhsibar.com", "image/sushi.jpg");
var sydneyRest = new Restaurant("Sydney", 2000, "Sydney 2000", "image/sydney1.jpg", "Beer Pub", "Pub", 1256328746, "www.beerpub.com", "image/bar.jpg");
var restArray = [rioRest, tokyoRest, sydneyRest];
for (var _a = 0, restArray_1 = restArray; _a < restArray_1.length; _a++) {
    var val1 = restArray_1[_a];
    document.getElementById("modal").innerHTML += val1.methodCreatedRest();
}
/*-------------------------------------------------------------Events child class--------------------------------------------------------------------*/
var rioEve = new Events("Rio-de-Janeiro", 5407002, "Rio de janeiro 05407-002", "image/rio.jpg", "Carneval", "21.02.2020", "12:00 - open end", 0, "image/rio-mask.jpg");
var tokyoEve = new Events("Tokyo", 1000000, "Tokyo 100-0000", "image/tokyo.jpg", "Cosplay-Convention", "11.08.2020", "12:00 - 23:00", 75, "image/cosplay.jpg");
var sydneyEve = new Events("Sydney", 2000, "Sydney 2000", "image/sydney1.jpg", "Famous Opera visit", "02.05.2020", "19:00 - 24:00", 139, "image/sydney.jpg");
var eveArray = [rioEve, tokyoEve, sydneyEve];
for (var _b = 0, eveArray_1 = eveArray; _b < eveArray_1.length; _b++) {
    var val2 = eveArray_1[_b];
    document.getElementById("modal").innerHTML += val2.methodCreatedEve();
}
/*-------------------------------------------------------------Events child class--------------------------------------------------------------------*/
