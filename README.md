# Rainbow Design System

React + TypeScript + Vite 기반의 디자인 시스템 컴포넌트 라이브러리입니다.

## 설치/실행 방법

1. **저장소 클론**

   ```bash
   git clone <repository-url>
   ```

2. **프로젝트 디렉토리로 이동**

   ```bash
   cd rainbow
   ```

3. **의존성 설치**

   ```bash
   npm install
   ```

4. **Storybook 실행**
   ```bash
   npm run storybook
   ```

Storybook이 실행되면 `http://localhost:6006`에서 컴포넌트 문서 및 예제를 확인할 수 있습니다.

## 토큰 구조 설명

이 프로젝트는 CSS 변수를 기반으로 한 디자인 토큰 시스템을 사용합니다. 모든 색상 토큰은 `styles/color-tokens.css`에 정의되어 있으며, 라이트 모드와 다크 모드를 지원합니다.

### 색상 토큰

#### Foreground Colors (전경색)

- `--color-fg-primary`: 주요 텍스트 색상
- `--color-fg-secondary`: 보조 텍스트 색상
- `--color-fg-tertiary`: 3차 텍스트 색상
- `--color-fg-subtle`: 미묘한 텍스트 색상
- `--color-fg-inverse`: 역전 텍스트 색상 (어두운 배경 위 밝은 텍스트)

#### Background Colors (배경색)

- `--color-bg-0`: 기본 배경색
- `--color-bg-1`: 1단계 배경색
- `--color-bg-2`: 2단계 배경색
- `--color-bg-3`: 3단계 배경색
- `--color-bg-dimmed-1`: 어두운 오버레이 (40% 투명도)
- `--color-bg-dimmed-2`: 어두운 오버레이 (20% 투명도)
- `--color-bg-inverse`: 역전 배경색

#### Border Colors (테두리 색상)

- `--color-border-1`: 강한 테두리 색상
- `--color-border-2`: 기본 테두리 색상
- `--color-border-3`: 약한 테두리 색상
- `--color-border-inverse`: 역전 테두리 색상

#### Semantic Colors (의미론적 색상)

- `--color-primary`: 주요 색상
- `--color-primary-strong`: 강조된 주요 색상
- `--color-on-primary`: 주요 색상 위 텍스트 색상
- `--color-danger`: 위험/에러 색상
- `--color-on-danger`: 위험 색상 위 텍스트 색상
- `--color-success`: 성공 색상
- `--color-on-success`: 성공 색상 위 텍스트 색상
- `--color-warning`: 경고 색상
- `--color-on-warning`: 경고 색상 위 텍스트 색상
- `--color-informative`: 정보 색상
- `--color-on-informative`: 정보 색상 위 텍스트 색상

### Tailwind CSS 통합

모든 색상 토큰은 Tailwind CSS 설정을 통해 클래스로 사용할 수 있습니다:

```tsx
// 예시
<div className="bg-primary text-on-primary">
  <p className="text-fg-primary">주요 텍스트</p>
  <p className="text-fg-secondary">보조 텍스트</p>
</div>
```

### 다크 모드

다크 모드를 활성화하려면 HTML 요소에 `dark` 클래스를 추가하세요:

```tsx
<html className="dark">{/* ... */}</html>
```

### 폰트 토큰

폰트 토큰은 Tailwind CSS 설정을 통해 사용할 수 있으며, 폰트 패밀리, 크기, 줄 간격, 굵기를 포함합니다.

#### 폰트 패밀리

- `font-sans`: Pretendard (기본 sans-serif 폰트)

#### 타이포그래피 스케일

모든 폰트 토큰은 클래스 이름으로 직접 사용할 수 있으며, 폰트 크기, 줄 간격, 굵기가 함께 적용됩니다.

**헤딩 (Heading)**

- `h1`: 48px / line-height: 48px / font-weight: 800
- `h2`: 30px / line-height: 36px / font-weight: 500
- `h2-b`: 30px / line-height: 36px / font-weight: 700
- `h3`: 24px / line-height: 32px / font-weight: 500
- `h3-b`: 24px / line-height: 32px / font-weight: 700
- `h4`: 20px / line-height: 28px / font-weight: 500
- `h4-b`: 20px / line-height: 28px / font-weight: 700
- `h5`: 18px / line-height: 28px / font-weight: 500
- `h5-b`: 18px / line-height: 28px / font-weight: 700

**본문 (Paragraph)**

- `p1`: 16px / line-height: 24px / font-weight: 400
- `p1-b`: 16px / line-height: 24px / font-weight: 700
- `p2`: 14px / line-height: 20px / font-weight: 400
- `p2-b`: 14px / line-height: 20px / font-weight: 700
- `p3`: 12px / line-height: 16px / font-weight: 400
- `p3-b`: 12px / line-height: 16px / font-weight: 700

