declare interface IRecommendBannersResponse {
  banners: Banner[]
  code: number
}

interface Banner {
  pic: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url?: string
  adurlV2: any
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any[]
  monitorClickList: any[]
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  encodeId: string
  program: any
  event: any
  video: any
  dynamicVideoData: any
  song?: Song
  bannerId: string
  alg: string
  scm: string
  requestId: string
  showAdTag: boolean
  pid: any
  showContext: any
  adDispatchJson: any
  s_ctrp: string
  logContext: any
  bannerBizType: string
}

interface Song {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: any[]
  pop: number
  st: number
  rt: string
  fee: number
  v: number
  crbt: any
  cf: string
  al: Al
  dt: number
  h: H
  m: M
  l: L
  sq: Sq
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
  originSongSimpleData: any
  tagPicList: any
  resourceState: boolean
  version: number
  songJumpInfo: any
  entertainmentTags: any
  single: number
  noCopyrightRcmd: any
  mst: number
  cp: number
  mv: number
  rtype: number
  rurl: any
  publishTime: number
  privilege: Privilege
  alg: string
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
  tns: any[]
  pic_str: string
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
