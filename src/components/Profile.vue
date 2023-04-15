<template>
  <div class="profile">
    <img src="https://avatars.githubusercontent.com/u/49601167?v=4" alt="avatar">
    <div class="content">
      <h1>
        Jianjun Yu
      </h1>
      <h2>
        这个人很懒，什么都没留下
      </h2>
      <p><icon-material-symbols:location-on /> GuangZhou, China</p>
      <p>
        <icon-carbon:logo-github />
        <a href="https://github.com/jianjunyuu">https://github.com/jianjunyuu</a>
      </p>
      <p>
        <icon-ic:round-email />
        <a href="mailto:mryujianjun.cn@gmail.com">mryujianjun.cn@gmail.com</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$w: 200px;

.profile{
  display: flex;
  align-items: flex-end;
  border: 1px solid var(---border-color);
  border-radius: 6px;
  padding: 28px 68px;

  > img {
    width: $w;
    height: $w;
    border-radius: 50%;
    display: block;
    margin-right: 24px;
    border: 2px solid var(--fg-shallow);
  }
  > .content {

    & > h1 {
      margin: 24px 0 0px;
      font-size: 2rem;
      font-weight: 700;
    }
    & > h2 {
      margin-bottom: 14px;
      color: var(--fg-shallow);
    }
    & > p {
      margin-bottom: 2px;
      > svg {
        margin-right: 0.5rem;
        fill: var(--fg-shallow);
      }
      color: var(--fg-shallow);
      display: flex;
      align-items: center;
    }
  }
}
</style>
