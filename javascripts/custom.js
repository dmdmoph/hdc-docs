document.addEventListener("DOMContentLoaded", function() {
    // หาลิงก์ทั้งหมดบนหน้าเว็บที่ลงท้ายด้วย .pdf
    var links = document.querySelectorAll('a[href$=".pdf"]');
    links.forEach(function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});