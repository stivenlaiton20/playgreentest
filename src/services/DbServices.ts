import { DocumentData, collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { DbData } from '../interfaces'
import { db } from './firebase'

export const sendData = async (data: DbData) => {
  await setDoc(doc(db, data.uid, data.name), data, { merge: true }).then((data) =>
    console.log('finish', data),
  )
}

export const getData = async (uid: string) => {
  const arr: Array<DbData | DocumentData> = []
  const docData = await getDocs(collection(db, uid))
  docData.forEach((doc) => {
    arr.push(doc.data())
  })
  console.log(arr)
  return arr
}
