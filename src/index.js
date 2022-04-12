// Functions import.
import { sum, anotherOne } from "./fun"
// Library import.
import * as d3 from "d3"
// CSS import.
import "./styles/box.css"

document.addEventListener("DOMContentLoaded", function () {
	console.log(sum(5, 8))
	console.log(sum("5", "8"))
	anotherOne()

	drawTree()
})

function drawTree() {
	const data = {
		label: 1,
		children: [
			{
				label: 2,
				children: [],
			},
			{
				label: 3,
				children: [],
			},
			{
				label: 4,
				children: [],
			},
		],
	}

	const radius = 20

	const svg = d3
		.select("body")
		.append("svg")
		.attr("width", 400)
		.attr("height", 400)
		.append("g")
		.attr("transform", `translate(${radius},${radius})`)

	const layout = d3.tree().size([360, 360])(
		d3.hierarchy(data, (node) => node.children)
	)

	const edges = svg
		.append("g")
		.attr("fill", "none")
		.attr("stroke", "#555")
		.selectAll("path")
		.data(layout.links())
		.enter()
		.append("path")
		.attr("d", (d) =>
			d3.linkHorizontal()({
				source: [d.source.x, d.source.y + radius],
				target: [d.target.x, d.target.y - radius],
			})
		)

	const nodes = svg
		.append("g")
		.attr("fill", "none")
		.attr("stroke", "black")
		.selectAll("g")
		.data(layout.descendants())
		.enter()
		.append("g")
		.attr("transform", (d) => `translate(${d.x},${d.y})`)

	nodes.append("circle").attr("r", radius).attr("fill", "lightgreen")

	nodes.append("text").text((node) => node.data.label)
}
