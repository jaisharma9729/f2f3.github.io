function create_tr(table_id) {
  let table_body = document.getElementById(table_id),
      first_tr   = table_body.firstElementChild
      tr_clone   = first_tr.cloneNode(true);

  table_body.append(tr_clone);

  clean_first_tr(table_body.firstElementChild);
}

function remove_tr(){
  document.getElementById("inputbox").disabled = true;
  document.getElementById("inputbox1").disabled = true;
  document.getElementById("inputbox2").disabled = true;
  document.getElementById("inputbox3").disabled = true;
  document.getElementById("inputbox4").disabled = true;
  
}
