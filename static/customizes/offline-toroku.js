$("#torokuBtn").on("click", function () {
    let inputArrays = ["#inputName4", "#inputEmail4", "#inputBirthday", "#inputPassword4", "#inputPassword2", "#inputCity"];
    for (const array of inputArrays) {
        $(array).removeClass("is-valid is-invalid");
        $(array).next("span").removeClass("valid-feedback invalid-feedback");
        $(array).next("span").text(emptyString);
    }
    let listArray = projectInputContextGet(inputArrays);
    if (listArray.includes(emptyString)) {
        projectNullInputboxDiscern(inputArrays);
    } else if ($("#inputForm").find('*').hasClass('is-invalid')) {
        layer.msg(inputWarning);
    } else {
        let postData = JSON.stringify({
            'chapterId': $("#chapterInput").val(),
            'id': $("#phraseIdInput").val().trim(),
            'textEn': $("#phraseTextEnInput").val().trim(),
            'textJp': $("#phraseTextJpInput").val().trim()
        });
        projectAjaxModify('/books/infoStorage', 'POST', postData, booksPostSuccessFunction);
    }
});