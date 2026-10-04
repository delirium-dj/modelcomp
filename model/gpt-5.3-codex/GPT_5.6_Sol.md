# GPT-5.3-Codex — Independent Research Report

## Summary and evidence

GPT-5.3-Codex is OpenAI's February 2026 specialist for long-running software engineering and computer work. It combined GPT-5.2-level professional reasoning with a stronger coding agent, interactive steering, context compaction, visual computer use, and 25% higher speed than GPT-5.2-Codex.

OpenAI reported **56.8% SWE-Bench Pro**, **77.3% Terminal-Bench 2.0**, **74.0% OSWorld-Verified**, and GDPval performance matching GPT-5.2 (**70.9% wins/ties**). It autonomously iterated over millions of tokens when building complex applications.

Sources: [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-3-codex/), [OpenAI comparative GPT-5.4 evaluations](https://openai.com/index/introducing-gpt-5-4/), [system card](https://openai.com/index/gpt-5-3-codex-system-card/)

## Cost, strengths, and limitations

Pricing is **$1.75 input, $0.175 cached input, and $14 output per million tokens**. Strengths are repository-scale coding, terminal use, computer interaction, frontend design, compaction, and interactive steering. It is now deprecated, output is expensive, general multimodality is narrower than omni models, and it is optimized for agent environments rather than ordinary chat.

Source: [OpenAI pricing](https://platform.openai.com/pricing)

## Scores

- **Tool use: 93/100.** Codex execution, computer use, skills, terminal work, and compaction form a mature agent stack.
- **Reasoning: 89/100.** Professional-work capability is strong but secondary to its coding specialization.
- **Context window: 89/100.** 400K-class context with compaction supports very long tasks, below current million-token leaders.
- **Multimodal: 81/100.** Vision-driven computer use is strong, but native modality breadth is limited.
- **Coding: 94/100.** SWE-Bench Pro and Terminal-Bench were state of the art at launch.
- **Cost efficiency: 76/100.** Cached input helps, but $14 output and legacy status reduce value.
- **Overall Score: 89/100.** Half-up rounded mean: (93 + 89 + 89 + 81 + 94) / 5 = 89.2.

## Bottom line

GPT-5.3-Codex was an excellent autonomous coding agent, but new deployments should use a current Codex/GPT model rather than this deprecated generation.
