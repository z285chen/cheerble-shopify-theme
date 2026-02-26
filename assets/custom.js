// Countdown
if(document.querySelectorAll('.countdown_wrapper').length > 0){
  document.querySelectorAll('.countdown_wrapper').forEach(function(elem){
      var countDownDate = new Date(elem.getAttribute('data-countdown-end-date')).getTime();

      // Update the count down every 1 second
      var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      var distance = countDownDate - now;

          var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
          var seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

          var flash_hours = hours;
          if(days > 0) flash_hours = (24*days) + parseInt(hours);

          if(!elem.classList.contains('flash-sale-countdown')){
            if(days > 0) elem.querySelector('.days_num').innerText = days;
            else elem.querySelector('.days').style.display = 'none';

            elem.querySelector('.hours_num').innerText = hours;
          }
          else{
            elem.querySelector('.hours_num').innerText = flash_hours;
          }
          elem.querySelector('.mins_num').innerText = minutes;
          elem.querySelector('.sec_num').innerText = seconds;

          const bfElem = elem.querySelector("[data-bf-flash-sales]");
          if (bfElem) {
            const bfDays = bfElem.querySelector('[data-bf-days]');
            const bfHours = bfElem.querySelector('[data-bf-hours]');
            if (days > 0) {
              if(bfDays.querySelector("[data-num]")){
                // remove the 0 from the front of the number if we have that:
                bfDays.querySelector("[data-num]").innerText = Math.floor(
                  distance / (1000 * 60 * 60 * 24)
                );
                bfHours.style.display = 'none';
              }
            }
            else if (hours > 0) {
              if(bfHours.querySelector('[data-num]')){
                bfHours.querySelector('[data-num]').innerText = hours;
                bfDays.style.display = 'none';
              }
            } else {
              bfElem.style.display = 'none';
            }
          }

          // If the count down is finished, write some text
          if (distance < 0) {
              clearInterval(x);
              elem.style.display = 'none';
          }
          else elem.style.display = 'flex';
      }, 1000);
  });
}
// header 
document.addEventListener('DOMContentLoaded', () => {
  const handle_products = document.querySelectorAll(".header.custom-layout .mega-menu__nav li[data-handle]");
  handle_products.forEach(item => {
    item.addEventListener("mouseover", () => {
      document.querySelector("details[open] .mega-menu__object .active").classList.remove("active");
      document.querySelector("details[open] .mega-menu__object [data-handle='"+item.dataset.handle+"']").classList.add("active");
    })
  });

  const buttons = document.querySelectorAll(".custom-drawer button[data-control]");
  buttons.forEach(item => {
    item.addEventListener("click", () => {
      if(item.getAttribute("aria-expanded") == "true"){
        item.setAttribute("aria-expanded", "false")
      }else{
        item.setAttribute("aria-expanded", "true")
      }
    })
  });

  const announcementBar = document.querySelector(".shopify-section--announcement-bar");
  if(announcementBar){
    function updateAnnouncementBarScrollHeight() {
      const announcementBarHeight = announcementBar.offsetHeight;
      const scrollDistance = window.scrollY;
      
      if (scrollDistance >= announcementBarHeight) {
        document.documentElement.style.setProperty('--announcement-bar-scroll-height', '0px');
        document.documentElement.classList.add('no-scroll');
      } else {
        const remainingHeight = announcementBarHeight - scrollDistance;
        document.documentElement.style.setProperty('--announcement-bar-scroll-height', remainingHeight + 'px');
        document.documentElement.classList.remove('no-scroll');
      }
    }
    updateAnnouncementBarScrollHeight();
    window.addEventListener('scroll', updateAnnouncementBarScrollHeight);
  }
});

// footer

