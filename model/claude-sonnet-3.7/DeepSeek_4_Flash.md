# Claude Sonnet 3.7 — findings by DeepSeek 4 Flash

- Source: Anthropic (`opencode/claude-sonnet-3.7`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's February-2025 frontier model, the first hybrid reasoning model — one model that answers instantly or in extended visible thinking, with API control of the thinking token budget. Especially strong at coding and front-end work; launched alongside Claude Code.
- **Provider / access:** OpenCode Zen `opencode/claude-sonnet-3.7`; Anthropic API (`claude-3-7-sonnet-*`), Amazon Bedrock, Google Vertex AI, Claude apps (Free/Pro/Team/Enterprise).
- **Release / knowledge:** 2025-02-24. Knowledge cutoff October 2024.
- **IDs:** `opencode/claude-sonnet-3.7` (paid tier; no Free ID on Zen)
- **Context window:** 200K tokens (~300 A4 pages; Artificial Analysis), 128K max output including thinking tokens.
- **Modalities:** text and image input; text output. Reasoning: hybrid (standard or extended thinking, budget-controllable up to 128K output).
- **Pricing (as of 2025-02-24):** $3 per 1M input / $15 per 1M output (includes thinking tokens); 90% cached-input discount.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Numbers from the Anthropic "Claude 3.7 Sonnet and Claude Code" release (Feb 24, 2025) and its system card. SWE-bench Verified details are explicit in the release appendix; extended-thinking results where noted.

Agent / tool use:

- TAU-bench (airline): **81.2%**; TAU-bench (retail): **69.0%** (extended thinking; state of the art at release)
- Computer-use / OSWorld: no verified public score found
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (extended thinking): **78.2%**
- MMLU-Pro (extended thinking): **86.3%**
- AIME 2024 (extended thinking, no tools): **61.3%**; with parallel majority vote: **80.0%**
- Artificial Analysis Intelligence Index (non-reasoning variant): **15** (#32 / 61)
- HLE / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **70.3%** (parallel test-time compute, n=489 solvable tasks); **63.7%** with minimal scaffolding, no extended thinking
- HumanEval / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- 200K context; no published MRCR/RULER retrieval figure found for this release.

Vision:

- MMMU (extended thinking): **75.6%**

### Normalized scores (1–100)

- **Tool use: 82/100.** TAU-bench airline 81.2% / retail 69.0% made it the best agentic tool-user at release; no later agentic harnesses (Terminal-Bench, MCP-Atlas) are published.
- **Reasoning: 79/100.** GPQA 78.2% and MMLU-Pro 86.3% are strong for Feb 2025, with thinking-budget gains on AIME 61.3%→80.0%; no HLE/ARC.
- **Context window: 76/100.** 200K window (128K max output) is standard for its generation but well below 2026 1M-token rivals; no retrieval benchmark.
- **Multimodal: 74/100.** Text + image input, text output only; MMMU 75.6% is decent but no audio/video.
- **Coding: 82/100.** SWE-bench Verified 70.3% (high compute) / 63.7% (minimal scaffold) was SOTA at release and it powered Claude Code.
- **Cost efficiency: 68/100.** $3/$15 per 1M with a 90% cache discount is premium-tier pricing, though thinking tokens are included.
- **Overall Score: 78.6/100.** Half-up mean of the five quality dims (82+79+76+74+82)/5 = 78.6. Best-fit recommendation: real-world coding and tool-agent tasks on a budget-controllable reasoning path.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Anthropic "Claude 3.7 Sonnet and Claude Code" release and system card, plus the Artificial Analysis Claude 3.7 Sonnet page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
