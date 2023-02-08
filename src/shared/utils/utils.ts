type TName = {
  name: string
}
export const formatAlbumAuthorNames = <T extends TName[]>(names: T) => names.map((item) => item.name).join('/')
