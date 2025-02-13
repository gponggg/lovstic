/** Generated by sealldevelopers app.js generator **/
var app = new function () {
	this.name = "Lovit",
	this.version = "1",
	this.date = "2024",
	this.folder = "asset-v1/",
	this.looptime = 12300,
	this.bpm = 78,
	this.totalframe = 590,
	this.nbpolo = 7,
	this.nbloopbonus = 3,
	this.bonusloopA = !0,
	this.bonusendloopA = !0,
	this.recmaxloop = 68,
	this.recminloop = 4,
	this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop,
	this.spritepolo = "polo-sprite.png",
	this.spritepicto = "game-picto.png",
	this.colBck = "#000",
	this.col0 = "#000",
	this.col1 = "#D8971E",
	this.col2 = "#D8971E",
	this.col3 = "#c96a1c",
	this.col4 = "#c96a1c",
	this.animearray = [{
			name: "1_jackemboom",
			color: "ffd12b",
			uniqsnd: !0
		}, {
			name: "2_takashi",
			color: "34344c",
			uniqsnd: !0
		}, {
			name: "3_paomeusif",
			color: "c9741c",
			uniqsnd: !0
		}, {
			name: "4_mb14",
			color: "636372",
			uniqsnd: !0
		}, {
			name: "5_guilligyle",
			color: "ffd12b",
			uniqsnd: !1
		}, {
			name: "6_courbevoie",
			color: "34344c",
			uniqsnd: !0
		}, {
			name: "7_mc_alpine",
			color: "ffd12b",
			uniqsnd: !0
		}, {
			name: "8_dj_tay",
			color: "636372",
			uniqsnd: !0
		}, {
			name: "9_supreme_ntm",
			color: "c9741c",
			uniqsnd: !0
		}, {
			name: "10_emile",
			color: "636372",
			uniqsnd: !1
		}, {
			name: "11_t_scarf",
			color: "c9741c",
			uniqsnd: !1
		}, {
			name: "12_donald_tromp",
			color: "34344c",
			uniqsnd: !1
		}, {
			name: "13_hue",
			color: "ffd12b",
			uniqsnd: !0
		}, {
			name: "14_mr_ludwig",
			color: "ffd12b",
			uniqsnd: !1
		}, {
			name: "15_gilbert",
			color: "ffd12b",
			uniqsnd: !1
		}, {
			name: "16_francis",
			color: "c9741c",
			uniqsnd: !1
		}, {
			name: "17_mid_duke",
			color: "636372",
			uniqsnd: !0
		}, {
			name: "18_giolo",
			color: "ffd12b",
			uniqsnd: !0
		}, {
			name: "19_king_domin",
			color: "636372",
			uniqsnd: !1
		}, {
			name: "20_zach",
			color: "c9741c",
			uniqsnd: !0
		}, {
			name: "lil_pump",
			color: "ffd12b",
			uniqsnd: !0
		}, {
			name: "grecou",
			color: "ffd12b",
			uniqsnd: !1
		}, {
			name: "sticlafluier",
			color: "ffd12b",
			uniqsnd: !1
		}
	],
	this.bonusarray = [],
	this.unlockerarray = [];
	for (var n = 0, o = this.animearray.length; n < o; n++) {
		var a = this.animearray[n].name;
		this.animearray[n].soundA = a + "_a",
		this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b",
		this.animearray[n].anime = a + "-sprite.png",
		this.animearray[n].animeData = a + ".json"
	}
};
