function uploadFile() {
  console.log('upload')
  var fileObj = $('#exampleFormControlFile')[0].files[0]

  var form = new FormData()
  form.append('img', fileObj)

  $.ajax({
    url: 'http://127.0.0.1:7001/upload',
    method: 'post',
    data: form,
    processData: false,
    contentType: false,
    success: function () {
      console.log('upload success')
    },
    error: function () {
      console.log('upload error')
    }
  })
}

