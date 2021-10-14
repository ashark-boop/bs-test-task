<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  props: ["options"],
  mixins: [reactiveProp],
  computed: {
    getOptions: function() {
      return this.options;
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.getOptions);
  }
};
</script>