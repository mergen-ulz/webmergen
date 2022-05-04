async function getContent() {
    const res = await fetch("content.json");
    const json = await res.json();
    console.log(json);
    document.getElementById("news_title_1").innerHTML = json.article_1.title;
    document.getElementById("news_title_2").innerHTML = json.article_2.title;
    document.getElementById("news_title_3").innerHTML = json.article_3.title;
    document.getElementById("news_desc_1").innerHTML = json.article_1.content;
    document.getElementById("news_desc_2").innerHTML = json.article_2.content;
    document.getElementById("news_desc_3").innerHTML = json.article_3.content;
}

getContent();