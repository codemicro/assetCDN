function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain-www.dotmicron.com";
    }

    // I'm just doing this explicityly because fuck trying to get it to work for the other thing
    document.cookie = '_ga=; Path=/; Domain=.dotmicron.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = '_gat_gtag_UA_141746167_1=; Path=/; Domain=.dotmicron.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = '_gid=; Path=/; Domain=.dotmicron.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.alert("Success! Cookies deleted")
}
