const youtubedl = require('youtube-dl')

getVideoInfo =  function(url) {
	var options = [];
	youtubedl.getInfo(url, options, function(err, info) {
		if (err) {
			throw err;
		}
		if (typeof(info) === typeof(undefined) || typeof(info.formats) === typeof(undefined) ){
			console.log('No formats found');
		}
		else{
			info.formats.forEach(function(format){
				console.log(format.format_id);
				console.log(format.format);
				console.log(format.vcodec);
				console.log(format.ext);
			});
		}
	});
};

exports.generateVideoMenu = function(url) {
	var menuTemplate = [
	{
	  label: 'Electron',
	  submenu: [
	  {
	    role: 'undo'
	  },
	  {
	    role: 'redo'
	  }],
	},
	{
	  label: 'Get Video Info',
	  submenu: [
	  {
	    label: 'View video info',
	    click() { 
	      // console.log(window.location.href)
	      getVideoInfo(url);
	    }
	  }
	  ]
	},
	{
	  label: 'Download',
	  submenu: [
	  {
	    label: 'Quality mp4',
	    click () { require('electron').shell.openExternal('http://electron.atom.io'); }
	  },
	  {
	    label: 'Quality mkv',
	    click () { console.log('mkv'); }
	  }],
	}
	];
	return menuTemplate;
}