export interface Syllable {
  text: string;
  isStressed: boolean;
  parentWord: string;
  isWordBreak?: boolean;
}

export interface MetricFoot {
  id: number;
  unstressed: Syllable;
  stressed: Syllable;
  bracketText: string;
  translationNote?: string;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  teacherNotes: string;
}

export type BeatStyle = 'metronome' | 'boombap' | 'heartbeat';
