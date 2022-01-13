export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/byld-hero.jpg","images/members/lakshya.jpg","images/members/mihir.jpg","images/members/srijan.jpg","images/members/vasu.jpg","transcript.pdf"]),
	_: {
		mime: {".png":"image/png",".jpg":"image/jpeg",".pdf":"application/pdf"},
		entry: {"file":"start-88318544.js","js":["start-88318544.js","chunks/vendor-3856deb2.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/?$/,
				params: null,
				path: "/projects",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/members\/?$/,
				params: null,
				path: "/members",
				a: [0,4],
				b: [1]
			}
		]
	}
};
