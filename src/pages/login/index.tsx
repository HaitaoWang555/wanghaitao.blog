import { Input, Button, message } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

function Login() {
  const [messageApi, contextHolder] = message.useMessage()
  const [code, setCode] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  function login() {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ authorization: code }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      res.json().then((data) => {
        if (data.code === 200) {
          messageApi.success(data.message)
          const redirect = searchParams.get('redirect') || '/'
          if (redirect) {
            router.push(redirect)
          }
        } else {
          messageApi.error(data.message)
        }
      })
    })
  }
  return (
    <>
      {contextHolder}

      <div className="flex justify-center p-10 items-center ">
        <div className="f-center-start max-w-sm  w-full space-x-2">
          <Input
            placeholder="授权码"
            value={code}
            onChange={(e) => {
              setCode(e.target.value)
            }}
          />
          <Button type="primary" onClick={login} className="w-36 bg-primary">
            提 交
          </Button>
        </div>
      </div>
    </>
  )
}

export default Login
