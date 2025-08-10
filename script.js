// Minimal JS for mobile nav and smooth scrolling
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menu-btn');
  const nav = document.querySelector('.nav-links');
  btn && btn.addEventListener('click', ()=> {
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
});
