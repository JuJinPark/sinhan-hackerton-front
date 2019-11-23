<template>
  <el-table :data="incomeList" style="width: 100%;padding-top: 15px;">
    <el-table-column label="이름" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.userName | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="거래내역" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.vendor | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="수입금액" width="195" align="center">
      <template slot-scope="scope">
        ¥{{ scope.row.amount | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column label="날짜" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.date | statusFilter">
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
