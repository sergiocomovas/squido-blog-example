document.addEventListener('DOMContentLoaded', function () {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].classList.add('img-fluid');
      }
}, false);

//AVISO COOKIES

document.addEventListener('DOMContentLoaded', function () {
  console.log("🟡Mensaje de Cookies Activado");
  if (!localStorage.getItem('cookieconsent')) {
		document.body.innerHTML += '\
		<div class="cookieconsent" style="position:fixed;padding:9px;left:0;top:0;background-color:#592471;color:#FFF;text-align:center;width:100%;z-index:99999;">\
			<strong>🍪 Se usan ⒸⓄⓄⓀⒾⒺⓈ.</strong> Si estalqueas por aquí, las aceptas sí o sí: \
			<a href="#" style="color:#e20de9;">[ OK ]</a>\
		</div>\
		';
		document.querySelector('.cookieconsent a').onclick = function(e) {
			e.preventDefault();
			document.querySelector('.cookieconsent').style.display = 'none';
			localStorage.setItem('cookieconsent', true);
		};
	}
});