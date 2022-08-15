$(document).ready(function() {
    init(); 
})

function init(page) {   // Declare function
    page = page || 1;  // If there is no page, put 1
    $(".cards").html(""); //Initialization
    $("#paging").html(""); //Initialization
    $.ajax({ //Call Ajax
        type: "GET", //Call Get Type
        url: "https://reqres.in/api/users?page="+page, 
        dataType: "json", 
        async : true,  
        success: function (data) { 
            console.log("Data",data)
            var datas = data.data;
            for(var i=0;i<datas.length;i++) { 

                var str = "<article class='card'>"
                            + "<header>"
                            +   "<h2>"+ datas[i].first_name + datas[i].last_name + "</h2>"
                            + "</header>"
                            +  "<img src='" + datas[i].avatar +"' alt='이미지가 없습니다'>"
                            +  "<div class='content'> <p> " + datas[i].email + " </p> </div>"
                        +  "</article>";
                $(".cards").append(str);
            }
            var pageStr = "<span onclick='pageClick(1)'>First</span>"
            for(var j=1;j<=4;j++) {
                if(j < 3) {  // Click 1, 2
                    pageStr += "<span onclick='pageClick("+ j +")'>"+j+"</span>";
                } else {
                    pageStr += "<span>"+j+"</span>";
                }
            } 
                pageStr += "<span>Last</page>"
            $("#paging").html(pageStr);
        }, error: function(xhr, status, err) {
            console.log('entered error...');
            console.log("xhr : " + JSON.stringify(xhr));
            console.log("status : " + JSON.stringify(status));
            console.log("err : " + err);   
        }
    })
}

function pageClick(pages){ // Move Pages

    init(pages)
}