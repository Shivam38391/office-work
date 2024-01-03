let roomCounts = 2;


function addRoomfunc() {

  if (roomCounts < 4){

  let newElement = `   <div  class="helo">

  <div class=" roomBar d-flex flex-column flex-lg-row flex-wrap py-3 px-0 px-lg-3 room-container">
      <div class="d-flex align-items-center gap-2 main-element">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="21" width="21"
              fill="currentColor">
              <path
                  d="M6 5C5.47 5 5 5.21 4.59 5.6S4 6.45 4 7V10C3.45 10 3 10.19 2.6 10.59S2 11.47 2 12V17H3.33L4 19H5L5.67 17H18.33L19 19H20L20.67 17H22V12C22 11.47 21.79 11 21.4 10.59C21 10.19 20.55 10 20 10V7C20 6.45 19.81 6 19.41 5.6S18.53 5 18 5M6 7H11V10H6M13 7H18V10H13Z" />
          </svg>
          <span>Room <span class="room-count"> ${roomCounts} </span></span>
      </div>
      <div class="d-flex align-items-center gap-2 main-element">

          <span>Adults</span>
          <button onclick= " removeAdult(this) " class="border-0 shadow-none d-flex bg-transparent p-0">
              <span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                      <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                  </svg>

              </span>
          </button>

          <span class="adult-count">1</span>
          <button onclick= " addAdult(this) "  class="border-0 shadow-none d-flex bg-transparent p-0">
              <span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>

              </span>
          </button>
      </div>

      <div class="d-flex align-items-center gap-2 main-element">


          <span>Children</span>
          <button  onclick=" removeChildFunc(this) " class="border-0 shadow-none d-flex bg-transparent p-0">
              <span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                      <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                  </svg>


              </span>
          </button>

          <span class="child-count">0</span>
          <button onclick=" addChildFunc(this) " class="border-0 shadow-none d-flex bg-transparent p-0">
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>

              </span>
          </button>
      </div>

  </div>



  
  <button onclick=" removefunc(this)  "
      class="border-0 shadow-none bg-transparent d-flex align-items-center gap-2 px-3 py-2 add-more-btn">
      <span>Remove</span>
      <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              class="bi bi-dash-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
          </svg>
      </span>
  </button>

  </div>`

  $("#appendContainer").append(newElement);

//   updatecounter
  roomCounts = roomCounts + 1;

console.log(roomCounts);

} else {

    //delete add new button
    console.log("delete add new button");
    // $("#AddNewBtn").remove();
    $("#AddNewBtn").prop("disabled",true);



}




}


function removefunc(t){
    console.log("removed clicked", t)

    console.log($(t).parent());

    $(t).parent().remove();

}


function addAdult(e) {
    // console.log($(e).siblings(".adult-count"));
    let currentValue =  parseInt( $(e).siblings(".adult-count").text() ) ;

    if (  currentValue < 4){
        console.log("AddingAdult");
        $(e).siblings(".adult-count").text(currentValue + 1)
    }
    
}


function removeAdult(e) {

    let currentValue =  parseInt(  $(e).siblings(".adult-count").text()   ) ;
    console.log(typeof(currentValue));

    if (  currentValue > 0){

        console.log("removingAdult");
        $(e).siblings(".adult-count").text(currentValue - 1)
    }
    

}





function addChildFunc(e) {
    // console.log($(e).siblings(".adult-count"));
    let currentValue =  parseInt( $(e).siblings(".child-count").text() ) ;

    if (  currentValue < 4){
        console.log("Adding child count");
        $(e).siblings(".child-count").text(currentValue + 1)
    }
    
}


function removeChildFunc(e) {

    let currentValue =  parseInt(  $(e).siblings(".child-count").text()   ) ;
    console.log(typeof(currentValue));

    if (  currentValue > 0){

        console.log("removing child");
        $(e).siblings(".child-count").text(currentValue - 1)
    }
    

}