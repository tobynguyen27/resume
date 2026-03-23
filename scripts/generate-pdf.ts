import puppeteer from "puppeteer";

async function generatePdf() {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();

	console.log("Opening puppeteer...");

	await page.goto("http://localhost:5173", { waitUntil: "networkidle0" });
	await page.pdf({
		format: "A4",
		path: "./public/resume.pdf",
		printBackground: true,
		margin: {
			top: "0.4in",
			bottom: "0.4in",
			left: "0.4in",
			right: "0.4in",
		},
	});

	await browser.close();
	console.log("Done");
}

generatePdf();
