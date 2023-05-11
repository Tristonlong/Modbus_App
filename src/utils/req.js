import axios from 'axios'

export default {
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          'http://192.168.2.130:3000/registers/2/9',
        )
        console.log(response.data)
        console.log(123)
      } catch (error) {
        console.error(error)
      }
    },
  },
}
// function interecptor(config) {
//   return new Promise(function (resolve, reject) {
//     var xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === XMLHttpRequest.DONE) {
//         if ((xhr.status >= 200) & (xhr.status < 300)) {
//           var response = xhr.responseText
//           resolve(response)
//         } else {
//           var error = new Error(xhr.statusText)
//           reject(error)
//         }
//       }
//     }

//     xhr.open(config.method, config.url)
//     xhr.send(config.data)
//   })
// }

// interecptor({
//   method: 'GET',
//   url: 'https://192.168.2.130/',
// })
//   .then(function (response) {
//     console.log('请求成功', response)
//   })
//   .catch(function (error) {
//     console.log('请求失败', error.message)
//   })
