async function some(a,b) {
    console.log(a);
    let ans = await fetch(" https://api.tvmaze.com/search/shows?q=girls");
    console.log(b);
    console.log(ans);
}

some(10,20);
// console.log(some());