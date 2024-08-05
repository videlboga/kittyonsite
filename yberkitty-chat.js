   document.addEventListener('DOMContentLoaded', function() {
       const button = document.getElementById('cyberkitty-chat-button');
       const chatContainer = document.getElementById('cyberkitty-chat-container');
       let isOpen = false;

       button.addEventListener('click', function() {
           if (isOpen) {
               chatContainer.style.display = 'none';
           } else {
               chatContainer.style.display = 'block';
           }
           isOpen = !isOpen;
       });
   });
