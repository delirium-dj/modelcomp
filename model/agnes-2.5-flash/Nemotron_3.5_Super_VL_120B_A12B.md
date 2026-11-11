# Agnes 2.5 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Agnes AI (`agnes-2.5-flash`), OpenAI-compatible gateway at apihub.agnes-ai.com
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Flash
- **Short description:** Agnes AI's fast and efficient language model, a generally available upgrade of Agnes 2.0 Flash. Optimized for coding tasks, agent workflows, tool calls, multi-turn dialogue, reasoning, and image understanding. Positioned as a free-tier everyday development model rather than a maximum-compute flagship.
- **Provider / access:** Agnes AI, OpenAI-compatible Chat Completions (`POST https://apihub.agnes-ai.com/v1/chat/completions`), Responses API (`POST /v1/responses`), and Messages API (`POST /v1/messages`). Model name `agnes-2.5-flash`. API-compatible upgrade from deprecated `agnes-2.0-flash`.
- **Release / knowledge:** Generally available; knowledge cutoff not disclosed in fetched sources.
- **IDs:** `agnes-2.5-flash` (Agnes AI gateway `apihub.agnes-ai.com` / AIHubMix `https://aihubmix.com/v1`). No Free ID confirmed on OpenCode Zen.
- **Context window:** 512K tokens input; max output 65.5K tokens (per AIHubMix specifications page).
- **Modalities:** Text and image (URL) in; text out; thinking mode yes; tool calling yes; JSON mode not explicitly advertised; no image/audio/video generation.
- **Pricing (as of 2026-11-11):** Input $0.03 / 1M tokens, Output $0.15 / 1M tokens (AIHubMix). Agnes AI states Flash will remain free rather than a short launch promotion.
- **Architecture:** Parameter count and MoE density not disclosed ("Not Disclosed" on AIHubMix). Latency 3.1s, throughput 88.2 TPS per AIHubMix provider monitoring.

### Raw benchmarks found

All measured numbers below are Agnes AI-internal results published in a third-party hands-on review (We0, Jul 15 2026). They are company-reported, not independently reproduced leaderboard submissions — treat as directional evidence.

Agent / tool use:
- Terminal-Bench 2.1: **62.3%** (Agnes AI internal, vs Agnes-2.0-Flash 52.5%, Agnes-2.5-Pro 77.3%) <(We0 review, company-reported)>
- SWE Atlas — QnA: **36.5** (Agnes AI internal, vs Agnes-2.0-Flash 15.8%, Agnes-2.5-Pro 40.8%) <(We0 review, company-reported)>

Reasoning / knowledge:
- SWE-bench Verified: **75.6%** (Agnes AI internal, vs Agnes-2.0-Flash 72.4%, Agnes-2.5-Pro 82.7%) <(We0 review, company-reported)>
- SWE-bench Pro: **50.4%** (Agnes AI internal, vs Agnes-2.0-Flash 49.6%, Agnes-2.5-Pro 61.8%) <(We0 review, company-reported)>
- SWE-bench Multilingual: **69.1%** (Agnes AI internal, vs Agnes-2.0-Flash 67.3%, Agnes-2.5-Pro 78.7%) <(We0 review, company-reported)>

Coding:
- SWE-bench Verified: **75.6%** (see above)
- SWE-bench Pro: **50.4%** (see above)
- SWE-bench Multilingual: **69.1%** (see above)
- DeepSWE / Coding Index / other: no verified public score found

Long context:
- No long-context retrieval score reported at the 512K window; declared context only.
No verified public scores found for: GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, Omniscience Accuracy/Hallucination Rate, LiveCodeBench, SciCode, Vibe Code Bench, MRCR/RULER/GraphWalks, tau2-bench/tau3-bench, APEX, IFBench, BrowseComp, WebVoyager, OSWorld-Verified, AA-Briefcase-Lite, AutomationBench-AA, MMLongBench-Doc, AA-LCR.
### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Native tool calling, agent workflows, computer use, file search, memory tool, structured outputs, structured decision, code interpreter — comprehensive coverage; capped because all evidence is vendor-reported internal data with no independent leaderboard corroboration.
- **Reasoning: 68/100.** SWE-bench Verified 75.6% internal and Terminal-Bench 62.3% internal show usable reasoning; capped by absence of independent GPQA/HLE/CritPt verification and company-reported-only sourcing.
- **Context window: 92/100.** Declared 512K-token input context with 65.5K max output (AIHubMix); very wide window; capped because no public long-context retrieval measurement exists at the full window.
- **Multimodal: 70/100.** Image input via public URL with image understanding (screenshots, visual Q&A, document structuring); text output only; capped by no image/audio/video generation and no published vision benchmark scores.
- **Coding: 80/100.** Positioned and internally validated for coding (SWE-bench Verified 75.6%, SWE-bench Multilingual 69.1%, SWE Atlas QnA 36.5); optimized for code generation/debugging/refactoring; capped by weak SWE-bench Pro (50.4%) internal and no LiveCodeBench/SWE-Pro independent verification.
- **Cost efficiency: 98/100.** $0.03/$0.15 per 1M input/output tokens with a promised permanent free tier; near-zero cost at the price point. Not counted toward Overall.
- **Overall Score: 78/100.** Half-up mean of (82 + 68 + 92 + 70 + 80) / 5 = 78.4 → 78. Best-fit recommendation: a low-cost, wide-context coding and agent-workflow model for everyday development; verify on independent benchmarks before production reliance on reasoning-critical tasks.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-11
- Method: public internet research (Agnes AI official docs wiki, AIHubMix model specifications, We0.ai hands-on review); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Agnes 2.5 Flash — official docs](https://wiki.agnes-ai.com/en/docs/agnes-25-flash)
  - [Agnes 2.5 Flash — pricing & specs (AIHubMix)](https://aihubmix.com/model/agnes-2.5-flash)
  - [Agnes-2.5-Flash Review (We0)](https://we0.ai/articles/agnes-2-5-flash-review-a)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.

