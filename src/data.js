const staticLibraries = [
  ['产品资料', '产品介绍、参数、说明书、使用场景等', '全体员工', '周杰伦'],
  ['客户案例', '客户背景、客户需求、解决方案、客户访谈等', '市场部、产品部', '苏念安'],
  ['客户FAQ', '客户常见问题、标准回复答案、注意事项等', '总经办', '林昱辰'],
  ['企业制度', '考勤、报销、采购、合同、售后、用章等', '市场部', '高景行'],
  ['报价规则', '产品价格、折扣规则、账期、付款规则、开票规则等', '市场部、产品部', '周杰伦'],
  ['培训资料', '培训PPT、视频、讲义、录音、考试题库等', '总经办', '苏念安'],
  ['老员工经验', '老师傅经验、避坑指南、行业心得等', '全体员工', '林昱辰'],
  ['历史项目', '客户需求、方案、报价、计划、过程、复盘、经验等', '市场部', '高景行']
];

const dynamicLibraries = ['产品情报', '市场品牌情报', '技术研发情报', '商业经营情报', '行业资讯与舆论', '风险负面情报'];
const dynamicLibraryDetails = new Map([
  ['产品情报', {description:'持续追踪产品动态、竞品上新、价格变化与用户反馈',creator:'周杰伦',updatedAt:'2026/8/20 19:20'}],
  ['市场品牌情报', {description:'汇集品牌活动、营销案例、市场趋势与消费者洞察',creator:'苏念安',updatedAt:'2026/8/21 10:30'}],
  ['技术研发情报', {description:'跟踪技术前沿、研发成果、专利信息与创新应用',creator:'林昱辰',updatedAt:'2026/8/22 14:15'}],
  ['商业经营情报', {description:'收集企业经营动态、商业模式与行业竞争信息',creator:'高景行',updatedAt:'2026/8/23 09:40'}],
  ['行业资讯与舆论', {description:'聚合行业新闻、政策动态、热点话题与舆论趋势',creator:'苏念安',updatedAt:'2026/8/24 16:50'}],
  ['风险负面情报', {description:'关注品牌负面舆情、经营风险与异常事件预警',creator:'周杰伦',updatedAt:'2026/8/25 11:20'}]
]);

const staticFiles = [
  ['员工手册.word', 'word', '12MB', '解析中', '0'],
  ['考勤制度.PPT', 'ppt', '45MB', '解析中', '0'],
  ['报销制度.pdf', 'pdf', '12KB', '已完成', '78'],
  ['请假制度.excel', 'excel', '78MB', '已完成', '45'],
  ['审批SOP.pdf', 'pdf', '12KB', '已完成', '24']
];

const dynamicFiles = [
  ['公司动态', '12MB', '7天', '0'],
  ['项目动态', '45MB', '1天', '0'],
  ['产品资料', '12KB', '3天', '78'],
  ['招聘动态', '78MB', '1天', '45'],
  ['公司舆情', '12KB', '3天', '24']
];

const consumption = [
  ['-0.0097', 'token消耗', '幻馨Agent App'],
  ['-9.9000', '智能体薪资', '商家端'],
  ['-99.0000', '算力套餐', '集群中台'],
  ['-200.0000', '空间费用', '幻馨Agent App'],
  ['-0.0097', 'api接口调用', '商家端']
];

const agents = [
  ['公司内部百事通', '徐妍', '#65a8ff'],
  ['总经理助手', '林蔓', '#9b7cf5'],
  ['财务工作搭档', '赵一凡', '#f2a15f'],
  ['爆款内容创作专家', '周玥', '#eb718b'],
  ['数据分析师', '何知远', '#51b7a8']
];

const directoryDepartments = [
  ['全部成员', 8, null],
  ['产品研发中心', 4, '幻馨智能科技'],
  ['产品部', 2, '产品研发中心'],
  ['技术部', 2, '产品研发中心'],
  ['市场部', 2, '幻馨智能科技'],
  ['客户成功部', 1, '幻馨智能科技'],
  ['综合管理部', 1, '幻馨智能科技']
];

const directoryMembers = [
  { name:'林昱辰', role:'高级产品经理', dept:'产品部', phone:'138 0112 5678', email:'yuchen.lin@huanxin.ai', active:true, color:'#5d72da' },
  { name:'陈知夏', role:'交互设计师', dept:'产品部', phone:'136 8821 3046', email:'zhixia.chen@huanxin.ai', active:true, color:'#27a8a0' },
  { name:'周启明', role:'前端开发工程师', dept:'技术部', phone:'139 1028 7712', email:'qiming.zhou@huanxin.ai', active:true, color:'#d88356' },
  { name:'沈嘉言', role:'后端开发工程师', dept:'技术部', phone:'137 6605 4921', email:'jiayan.shen@huanxin.ai', active:true, color:'#8c67c8' },
  { name:'苏念安', role:'品牌营销经理', dept:'市场部', phone:'135 2094 3168', email:'nianan.su@huanxin.ai', active:true, color:'#3f8bc4' },
  { name:'高景行', role:'内容运营', dept:'市场部', phone:'131 5568 9024', email:'jingxing.gao@huanxin.ai', active:false, color:'#c06b86' },
  { name:'许清欢', role:'客户成功经理', dept:'客户成功部', phone:'188 6142 7730', email:'qinghuan.xu@huanxin.ai', active:true, color:'#27a8a0' },
  { name:'方若宁', role:'人力资源主管', dept:'综合管理部', phone:'186 3408 1255', email:'ruoning.fang@huanxin.ai', active:true, color:'#8c67c8' }
];

const roleRecords = [
  { name:'企业管理员', description:'拥有企业全部管理权限，负责企业级配置。', active:true, modules:['全部模块'], dataScope:'全部' },
  { name:'部门管理员', description:'负责本部门成员、知识库和业务数据管理。', active:true, modules:['企业通讯录','静态知识库','动态知识库'], dataScope:'本部门' },
  { name:'普通成员', description:'使用工作台进行日常对话与资料查询。', active:true, modules:['商家首页','对话工作台'], dataScope:'本人' },
  { name:'运营观察员', description:'查看企业运营数据，不参与配置修改。', active:false, modules:['商家首页','账户余额'], dataScope:'本人及下属' }
];
