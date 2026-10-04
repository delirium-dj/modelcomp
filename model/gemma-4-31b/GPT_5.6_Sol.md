# Gemma 4 31B — Independent Research Report

## Summary and evidence

Gemma 4 31B is Google DeepMind's open Apache-2.0 dense vision-language model with **30.7B parameters** and **256K context**. It supports thinking, text and image input, video through frame sequences, native function calling, coding, document/UI/chart understanding, and more than 140 pretrained languages.

Source: [Google Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4)

## Cost and limitations

Open weights allow private self-hosting without token fees and fit workstation-class deployments when quantized. The 31B model lacks audio support available in smaller Gemma 4 variants, requires caller-managed tools, and trails frontier cloud models on the hardest agent tasks.

## Scores

- **Tool use: 80/100.** Native function calling helps, but hosting and tool execution are user-managed.
- **Reasoning: 82/100.** Built-in thinking is strong for a 31B open model.
- **Context window: 86/100.** 256K is useful for documents and repositories.
- **Multimodal: 88/100.** Image, document, UI, chart, and frame-based video understanding are broad.
- **Coding: 82/100.** Capable open coding support, below frontier specialists.
- **Cost efficiency: 96/100.** Apache-licensed local deployment delivers strong value.
- **Overall Score: 84/100.** Half-up rounded mean: (80 + 82 + 86 + 88 + 82) / 5 = 83.6.

## Bottom line

Gemma 4 31B is a versatile open workstation model for private multimodal reasoning and coding.
