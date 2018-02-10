$(document).ready(function () {
	
	const newsArray = [{"url":"http://www.ddca.in/", "params" : "marquee"}]
		// {"url":"http://www.cricbuzz.com/cricket-news", "params" : ".cb-nws-hdln-ancr"}];
	
	$('#fetchNews').click(function () {
		for (let news of newsArray) {
			$.post('/scraper', {
				url: news.url,
				params: news.params
			}, (data) => {
				displayNews(data)
			})
		}
	});
	
	$('#fetchNews').click()
	let newsList = $('#newsList');
	
	function displayNews(totalNews) {
		totalNews = totalNews[0].split('\n');
		console.log(totalNews)
		
		newsList.innerHTML = '';
		for(let news = 1; news <totalNews.length; news++) {
			totalNews[news] = totalNews[news].trim()
			if(totalNews[news].trim() !== "") {
				let newsCard = $(`<div class="card" style="margin: 20px;width: 30rem; float: left">
												<a href="http://www.ddca.in/" target="_blank"><img class="card-img-top" style="width: 100%; height: 100%" src="../img/ddca.png" alt="Card image cap"></a>
												<div class="card-body">
												<p class="card-text" style="padding: 10px">${totalNews[news].trim()}</p>
											</div>
											</div>`);
				newsList.append(newsCard)
			}
		}
	}
})
