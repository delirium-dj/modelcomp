# Claude 3.5 Haiku — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude 3.5 Haiku (`claude-3-5-haiku-20241022`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's small, fast 3.5-generation model (successor to Claude 3 Haiku), pitched at Claude 3 Opus-level coding within the budget Haiku tier. Now retired and superseded by Claude Haiku 4.5.
- **Provider / access:** Anthropic API (`claude-3-5-haiku-20241022`), Amazon Bedrock (`anthropic.claude-3-5-haiku-20241022-v1:0`), Google Cloud Vertex AI. Retired on the first-party API 2026-02-19 (Bedrock EOL 2026-06-19); requests now fail. Messages API.
- **Release / knowledge:** Released 2024-10-22 (GA on API/Bedrock/Vertex 2024-11-04). Knowledge cutoff July 2024.
- **IDs:** `claude-3-5-haiku-20241022`. No OpenCode Zen ID.
- **Context window:** 200K tokens (200,000), 8,192 max output.
- **Modalities:** Text and image (vision) in; text out. Vision was added to the first-party API 2025-02-25 (some platforms kept it text-only). No audio/video in, no audio out.
- **Pricing (as of retirement):** $0.80 in / $4.00 out per 1M (cut from $1 / $5 on 2024-12-05); cached input $0.08, cache write $1.00.
- **Architecture:** Proprietary, undisclosed transformer; API-only, no public weights.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (Anthropic model card, via LLMLearner)
- GPQA: **37.5%** (LLMLearner)
- MMLU: **77.6%** (LLMLearner)
- MMLU-Pro: **65.0%** (LLMLearner / AI/TLDR)
- MATH: **69.2–69.4%** (LLMLearner / AI/TLDR)
- MGSM: **85.6%** (AI/TLDR)
- DROP (F1): **83.1%** (AI/TLDR)
- FrontierMath: **0.3%** (LLMLearner)
- ECI: **127** (#121/167, LLMLearner)
- SimpleQA: **8.0%** (LLMLearner)

Coding:

- SWE-bench Verified: **40.6%** (Anthropic, via AI/TLDR)
- HumanEval: **88.1%** (Anthropic, via LLMLearner / AI/TLDR)
- MBPP: **85.6%** (LLMLearner)
- Aider-Polyglot: **28.0%** (LLMLearner)

Agent / tool use:

- Terminal Bench Hard: **2.3%** (LLMLearner)

Multimodal:

- MMMU-Pro: **45.6%** (LLMLearner)

Long context:

- No RULER/MRCR retrieval curve published; 200K context.

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal Bench Hard 2.3% and Aider-Polyglot 28.0% mark it as a weak agentic executor — the mid band starts around TB2.1 45–60%, which it never reaches.
- **Reasoning: 50/100.** GPQA Diamond 41.6% is below the 60–80% mid band, MATH 69.2% and MMLU 77.6% are solid, but FrontierMath 0.3% and SimpleQA 8.0% hold it at the low end of mid.
- **Context window: 70/100.** 200K tokens is the methodology's 200K anchor (70); the 8K max output is a real limitation, noted as a caveat.
- **Multimodal: 62/100.** Text + image in → the 60–70 band; MMMU-Pro 45.6% supports the lower half of that band.
- **Coding: 66/100.** SWE-bench Verified 40.6% was class-leading for a small 2024 model and HumanEval 88.1% is strong, but Aider-Polyglot 28.0% and the small-model ceiling keep it mid.
- **Cost efficiency: 80/100.** $0.80 in / $4.00 out per 1M is cheap on input but well above the $0.10–$0.60 leaders; cache reads at $0.08 help.
- **Overall Score: 58/100.** (40 + 50 + 70 + 62 + 66) / 5 = 57.6 → **58**. Best-fit: retired budget sub-agent / routing model — migrate to Claude Haiku 4.5 for new work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-03
- Method: independent public internet research (LLMLearner Claude 3.5 Haiku record built from Anthropic's model card, AI/TLDR model page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
