/*
 * There exists a small number of browsers which do not support WebP images. Those browsers automatically find themselves on my list of crap browsers.
 * Switches WebP images to JPEG images using an API. ooo.
 * v1.0.0
 */

function changeImages () {
	const images = document.getElementsByTagName("img");
	Modernizr.on("webp", function (result) {
		if (!result) {
			console.log("WebP support not detected. Switching all images to JPG.")
			for (let i = 0; i < images.length; i++) {
				images[i].src = "https://www.tdpain.net/api/webpjpg.php?lc=" + images[i].src;
			}
			console.log("JPG switch complete.")
			//alert("This browser does not support WebP format images.")
		}
	});
}

changeImages()