//-------省略return的用法-------
// const say = () => {
//   return 'hi'
// }
// const say = () => 'hi'
//
// const calc = (a, b) => {
//   return a + b
// }
//
// const calc = (a, b) => a + b
//
// const getObj = () => {
//   return {name: 'xpp', age: 18}
// }
//
// const getObj = () => ({name:'xpp',age:18})

//--------------then catch 的return问题-----------------
// const p = () => {
//   return new Promise((resolve, reject) => {
//     if(false){
//       resolve('success')
//     }else{
//       reject('error')
//     }
//   })
// }
// //调用
// const pp = p().then(res=>res).catch(err=> Promise.reject(err))
//
// //所有的PROMISE对象调用需要处理错误
// pp.then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })

//---------forEach和map有什么区别？--------
console.log(['1','2'].forEach((item,i)=>{
  return i
}))

console.log(['1','2'].map((item,i)=>{
  return i
}))

//-------------app.locals  req.app.locals res.locals ----------------


//-------------res.send()和res.json()-------
//1. res.send(JSON.stringify({})) 响应字符串
//2. res.json({{}) 响应字符串 json格式的字符串  content-type:application/json