import React from 'react';
import { X, Keyboard, Music, BookOpen, Volume2 } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#2b2227] border border-[#4d3d44] rounded-2xl shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#4d3d44]">
          <div className="flex items-center gap-2 text-[#df9b9b]">
            <Keyboard className="w-6 h-6" />
            <h3 className="font-bold text-[#f7ede2] text-lg">教學簡報操作指南 & 鍵盤快捷鍵</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#c4b5a5] hover:text-[#f7ede2] hover:bg-[#3d3238] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-4 space-y-4 text-base text-[#d8c7b8]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3.5 bg-[#231b1f] rounded-xl border border-[#4d3d44] flex items-center justify-between">
              <span className="text-[#f7ede2] text-base">下一頁投影片</span>
              <kbd className="px-2.5 py-1 rounded bg-[#33292f] border border-[#5a434d] font-mono text-base text-[#f4d3d8]">
                → 或 空白鍵
              </kbd>
            </div>

            <div className="p-3.5 bg-[#231b1f] rounded-xl border border-[#4d3d44] flex items-center justify-between">
              <span className="text-[#f7ede2] text-base">上一頁投影片</span>
              <kbd className="px-2.5 py-1 rounded bg-[#33292f] border border-[#5a434d] font-mono text-base text-[#f4d3d8]">
                ←
              </kbd>
            </div>

            <div className="p-3.5 bg-[#231b1f] rounded-xl border border-[#4d3d44] flex items-center justify-between">
              <span className="text-[#f7ede2] text-base">全螢幕放映</span>
              <kbd className="px-2.5 py-1 rounded bg-[#33292f] border border-[#5a434d] font-mono text-base text-[#8fae9b]">
                F 或 F11
              </kbd>
            </div>

            <div className="p-3.5 bg-[#231b1f] rounded-xl border border-[#4d3d44] flex items-center justify-between">
              <span className="text-[#f7ede2] text-base">教學指引備忘</span>
              <kbd className="px-2.5 py-1 rounded bg-[#33292f] border border-[#5a434d] font-mono text-base text-[#df9b9b]">
                T
              </kbd>
            </div>
          </div>

          <div className="p-4 bg-[#252f2a] border border-[#5e826e]/50 rounded-xl space-y-2.5">
            <div className="flex items-center gap-2 text-[#8fae9b] text-base font-bold">
              <Music className="w-5 h-5" />
              <span>課堂互動亮點功能：</span>
            </div>
            <ul className="text-base text-[#f7ede2] space-y-1.5 list-disc pl-5 leading-relaxed">
              <li>
                <strong>互動節奏鼓機：</strong>隨時啟動 Boom-Bap 嘻哈鼓點或古典節拍器，可即時調整 BPM 速度。
              </li>
              <li>
                <strong>音節可點擊發音：</strong>點擊音步中的各個音節，會觸發音訊發音與強弱提示。
              </li>
              <li>
                <strong>莫蘭迪玫瑰重音視覺強化：</strong>在第 5、6 頁專門強化了 5 個重音（I, pare, to, sum, day）的動態反饋。
              </li>
              <li>
                <strong>押韻全景圖：</strong>第 7、8 頁可點選查看 ABAB CDCD EFEF GG 格律與詩意轉折。
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-3 border-t border-[#4d3d44] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#b86b77] hover:bg-[#c97b87] text-[#f7ede2] rounded-xl text-base font-bold"
          >
            知道了，開始教學
          </button>
        </div>
      </div>
    </div>
  );
};
