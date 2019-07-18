<template>
  <div class="auth-layout">
    <div class="main va-row">
      <div class="auth-layout__auth-wallpaper flex md6">
        <div class="flex-center">
          <router-link class="tiketlogo" :to="{path: 'tiket/dashboard'}">
            <img
              src="https://static.tiket.photos/image/upload/v1561521366/logo/2019/06/26/9f93149e-3662-4fa5-b49e-17ca042a07306b857b17194f6a16ae038550abbc310d.png"
              class="tiketlogo"
            />
          </router-link>
        </div>
      </div>

      <div class="auth-content flex lg6 xs19 fill-height">
        <div class="flex-center">
          <div class="va-row">
            <div class="vuestic-widget-body">
              <div class="flex md6 offset--md3">
                <h1 class="text">Ahmad Yazid Technical Test</h1>
              </div>
            </div>

            <div class="va-row">
              <div class="flex md6 offset--md3">
                <router-link :to="{path: 'tiket/dashboard'}">
                  <button class="btext btn btn-info">Go to Dashboard!</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.text {
  color: blue;
  font-size: 600%;
  align-content: center;
}
.tiketlogo {
  max-width: 90%;
  height: auto;
}
.btext {
  font-size: 160%;
  font-weight: bold;
  align-content: center;
}

.auth-layout {
  height: 100vh;
  margin: 0;

  &__auth-wallpaper {
    position: relative;
    background-color: white;
    overflow: hidden;
    @include va-flex-center();
    &__logo {
      z-index: 2;
      position: absolute;
      width: 100%;
    }
  }

  .main {
    margin: 0;
    height: 100vh;
    .auth-content {
      padding: 0;
      background-color: yellow;
    }
  }
}
</style>
