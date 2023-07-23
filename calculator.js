function calculator() {
    let addSizeBtn = document.querySelector('.add-size-btn')


    let calcWrapper = document.querySelector('.modal__calculator-wrapper')
    let count = 1

    function deleteBtn() {
        let deleteBtn = document.querySelectorAll('.delete-size-btn')
        deleteBtn.forEach(item => {
            item.addEventListener('click', function () {
                let parent = this.closest('.modal__calculator-block')
                let deleteBtn = document.querySelectorAll('.delete-size-btn')
                if (deleteBtn.length !== 1) {
                    parent.innerHTML = ''
                }

            })
        })
    }


    addSizeBtn.addEventListener('click', function () {
        count += 10
        let str = ` 
 <div class="modal__calculator-block">
            <hr>
            <div class="modal__calculator-title mt-3">Печать</div>
            <div class="modal__calculator-color-wrapper">
                <input data-color="1" checked="" name="calculator-line-${1 + count}" class="calculator-input" id="calculator-box-${1 + count}" type="radio">
                <label  for="calculator-box-${1 + count}" class="modal__calculator-color-box crossed-out-box">
                    <svg class="blob-blue"  viewBox="0 0 16 16" " xml:space="preserve">
<g id="Layer_1">
</g>
                        <g id="Layer_101">
</g>
                        <g id="Layer_100">
</g>
                        <g id="Layer_99">
</g>
                        <g id="Layer_98">
</g>
                        <g id="Layer_97">
</g>
                        <g id="Layer_96">
</g>
                        <g id="Layer_95">
</g>
                        <g id="Layer_94">
</g>
                        <g id="Layer_93">
</g>
                        <g id="Layer_92">
</g>
                        <g id="Layer_91">
</g>
                        <g id="Layer_90">
</g>
                        <g id="Layer_89">
</g>
                        <g id="Layer_88">
</g>
                        <g id="Layer_87">
</g>
                        <g id="Layer_86">
</g>
                        <g id="Layer_85">
</g>
                        <g id="Layer_84">
</g>
                        <g id="Layer_83">
</g>
                        <g id="Layer_82">
</g>
                        <g id="Layer_81">
</g>
                        <g id="Layer_80">
</g>
                        <g id="Layer_79">
</g>
                        <g id="Layer_78">
</g>
                        <g id="Layer_77">
</g>
                        <g id="Layer_76">
</g>
                        <g id="Layer_75">
</g>
                        <g id="Layer_74">
</g>
                        <g id="Layer_73">
</g>
                        <g id="Layer_72">
</g>
                        <g id="Layer_71">
</g>
                        <g id="Layer_70">
</g>
                        <g id="Layer_69">
</g>
                        <g id="Layer_68">
</g>
                        <g id="Layer_67">
</g>
                        <g id="Layer_66">
</g>
                        <g id="Layer_65">
</g>
                        <g id="Layer_64">
</g>
                        <g id="Layer_63">
</g>
                        <g id="Layer_62">
</g>
                        <g id="Layer_61">
</g>
                        <g id="Layer_60">
</g>
                        <g id="Layer_59">
</g>
                        <g id="Layer_58">
</g>
                        <g id="Layer_57">
</g>
                        <g id="Layer_56">
</g>
                        <g id="Layer_55">
</g>
                        <g id="Layer_54">
</g>
                        <g id="Layer_53">
</g>
                        <g id="Layer_52">
</g>
                        <g id="Layer_51">
</g>
                        <g id="Layer_50">
</g>
                        <g id="Layer_49">
</g>
                        <g id="Layer_48">
</g>
                        <g id="Layer_47">
</g>
                        <g id="Layer_46">
</g>
                        <g id="Layer_45">
</g>
                        <g id="Layer_44">
</g>
                        <g id="Layer_43">
</g>
                        <g id="Layer_42">
</g>
                        <g id="Layer_41">
</g>
                        <g id="Layer_40">
</g>
                        <g id="Layer_39">
</g>
                        <g id="Layer_38">
</g>
                        <g id="Layer_37">
</g>
                        <g id="Layer_36">
</g>
                        <g id="Layer_35">
</g>
                        <g id="Layer_34">
</g>
                        <g id="Layer_33">
\t<path id="XMLID_1960_" fill="red" d="M13.5,7.4C12.5,4.5,10.3,2,8,0C5.7,2,3.5,4.5,2.5,7.4c-0.6,1.8-0.7,3.7,0.2,5.4
\t\tc1,2,3.1,3.2,5.3,3.2s4.3-1.3,5.3-3.2C14.2,11.1,14.1,9.2,13.5,7.4z M11.5,11.9C10.9,13.2,9.5,14,8,14c-0.9,0-1.7-0.3-2.4-0.8
\t\tc0.2,0,0.4,0,0.6,0c1.8,0,3.6-1.1,4.4-2.7c0.7-1.3,0.6-2.7,0.4-3.8c0.2,0.4,0.4,0.9,0.6,1.3C12,9.1,12.3,10.5,11.5,11.9L11.5,11.9z
\t\t"></path>
</g>
                        <g id="Layer_32">
</g>
                        <g id="Layer_31">
</g>
                        <g id="Layer_30">
</g>
                        <g id="Layer_29">
</g>
                        <g id="Layer_28">
</g>
                        <g id="Layer_27">
</g>
                        <g id="Layer_26">
</g>
                        <g id="Layer_25">
</g>
                        <g id="Layer_24">
</g>
                        <g id="Layer_23">
</g>
                        <g id="Layer_22">
</g>
                        <g id="Layer_21">
</g>
                        <g id="Layer_20">
</g>
                        <g id="Layer_19">
</g>
                        <g id="Layer_18">
</g>
                        <g id="Layer_17">
</g>
                        <g id="Layer_16">
</g>
                        <g id="Layer_15">
</g>
                        <g id="Layer_14">
</g>
                        <g id="Layer_13">
</g>
                        <g id="Layer_12">
</g>
                        <g id="Layer_11">
</g>
                        <g id="Layer_10">
</g>
                        <g id="Layer_9">
</g>
                        <g id="Layer_8">
</g>
                        <g id="Layer_7">
</g>
                        <g id="Layer_6">
</g>
                        <g id="Layer_5">
</g>
                        <g id="Layer_4">
</g>
                        <g id="Layer_3">
</g>
                        <g id="Layer_2">
</g>
</svg>
                    <div class="color-box__text">??? ??????</div>
                </label>
                <input data-color="2" name="calculator-line-${1 + count}" class="calculator-input" id="calculator-box-${2 + count}" type="radio">
                <label for="calculator-box-${2 + count}" class="modal__calculator-color-box ">
                    <svg class="blob-blue"  viewBox="0 0 16 16"  xml:space="preserve">
<g id="Layer_1">
</g>
                        <g id="Layer_101">
</g>
                        <g id="Layer_100">
</g>
                        <g id="Layer_99">
</g>
                        <g id="Layer_98">
</g>
                        <g id="Layer_97">
</g>
                        <g id="Layer_96">
</g>
                        <g id="Layer_95">
</g>
                        <g id="Layer_94">
</g>
                        <g id="Layer_93">
</g>
                        <g id="Layer_92">
</g>
                        <g id="Layer_91">
</g>
                        <g id="Layer_90">
</g>
                        <g id="Layer_89">
</g>
                        <g id="Layer_88">
</g>
                        <g id="Layer_87">
</g>
                        <g id="Layer_86">
</g>
                        <g id="Layer_85">
</g>
                        <g id="Layer_84">
</g>
                        <g id="Layer_83">
</g>
                        <g id="Layer_82">
</g>
                        <g id="Layer_81">
</g>
                        <g id="Layer_80">
</g>
                        <g id="Layer_79">
</g>
                        <g id="Layer_78">
</g>
                        <g id="Layer_77">
</g>
                        <g id="Layer_76">
</g>
                        <g id="Layer_75">
</g>
                        <g id="Layer_74">
</g>
                        <g id="Layer_73">
</g>
                        <g id="Layer_72">
</g>
                        <g id="Layer_71">
</g>
                        <g id="Layer_70">
</g>
                        <g id="Layer_69">
</g>
                        <g id="Layer_68">
</g>
                        <g id="Layer_67">
</g>
                        <g id="Layer_66">
</g>
                        <g id="Layer_65">
</g>
                        <g id="Layer_64">
</g>
                        <g id="Layer_63">
</g>
                        <g id="Layer_62">
</g>
                        <g id="Layer_61">
</g>
                        <g id="Layer_60">
</g>
                        <g id="Layer_59">
</g>
                        <g id="Layer_58">
</g>
                        <g id="Layer_57">
</g>
                        <g id="Layer_56">
</g>
                        <g id="Layer_55">
</g>
                        <g id="Layer_54">
</g>
                        <g id="Layer_53">
</g>
                        <g id="Layer_52">
</g>
                        <g id="Layer_51">
</g>
                        <g id="Layer_50">
</g>
                        <g id="Layer_49">
</g>
                        <g id="Layer_48">
</g>
                        <g id="Layer_47">
</g>
                        <g id="Layer_46">
</g>
                        <g id="Layer_45">
</g>
                        <g id="Layer_44">
</g>
                        <g id="Layer_43">
</g>
                        <g id="Layer_42">
</g>
                        <g id="Layer_41">
</g>
                        <g id="Layer_40">
</g>
                        <g id="Layer_39">
</g>
                        <g id="Layer_38">
</g>
                        <g id="Layer_37">
</g>
                        <g id="Layer_36">
</g>
                        <g id="Layer_35">
</g>
                        <g id="Layer_34">
</g>
                        <g id="Layer_33">
\t<path id="XMLID_1960_" fill="red" d="M13.5,7.4C12.5,4.5,10.3,2,8,0C5.7,2,3.5,4.5,2.5,7.4c-0.6,1.8-0.7,3.7,0.2,5.4
\t\tc1,2,3.1,3.2,5.3,3.2s4.3-1.3,5.3-3.2C14.2,11.1,14.1,9.2,13.5,7.4z M11.5,11.9C10.9,13.2,9.5,14,8,14c-0.9,0-1.7-0.3-2.4-0.8
\t\tc0.2,0,0.4,0,0.6,0c1.8,0,3.6-1.1,4.4-2.7c0.7-1.3,0.6-2.7,0.4-3.8c0.2,0.4,0.4,0.9,0.6,1.3C12,9.1,12.3,10.5,11.5,11.9L11.5,11.9z
\t\t"></path>
</g>
                        <g id="Layer_32">
</g>
                        <g id="Layer_31">
</g>
                        <g id="Layer_30">
</g>
                        <g id="Layer_29">
</g>
                        <g id="Layer_28">
</g>
                        <g id="Layer_27">
</g>
                        <g id="Layer_26">
</g>
                        <g id="Layer_25">
</g>
                        <g id="Layer_24">
</g>
                        <g id="Layer_23">
</g>
                        <g id="Layer_22">
</g>
                        <g id="Layer_21">
</g>
                        <g id="Layer_20">
</g>
                        <g id="Layer_19">
</g>
                        <g id="Layer_18">
</g>
                        <g id="Layer_17">
</g>
                        <g id="Layer_16">
</g>
                        <g id="Layer_15">
</g>
                        <g id="Layer_14">
</g>
                        <g id="Layer_13">
</g>
                        <g id="Layer_12">
</g>
                        <g id="Layer_11">
</g>
                        <g id="Layer_10">
</g>
                        <g id="Layer_9">
</g>
                        <g id="Layer_8">
</g>
                        <g id="Layer_7">
</g>
                        <g id="Layer_6">
</g>
                        <g id="Layer_5">
</g>
                        <g id="Layer_4">
</g>
                        <g id="Layer_3">
</g>
                        <g id="Layer_2">
</g>
</svg>
                    <div class="color-box__text">? ???????</div>
                </label>
                <input data-color="3" name="calculator-line-${1 + count}" class="calculator-input input-box-3" id="calculator-box-${3 + count}" type="radio">
                
            </div>
            <div class="modal__calculator-title mt-3">???????</div>

            <div class="calculator__wrapper-input">
                <input placeholder="??????,??" class="calculator__input input-not-arrow calculator__length" type="number">
                <input placeholder="??????,??" class="calculator__input input-not-arrow calculator__width" type="number">
                <input placeholder="??????,??" class="calculator__input input-not-arrow calculator__height" type="number">
                <div class="calculator__amount-block">
                    <input placeholder="??????????" class="calculator__input calculator__amount" type="number">
                    <div class="calculator__amount-message">??????????? ????? ??? ?????? ?? ???????????? ??
                        ??????????????? ??????? ? ??????? - 500??.
                    </div>
                    <div class="modal__calculator-title calculator__amount-title mt-3">?????</div>

                </div>
                <div class="delete-size-btn"><i class="fa fa-trash"></i>
                    <div class="calculator__amount-message">??????? ??????
                    </div>
                </div>
            </div>


        </div>`

        console.log(calcWrapper)
        calcWrapper.insertAdjacentHTML('beforeend', str)
        deleteBtn()
    })
}

