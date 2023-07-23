function sendProject() {
    function httpGet(url, data, progressBar) {

        return new Promise(function (resolve, reject) {
            let textStatus = document.querySelector('.send__progres-btn')
            textStatus.classList.remove('uploaded')
            progressBar.style.width = '0'
            var xhr = new XMLHttpRequest();


            xhr.upload.addEventListener('progress', function (event) {
                    const percentLoaded = Math.round((event.loaded / event.total) * 100)
                    progressBar.style.width = percentLoaded + '%'
                    if (percentLoaded === 100) {

                        textStatus.classList.add('uploaded')

                    }
                }
            )


            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };
            xhr.open('POST', url, true);
            xhr.send(data);
        });

    }

    const postData = async (url, data) => {


        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    }
    let fileName = ''
    // let form = document.querySelector('form[name="calculator"]')
    // let button = form.querySelector('button')
    let fileInput = document.querySelector('#send-project')
    let progressBar = document.querySelector('.send__progres');
    let previewInput = document.querySelector('.send__input-file')
    let progressInput = document.querySelector('.send__progres-btn')
    // let inputs = form.querySelectorAll('input')
    // let textArea = form.querySelector('textarea')

    // function sendForm(res) {
    //     if (res.length > 10) {
    //         button.removeAttribute('disabled')
    //         fileName = res
    //     }
    //
    //     if (res === '3') {
    //         progressInput.classList.remove('d-block')
    //         previewInput.classList.remove('d-none')
    //         alert('Слишком большой файл')
    //     }
    //     if (res === '2') {
    //         progressInput.classList.remove('d-block')
    //         previewInput.classList.remove('d-none')
    //         alert('Формат файла не подходит')
    //     }
    // }


    fileInput.addEventListener('change', function () {
        let file = fileInput.files[0]

        let maxSize = 8 * 1024 * 1024
        console.log(file.size)
        console.log(maxSize)
        if (file.size > maxSize) {

            alert('Слишком большой файл')
            return
        }
        // progressBar.style.width = '0%'
        previewInput.classList.add('d-none')
        progressInput.classList.add('d-block')
        const formSent = new FormData()
        let date = Date.now()
        formSent.append('userImage', file, date)


        httpGet('/zed/file/upload.php', formSent, progressBar)
            .then(res => {
                console.log(res)
                // sendForm(res)
            })

    })


}

sendProject()
