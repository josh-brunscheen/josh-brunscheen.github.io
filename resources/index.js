$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "../resources/projects.json",
      dataType: "json",
      success: function(responseData, status){
        var output = " ";  
        var count = 0;
        $.each(responseData.projects, function(i, project) {
          output += '<a class="project';
          if (count%2 === 0) {
            output += '"';
          } else {
            output += ' r"';
          }

          count++;
          
          output += 'href="' + project.link + '">' + project.name + '<div class="rounded">' + project.caption + '<br><br>' + project.year + '</div></a>';
        });
        $('#allProjects').html(output);
      }, error: function(msg) {
        //There was a problem accessing the projects from the json file
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
  });
