class Room{
    #is_Booked = false;
    constructor(floor_Num, room_num,price, is_booked){
        this.floor_num =floor_Num;
        this.room_num = room_num;
        this.price = price;
        this.#is_Booked = is_booked;
    }

    get floorNum(){
        return this.floorNum
    }

    set RoomNum_setter(room_number){
        this.room_num  = room_number;
    }

    set floorNum_setter(floor_Number){
        this.room_num  = floor_Number;
    }

    set RoomPrice (room_price){
        this.room_price = room_price;
    }

    set available(booked){
        this.#is_Booked = booked
    }

    print_room_details = function(){
        room_details ={
            floor : this.floor_num,
            number : this.room_num,
            price : this.price,
            available : this.#is_Booked
        }
        return room_details;
    }

    checkAvalability = function(){
        return this.#is_Booked;
    }

}

class Hotel{
    rooms = new Array.Room();
    #min_floor;
    #max_floor;
    constructor(address, Number_Of_Rooms, min_floor, max_floor, room){
        this.address = address;
        this.Number_Of_Rooms = Number_Of_Rooms;
        this.#min_floor = min_floor;
        this.#max_floor = max_floor;
        this.rooms.append(room) ;
    }

    set minimum_Of_floors(min){
        this.#max_floor = min;
    }
    set maximum_Of_floors(max){
        this.#min_floor = max;
    }


    get minimum_floor(){
        return this.#min_floor;
    }

    get maximum_floor(){
        return this.#max_floor ;
    }

    printAdv = function(){
        return console.log("We have the best views for all of our rooms with best prices!");
    }

    listBookedRooms = function(){
        return this.rooms.filter(room => room.available == true);
    }
}