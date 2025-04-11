import "./App.css";
import { Button } from "@repo/ui/components/button/button";
import { Test } from "@repo/ui/components/etc/test";
import { truncate } from "@repo/utils/string";

function App() {
  const longText =
    "이것은 매우 긴 문자열입니다. 이 문자열은 truncate 함수로 잘릴 것입니다.";
  const truncatedText = truncate(longText, 20);

  console.log("원본 텍스트:", longText);
  console.log("잘린 텍스트:", truncatedText);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center space-y-6">
        <div className="flex flex-col items-center space-y-4 rounded-xl p-6 shadow-2xl">
          <h1 className="text-2xl text-center">
            <span className="block">Turborepo</span>
            <span className="block">Shadcn/ui</span>
            <span className="block">Tailwind CSS v4</span>
          </h1>

          <p>Here is your shadcn button.</p>
          <Button>Button</Button>
          <Test />
        </div>
      </div>
    </>
  );
}

export default App;
