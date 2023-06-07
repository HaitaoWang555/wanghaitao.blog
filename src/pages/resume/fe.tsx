import { encrypt, decrypt } from '@/utils/crypto'
const mobile = '06861564682858a99cb1ab3603e6f524'
const university = '83bcf519e5ca42e6142a7f925eb74741f417f614ad1db66d7bd0a2d0eea904459d3f34f5d812507a0cbb2b9a5d315224'
const company = [
  '47056b1b86f92934b56925c0d6a05e5dbcd81bcbc235f7302aff50d478b673c97452172dcaf5b3479d9386fad91aa628',
  'b3c20c335f721aedfd8bc3b7ea0cf81cbf25ce36a6e4a74a730b9de7c4a3b19ea34bf51ffde0e3a9ee9099c449d00a76',
  'e509ff6f63e311b7eb09bddd428d727831461ff74fef415d475099028f2269cb',
  'bafc4f1438e212b9e92657a8fe5eb60c026d9fc27fb12a9580bd8a2f7ba127674959bf463376b088dc8b2013ceecf9ab',
  '194e75701e1ed502bc88747cd4260a14cfd08761bdc474fdac6ac2b53f6917c5',
  '59c5a45d3656044642c0478c90d1dae469e0f76f173cee9a5d74a58f337fe54744a6103965ffa13e07b070c4f976a9c3',
]

const project = [
  'd2360d0fa3d4e5ec248b4d2efccf50be20ded596611c5f5c5c98be533514213b',
  'eeedfb76101366f0be27675756dbb9945d8893cd5826815737a0c4cecbcb32b0',
  'a51ae6db162d26f2b67306674958390b1b3fbf5eed8285bda499d13adda2887c',
  '75722af300a104b5e4977580ae3e1e51634ced9e99c115af54d06c7fea442ff1',
  '591a02270b2af8e0cd6d0a6061e9a864dad58cf74288dd6fe6d1ab3d7321bc96',
  '93bbbeb95956577be09c141e41c5d651bd50603e09a92a6743a9f34b4435bdca',
  '28e261f0fbc6a30d74d8a60453a2e2fa5185cd9abda41b4e561222ebade532cd',
]

const other = ['b5c168ceb6fb5a3ab90a666dd8f859c7', '93bbbeb95956577be09c141e41c5d651ab0be32ab895894b3f7ac509259a6e1f']

