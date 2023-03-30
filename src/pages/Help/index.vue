<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>

<template>
  <div class="main">
    <div>
      <div class="table">
        <table class="reference">
          <tr>
            <td class="reference-title">选择</td>
            <td class="reference-title">料号</td>
            <td class="reference-title">名称</td>
            <td class="reference-title">图示</td>
            <td class="reference-title">内角</td>
            <td class="reference-title">外角</td>
            <td class="reference-title">拼焊</td>
            <td class="reference-title">焊丝直径mm</td>
            <td class="reference-title">配置数量</td>
          </tr>
          <tr class="reference-content-tr">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr class="reference-content-trs">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr class="reference-content-tr">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr class="reference-content-trs">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>

          <tr class="reference-content-tr">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr class="reference-content-trs">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr class="reference-content-tr">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr class="reference-content-trs">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr class="reference-content-trs">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr class="reference-content-trs">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="text">
      送丝铜嘴有三款提供选择：1.送丝铜嘴1.0,用于送0.8-1.0焊丝;
      2.送丝铜嘴1.2,用于送1.2焊丝;
      3.送丝铜嘴1.6，用于送1.4-1.6焊丝；送丝铜嘴上标有直观型号。
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  margin-left: 20px;
  .table {
    height: 460px;
    overflow-y: scroll;
    overflow-x: none;

    .reference {
      text-align: center;

      &-title {
        width: 120px;
        height: 50px;
        border-radius: 6px 0px 0px 0px;
        background: #1b2535;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 22px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
        text-align: center;
      }

      &-content-tr {
        background: #47628f;
        width: 120px;
        height: 50px;
        max-height: 20px;
        overflow-y: auto;
      }

      &-content-trs {
        background: #6c7689;
        width: 120px;
        height: 50px;
      }
    }
  }

  .text {
    color: #ffffff;
    font-family: PingFang SC;
    font-weight: medium;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
    width: 1100px;
  }
}
</style>
