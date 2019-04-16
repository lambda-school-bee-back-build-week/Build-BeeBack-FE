

  window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 10) {
      document.getElementById('test').style.opacity = -currScrollPos2 / 400 + 7;
    }
  }
);

window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 10) {
      document.getElementById('test2').style.opacity = -currScrollPos2 / 400 + 9.5;
    }
  }
);

window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 10) {
      document.getElementById('test3').style.opacity = -currScrollPos2 / 400 + 5.5;
    }
  }
);