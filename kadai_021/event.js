const Btn = document.getElementById('btn');
Btn.addEventListener('click',()=>{setTimeout(()=>{document.getElementById('text').innerHTML='<h2>ボタンをクリックしました<h2>';},2000);});