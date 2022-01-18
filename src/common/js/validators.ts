import { reactive } from 'vue'

// 登录用户账号信息
interface User {
  email: string
  password: string
}

export const loginUser = reactive<User>({
  email: '',
  password: ''
})

interface SignInRules {
  email: {
    type: string
    message: string
    required: boolean
    trigger: string
  }[];
  password: ({
    required: boolean
    message: string
    trigger: string
    min?: undefined
    max?: undefined
  } | {
    min: number
    max: number
    message: string
    trigger: string
    required?: undefined
  })[]
}

// 登录校验规则
export const loginRules = reactive<SignInRules>({
  email: [
    {
      required: true,
      type: 'email',
      message: 'Email is incorrect...',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Password could not be empty...',
      trigger: 'blur'
    }, {
      min: 6,
      max: 30,
      message: 'Passwords length has to be 6 to 30 characters...',
      trigger: 'blur'
    }
  ]
})

// 注册用户信息
interface RegisterUser {
  name: string
  email: string
  password: string
  password2: string
  role: string
}

export const registerUser = reactive<RegisterUser>({
  name: '',
  email: '',
  password: '',
  password2: '',
  role: ''
})

// 注册用户信息校验规则
interface RegisterRules {
  name: ({
    required: boolean
    message: string
    trigger: string
  } | {
    min: number
    max: number
    message: string
    trigger: string
  })[];
  email: {
    required: boolean
    type: string
    message: string
    trigger: string
  }[];
  password: ({
    required: boolean
    message: string
    trigger: string
  } | {
    min: number
    max: number
    message: string
    trigger: string
  })[];
  password2:({
    required: boolean
    message: string
    trigger: string
  } | {
    min: number
    max: number
    message: string
    trigger: string
  } | {
    validator: (rule: RegisterRules, value: string, callback: any) => void
    trigger: string
  })[];
}

const validatePass2 = (rule: RegisterRules, value: string, callback: any) => {
  console.log(registerUser, 'registerUser.password')
  if (value === '') {
    callback(new Error('Please enter your password again...'))
  } else if (value !== registerUser.password) {
    callback(new Error('The entered passwords are inconsistent...'))
  } else {
    callback()
  }
}

export const registerRules = reactive<RegisterRules>({
  name: [{
    required: true,
    message: 'user name cannot be empty...',
    trigger: 'blur'
  }, {
    min: 2,
    max: 30,
    message: 'The length ranges from 2 to 30 characters...',
    trigger: 'blur'
  }],
  email: [{
    required: true,
    type: 'email',
    message: 'Email is incorrect...',
    trigger: 'blur'
  }],
  password: [{
    required: true,
    message: 'Password could not be empty...',
    trigger: 'blur'
  }, {
    min: 6,
    max: 30,
    message: 'Password length has to be 6 to 30 characters...',
    trigger: 'blur'
  }],
  password2: [{
    required: true,
    message: 'Password2 could not be empty...',
    trigger: 'blur'
  }, {
    min: 6,
    max: 30,
    message: 'Passwords length has to be 6 to 30 characters...',
    trigger: 'blur'
  }, {
    validator: validatePass2, trigger: 'blur'
  }]
})
