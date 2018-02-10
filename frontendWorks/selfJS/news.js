$(document).ready(function () {
	
	const newsArray = [{"url":"http://www.ddca.in/", "params" : "marquee"},
		{"url":"http://www.cricbuzz.com/cricket-news", "params" : ".cb-nws-hdln-ancr"}];
	
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
		
		newsList.innerHTML = '';
		for(let news = 1; news <totalNews.length; news++) {
			let newsCard = $(`<div class="card" style="margin: 15px;width: 30rem; float: left">
													<img class="card-img-top" style="width: 100%; height: 100%" src="../img/content-left.jpg" alt="Card image cap">
												<div class="card-body">
												<p class="card-text">${totalNews[news]}</p>
											</div>
											</div>`);
		newsList.append(newsCard)
		}
	}
	
})
