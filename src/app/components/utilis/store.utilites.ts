export class StoreUtility {
  //[{},{}]  -> normal aaray
  //convert to this from
  //entits : {id:{}}  ->normalize

  static normalize(entitArray: Entity[]) {
    return entitArray.reduce((privious,current)=>{
      return {...privious,...{[current.id]:current}}
    },{})
  }
}

interface Entity {
  id: any
}
