$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "../resources/projects.json",
      dataType: "json",
      success: function(responseData, status){
        var output = " ";  
        $.each(responseData.projects, function(i, project) {
          output += '<div class="project"><a href="' + project.link + '">' + project.name + '</a>';
          output += '<p>' + project.caption + '</p>';
          output += '</div>';
        });
        $('#allProjects').html(output);
      }, error: function(msg) {
        //There was a problem accessing the projects from the json file
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
  });
  