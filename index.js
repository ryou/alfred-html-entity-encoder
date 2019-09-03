const alfy = require('alfy')
const Entities = require('html-entities').AllHtmlEntities

const entities = new Entities()

const main = () => {
  const encodedString = entities.encode(alfy.input)

  alfy.output([{
    // タイトルとして表示
    title: encodedString,

    // サブタイトルとして表示
    subtitle: 'Copy to clipboard.',

    // 後続のoutput actionにqueryとして渡す内容
    arg: encodedString
  }])
}

main()
