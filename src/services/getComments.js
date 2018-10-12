import * as api from "./hackernewsapi";

// let data1 = { name: "data3", kids: [] };
// let data2 = { name: "data4", kids: [] };
// let data3 = { name: "data2", kids: [data1] };
// let data4 = { name: "data1", kids: [data2, data3] };
// let data5 = { name: "data5", kids: [data4] };

function getComments(itemId) {
  let comments = api.getItem(itemId).then(data => {
    let item = data.val();
    let kids = item.kids || undefined;
    if (!kids) return item;
    else {
      return Promise.all(item.kids.map(i => getComments(i))).then(kids => {
        item.kids = kids;
        return item;
      });
    }
  });
  return comments;
}

function flattenComments(comments) {
  return comments.reduce((prev, current) => {
    let hasKids = current.kids;
    return prev.concat(
      hasKids
        ? [
            Object.assign({}, current, { kids: undefined }),
            ...flattenComments(current.kids)
          ]
        : Object.assign({}, current, { kids: undefined })
    );
  }, []);
}

export { getComments as default, flattenComments };