**캡션 (Caption)**

- `caption1`: 11px / line-height: 14px / font-weight: 500
- `caption1-b`: 11px / line-height: 14px / font-weight: 700
- `caption2`: 10px / line-height: 12px / font-weight: 500
- `caption2-b`: 10px / line-height: 12px / font-weight: 700

#### 사용 예시

```tsx
// 헤딩
<h1 className="h1">제목 1</h1>
<h2 className="h2">제목 2</h2>
<h2 className="h2-b">굵은 제목 2</h2>

// 본문
<p className="p1">본문 텍스트</p>
<p className="p1-b">굵은 본문 텍스트</p>
<p className="p2">작은 본문 텍스트</p>

// 캡션
<span className="caption1">캡션 텍스트</span>
<span className="caption2">작은 캡션 텍스트</span>
```

### Border Radius 토큰

- `rounded-0`: 0px
- `rounded-4`: 4px
- `rounded-8`: 8px
- `rounded-12`: 12px
- `rounded-16`: 16px
- `rounded-20`: 20px
- `rounded-24`: 24px
- `rounded-28`: 28px
- `rounded-32`: 32px
- `rounded-full`: 9999px

## 주요 컴포넌트 API

### Button

버튼 컴포넌트입니다.

#### Props

| Prop        | Type                                               | Default     | Description                                          |
| ----------- | -------------------------------------------------- | ----------- | ---------------------------------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | 버튼 스타일 변형                                     |
| `size`      | `'default' \| 'sm' \| 'lg'`                        | `'default'` | 버튼 크기                                            |
| `disabled`  | `boolean`                                          | `false`     | 버튼 비활성화 여부                                   |
| `loading`   | `boolean`                                          | `false`     | 로딩 상태 여부                                       |
| `fullWidth` | `boolean`                                          | `false`     | 버튼을 전체 너비로 표시                              |
| `startIcon` | `React.ReactNode`                                  | -           | 왼쪽 아이콘 (startIcon과 endIcon은 동시 사용 불가)   |
| `endIcon`   | `React.ReactNode`                                  | -           | 오른쪽 아이콘 (startIcon과 endIcon은 동시 사용 불가) |
| `children`  | `React.ReactNode`                                  | -           | 버튼 텍스트 또는 내용                                |
| `className` | `string`                                           | -           | 추가 CSS 클래스                                      |

#### 사용 예시

```tsx
import { Button } from '@/components/Button'
import { Plus } from 'lucide-react'

// 기본 버튼
<Button>클릭하세요</Button>

// 다양한 변형
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// 크기 조정
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>

// 아이콘 사용
<Button startIcon={<Plus />}>추가</Button>
<Button endIcon={<Plus />}>추가</Button>
<Button startIcon={<Plus />} /> // 아이콘만

// 로딩 상태
<Button loading>로딩 중...</Button>

// 전체 너비
<Button fullWidth>전체 너비 버튼</Button>
```

---

### SelectBox

선택 박스 컴포넌트입니다. 검색 기능과 커스텀 렌더링을 지원합니다.

#### Props

| Prop           | Type                                                | Default           | Description                      |
| -------------- | --------------------------------------------------- | ----------------- | -------------------------------- |
| `options`      | `SelectOption[]`                                    | **required**      | 선택 가능한 옵션 배열            |
| `value`        | `string \| number \| null`                          | -                 | 현재 선택된 값                   |
| `onChange`     | `(value: string \| number \| null) => void`         | -                 | 값 변경 핸들러                   |
| `placeholder`  | `string`                                            | `'선택하세요...'` | 선택되지 않았을 때 표시할 텍스트 |
| `disabled`     | `boolean`                                           | `false`           | SelectBox 비활성화 여부          |
| `label`        | `string`                                            | -                 | 라벨 텍스트                      |
| `className`    | `string`                                            | -                 | 추가 CSS 클래스                  |
| `renderOption` | `(option: SelectOption) => React.ReactNode`         | -                 | 옵션 커스텀 렌더링 함수          |
| `renderValue`  | `(option: SelectOption \| null) => React.ReactNode` | -                 | 선택된 값 커스텀 렌더링 함수     |

#### SelectOption 타입

```tsx
interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}
```

#### 사용 예시

