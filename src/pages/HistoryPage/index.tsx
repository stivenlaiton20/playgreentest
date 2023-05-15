import { useEffect, useState } from 'react'
import { CardHistory } from '../../components'
import { useAuth } from '../../contexts/AuthContext'
import {
  ContainerCardsHistory,
  Historypage,
  IconLeft,
  SubtitleHistory,
  TitleHistory,
} from './styles'
import { Link } from 'react-router-dom'
import { getData } from '../../services'
import { DbData } from '../../interfaces'
import { DocumentData } from 'firebase/firestore'
import { v4 as uuid } from 'uuid'

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState<DbData[] | DocumentData[]>([])

  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      getData(user.uid).then((data) => setHistoryData(data))
    }
  }, [user])

  console.log([historyData])
  return (
    <Historypage
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link to='/'>
        <IconLeft />
      </Link>
      <TitleHistory>History</TitleHistory>
      <SubtitleHistory>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </SubtitleHistory>

      <ContainerCardsHistory>
        {historyData &&
          historyData.map((data) => (
            <CardHistory image={data.image} name={data.name} isLike={data.isLike} key={uuid()} />
          ))}
      </ContainerCardsHistory>
    </Historypage>
  )
}

export default HistoryPage
