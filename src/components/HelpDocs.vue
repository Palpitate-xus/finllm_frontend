<template>
  <div class="doc-container">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item title="情感分析 Sentiment Analysis" name="1">
        <div>使用大型语言模型来识别文本中的情感倾向，给出一个介于1-10之间的分值，1表示非常负面，10表示非常正面。</div>
        <div>这种分析有助于了解公众对特定话题、产品、品牌或事件的感受，从而指导企业决策、品牌管理和市场营销策略。</div>
      </el-collapse-item>
      <el-collapse-item title="财报分析 Financial Analysis" name="2">
        <div>通过评估企业财务报表和其他财务数据，以了解企业的财务状况和绩效。</div>
        <div>旨在为投资者、管理者和利益相关者提供有关企业经济健康状况的深入理解。</div>
      </el-collapse-item>
      <el-collapse-item title="文本总结 Summary" name="3">
        <div>利用自然语言处理技术，将长篇文本或大量信息进行提炼和概括，生成简洁而具有代表性的摘要。</div>
        <div>文本总结可以帮助人们快速了解文档的主题、关键信息和要点，提高工作效率和理解深度。</div>
      </el-collapse-item>
      <el-collapse-item title="市场预测 Market Forecast" name="4">
        <div>利用Agent技术，通过调用一系列的工具对市场的未来状况进行预测。</div>
        <div>市场预测可用于制定营销策略、产品规划、投资决策等，帮助企业做出合理的商业规划和战略安排。</div>
      </el-collapse-item>
      <el-collapse-item title="风险评估 Risk Assessment" name="5">
        <div>通过识别、分析和评估可能影响项目、企业或投资的各种风险，以及这些风险的潜在影响和可能性。</div>
        <div>风险评估旨在帮助组织识别潜在威胁，并制定相应的风险管理策略和措施，以最大程度地降低损失和不确定性。</div>
      </el-collapse-item>
      <el-collapse-item title="事件分析 Event Analysis" name="6">
        <div>通过研究和评估特定事件或行为对市场、企业或投资组合的影响，以了解事件的根本原因、后果和潜在机会。</div>
        <div>事件分析可以帮助投资者、企业和政策制定者更好地应对市场波动、危机事件和重大变化，从而降低风险并获取收益。</div>
      </el-collapse-item>
      <el-collapse-item title="行业研究 Industry Research" name="7">
        <div>对特定行业进行深入分析和研究，包括市场规模、增长趋势、竞争格局、关键驱动因素等方面的调查和评估。</div>
        <div>行业研究可以帮助投资者、企业和政策制定者了解行业内外部环境，把握机遇，应对挑战，制定相应的战略和政策。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'HelpDocs',
  data() {
    return {
      activeNames: ['1']
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style>
.doc-container {
  padding: 20px;
  width: 75%;
  margin: auto;
}
</style>

