(function() {
    
    var commentForm = document.getElementById('comment-form');
    commentForm.addEventListener("submit", addNewComment);
    var newComment;
    function addNewComment(event){
      event.preventDefault();
      newComment = {
        "name": document.getElementById('new_comment_name').value,
        "email": document.getElementById('new_comment_email').value,
        "comment": document.getElementById('new_comment_text').value
      }
      addDetails();
    }
    var commentsList = document.getElementById('comments-list'),
    commentTemplate = document.getElementById('comment-template');

    function addDetails(){
        var newCommentHtml = commentTemplate.innerHTML.replace('{{name}}',newComment.name);
        newCommentHtml = newCommentHtml.replace('{{email}}',newComment.email);
        newCommentHtml = newCommentHtml.replace('{{comment}}',newComment.comment);
        newCommentNode = document.createElement('div');
        newCommentNode.classList.add('comment');
        newCommentNode.innerHTML = newCommentHtml;
        commentsList.appendChild(newCommentNode); 
    }    
    
})();