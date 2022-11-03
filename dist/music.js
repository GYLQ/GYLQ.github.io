const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true,
  narrow: true,
  mutex: true,
  lrcType: 0,
  audio: [
    {
      name: '清空',
      artist: 'Vk',
      url: 'https://wsaudiobssdlbig.yun.kugou.com/202110282200/8251475a2f1638c9813b3763329618a9/bss/extname/wsaudio/780ba6c398e538e93ee945d47fb8aaf4.mp3',
      cover: 'https://wsingbssdl.kugou.com/d78267d58dd6192eb32961d9c6b1f77a.jpg_48x48.jpg',
    },
    {
      name: '哪里都是你',
      artist: '队长',
      url: 'https://m701.music.126.net/20211028225054/ef999c040e37bf9726db49eddf8afdae/jdyyaac/015a/5259/025a/603087e667e391674ac550a240ab60c5.m4a',
      cover: 'https://p1.music.126.net/s9nj-9xhpLwD0fp3uK4O1g==/109951166085512509.jpg',
    }, 
    {
      name: '致你',
      artist: 'yihuik苡慧',
      url: 'https://m801.music.126.net/20211028224739/d5053c62fb99313c21e28170748e4b46/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/10481876611/cdc8/1fcd/0fb2/8d8e6c94653eff2ba4a981b67af19b47.m4a',
      cover: 'https://p1.music.126.net/sf4l5OGHbIytrRJTbehNhg==/109951165681766490.jpg',
    }, 
    {
      name: '天问',
      artist: '诺言Jason',
      url: 'https://wsaudiobssdlbig.yun.kugou.com/202110282203/baf45595c5e7b0c3db2b557da159a332/bss/extname/wsaudio/8e645effa384ae8672b360770394cbd0.mp3',
      cover: 'https://wsingbssdl.kugou.com/b406d6607c114d2a76c956481b6623a0.jpg_48x48.jpg',
    },
    {
      name: '囍（cover:葛东琪）',
      artist: '光天翌',
      url: 'https://wsaudiobssdlbig.yun.kugou.com/202110282204/50ac24dce743f649d07b12b1e1f88589/bss/extname/wsaudio/4d6b40648b417d66ab5b027e32440a88.mp3',
      cover: 'https://wsingbssdl.kugou.com/09d8c0afe2e7e1fd40abe4b91311d20c.jpg_48x48.jpg',
    },
    {
      name: '错位时空',
      artist: '玄觞',
      url: 'https://wsaudiobssdlbig.yun.kugou.com/202110282212/1a4ff8d19ed0e3f83deca24e7485120e/bss/extname/wsaudio/9a28371a01dfc47c79119ce2acf4b50d.mp3',
      cover: 'https://wsingbssdl.kugou.com/4bec71a441199104f45f0f73c742de89.jpg_188x188.jpg',
    },
  ]
});
