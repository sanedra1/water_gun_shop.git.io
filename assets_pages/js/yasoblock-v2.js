try {

    var YaSoBlock = function (target) {
        var html = document.getElementsByTagName('html')[0];
        var margin_after = window.getComputedStyle(html).getPropertyValue('margin-top');
        if (margin_after != window.YaSoMargin) html.style.marginTop = window.YaSoMargin;
        target.style.setProperty('display', 'none', 'important');
    };

    var YaSoCheck = function (el) {
        return typeof el !== "undefined" && el.innerHTML && (
            /[�C][�o]�[�e]����/.test(el.innerHTML) ||
            /���[e�]�[�c]\.[M�][a�][�p]�[e�]�/.test(el.innerHTML) ||
            /�[�o]�[�e][�e] ���[�o]��[�a]� �[�e]�[�a]/.test(el.innerHTML) ||
            (/[�H][�a]��[�e]�[�o]/.test(el.innerHTML) && /�[�a]�[�e]�[�o][�p]��/.test(el.innerHTML))
        );
    };

    var YaSoMargin = window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('margin-top');

    if ("MutationObserver" in window || "WebKitMutationObserver" in window || "MozMutationObserver" in window) {

        var MuOb = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var mo = new MuOb(function (g) {
            g.map(function (n) {
                var el = n.addedNodes[0];
                if (YaSoCheck(el)) {
                    setTimeout(function () { window.YaSoBlock(el); }, 300);
                }
            })
        });
        mo.observe(document.body, {
            childList: true,
            characterData: true,
        });

    } else if (typeof document.body.addEventListener !== 'undefined') {

        document.addEventListener('DOMNodeInserted', function (e) {
            var el = e.target;
            if (YaSoCheck(el)) {
                setTimeout(function () { window.YaSoBlock(el); }, 300);
                return true;
            }
        });

    }

} catch (e) {

    if (typeof console !== 'undefined')
        console.error('YaSoBlock: error', e);

}


