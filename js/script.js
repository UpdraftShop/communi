document.addEventListener('DOMContentLoaded', function() {
    // 初回ページロード時にも setupButtons を呼び出す
    setupButtons();

    document.getElementById('install-btn').addEventListener('click', function() {
        loadArticle('md/install.md');
    });

    document.getElementById('usage-btn').addEventListener('click', function() {
        loadArticle('md/usage.md');
    });
});

function loadArticle(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            var html = marked.parse(data);
            var mainElement = document.getElementById('main');
            mainElement.innerHTML = '';
            let divElement = document.createElement('div');
            divElement.className = 'md-content';
            divElement.innerHTML = html;
            mainElement.appendChild(divElement);

            // コンテンツが更新されたら setupButtons を再度呼び出す
            setupButtons();
            var settingContent = document.getElementById('content_setting_1');
            if (settingContent != null) {
                settingContent.style.display = 'block';
            }
            var animationSwitchContent = document.getElementById('content_animation_switch_1');
            if (animationSwitchContent != null) {
                animationSwitchContent.style.display = 'block';
            }
            var animationTransitionContent = document.getElementById('content_transition_tracking_1');
            if (animationTransitionContent != null) {
                animationTransitionContent.style.display = 'block';
            }
        });
}

function setupButtons() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        // 設定タブの表示切り替え
        if (/^setting_button_\d+/.test(button.id)) {
            button.addEventListener('click', function() {
                var contentId = 'content_setting_' + this.id.replace('setting_button_', '');
                var contents = document.querySelectorAll('.content');
                contents.forEach(content => {
                    if (/^content_setting_\d+/.test(content.id)) {
                        content.style.display = 'none';
                    }
                });
                document.getElementById(contentId).style.display = 'block';
            });
        }
        // アニメーション設定の表示切替
        if (/^animation_switch_\d+/.test(button.id)) {
            button.addEventListener('click', function() {
                var contentId = 'content_animation_switch_' + this.id.replace('animation_switch_', '');
                var contents = document.querySelectorAll('.content');
                contents.forEach(content => {
                    if (/^content_animation_switch_\d+/.test(content.id)) {
                        content.style.display = 'none';
                    }
                });
                document.getElementById(contentId).style.display = 'block';
            });
        }
        // 遷移/トラッキング設定の表示切替
        if (/^animation_transition_tracking_\d+/.test(button.id)) {
            button.addEventListener('click', function() {
                var contentId = 'content_transition_tracking_' + this.id.replace('animation_transition_tracking_', '');
                var contents = document.querySelectorAll('.content');
                contents.forEach(content => {
                    if (/^content_transition_tracking_\d+/.test(content.id)) {
                        content.style.display = 'none';
                    }
                });
                document.getElementById(contentId).style.display = 'block';
            });
        }
        // アニメーション編集画面の表示切り替え
        if (button.id === 'content_animation_edit_button') {
            button.addEventListener('click', function() {
                var mainContent = document.getElementById('content_animation_edit');
                if (mainContent.style.display === 'none' || mainContent.style.display === '') {
                    mainContent.style.display = 'block';
                    button.textContent = '▽';
                } else {
                    mainContent.style.display = 'none';
                    button.textContent = '▷';
                }
            });
        }
    });
}

window.onload = function() {
    loadArticle('md/install.md'); // 初回読み込み時には記事1を表示
}