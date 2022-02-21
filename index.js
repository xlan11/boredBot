document.getElementById("idea-btn").addEventListener("click", function(){
    fetch ("https://apis.scrimba.com/bored/api/activity")
        .then (response => response.json())
        .then (data => {
            document.getElementById("new-idea").textContent = data.activity
            document.getElementById("title").textContent = "Happybot is happy to suggest that you"
        }
        )
})
