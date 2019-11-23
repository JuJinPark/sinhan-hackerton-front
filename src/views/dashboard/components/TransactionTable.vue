<template>
  <el-table :data="incomeList" style="width: 70%;padding-top: 15px;">
    <el-table-column label="이름" min-width="50">
      <template slot-scope="scope">
        {{ scope.row.userName | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="거래내역" min-width="100">
      <template slot-scope="scope">
        {{ scope.row.vendor | orderNoFilter }}
      </template>
    </el-table-column>
    <!-- <el-table-column label="수입금액" width="100" align="center"> -->
      <el-table-column label="수입금액" width="100" >
      <template slot-scope="scope">
        {{ scope.row.amount | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column label="날짜" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag style="background-color: rgb(91, 127, 222); border: 1px solid rgba(64, 158, 255, 0);   color: #e6ecf3;" :type="row.date | statusFilter">
          {{ row.date }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  computed: {
    ...mapGetters([
      'incomeList'
    ])
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$store.dispatch('dashboadTab/getIncomeList', '1')
    }
  }
}
</script>
