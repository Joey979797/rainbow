import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipArrow } from './tooltip'
import { Button } from '@/components/Button'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

// 기본 툴팁 (top)
export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>This is a tooltip</p>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Bottom placement
export const Bottom: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>This is a tooltip</p>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Keyboard 접근성 테스트 (Tab focus 시 표시)
export const KeyboardAccessible: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-fg-secondary">
          Tab 키를 눌러 포커스를 이동하면 Tooltip이 표시됩니다.
        </p>
        <div className="flex gap-2">
          <Button variant="secondary">button</Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>hover me</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>This is a tooltip</p>
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
          <Button variant="secondary">button</Button>
        </div>
      </div>
    </TooltipProvider>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Overflow hidden 컨테이너
export const OverflowContainer: Story = {
  render: () => (
    <TooltipProvider>
      <div className="w-48 overflow-hidden border-2 border-border-2 rounded-8 p-3 bg-bg-1">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-fg-secondary">
            이 컨테이너는 overflow: hidden이 적용되어 있습니다.
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>This is a tooltip and this is a top side tooltip</p>
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>This is a tooltip and this is a bottom side tooltip</p>
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  ),
  parameters: {
    controls: { disable: true },
  },
}

