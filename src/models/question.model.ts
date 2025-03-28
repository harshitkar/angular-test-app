import { OptionData } from '../models/option.model';

export interface QuestionData {
    questionId: string;
    questionText: string;
    questionImage?: string | null;
    questionNumber: number;
    correctOptionIndex: number;
    testId: string;
    options: OptionData[];
}