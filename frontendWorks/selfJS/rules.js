$(document).ready(function () {
	
	const newsArray = [{"url":"https://www.icc-cricket.com/about/cricket/rules-and-regulations/playing-conditions", "params" : "a"}]
	
	$('#tableList').click(function () {
		for (let news of newsArray) {
			$.post('/rules', {
				url: news.url,
				params: news.params
			}, (data) => {
				displayRules(data)
			})
		}
	});
	
	$('#tableList').click()
	let tableList = $('#tableList');
	
	function displayRules(totalRules) {
		console.log(totalRules)
		tableList.innerHTML = $(`<table class="table table-striped">
                  <thead>
                  <th>Link</th>
                  </thead>
                  <tbody>`);
		for(let rule = 0; rule <totalRules.length; rule++) {
			let tableListItem = $(`<tr><td>1</td></tr>`);
			tableList.append(tableListItem);
		}
		tableList.append(`</tbody>
                </table>
              `);
		
	}
})
