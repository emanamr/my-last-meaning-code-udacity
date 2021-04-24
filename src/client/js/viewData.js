export function viewData(data) {
    document.getElementById("text").innerHTML = `${data.sentence_list[0].text},
    text : ${data.text}`;
    document.getElementById("agreement").innerHTML = `${data.sentence_list[1].text},
    agreement: ${data.agreement}`;
    document.getElementById("subjectivity").innerHTML = ` ${data.sentence_list[2].text},
    subjectivity: ${data.subjectivity}`;
    document.getElementById("confidence").innerHTML = ` ${data.sentence_list[3].text},
    confidence: ${data.confidence}`;
    document.getElementById("irony").innerHTML = ` ${data.sentence_list[4].text},
    irony: ${data.irony}`;
    document.getElementById("score_tag").innerHTML = `${data.sentence_list[5].text},
    score_tag: ${data.score_tag}`;
}
function checkUrl(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  return !!pattern.test(str)
}
export{
    checkUrl
}