if (window.matchMedia('(max-width: 699px)').matches) {
  document.addEventListener('DOMContentLoaded', () => {
    const menus = document.querySelectorAll(".footer .footer__block--menu");
    menus.forEach(item => {
      const element = item.querySelector("p.bold");
      element.addEventListener("click", () => {
        const ul = element.nextElementSibling;
        const icon = element.querySelector('.icon');
        if(!ul.style.display || ul.style.display === 'none') {
          ul.style.display = 'grid';
          icon.style.transform = 'rotate(0deg)';
        } else {
          ul.style.display = 'none'; 
          icon.style.transform = 'rotate(180deg)';
        }
      })
    })
  });
}
// popup
document.addEventListener('DOMContentLoaded', function () {

    const elements = {
        popupEle: document.querySelector('.cust-popup'),
        popupBtn: document.querySelector('.cust-popup_button'),
        closeBtn: document.querySelector('.cust-popup .popup_close'),
        popupMain: document.querySelector('.cust-popup .popup-main_container'),
        popupContent: document.querySelector('.cust-popup .popup_main-inner'),
        body: document.querySelector('body'),
        popupInputone: document.querySelector('.cust-popup .popup_input_1 input'),
        popupInputtwo: document.querySelector('.cust-popup .popup_input_2 input'),
        beforeUnlockedbtn: document.querySelector('#before_unlocked-btn'),
        popupUnlockedbtn: document.querySelector('#popup_unlocked_btn'),
        mainBeforeunlocked: document.querySelector('.cust-popup .before_unlocked'),
        mainUnlocked: document.querySelector('.cust-popup .unlocked_after'),
        confettiContainer: document.querySelector('.confetti-container'),
        popupUnlockedInputBtn: document.querySelector(".popup_unlocked-input-btn")
    };

    const config = window.confettiConfig || {
        confettiDuration: 3000
    };


    const confettiTypes = [
         `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
      <path d="M0.167372 25.0822L11.3173 22.2753L18.8056 31.2981L19.2329 19.8083L30.3829 17.0014L20.0002 11.5527L20.4276 0.0628576L11.4047 7.55116L1.36202 5.33671L5.61607 14.6995L0.167372 25.0822Z" fill="#002FA7"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
      <path d="M0.693771 23.9105L14.8155 27.3154L20.0553 42.0886L27.0425 29.2401L42.4373 29.0628L32.5493 18.2862L37.6417 3.95729L24.556 8.98992L11.5003 0.315249L11.6776 15.7101L0.693771 23.9105Z" fill="#C7E0FF"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none">
      <path d="M0.929688 15.2451L19.6846 0.657959L34.2718 17.329L15.5168 34L0.929688 15.2451Z" fill="#C7E0FF"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
      <path d="M11.1353 11.5548L0.82959 5.24006L13.7117 0.188232L11.1353 11.5548Z" fill="#002FA7"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path d="M1.09208 6.5167C-0.529499 11.2261 1.97369 16.3584 6.6831 17.98C11.3925 19.6016 16.5248 17.0984 18.1464 12.389C19.768 7.67955 17.2648 2.54726 12.5554 0.925683C7.84595 -0.695899 2.71367 1.80728 1.09208 6.5167Z" fill="#C7E0FF"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none">
      <path d="M32.677 36.3011C33.5466 26.743 28.7641 21.0951 18.3295 19.3573C8.76445 18.4883 3.98193 13.2749 3.98193 3.7168" stroke="#C7E0FF" stroke-width="6" stroke-linecap="round"/>
    </svg>`
    ];

    let confettiInterval;
    let confettiTimeout;

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.innerHTML = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
        elements.confettiContainer.appendChild(confetti);

        confetti.addEventListener('animationend', () => confetti.remove());
    }

    function startConfetti() {
        elements.confettiContainer.style.display = 'block';
        confettiInterval = setInterval(createConfetti, 10);
        confettiTimeout = setTimeout(stopConfetti, config.confettiDuration);
    }

    function stopConfetti() {
        clearInterval(confettiInterval);
        clearTimeout(confettiTimeout);
        elements.confettiContainer.style.display = 'none';
    }

    function resetPopup() {
        elements.popupMain.style.opacity = '0';
        elements.popupBtn.style.opacity = '1';
        elements.popupMain.style.display = 'none';
        elements.popupMain.style.zIndex = '0';
        elements.body.classList.remove('no-scoll');
        elements.mainBeforeunlocked.style.display = 'flex';
        elements.mainUnlocked.style.display = 'none';
        elements.popupInputone.value = '';
        // elements.popupInputtwo.value = '';
        elements.popupInputone.classList.remove("error");
        // elements.popupInputtwo.classList.remove("error");
        stopConfetti();

        if(localStorage.getItem("cheerble-once-visitor") === "true"){
          elements.popupEle.classList.add("hidden");
        }
    }

    function showPopup(){
      elements.popupMain.style.opacity = '1';
      elements.popupBtn.style.opacity = '0';
      elements.popupMain.style.display = 'block';
      elements.popupMain.style.zIndex = '10';
      elements.body.classList.add('no-scoll');
      
      const onceVisitor = elements.popupEle.dataset.onceVisitor;
      if(onceVisitor && onceVisitor == "true"){
        localStorage.setItem("cheerble-once-visitor", true);
      }
    }

    elements.popupBtn.addEventListener('click', () => {
        showPopup()
    });

    elements.closeBtn.addEventListener('click', resetPopup);

    elements.popupUnlockedbtn.addEventListener('click', resetPopup);

    elements.popupMain.addEventListener('click', (event) => {
        if (!elements.popupContent.contains(event.target)) {
            resetPopup();
        }
    });

    elements.beforeUnlockedbtn.addEventListener('click', (e) => {
         e.preventDefault();
         if(!elements.popupInputone.value){
           elements.popupInputone.classList.add("error")
         }
        // if(!elements.popupInputtwo.value){
        //    elements.popupInputtwo.classList.add("error")
        //  }
      // && elements.popupInputtwo.value

        if (elements.popupInputone.value ) {
          elements.beforeUnlockedbtn.closest("form").submit();
            // elements.mainBeforeunlocked.style.display = 'none';
            // elements.mainUnlocked.style.display = 'flex';
            // elements.popupInputone.value = '';
            // elements.popupInputtwo.value = '';
            // startConfetti();
        }
    });

    if(elements.popupMain.classList.contains("open")){
      elements.mainBeforeunlocked.style.display = 'none';
      elements.mainUnlocked.style.display = 'flex';
      elements.popupInputone.value = '';
      // elements.popupInputtwo.value = '';


      elements.popupMain.style.opacity = '1';
      elements.popupBtn.style.opacity = '0';
      elements.popupMain.style.display = 'block';
      elements.popupMain.style.zIndex = '10';
      elements.body.classList.add('no-scoll');
      startConfetti();
    }

    elements.popupUnlockedInputBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(elements.popupUnlockedInputBtn.dataset.code)
    })

    const onceVisitor = elements.popupEle.dataset.onceVisitor;
    if(onceVisitor && onceVisitor == "true"){
      
    } else{
      localStorage.removeItem("cheerble-once-visitor");
    }
    if(localStorage.getItem("cheerble-once-visitor") === "true"){
      elements.popupEle.classList.add("hidden");
    }else{
      const delayTimes = elements.popupEle.dataset.delayTimes;
  
      if(delayTimes > 0 && !elements.popupEle.classList.contains("hidden")){
        setTimeout(() => {
          showPopup()
        }, delayTimes * 1000);
      }
    }
});

