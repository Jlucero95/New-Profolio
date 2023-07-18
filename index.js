const root = document.documentElement;
const elmsDisplayed = getComputedStyle(root).getPropertyValue(
	"--marquee-elms-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elms", marqueeContent.children.length);

for (let i = 0; i < elmsDisplayed; i++) {
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

const siteWrapper = document.querySelector(".websites");

const portfolio = [
	{
		name: "SaaS Project",
		url: "https://saas-1-project.netlify.app/",
		picture: " /assets/Saas.png",
	},
];

const websiteCards = (name, url, picture) => {
	const card = `<div class="site-card">
                  <h3>${name}</h3>
                  <a href="${url}"><img src="${picture}"></img></a>
                </div>`;
	siteWrapper.insertAdjacentHTML("beforeend", card);
};

portfolio.map((item) => {
	websiteCards(item.name, item.url, item.picture);
});
