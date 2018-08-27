const users =  [
    {'to': 'mahuateng', 'from': 'me', name: '马化腾', icon: 'mahuateng', 'type': 'text', 'msg': '小马哥，我穷', 'time': 1480338091374},
    {'to': 'me', 'from': 'mahuateng', name: '马化腾', icon: 'mahuateng', 'type': 'text', 'msg': '300股，接着。', 'time': 1480338091375},
    {'to': 'dinglei', 'from': 'me', name: '丁磊', icon: 'dinglei', 'type': 'text', 'msg': '为什么你们家的猪那么贵。', 'time': 1480338091378},
    {'to': 'me', 'from': 'dinglei', name: '丁磊', icon: 'dinglei', 'type': 'text', 'msg': '因为他会飞。', 'time': 1480338091379},
    {'to': 'mayun', 'from': 'me', name: '马云', icon: 'mayun', 'type': 'text', 'msg': '支付鸨，挺好。', 'time': 1480338091384},
    {'to': 'me', 'from': 'mayun', name: '马云', icon: 'mayun', 'type': 'text', 'msg': '你懂的，嘿嘿。', 'time': 1480338091394},
];

let list = users.map((item) => {
    item.icon = `../images/users/${item.icon}.png`
    return item
});
export default list