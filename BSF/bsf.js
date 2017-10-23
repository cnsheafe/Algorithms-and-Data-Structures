class Vertex {
  constructor(id, value) {
    this.id = id;
    this.value = value;
    this.neighbors = [];
  }
  /**
   * 
   * @param {Array<number>} values
   */
  addNeighborsfromValues(values) {
    values.forEach(val => {
      this.neighbors.push(new Vertex(Math.floor(Math.random()*1000) + 1, val));
    })
  }

  bfs(targetValue) {
    if (this.value === targetValue) {
        return [];
    }

    const path = [];
    const visited = [];

    let queue = [...this.neighbors];


    while (queue.length > 0) {
      let neighbor = queue.shift();
      if (!visited.includes(neighbor.id)) {
        if (neighbor.value === targetValue) {
          return [neighbor.id];
        }
        else {
          visited.push(neighbor.id);
          neighbor.neighbors.forEach(childNeighbor => {
            if (!visited.includes(childNeighbor.id)) {
              queue = [...queue, childNeighbor];
            }
          })
        }
      }
    }
  }
}

let graph = new Vertex(Math.floor(Math.random()*1000) + 1, 10);

let vertices = [5, 14, 13, 6, 7, 3, 4, 2, 1, 15];
vertices = vertices.map(value => {
  return new Vertex(Math.floor(Math.random()*1000) + 1, value);
});

graph.neighbors.push(vertices[0], vertices[4], vertices[9]);

vertices[0].neighbors.push(vertices[2], graph);
vertices[1].neighbors.push(vertices[0]);
vertices[2].neighbors.push(vertices[0], vertices[3]);
vertices[3].neighbors.push(vertices[4]);
vertices[4].neighbors.push(vertices[3], vertices[5], vertices[6]);
vertices[5].neighbors.push(vertices[6]); 
vertices[6].neighbors.push(vertices[5], vertices[7], vertices[8], graph);
vertices[8].neighbors.push(vertices[6]);
vertices[9].neighbors.push(graph);

const path = graph.bfs(3, null, null);
console.log(path);