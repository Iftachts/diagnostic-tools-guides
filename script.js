
const filter=document.getElementById('filter');
if(filter){filter.addEventListener('input',()=>{const q=filter.value.trim();document.querySelectorAll('#compare tbody tr').forEach(tr=>{tr.style.display=tr.textContent.includes(q)?'':'none'})})}
