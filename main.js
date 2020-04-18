// task5
let wordList= {};

const run5 = () => {

  const doc1 = document.getElementById("doc1").value; 
  const doc2 = document.getElementById("doc2").value; 
  const doc3 = document.getElementById("doc3").value; 

  addWordsToList(doc1.toLowerCase(), 1);
  addWordsToList(doc2.toLowerCase(), 2);
  addWordsToList(doc3.toLowerCase(), 3);

  console.log(wordList);
  
  function addWordsToList (doc, docId) {
    const wordListArr=doc.split(" ");
    for (i=0; i< wordListArr.length; i++){

      if (!wordList[wordListArr[i]]) {
        wordList[wordListArr[i]]=[docId];
      }else{
        tmpList=wordList[wordListArr[i]];
        if (tmpList.indexOf(docId) == -1) {
          tmpList.push(docId);
          wordList[wordListArr[i]]=tmpList;
        }          
      }
    }
  }
}

const searchWord = () => {
  const inputString=document.getElementById("searchString").value;
  const resultText=wordList[inputString];
  console.log(resultText);
  document.getElementById("outputResult").innerHTML = resultText;
}