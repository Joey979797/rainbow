import type { Meta, StoryObj } from '@storybook/react'
import { useState, useMemo } from 'react'
import { SelectBox } from './selectBox'
import type { SelectOption } from './selectBox'

const meta = {
  title: 'Components/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: '선택되지 않았을 때 표시할 placeholder 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: 'SelectBox 비활성화 여부',
    },
    label: {
      control: 'text',
      description: 'SelectBox 라벨',
    },
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    renderOption: {
      table: {
        disable: true,
      },
    },
    renderValue: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof SelectBox>

export default meta
type Story = StoryObj<typeof meta>

const defaultOptionsData: Omit<SelectOption, 'icon'>[] = [
  { value: 'option 1', label: 'option 1' },
  { value: 'option 2', label: 'option 2' },
  { value: 'option 3', label: 'option 3' },
  { value: 'option 4', label: 'option 4' },
  { value: 'option 5', label: 'option 5' },
]

// Default - 기본 SelectBox
export const Default: Story = {
  args: {
    label: '옵션 선택',
    placeholder: '옵션을 선택하세요.',
    options: [],
  },
  render: (args) => {
    const [value, setValue] = useState<string | number | null>(null)
    
    const options = useMemo<SelectOption[]>(
      () => defaultOptionsData.map((opt) => ({ ...opt })),
      []
    )
    
    return (
      <div className="w-80">
        <SelectBox
          {...args}
          options={options}
          value={value}
          onChange={setValue}
          renderOption={(option) => (
            <div className="flex items-center gap-2">
              <span className="font-medium">{option.label}</span>
              <span className="text-xs text-fg-tertiary ml-auto">({option.value})</span>
            </div>
          )}
          renderValue={(option) => {
            if (!option) return args.placeholder || '옵션을 선택하세요.'
            return (
              <div className="flex items-center gap-2">
                <span className="font-semibold">{option.label}</span>
              </div>
            )
          }}
        />
      </div>
    )
  },
}

// Disabled - 비활성화된 SelectBox
export const Disabled: Story = {
  args: {
    label: '옵션 선택',
    placeholder: '비활성화된 SelectBox',
    disabled: true,
    options: [],
  },
  render: (args) => {
    const [value, setValue] = useState<string | number | null>('nextjs')
    
    const options = useMemo<SelectOption[]>(
      () => defaultOptionsData.map((opt) => ({ ...opt })),
      []
    )
    
    return (
      <div className="w-80">
        <SelectBox
          {...args}
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
}

// WithDisabledOptions - 일부 옵션이 disabled된 SelectBox
export const WithDisabledOptions: Story = {
  args: {
    label: '옵션 선택',
    placeholder: '옵션을 선택하세요.',
    options: [],
  },
  render: (args) => {
    const [value, setValue] = useState<string | number | null>(null)
    
    const options = useMemo<SelectOption[]>(
      () => [
        { value: 'option 1', label: 'option 1' },
        { value: 'option 2', label: 'option 2', disabled: true },
        { value: 'option 3', label: 'option 3' },
        { value: 'option 4', label: 'option 4' },
        { value: 'option 5', label: 'option 5' },
      ],
      []
    )
    
    return (
      <div className="w-80">
        <SelectBox
          {...args}
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
}

