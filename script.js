// Handle comment submission for performances page
function submitComment() {
    const commentText = document.getElementById("comment").value;
    if (commentText) {
        const commentDisplay = document.getElementById("comments-display");
        const newComment = document.createElement("p");
        newComment.textContent = commentText;
        commentDisplay.appendChild(newComment);
        document.getElementById("comment").value = "";  // Clear comment input
    }
}