calculator()

function sendInfo() {
    let form = document.querySelector('form[name="calculator"]')
    const postData = async (url, data) => {


        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };
    const clearInputs = (inputs) => {
        inputs.forEach(item => {
            item.value = '';
        });

    };

    let completedInput = false

    function checkInput() {
        let erorText = document.querySelector('.calculator__eror-text')
        let sizeBlock = document.querySelectorAll('.modal__calculator-block')
        completedInput = true
        sizeBlock.forEach((item, index) => {

            let color = item.querySelectorAll("input[type='radio']:checked")[0]
            let length = item.querySelector('.calculator__length')
            let width = item.querySelector('.calculator__width')
            let height = item.querySelector('.calculator__height')
            let amount = item.querySelector('.calculator__amount')

            if (length.value === '') {
                length.style.borderColor = 'red'
                erorText.style.display = 'block'
                completedInput = false
            } else length.style.borderColor = 'gray'
            if (width.value === '') {
                width.style.borderColor = 'red'
                erorText.style.display = 'block'
                completedInput = false
            } else length.style.borderColor = 'gray'
            if (height.value === '') {
                height.style.borderColor = 'red'
                erorText.style.display = 'block'
                completedInput = false
            } else length.style.borderColor = 'gray'
            if (amount.value === '') {
                amount.style.borderColor = 'red'
                erorText.style.display = 'block'
                completedInput = false
            } else length.style.borderColor = 'gray'
            if (completedInput) {

            }

        })
    }

    form.addEventListener('submit', (e) => {

        const inputs = document.querySelectorAll(".modal__calculator input")

        e.preventDefault();
        checkInput();


        const formData = new FormData(form);

        formData.append('modal_type', form.dataset.name)

        if (completedInput) {
            let obj = {}
            let sizeBlock = document.querySelectorAll('.modal__calculator-block');
            sizeBlock.forEach((item, index) => {
                let color = item.querySelectorAll("input[type='radio']:checked")[0]
                let length = item.querySelector('.calculator__length')
                let width = item.querySelector('.calculator__width')
                let height = item.querySelector('.calculator__height')
                let amount = item.querySelector('.calculator__amount')

                let data = {
                    color: color.dataset.color,
                    length: length.value,
                    width: width.value,
                    height: height.value,
                    amount: amount.value
                }
                obj[`${index + 1}`] = data



            })
            formData.append('razm', JSON.stringify(obj))
            postData('/zed/modules/price/send_box.php', formData)
                .then(res => {
                    console.log(res, '');


                })
                .catch(() => alert('Что-то пошло не так...'))
                .finally(() => {
                    // modals.style.display = 'none'
                    // finalModal.style.display = 'block'
                    clearInputs(inputs);

                });
        }

    });


    let sendBtn = document.querySelector('.calculator__send-btn')
}

sendInfo()