function FeResume() {
  return (
    <>
      <h1>王海涛</h1>

      <p>男 29岁 本科 6年前端开发经验 手机号码/微信号：{decrypt(mobile)}</p>

      <p>{decrypt(university)} 2012 - 2016</p>

      <p>Web前端开发 北京 在职 一月内到岗</p>

      <h2>我的优势</h2>
      <p>
        拥有6年的Web相关开发经验，熟悉前后端分离开发模式，能够根据实际业务场景提出相应的技术解决方案，具备独立解决问题的能力，对于项目调试、优化有丰富经验，熟悉常见后端技术。
        能够根据项目实际情况与团队成员水平合理的与其它部门沟通完成排期计划。参与工程师文化建设组织技术分享与培训，提升整体团队的能力和水平。
      </p>

      <h2>工作经历</h2>

      <h3>2020年11月 - 2023年6月 {decrypt(company[0])} 开发工程师</h3>

      <ol>
        <li>
          牵头开发{decrypt(project[1])}、{decrypt(project[0])}、{decrypt(project[2])}
        </li>
        <li>开发公共组件、制定模板代码快速生成业务代码，提供本地及在线数据mock方案</li>
        <li>制定统一开发规范、搭建组件使用说明文档、对代码以及上线文档进行审查</li>
        <li>开发人员的招聘、技术培训、制定考核指标等工作</li>
      </ol>

      <h3>2020年3月 - 2020年11月 {decrypt(company[1])} Web前端开发</h3>

      <ol>
        <li>
          独立开发{decrypt(project[3])}，完成短信、彩信、视频短信的在线设计与展示功能以及复杂的人群包，人群标签展示功能
        </li>
        <li>升级改造{decrypt(project[4])}，修改项目Webpack配置，优化项目打包体积，提高加载速度</li>
        <li>
          参与{decrypt(project[5])}
          开发，完成{decrypt(other[0])}各省市到区县公司以及子公司的多种指标可视化工作，优化项目打包与Nginx配置
        </li>
      </ol>

      <h3>2020年10月 - 2020年03月 {decrypt(company[2])} Web前端开发</h3>

      <ol>
        <li>独立完成电商平台商家端、管理后台、CRM平台开发</li>
        <li>协助开发电商平台用户端</li>
        <li>制作运营推广活动页面</li>
      </ol>

      <h3>2018年09月 - 2020年10月 {decrypt(company[3])} Web前端开发</h3>

      <ol>
        <li>带领实习生一起完成{decrypt(project[6])}的开发</li>
        <li>维护公司官网</li>
        <li>制作运营活动页面</li>
        <li>开发网站移动端</li>
      </ol>

      <h3>2017年10月 - 2018年08月 {decrypt(company[4])} Web前端开发</h3>

      <ol>
        <li>开发维护公司旗下微信商城前端页面</li>
        <li>制作企业官网、产品库</li>
        <li>制作H5宣传页及H5小游戏</li>
      </ol>

      <h3>2016年11月 - 2017年03月 {decrypt(company[5])} 市场代表</h3>

      <ol>
        <li>负责放射影像类产品的销售</li>
        <li>负责医用显示器在医院相关科室的推广</li>
      </ol>

      <h2>项目经历</h2>

      <h3>{decrypt(project[0])}</h3>
      <ol>
        <li>
          项目描述：对服务器上各个业务进行分布式链路追踪，日志记录，性能监控并将一次分布式请求的调用情况集中可视化展示
        </li>
        <li>
          技术栈：使用<strong>Vite、Typescript、Vue3、Pinia、Vue Router、pnpm-workspace</strong>
          搭建monorepo项目，UI框架使用
          <strong>element-plus</strong> <strong>tailwindcss</strong>， 图表组件使用<strong>ECharts、D3</strong>
        </li>
        <li>
          主要职责：将开源项目SkyWalking的各个可视化展示模块集成系统中；抽离公共组件、公共布局、eslint配置为单独项目，利用git
          modules和pnpm-workspace引入至业务系统；完成各个业务模块。
        </li>
      </ol>

      <h3>{decrypt(project[1])}</h3>
      <ol>
        <li>项目描述：基于{decrypt(other[0])}大数据为客户提供更好的广告投放方案</li>
        <li>
          技术栈：使用<strong>Vue、Vuex、Vue Router</strong>搭建项目，UI框架使用<strong>Ant Design of Vue</strong>
          <strong>tailwindcss</strong>
        </li>
        <li>
          主要职责：搭建项目并提供开发模板用于业务代码生成；PDF预览与图片、视频展示的处；接口加密方案制定；按业务需要制定打包发版流程；制定排期计划与相关技术说明文档。
        </li>
        <li>
          项目难点：项目安全级别较高，要求接口需要进行二次加密；图片与视频不可被下载；面向公网服务不可以暴漏内网静态资源
        </li>
      </ol>

      <h3>{decrypt(project[2])}</h3>
      <ol>
        <li>
          项目描述：基于{decrypt(other[0])}
          及三方数据服务商的海量数据资源为企业提供一站式SaaS行业反欺诈能力输出服务，一体化WEB+API应用
        </li>
        <li>
          技术栈：使用<strong>Webpack React react-router</strong>搭建项目，UI框架使用<strong>ant-design</strong>
          ，图表组件使用<strong>antv</strong>
        </li>
        <li>主要职责：更改权限配置流程，实现页面、按钮权限可自由配置；优化Webpack配置加快打包速度。</li>
      </ol>

      <h3>{decrypt(project[3])}</h3>
      <ol>
        <li>项目描述：利用{decrypt(other[0])}数据服务能力，面向全网政企用户提供的精准营销服务产品</li>
        <li>
          技术栈：使用<strong>Vue、Vuex、Vue Router</strong>搭建项目，UI框架使用<strong>Ant Design of Vue</strong>
          ，图表组件使用<strong>ECharts</strong>，富文本组件<strong>Tinymce</strong>
        </li>
        <li>
          主要职责：搭建项目配置<strong>eslint、stylelint</strong>规范；使用<strong>husky</strong>管理
          <strong>Git Hooks</strong>；封装通用组件如<strong>form、 table、 upload</strong>
          和通用工具方法；设计项目工程目录；
          开发、部署、公共组件文档的编写；每个模块具体的业务开发；可自由配置权限管理模块。
        </li>
        <li>
          项目难点：图片与视频等素材的验证处理；在线设计模块图片与视频的自由拖动和实时展示；大量、多层级的人群标签的设计与展示，标签选择的规则验证。
        </li>
      </ol>

      <h3>{decrypt(project[4])}</h3>
      <ol>
        <li>项目描述：一个可以对公司各个业务进行财务审计管理的项目</li>
        <li>
          技术栈：使用的开源项目<strong>JeecgBoot</strong>进行的二次开发
        </li>
        <li>
          主要职责： 在保证原有功能情况下，修改<strong>JeecgBoot</strong>的<strong>webpack</strong>
          配置优化打包，与后端、测试、运维合作完成业务的新需求上线
        </li>
      </ol>

      <h3>{decrypt(project[5])}</h3>
      <ol>
        <li>项目描述：{decrypt(other[1])}工作平台化</li>
        <li>
          技术栈：多个业务模块使用的开源项目<strong>JeecgBoot</strong>进行的二次开发与组合
        </li>
        <li>
          主要职责：完成{decrypt(other[0])}各省市到区县公司以及子公司下钻过程中相应指标的可视化展示，优化加载时长。
        </li>
        <li>项目难点：中国地图的数据收集与处理；不同级别公司展示指标不同；多个项目聚合切换时加载时间长使用体验差。</li>
      </ol>

      <h3>电商平台商家端</h3>
      <ol>
        <li>项目描述：为入住平台的商家开发的管理端，提供商品管理、订单管理、售后评价管理、买家管理等模块</li>
        <li>
          技术栈：<strong>Vue、Vuex、Vue Router</strong>，UI框架使用<strong>ElementUI</strong>
        </li>
        <li>
          主要职责：将原项目架构进行升级（<strong>php blade + jQuery + vuejs</strong> 升级为
          <strong>webpack、eslint、Vue</strong>）进而提高开发效率、项目可维护度
        </li>
      </ol>

      <h3>电商管理后台、CRM平台</h3>
      <ol>
        <li>
          项目描述：为公司运营人员、商务人员提供平台商家与买家的交易信息、商品信息、物流信息等。保障电商平台的交易稳定运行
        </li>
        <li>
          技术栈：<strong>Vue、Vuex、Vue Router</strong>，UI框架使用<strong>Ant Design of Vue</strong>
        </li>
        <li>主要职责：按照原型从零开发平台，与后端、测试进行敏捷开发</li>
      </ol>

      <h3>电商平台用户端</h3>
      <ol>
        <li>项目描述：为买家提供商品浏览、购买功能</li>
        <li>
          技术栈：<strong>uniapp</strong>，UI框架使用<strong>uviewui</strong>
        </li>
        <li>主要职责：进行多端开发，使用户能够在微信网页端、APP端进行商品的浏览与购买</li>
      </ol>

      <h3>{decrypt(project[6])}</h3>
      <ol>
        <li>
          项目描述：是基于互联网的材价及供应商管理系统，用户通过对材价信息的采集、存储、分析、共享、自动配价，帮助企业（行业）实现常用建材信息系统化、标准化管理
        </li>
        <li>
          技术栈：<strong>Vue、Vuex、Vue Router</strong>，UI框架使用<strong>ElementUI</strong>
        </li>
        <li>
          主要职责：按照原型从零开发平台，使用YApi进行mock管理，可脱离后台进行展示，帮助销售提前向客户展示产品，了解客户真实需求、促成成交。精确到按钮级别的权限管理
        </li>
      </ol>
    </>
  )
}

export default FeResume
