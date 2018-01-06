<template>
    <div class="list">
			<div class="listHeader">
				<div class="search">
					<el-input v-model="input" placeholder="请输入内容"></el-input>
				</div>
			</div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.list {
  width: 100%;
  height: calc(100% - 50px);
  background: pink;
  padding: 10px;
  .listHeader {
    width: 500px;
    background: saddlebrown;
  }
  input {
    width: 80%;
  }
}
</style>
