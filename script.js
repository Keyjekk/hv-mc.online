document.addEventListener("DOMContentLoaded", function() {
            // Проверяем, что Telegram Web App API доступен
            if (window.Telegram.WebApp) {
                // Разворачиваем приложение на весь экран
                Telegram.WebApp.expand();
}
});