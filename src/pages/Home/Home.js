import { useEffect, useState } from "react"
import NamesList from "../../components/Names/NamesList"

function Home() {

  const [persons, setPersons] = useState([]);


  useEffect(() => {

    fetch('https://personel-app-c7f69-default-rtdb.firebaseio.com/person.json')
      .then(response => {
        return response.json();
      }).then(data => {

        const personArr = [];

        for (const key in data) {
          const person = {
            id: key,
            ...data[key]
          }

          personArr.push(person);
        }

        setPersons(personArr)
      })
  }, [])

  return (
    <div>
      <NamesList persons={persons} />
    </div>
  )
}

export default Home