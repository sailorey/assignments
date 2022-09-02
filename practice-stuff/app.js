var result = document.querySelectorAll("ol#outer-space > li")
console.log(Array.from(result))

for (var i = 0; i < result.length; i++) {
    result[i].textContent = "**REDACTED**"
}