// cust-featured-collection
document.addEventListener('DOMContentLoaded', () => {
  const featured_collections = document.querySelectorAll(".cust-featured-collection");
  featured_collections.forEach(item => {
    const tab_items = item.querySelectorAll(".cust-featured-collection__tab-item");
    tab_items.forEach(tab => {
      tab.addEventListener("click", () => {
        item.querySelector(".cust-featured-collection__tab-item.active").classList.remove("active");
        tab.classList.add("active");
      })
    })
    const tabContents = item.querySelectorAll(".tab-content");
    tabContents.forEach(tabContent => {
      const scrollItem = tabContent.querySelector("scroll-carousel");
      const dotItems = tabContent.querySelectorAll(".dot-item");
      const disableClicks = tabContent.querySelectorAll(".disable-click")
      scrollItem.addEventListener("carousel:select", () => {
        const selectIndex = disableClicks.length ? Math.ceil(scrollItem.selectedIndex/2.0): scrollItem.selectedIndex;
        if(dotItems[selectIndex]){
          tabContent.querySelector(".dot-item.active").classList.remove("active");
          dotItems[selectIndex].classList.add("active");
        }
      })
    })

  })

  
  
  const custCarousel = document.querySelectorAll(".cust-carousel");
  custCarousel.forEach(item => {
    const scrollItem = item.querySelector("scroll-carousel");
    const dotItems = item.querySelectorAll(".dot-item");
    scrollItem.addEventListener("carousel:select", () => {
      const selectIndex = scrollItem.selectedIndex;
      if(dotItems[selectIndex]){
        item.querySelector(".dot-item.active").classList.remove("active");
        dotItems[selectIndex].classList.add("active");
      }
    })
  })

});

// cust product feature 1
  document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.only-mobile .cpfo-item-heading');
    
    headings.forEach(heading => {
      heading.addEventListener('click', function() {
        const content = this.parentElement.querySelector('.cpfo-item-content');
        const isExpanded = this.classList.contains('active');
        
        headings.forEach(h => {
          if (h !== this) {
            h.classList.remove('active');
            const otherContent = h.parentElement.querySelector('.cpfo-item-content');
            otherContent.style.height = '0';
          }
        });

        if (!isExpanded) {
          this.classList.add('active');
          content.style.height = content.scrollHeight + 'px';
        } else {
          this.classList.remove('active');
          content.style.height = '0';
        }
      });
    });
  });


document.addEventListener('DOMContentLoaded', () => {
   const copyBtn = document.querySelector('.cust-main-product .product-info__discount button');
   const promptText = document.querySelector('.cust-main-product .copy_success_prompt');
  
  if(copyBtn){
     copyBtn.addEventListener('click', () => {
       console.log('clicked')
      // const discount = copyBtn.getAttribute('data-discount');
      const discount = copyBtn.closest(".product-info__discount").querySelector(".content strong")?copyBtn.closest(".product-info__discount").querySelector(".content strong").innerText: ""
      // const discount = copyBtn.closest(".product-info__discount").querySelector(".content")?copyBtn.closest(".product-info__discount").querySelector(".content").innerText: ""
      if(discount){
        navigator.clipboard.writeText(discount).then(() => {
            const afterCopyText = copyBtn.getAttribute('data-after-copy-btn-text') || "COPIED";
           copyBtn.querySelector("span").innerText = afterCopyText
            copyBtn.classList.add('iscoped')
            promptText.classList.add('show')
            
        }).catch(err => {
            console.error('复制失败:', err);
        });
     }
       
    });
  }
  
});


var CustomVariantPicker = class  extends HTMLElement {
  constructor() {
    super(...arguments);
  }
  async connectedCallback() {
   const inputs = this.querySelectorAll('.product-card__swatch-list input');

   inputs.forEach(item => {
    item.addEventListener('change', (event) => {
        document.querySelector("variant-picker input[value='"+event.target.value+"']").click()
    });
   })
  }
  disconnectedCallback() {
  }
}
if (!window.customElements.get("custom-variant-picker")) {
  window.customElements.define("custom-variant-picker", CustomVariantPicker);
}

