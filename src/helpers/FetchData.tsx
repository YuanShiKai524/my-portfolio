import axios, { AxiosError } from 'axios'

interface Title<S = string> {
  name: S
  svgClass: S
  path: { 
    a : S 
    b : S 
  }
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
  [key: string]: Educations & Works & string
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
