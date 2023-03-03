var form= document.getElementById('sheetdb-form');
form.addEventListener("submit",e =>{
    e.preventDefault();
    fetch(form.action,{
        method:"post",
        body: new FormData(document.getElementById('sheetdb-form')),
    }).then(
        Response => Response.json()
    ).then((html)=>{
        register.style.display = 'block';
        window.location.reload();
    });
});
