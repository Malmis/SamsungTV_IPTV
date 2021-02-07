var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var pluginAPI = new Common.API.Plugin();

var Main =
{

};

// put this into channels.js  (and host channel.js on your web server, see index.html)
var channelList =
		 [
			{name:'Aftonbladet', url:'https://aftonbladetlive-lh.akamaihd.net/i/livestream01_1@182509/master.m3u8'},
			{name:'ATG', url:'https://httpcache0-00688-cacheliveedge0.dna.qbrick.com/00688-cacheliveedge0/out/u/atg_sdi_1_free_3.m3u8'},
			{name:'Himlen TV', url:'http://vod.tv7.fi:1935/tv7-se/_definst_/mp4:tv7-se.stream_360p/playlist.m3u8'},
			{name:'Kanal 10', url:'https://cdn-kanal10.crossnet.net/kanal10/mp4:mpegts.stream/playlist.m3u8'},
			{name:'TV4', url:'https://csm-e-tv4se-eb.tls1.yospace.com/csm/live/142791716.m3u8'},
			{name:'TV4 Nyheterna', url:'https://csm-e-tv4se-eb.tls1.yospace.com/csm/live/142791350.m3u8'},
			{name:'TV4 Svensk Politik', url:'https://csm-e-tv4se-eb.tls1.yospace.com/csm/live/142791553.m3u8'},
			{name:'DiTV SE', url:'https://httpcache0-03837-cachelive2.dna.qbrick.com/03837-cachelive2/smil:03837_tx4_720p/playlist.m3u8'},
			{name:'Expressen TV SE', url:'https://httpcache0-03837-cachelive2.dna.qbrick.com/03837-cachelive2/smil:03837_tx2_720p/playlist.m3u8'},
			{name:'SportExpressen SE', url:'https://httpcache0-03837-cachelive6.dna.qbrick.com/03837-cachelive6/smil:03837_tx6_720p/playlist.m3u8'},
			{name:'Västmanlands TV', url:'https://edg01-prd-se-dcs.solidtango.com/edge/_lo9yf4l5_/lo9yf4l5/playlist.m3u8'},
			{name:'Viasat History Russian', url:'https://s1.idata.uz/stch_temp20/tracks-v1a1/mono.m3u8'},
			{name:'Viasat Sport', url:'https://persik.by/stream/2944/263250/10249.m3u8'},
			{name:'MTV (Norge)', url:'https://unilivemtveu-lh.akamaihd.net/i/mtvno_1@346424/master.m3u8'},
			{name:'TV Haugaland', url:'https://900c544ac47302fffd7d3f12b4c745fd-httpcache0-90216-cachelive0.dna.qbrick.com/90216-cachelive0/smil:APPLETV/playlist.m3u8'},
			{name:'Yle TV1', url:'https://yletvhdliveworld-lh.akamaihd.net/i/yletv1hdworld_1@187592/master.m3u8'},
			{name:'Yle TV2', url:'https://yletvhdliveworld-lh.akamaihd.net/i/yletv2hdworld_1@187593/master.m3u8'},
			{name:'Öppna Kanalen', url:'http://83.140.64.214/edge/_451iw2h_/451iw2h/playlist.m3u8'}
		 ];

Main.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
	window.onShow = onShowEvent;
};

var onShowEvent = function() {
	var nnaviPlugin = document.getElementById('pluginObjectNNavi');
	 nnaviPlugin.SetBannerState(1);

	 // For volume OSD
	 pluginAPI.unregistKey(tvKey.KEY_VOL_UP);
	 pluginAPI.unregistKey(tvKey.KEY_VOL_DOWN);
	 pluginAPI.unregistKey(tvKey.KEY_MUTE);

	 sPlayer.init();

	setTimeout(function(){
			sPlayer.gotoChannel(0);
	}, 1000);
};

Main.onUnload = function()
{

};

Main.enableKeys = function()
{
	document.getElementById("anchor").focus();
};

Main.keyDown = function()
{
	var keyCode = event.keyCode;
	//console.log("Key pressed: " + keyCode);
	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			widgetAPI.sendReturnEvent();
			break;
		case tvKey.KEY_UP:
			break;
		case tvKey.KEY_DOWN:
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			break;
		case tvKey.KEY_CH_UP:
			sPlayer.channelUp();
			break;
		case tvKey.KEY_CH_DOWN:
			sPlayer.channelDown();
			break;
		case tvKey.KEY_0:
			sPlayer.gotoChannel(0);
			break;
		case tvKey.KEY_1:
			sPlayer.gotoChannel(1);
			break;
		case tvKey.KEY_2:
			sPlayer.gotoChannel(2);
			break;
		case tvKey.KEY_3:
			sPlayer.gotoChannel(3);
			break;
		case tvKey.KEY_4:
			sPlayer.gotoChannel(4);
			break;
		case tvKey.KEY_5:
			sPlayer.gotoChannel(5);
			break;
		case tvKey.KEY_6:
			sPlayer.gotoChannel(6);
			break;
		case tvKey.KEY_7:
			sPlayer.gotoChannel(7);
			break;
		case tvKey.KEY_8:
			sPlayer.gotoChannel(8);
			break;
		case tvKey.KEY_9:
			sPlayer.gotoChannel(9);
			break;
		default:
			alert("Unhandled key");
			break;
	}
};
