function getNeighbors(d, x, y) {
    const x1 = x - 1;
    const x2 = x + 1;
    const y1 = y - 1;
    const y2 = y + 1;
    let r = [];
    if (d[x1]) {
        d[x1][y1] && r.push([`${x1}:${y1}`, d[x1][y1]]);
        d[x1][y] && r.push([`${x1}:${y}`, d[x1][y]]);
        d[x1][y2] && r.push([`${x1}:${y2}`, d[x1][y2]]);
    }
    if (d[x2]) {
        d[x2][y1] && r.push([`${x2}:${y1}`, d[x2][y1]]);
        d[x2][y] && r.push([`${x2}:${y}`, d[x2][y]]);
        d[x2][y2] && r.push([`${x2}:${y2}`, d[x2][y2]]);
    }
    d[x][y1] && r.push([`${x}:${y1}`, d[x][y1]]);
    d[x][y2] && r.push([`${x}:${y2}`, d[x][y2]]);
    return r.filter(el => el[1] === '□').map(el => el[0]);
}

export function getPossibleStep(d) {
    const xn = d.length - 1;
    const yn = d[0].length - 1;
    var a = {};
    d.forEach((row, x) => {
        row.forEach((el, y) => {
            const n = parseInt(el);
            if (n && n > 0) {
                var aa = getNeighbors(d, x, y)
                if (!a[n]) a[n] = [];
                a[n].push(aa);
            }
        });
    });

    const mines = {};
    Object.keys(a).forEach(k => {
        let n = parseInt(k);
        a[k] = a[k].filter(el => {
            if (n === el.length) {
                el.forEach(el2 => {
                    mines[el2] = true;
                });
                return false;
            }
            return true;
        });
    });
   
    let posibleMines = {};
    let posibleMap = {};
    let noMines = {};
    Object.keys(a).forEach(k => {
        let n = parseInt(k);
        a[k].map(el => {    
            let nn = n;
            el = el.filter(el2 => {
                if (mines[el2]) {
                    nn--;
                    return false;
                }
                return true;
            });
            if (nn===0) {
                el.forEach(i => {
                    if (!noMines[i]) noMines[i] = 1;
                    else ++noMines[i];
                });
                return null;
            } else {
                if (!posibleMap[nn]) posibleMap[nn] = [];
                posibleMap[nn].push(el);
                el.forEach(i => {
                    if (!posibleMines[i]) posibleMines[i] = 0;
                    ++posibleMines[i];
                });
            }
        });
    });

    let _noMines  = Object.keys(noMines);
    if (_noMines.length) {
        noMines = _noMines.sort((k1,k2) => noMines[k2] - noMines[k1]);
        const point = noMines[0].split(':');
        return {
            x: point[0],
            y: point[1]
        };
    }

    let mostPossible = [];
    let mostPosibleK = 0;
    Object.keys(posibleMap).forEach(n => {
        const items = posibleMap[n];
        if (!items.length) return;
        items.forEach((item, itemK) => {
            let a = item.length - n*2;
            if (a > mostPosibleK) {
                mostPosibleK = a;
                mostPossible = item.sort((k1,k2) => posibleMines[k1] - posibleMines[k2]);
            }
        });
    });

    let step = mostPossible[0] || null;
    if (step) {
        const point = step.split(':');
        return {
            x: point[0],
            y: point[1]
        }; 
    }
    return {
        x: Math.ceil(Math.random() * xn),
        y: Math.ceil(Math.random() * yn)
    };
}
