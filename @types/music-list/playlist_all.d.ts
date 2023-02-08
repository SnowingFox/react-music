declare interface IPlaylistAllResponse {
  songs: Song[]
  privileges: Privilege[]
  code: number
}

interface Song {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: string[]
  pop: number
  st: number
  rt?: string
  fee: number
  v: number
  crbt: any
  cf: string
  al: Al
  dt: number
  h?: H
  m?: M
  l: L
  sq?: Sq
  hr?: Hr
  a: any
  cd: string
  no: number
  rtUrl: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData?: OriginSongSimpleData
  tagPicList: any
  resourceState: boolean
  version: number
  songJumpInfo: any
  entertainmentTags: any
  awardTags: any
  single: number
  noCopyrightRcmd: any
  rtype: number
  rurl: any
  mst: number
  cp: number
  mv: number
  publishTime: number
  tns?: string[]
}

interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

interface Al {
  id: number
  name: string
  picUrl: string
  tns: string[]
  pic_str?: string
  pic: number
}

interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

interface M {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

interface L {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

interface Sq {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

interface Hr {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

interface OriginSongSimpleData {
  songId: number
  name: string
  artists: Artist[]
  albumMeta: AlbumMeta
}

interface Artist {
  id: number
  name: string
}

interface AlbumMeta {
  id: number
  name: string
}

interface Privilege {
  id: number
  fee: number
  payed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: any
  freeTrialPrivilege: FreeTrialPrivilege
  chargeInfoList: ChargeInfoList[]
}

interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: any
}

interface ChargeInfoList {
  rate: number
  chargeUrl: any
  chargeMessage: any
  chargeType: number
}
