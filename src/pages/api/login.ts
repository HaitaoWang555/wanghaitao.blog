import type { NextApiRequest, NextApiResponse } from 'next'

export default function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(403).json({
      code: 403,
      message: 'Forbidden',
    })
  } else {
    const authorization = req.body.authorization
    if (authorization && authorization === process.env.NEXT_PUBLIC_AUTHORIZATION) {
      res.setHeader('Set-Cookie', `authorization=${authorization}; HttpOnly; Path=/; Max-Age=3600`)
      res.status(200).json({ code: 200, message: '授权成功' })
    } else {
      res.status(200).json({ code: 500, message: '授权码不正确！' })
    }
  }
}
