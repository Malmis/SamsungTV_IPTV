var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var pluginAPI = new Common.API.Plugin();

var Main =
{

};

// put this into channels.js  (and host channel.js on your web server, see index.html)
var channelList =
		 [
			{name:'Aftonbladet SE', url:'https://aftonbladetlive-lh.akamaihd.net/i/livestream01_1@182509/master.m3u8'},
			{name:'SVT 1 SE', url:'https://svt1-b.akamaized.net/se/svt1/master.m3u8'},
			{name:'SVT 2 SE', url:'https://svt2-b.akamaized.net/se/svt2/master.m3u8'},
			{name:'SVT Barn/SVT 24 SE', url:'https://svtb-b.akamaized.net/se/svtb/master.m3u8'},
			{name:'SVT Kunskapskanalen SE', url:'https://svtk-b.akamaized.net/se/svtk/master.m3u8'},
			{name:'ATG SE', url:'https://httpcache0-00688-cacheliveedge0.dna.qbrick.com/00688-cacheliveedge0/out/u/atg_sdi_1_free_3.m3u8'},
			{name:'DiTV SE', url:'https://httpcache0-03837-cachelive2.dna.qbrick.com/03837-cachelive2/smil:03837_tx4_720p/playlist.m3u8'},
			{name:'Expressen TV SE', url:'https://httpcache0-03837-cachelive2.dna.qbrick.com/03837-cachelive2/smil:03837_tx2_720p/playlist.m3u8'},
			{name:'Expressen TV 2 SE', url:'https://httpcache0-03837-cachelive2.dna.qbrick.com/03837-cachelive2/smil:03837_tx5_720p/playlist.m3u8'},
			{name:'SportExpressen SE', url:'https://httpcache0-03837-cachelive6.dna.qbrick.com/03837-cachelive6/smil:03837_tx6_720p/playlist.m3u8'},
			{name:'Expressen CNN 1 SE', url:'https://httpcache0-03837-cachelive2.dna.qbrick.com/03837-cachelive2/smil:03837_tx1_720p/playlist.m3u8'},
			{name:'Expressen CNN 2 SE', url:'https://httpcache0-03837-cachelive2.dna.qbrick.com/03837-cachelive2/smil:03837_tx3_720p/playlist.m3u8'},
			{name:'TV4 Nyheterna Live', url:'https://csm-e-cetv4aeun1live102-0e6c9e413940a0edf.tls1.yospace.com/csm/live/142791716/chunklist.m3u8'},
			//{name:'TV4 Nyheterna Live', url:'https://csm-e-tv4se-eb.tls1.yospace.com/csm/live/142791716.m3u8'},
			{name:'TV4 Nyheterna Politik', url:'https://csm-e-cetv4aeun1live102-0b69ee5ed4fdd93fd.tls1.yospace.com/csm/live/142791350/chunklist.m3u8'},
			//{name:'TV4 Nyheterna Politik', url:'https://csm-e-tv4se-eb.tls1.yospace.com/csm/live/142791350.m3u8'},
			{name:'TV4 Nyheterna Sport', url:'https://csm-e-cetv4aeun1live102-071fc084dc6b838e0.tls1.yospace.com/csm/live/142791553/chunklist.m3u8'},
			//{name:'TV4 Nyheterna Sport', url:'https://csm-e-tv4se-eb.tls1.yospace.com/csm/live/142791553.m3u8'},
			{name:'Red Bull TV', url:'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_6660.m3u8'},
			{name:'EDGESport', url:'https://dai2.xumo.com/amagi_hls_data_xumo1212A-edgesportxumo/CDN/master.m3u8'},
			{name:'Russia Today UK', url:'https://rt-uk.secure.footprint.net/1106.m3u8'},
			{name:'Russia Today Documentary', url:'https://rt-doc-gd.secure2.footprint.net/1101.m3u8'},
			{name:'NASA TV Public-Education', url:'https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8'},
			{name:'NASA TV Media', url:'https://ntv2.akamaized.net/hls/live/2013923/NASA-NTV2-HLS/master.m3u8'},
			{name:'Bloomberg Europe UK', url:'https://liveprodeuwest.global.ssl.fastly.net/eu1/Channel-EUTVqvs-AWS-ireland-1/Source-EUTVqvs-1000-1_live.m3u8'},
			{name:'Cheddar Business US', url:'https://live.chdrstatic.com/cheddar/index.m3u8'},
			{name:'Cheddar News US', url:'http://live.chdrstatic.com/cbn/primary/1.m3u8'},
			{name:'Al Jazeera US', url:'https://live-hls-web-aje.getaj.net/AJE/01.m3u8'},
			{name:'Deutsche Welle', url:'https://dwstream4-lh.akamaihd.net/i/dwstream4_live@131329/master.m3u8'},
			{name:'CGTN Documentary China', url:'https://news.cgtn.com/resource/live/document/cgtn-doc.m3u8'},
			{name:'TRT World', url:'https://tv-trtworld.live.trt.com.tr/master.m3u8'},
			//{name:'MTV NO', url:'https://unilivemtveu-lh.akamaihd.net/i/mtvno_1@346424/master.m3u8'},
			//{name:'MTV NO', url:'https://unilivemtveu-lh.akamaihd.net/i/mtvno_1@346424/index_3500_av-b.m3u8'},
			{name:'Norway Live NO', url:'https://bgo1.cdn.s3m.no/fs/live/live/chunklist.m3u8'},
			//{name:'TV Haugaland NO', url:'https://900c544ac47302fffd7d3f12b4c745fd-httpcache0-90216-cachelive0.dna.qbrick.com/90216-cachelive0/smil:APPLETV/playlist.m3u8'},
			{name:'Kanal Hovedstaden NO', url:'https://59b954022ec35.streamlock.net/liveTV2/_definst_/smil:liveTVstream2.transcoder.smil/playlist.m3u8'},
			//{name:'KKR TV DK', url:'https://stream.kkr.dk/live/ngrp:kkr_adaptive/playlist.m3u8'},
			//{name:'Kringvarp Foroya', url:'https://w1.kringvarp.fo/uttanlands/_definst_/smil:uttanlands.smil/playlist.m3u8'},
			{name:'KVF', url:'https://w2.kringvarp.fo/uttanlands/480/manifest.m3u8'},
			//{name:'RUV', url:'https://ruvruverl-live.hls.adaptive.level3.net/ruv/ruverl/index/stream4.m3u8'},
			//{name:'RUV 2', url:'https://ruvruverl-live.hls.adaptive.level3.net/ruv/ruv2/index/stream5.m3u8'},
			//{name:'Stortinget', url:'https://flash0.19333-live0.dna.qbrick.com:1935/19333-live0/push-stortinget_1/playlist.m3u8'},
			{name:'TV2 Bornholm DK', url:'https://live.tv2bornholm.dk/stream/live/chunklist.m3u8'},
			{name:'TV2 Fyn DK', url:'https://cdn-lt-live.tv2fyn.dk/dc-0/live/hls/p/1966291/e/0_vsfrv0zm/sd/6000/t/2eGlsBmOnpkK1g0-J_56AA/index-s32.m3u8'},
			//{name:'TV2 Lorry DK', url:'https://cdnapisec.kaltura.com/p/2045321/sp/204532100/playManifest/entryId/1_2kojfk4m/format/applehttp/protocol/https/uiConfId/32599481/a.m3u8'},
			{name:'TV2 Lorry DK', url:'https://cdn-lt-live.tv2lorry.dk/dc-1/live/hls/p/2045321/e/1_2kojfk4m/sd/6000/t/3sviGJI1zDz8eI2opYJlFg/index-s32.m3u8'},
			//{name:'TV2 Nord Salto DK', url:'https://cdn-lt-live.tv2nord.dk/dc-0/live/hls/p/1956931/e/0_74s20zcv/sd/6000/t/U6L8elLqfaGmZ1aA6yR23A/index-s32.m3u8'},
			{name:'TV2 Ostjylland DK', url:'https://cdn-lt-live.tv2oj.dk/dc-1/live/hls/p/2102081/e/0_x4p3licd/sd/6000/t/5aoqiGIZk5dVwQnsYa1OiQ/index-s32.m3u8'},
			{name:'TV2 Ost DK', url:'https://cdn-lt-live.tveast.dk/dc-0/live/hls/p/1953381/e/0_zphj9q61/sd/6000/t/-YKISZ71uQSojctuBa_EhQ/index-s32.m3u8'},
			//{name:'TV2 Play DK', url:'https://tv2-play-cl2-live-hls-nt.akamaized.net/out/u/tv2play1/crsvkedv/0/master.m3u8'},
			//{name:'TV Aarhus DK', url:'https://streaming.media.digicast.dk/clients_live/tv3/tv3_live/chunklist.m3u8'},
			{name:'TV Midtvest DK', url:'https://cdn-lt-live.tvmidtvest.dk/dc-0/live/hls/p/1953371/e/0_ghzg9q0q/sd/6000/t/EG-gDRIyoxKp9xWooxW-8w/index-s32.m3u8'},
			{name:'TV Storbyen DK', url:'https://5942cb81db6d0.streamlock.net/kanalnordvest/_definst_/mp4:kanalnordvest/chunklist.m3u8'},
			//{name:'TV Syd DK', url:'https://cdn-lt-live.tvsyd.dk/dc-1/live/hls/p/1956351/e/0_e9slj9wh/t/ut3_n5VQ1FqzlqMhwbQmJg/index-s32.m3u8'},
			//{name:'TV2 Syn DK', url:'https://cdn-lt-live.tvsyd.dk/dc-1/live/hls/p/1956351/e/0_e9slj9wh/t/ut3_n5VQ1FqzlqMhwbQmJg/index-s32.m3u8'},
			//{name:'YLE TV1 FI', url:'https://yletvhdliveworld-lh.akamaihd.net/i/yletv1hdworld_1@187592/master.m3u8'},
			//{name:'YLE TV1 FI', url:'https://yletvhdliveworld-lh.akamaihd.net/i/yletv1hdworld_1@187592/index_2764_av-p.m3u8'},
			//{name:'YLE TV2 FI', url:'https://yletvhdliveworld-lh.akamaihd.net/i/yletv2hdworld_1@187593/master.m3u8'},
			//{name:'YLE TV2 FI', url:'https://yletvhdliveworld-lh.akamaihd.net/i/yletv2hdworld_1@187593/index_2764_av-p.m3u8'},
			//{name:'Taivas TV7 FI', url:'https://vod.tv7.fi:1935/tv7-fi/tv7-fi.stream_720p/chunklist_w2131949141.m3u8'},
			{name:'Västmanlands TV SE', url:'https://edg01-prd-se-dcs.solidtango.com/edge/_lo9yf4l5_/lo9yf4l5/playlist.m3u8'},
			{name:'Malmö Mediakanal SE', url:'https://edg01-prd-se-ixn.solidtango.com/edge/_8ynhbua3_/8ynhbua3/playlist.m3u8'},
			{name:'Öppna Kanalen Skövde', url:'http://video.webbplay.se:1935/livetv/lokaltv/chunklist_w157052994.m3u8'},
			{name:'Öppna Kanalen SE', url:'https://edg01-prd-se-ixn.solidtango.com/edge/_451iw2h_/451iw2h/playlist.m3u8'}
			//{name:'ABC News Digital', url:'https://abclive1-lh.akamaihd.net/i/abc_live01@423395/master.m3u8'},
			//{name:'ABC News Digital 2', url:'https://abclive1-lh.akamaihd.net/i/abc_live02@423396/master.m3u8'},
			//{name:'ABC News Digital 3', url:'https://abclive1-lh.akamaihd.net/i/abc_live03@423397/master.m3u8'},
			//{name:'ABC News Digital 4', url:'https://abclive1-lh.akamaihd.net/i/abc_live04@423398/master.m3u8'},
			//{name:'ABC News Digital 5', url:'https://abclive1-lh.akamaihd.net/i/abc_live05@423399/master.m3u8'},
			//{name:'ABC News Digital 6', url:'https://abclive1-lh.akamaihd.net/i/abc_live06@423400/master.m3u8'},
			//{name:'ABC News Digital 7', url:'https://abclive1-lh.akamaihd.net/i/abc_live07@423401/master.m3u8'},
			//{name:'ABC News Digital 8', url:'https://abclive1-lh.akamaihd.net/i/abc_live08@423402/master.m3u8'},
			//{name:'ABC News Digital 9', url:'https://abclive1-lh.akamaihd.net/i/abc_live09@420891/master.m3u8'},
			//{name:'ABC News Digital 10', url:'https://abclive1-lh.akamaihd.net/i/abc_live10@420897/master.m3u8'},
			//{name:'Himlen TV7 SE', url:'https://vod.tv7.fi:1935/tv7-se/_definst_/mp4:tv7-se.stream_360p/playlist.m3u8'},
			//{name:'Kanal 10 SV', url:'https://cdn-kanal10.crossnet.net/kanal10/mp4:mpegts.stream/playlist.m3u8'},
			//{name:'Kanal 10 NO', url:'https://cdn-kanal10.crossnet.net/kanal10no/live1/playlist.m3u8'},
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
