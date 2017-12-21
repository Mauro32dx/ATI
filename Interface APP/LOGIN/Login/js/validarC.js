function validar() {
        var variable = true;

                if(!document.formulario.nombre.value){
                        alert("ERROR: Olvido ingresar NOMBRE...!!! Deben completarse todos los campos antes de enviarse el formulario. Igrese un Nombre");
                        document.form.nombre.value.focus;
                        variable="false";
                }

                if(!document.formulario.apellido.value){
                        alert("ERROR: Olvido ingresar APELLIDO...!!! Deben completarse todos los campos antes de enviarse el formulario. Igrese un Apellido");
                        document.form.apellido.value.focus;
                        variable="false";
                }


                if(!document.formulario.legajo.value){
                        alert("ERROR: Olvido ingresar LEGAJO...!!! Deben completarse todos los campos antes de enviarse el formulario. Igrese un Legajo");
                        document.form.legajo.value.focus;
                        variable="false";
                }





                if (variable) {
                        document.formulario.submit();
                }
        }

 window.onload=function(){
                document.getElementById('boton').onclick=validar;
        }
 
