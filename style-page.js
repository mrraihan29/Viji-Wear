// SEARCH
let availableKeywords = [
    'Molly Dress',
    'Abela Top',
    'Naomi Skirt',
    'Yinny Top',
    'Aleza Top',
    'Anara Skirt',
    'Lowie Pants',
    'Norim Dress',
    'Binar Dress',
  ];
  
  const resultsBox = document.querySelector(".result-box");
  const inputBox = document.getElementById("input-box");
  
  inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
  
    if(!result.length){
        resultsBox.innerHTML = ' ';
    }
  }
  
  function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
  
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
  }
  
  function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = ' ';
  }
    filterSelection("all");
    function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    // console.log(x);
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        shoppingRemoveClass(x[i], "show");
        shoppingRemoveClass(x[i], "hide")
        if (x[i].className.indexOf(c) > -1) {
        shoppingAddClass(x[i], "show");
        } else {
        shoppingAddClass(x[i], "hide")
        }
    }
    }

    function shoppingRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
    // RETURNNYA ARRAY;
    }

    function shoppingAddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
        }
    }
    // RETURNNYA TEXT;
    }

    var btnContainer = document.getElementById("filter");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
