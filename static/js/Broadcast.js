var player = videojs('video', { fluid: true }, function () {
          console.log('Good to go!');
          this.play(); // if you don't trust autoplay for some reason
})
