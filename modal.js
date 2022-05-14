$("#modal").dialog({
    modal:true,
    autoOpen:false,
    buttons:{
      ok:function()
      {
        var name=$("#name").val()
        $("#appendd").append("welcome to "+name);
      }
    }
}
)
$("#open").click(function()
    {
      $("#modal").dialog("open")
    })
