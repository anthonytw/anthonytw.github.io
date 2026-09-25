document.querySelectorAll("video[data-loop]").forEach(o=>{o.play().catch(()=>{o.controls=!0})});
