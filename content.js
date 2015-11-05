function run(){
	//remove ads
	var ads = $('[class^=rightColumnWrapper]').find('[id^=pagelet_ego_pane]');
	ads.children().remove();
	ads_content = $("<p></p>")
		.text("Ads blocked")
		.css('font-size','12px')
		.css('top','20px');
	ads.append(ads_content);

	//remove feed
	var feed = $('[id^=topnews_main_stream]');
	feed.children().remove();
	var feed_content = $("<h1></h1>")
			.text("Stay focus !")
			.css('font-size','50px')
			.css('top','100px')
			.css('vertical-align', 'middle');

	feed.append(feed_content);	
}

run();