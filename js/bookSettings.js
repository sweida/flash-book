flippingBook.pages = [
	"pages/001.jpg",
	"pages/002.jpg",
	"pages/003.jpg",
	"pages/004.jpg",
	"pages/005.jpg",
	"pages/006.jpg",
	"pages/007.jpg",
	"pages/008.jpg",
	"pages/009.jpg",
	"pages/010.jpg"
];


flippingBook.contents = [
	[ "Cover", 1 ],
	[ "Modern", 4 ]
];

// define custom book settings here
flippingBook.settings.bookWidth = 826;
flippingBook.settings.bookHeight = 584;
flippingBook.settings.pageBackgroundColor = 0x5b7414;
flippingBook.settings.backgroundColor = 0x83a51c;
flippingBook.settings.zoomUIColor = 0x919d6c;
flippingBook.settings.useCustomCursors = false;
flippingBook.settings.dropShadowEnabled = false,
flippingBook.settings.zoomImageWidth = 992;
flippingBook.settings.zoomImageHeight = 1403;
flippingBook.settings.downloadURL = "http://www.page-flip.com/new-demos/03-kitchen-gorenje-2008/kitchen_gorenje_2008.pdf";
flippingBook.settings.flipSound = "sounds/02.mp3";
flippingBook.settings.flipCornerStyle = "first page only";
flippingBook.settings.zoomHintEnabled = true;

// default settings can be found in the flippingbook.js file
flippingBook.create();
