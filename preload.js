
var images = ["gamesl", "gamesc", "snowcatl", "snowcatc", "loopsl", "loopsc"];

function initImages()
{
    for (var i = 0; i < images.length; i++)
    {
        imageId = images[i];
        loops = document.getElementById(imageId);
        loops.style.visibility = "visible";
    }
}  

function preloadImages(urls)
{
    var img = new Array();
    for (var i = 0; i < urls.length; i++)
    {
        img[img.length] = new Image();
        img[img.length - 1].src = urls[i];
    }
}

window.onload = function()
{
    var img = new Array("b7.gif", "c7.gif", "b6.gif", "c6.gif", "b1.gif", "b2.gif");
    preloadImages(img);
    initImages();
}