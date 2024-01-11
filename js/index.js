  const shareBtn = document.querySelector('button');
  const authorEl = document.querySelector('.author');
  const tooltiptextEl = document.querySelector('.tooltiptext');
  const descriptionEl = document.querySelector('.description');

  shareBtn.addEventListener('click', () => {
    if (window.innerWidth > 419) {
      tooltiptextEl.style.visibility = tooltiptextEl.style.visibility === 'visible' ? 'hidden' : 'visible';
    }

    if (window.innerWidth <= 419) {
      if (authorEl.classList.contains('active-author')) {
        descriptionEl.style = "margin-bottom: 24px";
        authorEl.classList.remove('active-author');
        authorEl.innerHTML = '<span class="tooltiptext"></span>';
      }
      else {
        descriptionEl.style = "margin-bottom: 57px";
        authorEl.classList.add('active-author');
        authorEl.innerHTML = `
                            <span class="tooltiptext active">
                              <div>Share</div>
                                <img src="../images/icon-facebook.svg" alt="">
                                <img src="../images/icon-twitter.svg" alt="">
                                <img src="../images/icon-pinterest.svg" alt="">
                            </span>
                            <button class="share tooltip active-btn">
                              <img class="icon" src="../images/icon-share.svg" alt="">
                            </button>
                            `;
      }
    }
  });
