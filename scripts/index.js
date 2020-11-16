let discussionTopicsData = []


function showResum(){
    let resum = document.getElementById('description-content');

    if(resum.style.height == '140px'){
        resum.style.height = '100%';
    }
    else {
        resum.style.height = '140px';
    }
}

function showTopicForm(){
    let discussionHeader = document.getElementById('discussion-header');
    let topicForm = document.getElementById('topic-form');

    if(discussionHeader.style.display != 'none'){
        discussionHeader.style.display = 'none';
        topicForm.style.display = 'block';
    } else {
        discussionHeader.style.display = 'block';
        topicForm.style.display = 'none';
    }
}

function postNewTopic(){
    let subject = document.getElementById('topic-subject');
    let content = document.getElementById('topic-content');
    let topicsContainer = document.getElementById('topics-container');

    discussionTopicsData.push(
        {
            subject: subject.value,
            author: 'Usuário padrão :)',
            content: content.value,
            likes: 1,
            answers: 1
        }
    )

    subject.value = '';
    content.value = '';

    showTopicForm();
    renderTopics(topicsContainer, discussionTopicsData);
    
}

function renderTopics(container, data){
    container.innerHTML = "";

    let comments = [];

    data.forEach(element =>{
        comments.push(
            `
            <div class="comment-card">
                <p class="comment-card-subject"> ${element.subject}</p>
                <p class="comment-card-author">${element.author}</p>
                <p class="comment-card-content">${element.content}</p>
                <div style="display: flex; flex-direction: row;">
                    <a style="color: rgb(216, 140, 0); margin-top: 5px;"><i class="material-icons">more_vert</i></a>
                    <a class="waves-effect waves-light btn-small quote-button"><i class="material-icons center">thumb_up</i></a>
                    <p style="font-family: Segoe UI; font-weight: 350; font-size: 14px; line-height: 19px; margin-top: 5px; margin-left: 5px;">${element.likes} Like  ${element.answers} resposta</p>
                </div>
            </div>
            `
        )
    })

    container.innerHTML = comments.join('');
}