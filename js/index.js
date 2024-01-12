  const shareBtn = document.querySelector('button');
  const authorEl = document.querySelector('.author');
  const tooltiptextEl = document.querySelector('.tooltiptext');
  const descriptionEl = document.querySelector('.description');


  function handleClick() {
    if (window.innerWidth > 419) {
      tooltiptextEl.style.visibility = tooltiptextEl.style.visibility === 'visible' ? 'hidden' : 'visible';
    }

    if (window.innerWidth <= 419) {
      if (authorEl.classList.contains('active-author')) {
        descriptionEl.style = "margin-bottom: 24px";
        authorEl.classList.remove('active-author');
        authorEl.innerHTML = `
                              <img src="../images/avatar-michelle.jpg" alt="">
                              <div class="author-info">
                                <div class="name">
                                  Michelle Appleton
                                </div>
                                <div class="date">
                                  28 Jun 2020
                                </div>
                              </div>
                              <button class="share tooltip" onclick='handleClick()'>
                                <img class="icon" src="images/icon-share.svg" alt="">
                                <span class="tooltiptext">
                                  <div>Share</div>
                                  <img src="../images/icon-facebook.svg" alt="">
                                  <img src="../images/icon-twitter.svg" alt="">
                                  <img src="../images/icon-pinterest.svg" alt="">
                                </span>
                              </button>
                            `;
      }
      else {
        descriptionEl.style = "margin-bottom: 57px";
        authorEl.classList.add('active-author');
        authorEl.innerHTML = `
                            <span class="tooltiptext active">
                              <div>Share</div>
                                <img src="images/icon-facebook.svg" alt="">
                                <img src="images/icon-twitter.svg" alt="">
                                <img src="images/icon-pinterest.svg" alt="">
                            </span>
                            <button class="share tooltip active-btn" onclick='handleClick()'>
                              <img class="icon" src="images/icon-share.svg" alt="">
                            </button>
                            `;
      }
    }
  }