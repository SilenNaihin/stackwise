import streamingGpt4QuestionAnswerTTS from './streamingGpt4QuestionAnswerTTS';

test('streamingGpt4QuestionAnswerTTS correctly', async () => {
    streamingGpt4QuestionAnswerTTS('What is the meaning of life?').then((result) => {
        expect(result).toBe('The meaning of life is to be happy.');
    }
    );
}
);