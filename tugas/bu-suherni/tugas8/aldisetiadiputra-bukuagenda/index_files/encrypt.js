 // Mencegah klik kanan pada halaman
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Mencegah kombinasi keyboard Ctrl+C, Ctrl+X, Ctrl+V
        document.addEventListener('keydown', function(e) {
            // Cek jika Ctrl ditekan bersama C, X, atau V
            if ((e.ctrlKey || e.metaKey) && 
                (e.key === 'c' || e.key === 'x' || e.key === 'v')) {
                e.preventDefault();
            }
        });

        // Mencegah klik tahan pada layar mobile (touchstart event)
        document.addEventListener('touchstart', function(e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        });

        // Mencegah penekanan tombol lama (long press) pada mobile
        document.addEventListener('touchend', function(e) {
            if (e.timeStamp - e.target.touchstartTime > 500) {
                e.preventDefault();
            }
        });
        
        // Event listener untuk deteksi waktu mulai klik tahan di mobile
        document.addEventListener('touchstart', function(e) {
            e.target.touchstartTime = e.timeStamp;
        });