```tsx
import { SelectBox } from '@/components/SelectBox'
import type { SelectOption } from '@/components/SelectBox'

const options: SelectOption[] = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3', disabled: true },
]

// 기본 사용
<SelectBox
  options={options}
  value={value}
  onChange={setValue}
  label="옵션 선택"
  placeholder="옵션을 선택하세요"
/>

// 커스텀 렌더링
<SelectBox
  options={options}
  value={value}
  onChange={setValue}
  renderOption={(option) => (
    <div className="flex items-center gap-2">
      <span className="font-medium">{option.label}</span>
      <span className="text-xs text-fg-tertiary">({option.value})</span>
    </div>
  )}
  renderValue={(option) => {
    if (!option) return '선택하세요'
    return <span className="font-semibold">{option.label}</span>
  }}
/>
```

---

### TextInput

텍스트 입력 필드 컴포넌트입니다. Controlled/Uncontrolled 모드를 지원하며, 디바운스 기능을 제공합니다.

#### Props

| Prop           | Type                                               | Default     | Description              |
| -------------- | -------------------------------------------------- | ----------- | ------------------------ |
| `value`        | `string`                                           | -           | 입력값 (Controlled 모드) |
| `onChange`     | `(e: React.ChangeEvent<HTMLInputElement>) => void` | -           | 값 변경 핸들러           |
| `placeholder`  | `string`                                           | -           | placeholder 텍스트       |
| `disabled`     | `boolean`                                          | `false`     | 입력 필드 비활성화 여부  |
| `label`        | `string`                                           | -           | 라벨 텍스트              |
| `status`       | `'default' \| 'error'`                             | `'default'` | 입력 필드 상태           |
| `leftSlot`     | `React.ReactNode`                                  | -           | 왼쪽 슬롯 (아이콘 등)    |
| `rightSlot`    | `React.ReactNode`                                  | -           | 오른쪽 슬롯 (단위 등)    |
| `debounceMs`   | `number`                                           | -           | 디바운스 시간 (밀리초)   |
| `onClearClick` | `() => void`                                       | -           | Clear 버튼 클릭 핸들러   |
| `className`    | `string`                                           | -           | 추가 CSS 클래스          |

#### 사용 예시

```tsx
import { Input } from '@/components/TextInput'
import { Search } from 'lucide-react'

// 기본 사용 (Controlled)
const [value, setValue] = useState('')
<Input
  label="이름"
  placeholder="이름을 입력하세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

// Uncontrolled 모드
<Input
  label="이름"
  placeholder="이름을 입력하세요"
/>

// 디바운스 사용
<Input
  label="검색"
  placeholder="검색어를 입력하세요"
  debounceMs={500}
  onChange={(e) => {
    // 500ms 후에 호출됨
    console.log('검색:', e.target.value)
  }}
/>

// 왼쪽 슬롯 (아이콘)
<Input
  label="검색"
  placeholder="검색어를 입력하세요"
  leftSlot={<Search className="w-5 h-5 text-fg-tertiary" />}
/>

// 오른쪽 슬롯 (단위)
<Input
  label="금액"
  placeholder="금액을 입력하세요"
  rightSlot={<span className="text-fg-tertiary text-p2">원</span>}
/>

// 에러 상태
<Input
  label="이메일"
  placeholder="이메일을 입력하세요"
  status="error"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

---

### Tooltip

툴팁 컴포넌트입니다. Radix UI를 기반으로 구현되었으며, 접근성을 고려하여 설계되었습니다.

#### 컴포넌트

- `TooltipProvider`: 툴팁 컨텍스트 제공자 (최상위에 한 번만 사용)
- `Tooltip`: 툴팁 루트 컴포넌트
- `TooltipTrigger`: 툴팁 트리거 요소
- `TooltipContent`: 툴팁 내용
- `TooltipArrow`: 툴팁 화살표 (선택사항)

#### Props

**TooltipProvider**

- `delayDuration`: `number` (기본값: `200`) - 툴팁 표시 지연 시간 (밀리초)

**TooltipContent**

- `side`: `'top' \| 'right' \| 'bottom' \| 'left'` - 툴팁 위치
- `sideOffset`: `number` (기본값: `4`) - 트리거로부터의 거리
- `className`: `string` - 추가 CSS 클래스

#### 사용 예시

```tsx
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
} from '@/components/Tooltip'
import { Button } from '@/components/Button'

// 기본 사용
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

// 다양한 위치
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>Top tooltip</p>
      <TooltipArrow />
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Bottom</Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">
      <p>Bottom tooltip</p>
      <TooltipArrow />
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## 기술 스택

- **React** 19.2.0
- **TypeScript** 5.9.3
- **Vite** 6.0.0
- **Tailwind CSS** 3.4.14
- **Radix UI** - 접근성 있는 UI 컴포넌트
- **Storybook** 8.4.7 - 컴포넌트 문서화
- **class-variance-authority** - 컴포넌트 변형 관리
- **lucide-react** - 아이콘 라이브러리

## 라이선스

이 프로젝트는 비공개 프로젝트입니다.
