var loadFlickr = function(obj,set,apiKey){
			
					//json call to flickr
					$.getJSON("http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=" + set + "&api_key=" + apiKey + "&jsoncallback=?", function(flickrData){
				
					//setting length of returned json from flickr
					var length = flickrData.photoset.photo.length;

					//for loop to loop each one and append to the html
					for (i=0; i<length; i++) {
					//photourl is getting the large photos from json
						var photoURL = 'http://farm' + flickrData.photoset.photo[i].farm + '.' + 'static.flickr.com/' + flickrData.photoset.photo[i].server + '/' + flickrData.photoset.photo[i].id + '_' + flickrData.photoset.photo[i].secret +'_b.jpg'
					//thumburl is getting the thumbnail saize image from json
						var thumbURL = 'http://farm' + flickrData.photoset.photo[i].farm + '.' + 'static.flickr.com/' + flickrData.photoset.photo[i].server + '/' + flickrData.photoset.photo[i].id + '_' + flickrData.photoset.photo[i].secret + '_s.jpg'
						//var title = flickrData.photoset.photo[i].title;

					//for each photo returned from our json call
						//creating div on the page
						var newDiv = document.createElement("div");
						//setting the new divs class as content
						newDiv.className = "content";
						//creating a new img tag on the page
						var newImg = document.createElement("img");
						//setting the thumburl as the img src, this is for the thumbnails
						newImg.src = thumbURL;
						//setting the alt attribute as the large photo returned from json
						newImg.setAttribute("alt",photoURL);
						//appending the img to the new div i created
						newDiv.appendChild(newImg);
						//creating a span tag on the page
						var newSpan = document.createElement("span");
						//setting the span text to the title pulled from the json
						newSpan.innerHTML = flickrData.photoset.photo[i].title;
						//appending the span tag to our div
						newDiv.appendChild(newSpan);
						//finding the div location i want to add the new div to, and appending it to the page
						obj.appendChild(newDiv);

					}
				})
			};