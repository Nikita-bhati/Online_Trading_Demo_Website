 
        document.addEventListener('DOMContentLoaded', function() {
            
            const buyBtn = document.querySelector('.btn-buy');
            const sellBtn = document.querySelector('.btn-sell');
            
            buyBtn.addEventListener('click', function() {
                const symbol = document.getElementById('symbol').value;
                const quantity = document.getElementById('quantity').value;
                alert(`Placed buy order for ${quantity} shares of ${symbol}`);
            });
            
            sellBtn.addEventListener('click', function() {
                const symbol = document.getElementById('symbol').value;
                const quantity = document.getElementById('quantity').value;
                alert(`Placed sell order for ${quantity} shares of ${symbol}`);
            });
            
            
            const chart = document.querySelector('.chart-placeholder');
            chart.addEventListener('click', function() {
                alert('Interactive chart would open in a real trading platform');
            });
            
            
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                });
            });
        });