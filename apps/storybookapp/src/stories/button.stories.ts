// Button.stories.ts
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/components/button/button"; // @repo/ui에서 Button 컴포넌트 가져오기

// 메타데이터 정의
const meta: Meta<typeof Button> = {
  title: "UI/Button", // 스토리북에서 표시될 카테고리와 컴포넌트 이름
  component: Button,
  tags: ["autodocs"], // 자동 문서화 기능 활성화
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "outline", "ghost"],
      description: "버튼 스타일 변형",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "버튼 크기",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼 스토리
export const Primary: Story = {
  args: {
    children: "기본 버튼",
    variant: "default",
    size: "default",
  },
};

// 주요 액션용 버튼 스토리
export const Secondary: Story = {
  args: {
    children: "주요 버튼",
    variant: "secondary",
    size: "default",
  },
};

// 작은 버튼 스토리
export const Small: Story = {
  args: {
    children: "작은 버튼",
    variant: "default",
    size: "sm",
  },
};

// 비활성화된 버튼 스토리
export const Disabled: Story = {
  args: {
    children: "비활성화 버튼",
    variant: "default",
    disabled: true,
  },
};
