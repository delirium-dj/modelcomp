# Claude Opus 4.6 — Independent Research Report

## Executive summary

Claude Opus 4.6 was Anthropic's February 2026 flagship for long-running agents, coding, deep research, and professional knowledge work. It introduced adaptive thinking, effort controls, context compaction, a beta one-million-token window, and 128K output. Its coding and research scores remain strong, but Anthropic now labels it legacy and newer Claude models provide better performance or price efficiency.

## Release and positioning

Anthropic released `claude-opus-4-6` on February 5, 2026. It was the first Opus model with a one-million-token context option and was designed to plan more carefully, work reliably in large repositories, review and debug code, and sustain autonomous tasks. The fixed model ID is available through Claude API and major cloud platforms.

Sources: [Anthropic launch announcement](https://www.anthropic.com/news/claude-opus-4-6), [Claude Opus 4.6 model documentation](https://platform.claude.com/docs/en/models/opus-4-6/overview), [Claude model versioning](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions)

## Capabilities and benchmark evidence

- **Coding:** Opus 4.6 scores **80.8% on SWE-bench Verified**, **53.4% on SWE-bench Pro**, **77.8% on SWE-bench Multilingual**, and **65.4% on Terminal-Bench 2.0**.
- **Research and tools:** It reaches **83.7% on BrowseComp**, with Anthropic reporting **86.8%** under a multi-agent harness. It also introduced agent teams in Claude Code and API context compaction for longer tool-running sessions.
- **Reasoning:** Results include **91.3% on GPQA Diamond**, **40.0% on Humanity's Last Exam without tools**, and approximately **53% with tools**.
- **Computer and visual work:** It records **72.7% on OSWorld** and **69.1% on CharXiv Reasoning without tools**, increasing to **84.7% with tools**.
- **Context:** The Claude Platform offers a beta **one-million-token context window** and **128,000-token output**. Batch API can produce up to 300K tokens in beta.
- **Professional work:** Anthropic reported a 144-Elo lead over GPT-5.2 on GDPval-AA at launch, while a legal customer reported **90.2% on BigLaw Bench**.

Sources: [Anthropic launch announcement](https://www.anthropic.com/news/claude-opus-4-6), [Claude Opus 4.6 System Card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf), [Claude Opus 4.7 comparative system card](https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf)

## API, deployment, and cost

Standard pricing is **$5 per million input tokens** and **$25 per million output tokens**. Cache reads cost $0.50, while five-minute and one-hour cache writes cost $6.25 and $10. Batch API gives a 50% discount. Prompts above 200K tokens on the Claude Platform use premium long-context rates of **$10 input and $37.50 output**, and US-only inference costs 1.1× standard pricing.

Sources: [Anthropic launch announcement](https://www.anthropic.com/news/claude-opus-4-6), [Claude Opus 4.6 model documentation](https://platform.claude.com/docs/en/models/opus-4-6/overview)

## Limitations

- Anthropic classifies Opus 4.6 as legacy and recommends migration to Opus 5.5.
- The one-million-token window is beta and long prompts above 200K have materially higher pricing.
- Native modalities are text and image input with text output; audio and video are unsupported.
- Its May 2025 reliable knowledge cutoff is old for time-sensitive work.
- Newer Opus releases substantially improve SWE-bench Pro, Terminal-Bench, computer use, and visual reasoning.

## Scores

- **Tool use: 92/100.** Excellent BrowseComp performance, agent teams, compaction, and reliable long-horizon behavior make it a strong tool orchestrator.
- **Reasoning: 91/100.** GPQA, HLE, GDPval-AA, and professional-domain evidence place it in the frontier tier of its generation.
- **Context window: 95/100.** One-million-token context and very large output limits are exceptional, though the context feature is beta and premium-priced above 200K.
- **Multimodal: 77/100.** Image and chart reasoning are capable, but audio/video and native multimedia output are absent.
- **Coding: 91/100.** Strong repository and terminal results remain useful, although later Claude models are materially better.
- **Cost efficiency: 67/100.** Cache and batch discounts help, but $5/$25 standard and $10/$37.50 long-context pricing are expensive for a legacy model.
- **Overall Score: 89/100.** Half-up rounded mean of Tool use, Reasoning, Context window, Multimodal, and Coding: (92 + 91 + 95 + 77 + 91) / 5 = 89.2.

## Bottom line

Claude Opus 4.6 remains a capable coding and knowledge-work agent with excellent context capacity. It makes sense mainly for established, validated integrations; newer Sonnet and Opus releases offer a better starting point for greenfield deployments.
