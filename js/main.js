document.getElementById('shirt-tab').addEventListener('click', function() {
    showImage('shirt-image');
  });
  
  document.getElementById('shoes-tab').addEventListener('click', function() {
    showImage('img/images (2).jpg');
  });
  
  document.getElementById('pants-tab').addEventListener('click', function() {
    showImage('img/download.jpg');
  });
  
  document.getElementById('sale-tab').addEventListener('click', function() {
    showImage('sale-image');
  });

  function showImage(imageId) {
    const images = document.querySelectorAll('.content-image');
    images.forEach(function(image) {
      image.style.display = 'none';
    });
    
    
    document.getElementById(imageId).style.display = 'block';
  }