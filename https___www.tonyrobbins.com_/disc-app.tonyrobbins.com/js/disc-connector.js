MktoForms2.whenReady(function (form) {

    if ( form.getId() == '1740') { // Marketo Form Id //
        console.log( 'Loaded Disc Profile Script' );
        form.onSuccess(function(values, followUpUrl) {
            var formValues = form.vals();
            console.log(formValues);
            console.log( 'DISC Form was submitted ' );
            post('https://disc-app.tonyrobbins.com/disc.php', formValues);
            //post('disc.php', formValues);
            return false;
        });
    }
});

function post(path, params, method) {
    method = method || "POST";
    var passForm = document.createElement("form");
    passForm.setAttribute("method", method);
    passForm.setAttribute("action", path);
    passForm.setAttribute("enctype", "application/x-www-form-urlencoded");
    passForm.setAttribute("target", "_top");

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "text");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            localStorage.setItem(key,params[key]);
            passForm.appendChild(hiddenField);
        }
    }

    var submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    passForm.appendChild(submitBtn);

    document.body.appendChild(passForm);
    passForm.submit();
}
