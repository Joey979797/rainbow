import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Plus } from 'lucide-react'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: '버튼의 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: '버튼의 크기',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태 여부',
    },
    fullWidth: {
      control: 'boolean',
      description: '버튼을 전체 너비로 표시',
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
    startIcon: {
      control: 'boolean',
      description: '왼쪽 아이콘 표시 여부 (startIcon과 endIcon은 동시에 사용 불가)',
    },
    endIcon: {
      control: 'boolean',
      description: '오른쪽 아이콘 표시 여부 (startIcon과 endIcon은 동시에 사용 불가)',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Playground - 모든 props를 조작할 수 있는 버튼
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    disabled: false,
    loading: false,
    fullWidth: false,
    children: 'label',
    startIcon: false,
    endIcon: false,
  } as any,
  render: (args) => {
    // startIcon과 endIcon을 boolean에서 실제 아이콘으로 변환
    const { startIcon, endIcon, ...restArgs } = args as typeof args & {
      startIcon?: boolean
      endIcon?: boolean
    }
    
    // startIcon과 endIcon이 동시에 true면 startIcon만 사용
    if (startIcon && !endIcon) {
      return <Button {...restArgs} startIcon={<Plus />} />
    } else if (endIcon && !startIcon) {
      return <Button {...restArgs} endIcon={<Plus />} />
    }
    
    return <Button {...restArgs} />
  },
}

// Default - 기본 버튼
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    children: 'label',
  } as any,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
  } as any,
  parameters: {
    controls: { 
      exclude: ['startIcon', 'endIcon', 'disabled', 'loading', 'fullWidth'],
    },
  },
}

// Loading - 로딩 상태 버튼
export const Loading: Story = {
  args: {
    loading: true,
    children: '로딩 중...',
  },
  parameters: {
    controls: { disable: true },
  },
}

// Icon - 아이콘 버튼 (start, end, only 조정 가능)
export const Icon: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    iconType: 'start',
  } as any,
  argTypes: {
    iconType: {
      control: 'select',
      options: ['start', 'end', 'only'],
      description: '아이콘 위치 (start: 왼쪽, end: 오른쪽, only: 아이콘만)',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  } as any,
  parameters: {
    controls: {
      exclude: ['children', 'startIcon', 'endIcon', 'disabled', 'loading', 'fullWidth'],
    },
  },
  render: (args) => {
    const { iconType, children = 'label', ...restArgs } = args as typeof args & {
      iconType?: 'start' | 'end' | 'only'
      children?: string
    }
    
    if (iconType === 'start') {
      return <Button {...(restArgs as any)} startIcon={<Plus />}>{children}</Button>
    } else if (iconType === 'end') {
      return <Button {...(restArgs as any)} endIcon={<Plus />}>{children}</Button>
    } else {
      // only
      return <Button {...(restArgs as any)} startIcon={<Plus />} />
    }
  },
}

// FullWidth - 전체 너비 버튼
export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    fullWidth: true,
    iconType: 'none',
    children: 'label',
  } as any,
  argTypes: {
    iconType: {
      control: 'select',
      options: ['none', 'start', 'end', 'only'],
      description: '아이콘 위치 (none: 없음, start: 왼쪽, end: 오른쪽, only: 아이콘만)',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
  } as any,
  render: (args) => {
    const { iconType, children = 'label', ...restArgs } = args as typeof args & {
      iconType?: 'none' | 'start' | 'end' | 'only'
      children?: string
    }
    
    const containerClass = "w-full max-w-md mx-auto flex items-center justify-center min-h-screen"
    
    if (iconType === 'start') {
      return (
        <div className={containerClass}>
          <div className="w-full">
            <Button {...(restArgs as any)} fullWidth startIcon={<Plus />}>
              {children}
            </Button>
          </div>
        </div>
      )
    } else if (iconType === 'end') {
      return (
        <div className={containerClass}>
          <div className="w-full">
            <Button {...(restArgs as any)} fullWidth endIcon={<Plus />}>
              {children}
            </Button>
          </div>
        </div>
      )
    } else if (iconType === 'only') {
      return (
        <div className={containerClass}>
          <div className="w-full">
            <Button {...(restArgs as any)} fullWidth startIcon={<Plus />} />
          </div>
        </div>
      )
    } else {
      return (
        <div className={containerClass}>
          <div className="w-full">
            <Button {...(restArgs as any)} fullWidth>
              {children}
            </Button>
          </div>
        </div>
      )
    }
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['startIcon', 'endIcon', 'disabled', 'loading', 'fullWidth'],
    },
  },
}

