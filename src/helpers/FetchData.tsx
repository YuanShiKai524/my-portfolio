import axios, { AxiosError } from 'axios'

interface Title<S = string> {
  content: S
  svgClass: S
  path: {
    [key: string]: S
  }
}

interface Brief {
  [key: string]: Title
}

interface Advantage<S = string> {
  title: Title
  items: { [key: string]: S }[]
}

interface Advantages {
  skills: Advantage
  languages: Advantage
}

interface Work<S = string> {
  subtitle1: S
  subtitle2: S
  year: S
  location: S
  industry: S
  descriptions: {
    [key: string]: S
  }
}

interface Education<S = string> {
  subtitle1: S
  subtitle2: S
  year: S
  status: S
}

interface Works {
  [key: string]: Title & Work
}

interface Educations {
  [key: string]: Title & Education
}

export interface MyResponse {
  [key: string]: Brief & Advantages & Educations & Works & string
}

const FetchData = (url: string) => {

  const getData = async () => {
    try {
      const res = await axios(url)
      return res.data
    } catch (err) {
      return err
    }
  }

  const checkStatus = (promise: Promise<any>) => {
    let status = 'pending'
    let result: unknown = ''
    let suspender = promise.then((r) => {
      status = 'success'
      result = r
    }, (e: AxiosError) => {
      status = 'error'
      result = e
    })

    return {
      read: () => {
        if (status === 'pending') {
          throw suspender
        } else if (status === 'error') {
          return result as MyResponse
        }
        return result as MyResponse
      }
    }
  }

  return {
    result: checkStatus(getData())
  }
}

export default FetchData
