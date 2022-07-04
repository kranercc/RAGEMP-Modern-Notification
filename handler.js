function Send_Notification(data) {
    let name = data.name;
    let contents = data.contents;
    let duration = data.duration ? data.duration : 5;
    // <div class="notification"> 
    //     <p class="title">NOTIFICATION</p>
    //     <p class="contents">You need to do such thing</p>
    //     <div class="bg_progress_bar"><div id="current_progress" class="inner_progress_bar" style="width: 30%"></div></div>
    // </div>
    let notification = document.createElement('div');
    notification.className = 'notification';
    let title = document.createElement('p');
    title.className = 'title';
    title.innerHTML = name;
    let contents_p = document.createElement('p');
    contents_p.className = 'contents';
    contents_p.innerHTML = contents;
    let progress_bar = document.createElement('div');
    progress_bar.className = 'bg_progress_bar';
    let inner_progress_bar = document.createElement('div');
    inner_progress_bar.className = 'inner_progress_bar';
    inner_progress_bar.style.width = '0%';
    progress_bar.appendChild(inner_progress_bar);
    notification.appendChild(title);
    notification.appendChild(contents_p);
    notification.appendChild(progress_bar);
    document.body.appendChild(notification);

    setTimeout(() => {
        clearInterval(_i);
        document.body.removeChild(notification);                    
    }, 5000);
    
    let w = 0;
    let _i = setInterval(() => {
        w += 0.120;
        if (w < 100) {
            inner_progress_bar.style.width = w + '%';
        }
    }, 5);

}

