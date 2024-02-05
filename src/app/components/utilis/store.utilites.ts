export class StoreUtility {

  //[{},{}]  -> normal aaray
  //convert to this from
  //entits : {id:{}}  ->normalize
  static normalize(entitArray: Entity[]) {
    return entitArray.reduce((privious, current) => {
      return { ...privious, ...{ [current.id]: current } }
    }, {})
  }

  //{dsds:{id:"dsds",name:"preet"}}  -> entites
  //[{{id:"dsds",name:"preet"}}]
  static unNormalie(entits: { id: any }) {
    if (!entits) {
      return []
    } else {
      return Object.keys(entits).map((key) => entits[key])
    }
  }

  // ids:['dvd','rgrre','dd']
  static filterDuplicateds(ids: number[]) {
    // value,index,arr['dvd','rgrre','dd']
    return ids.filter((ele, index, self) => index == self.indexOf(ele))
  }

  static removeKey(entits: { [id: number]: any }, id: any) {
    let newObj = { ...entits };
    delete newObj[id]
    return newObj;
  }
}

interface Entity {
  id: any
}
