
        function startSurprise() {
            document.querySelector('.start-screen').classList.add('hidden');
            const birthdayScreen = document.getElementById('birthdayScreen');
            birthdayScreen.classList.remove('hidden');
            createFloatingElements();
            createShiningStars();
        }
        
        function createFloatingElements() {
            const symbols = [ '❤️', '✰'];
            const starsContainer = document.getElementById('starsContainer');
            for (let i = 0; i < 100; i++) {
                let item = document.createElement('div');
                item.classList.add('floating-item');
                item.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
                item.style.left = Math.random() * 100 + 'vw';
                item.style.top = Math.random() * 100 + 'vh';
                item.style.animationDuration = Math.random() * 5 + 2 + 's';
                item.style.fontSize = Math.random() * 80 + 50 + 'px';
                starsContainer.appendChild(item);
            }
        }
        
        function createShiningStars() {
            const starsContainer = document.getElementById('starsContainer');
            for (let i = 0; i < 50; i++) {
                let star = document.createElement('div');
                star.classList.add('shining-star');
                star.style.left = Math.random() * 100 + 'vw';
                star.style.top = Math.random() * 100 + 'vh';
                star.style.animationDuration = Math.random() * 16 + 10 + 's';
                starsContainer.appendChild(star);
            }
        }
    