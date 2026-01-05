import type { Meta, StoryObj } from '@storybook/react'
import { useState, useRef, useEffect } from 'react'
import { Input } from './textInput'
import { Search } from 'lucide-react'

const meta = {
  title: 'Components/TextInput',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: '입력 필드의 placeholder 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '입력 필드 비활성화 여부',
    },
    debounceMs: {
      control: 'number',
      description: '디바운스 시간 (밀리초)',
    },
    leftSlot: {
      control: 'boolean',
      description: '왼쪽 슬롯 표시 여부',
    },
    rightSlot: {
      control: 'boolean',
      description: '오른쪽 슬롯 표시 여부',
    },
    status: {
      control: 'select',
      options: ['default', 'error'],
      description: '입력 필드 상태',
    },
    label: {
      control: 'text',
      description: '입력 필드 라벨',
    },
    onClearClick: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>


// Default - 기본 입력 필드
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'placeholder',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div className="w-80">
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    )
  },
}

// Debounce - 디바운스 기능
export const Debounce: Story = {
  args: {
    label: 'Label',
    placeholder: 'placeholder',
    debounceMs: 500,
  },
  render: (args) => {
    const [value, setValue] = useState('')
    const [debouncedValue, setDebouncedValue] = useState('')
    const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    
    useEffect(() => {
      return () => {
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current)
        }
      }
    }, [])
    
    return (
      <div className="w-80">
        <Input
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            
            // 디바운스된 값 업데이트
            if (debounceTimerRef.current) {
              clearTimeout(debounceTimerRef.current)
            }
            debounceTimerRef.current = setTimeout(() => {
              setDebouncedValue(e.target.value)
              console.log('Debounced value:', e.target.value)
            }, 500)
          }}
        />
        <div className="mt-2 space-y-1">
          <p className="text-sm text-fg-secondary">
            디바운스 - {args.debounceMs}ms: {debouncedValue || ''}
          </p>
        </div>
      </div>
    )
  },
}

// Error - 에러 상태
export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'placeholder',
    status: 'error',
  },
  render: (args) => {
    const [value, setValue] = useState('잘못된 입력값')
    return (
      <div className="w-80">
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="mt-2 text-sm text-danger">
          에러 메시지가 표시됩니다
        </p>
      </div>
    )
  },
}

// WithLeftSlot - 왼쪽 슬롯 사용 (아이콘)
export const WithLeftSlot: Story = {
  args: {
    label: 'Label',
    placeholder: '검색어를 입력하세요',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div className="w-80">
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          leftSlot={<Search className="w-5 h-5 text-fg-tertiary" />}
        />
      </div>
    )
  },
}

// WithRightSlot - 오른쪽 슬롯 사용 (단위 표시)
export const WithRightSlot: Story = {
  args: {
    label: 'Label',
    placeholder: '금액을 입력하세요',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div className="w-80">
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rightSlot={<span className="text-fg-tertiary text-p2">원</span>}
        />
      </div>
    )
  },
}


// Disabled - 비활성화 상태
export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: '비활성화된 입력 필드',
    disabled: true,
  },
  render: (args) => {
    const [value, setValue] = useState('입력 불가한 필드입니다.')
    return (
      <div className="w-80">
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    )
  },
}


