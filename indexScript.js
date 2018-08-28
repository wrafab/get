window.onload = function(){
    document.getElementById("btn_showlogin").onclick = shogMinLogin;
    document.getElementById("close_minilogin").onclick = closeLogin;
    /* ÏÔÊ¾µÇÂ¼´°¿Ú */
    function shogMinLogin(){
        var mini_login = document.getElementsByClassName("mini_login")[0];
        var cover = document.getElementsByClassName("cover")[0];
        mini_login.style.display = "block";
        cover.style.display = "block";
        
        mini_login.style.left = (document.body.scrollWidth - mini_login.scrollWidth) / 2 + "px";
        mini_login.style.top = (document.body.scrollHeight - mini_login.scrollHeight) / 2 + "px";
    }

    /* ¹Ø±ÕµÇÂ¼´°¿Ú */
    function closeLogin(){
        var mini_login = document.getElementsByClassName("mini_login")[0];
        var cover = document.getElementsByClassName("cover")[0];
        mini_login.style.display = "none";
        cover.style.display = "none";
    }

}