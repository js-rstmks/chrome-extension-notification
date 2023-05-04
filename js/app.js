const button = document.createElement('button');
button.textContent = 'Greet me!'
document.body.insertAdjacentElement('afterbegin', button);

button.addEventListener('click', () => {
    console.log(78787)
    chrome.runtime.sendMessage({
        time: 1,
        // options: {
        //     type: 'basic',
        //     title: 'Just wanted to notify you',
        //     message: 'How great it is!',
        //     iconUrl: '/icon.png',
        //   }
    }, (response) => {
        console.log(response.success)
    })
  });
