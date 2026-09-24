# Gemini 1.5 Pro — findings by Mimo v2.6 Flash

- Source: Google (`google/gemini-1.5-pro`, AI Studio / Vertex AI)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (legacy 1.5-generation Pro; superseded by Gemini 2.x/3.x lines — a **retired/legacy entry**, not a current flagship)
- **Short description:** Google DeepMind's February-2024 multimodal MoE model that made million-token context mainstream — best known for near-perfect long-context retrieval across text, video and audio rather than for frontier reasoning. GA'd May 2024, updated Sep 2024, now legacy.
- **Provider / access:** Google AI Studio (Gemini API) and Google Vertex AI — Chat Completions-style `generateContent` API (`gemini-1.5-pro`); OpenAI-compatible routing available via gateways. Third-party gateways show it **deactivated since 2025-09-20** (LLM Gateway). **No OpenCode Zen Free ID** (`noFreeId: true`); meta notes a free tier via AI Studio.
- **Release / knowledge:** released 2024-02-15 (limited preview), GA 2024-05-23, price-cut update 2024-09-24/10-01; knowledge cutoff **August 2024** (Artificial Analysis).
- **IDs:** `gemini-1.5-pro` (AI Studio) / `gemini-1.5-pro-002` (Sep-2024 revision); no Free ID on Zen.
- **Context window:** **2,097,152 tokens (2M)** on Vertex/long-context tiers (Future AGI via litellm: 2,097,152); production default ran 1M in 2024 with 128K standard entry; **max output only 8,192 tokens** (Future AGI / AI Flash Report) — a hard practical cap.
- **Modalities:** text, image, **audio**, **video** and PDF in; text out; **not a reasoning model** (Artificial Analysis: "Reasoning: No"); function calling + parallel tool calls + structured/JSON outputs confirmed (Future AGI, LLM Gateway); no web-search/code-execution tool scores verified.
- **Pricing (as of 2026-09-24):** **$1.25 / 1M input (≤128K prompt), $2.50 / 1M input (>128K), $5.00 / 1M output**, cache read $0.312/1M (Google Developers blog 2024-10-01 cut: −64% input / −52% output / −64% cached vs launch pricing). Free tier available in AI Studio under rate limits. Legacy — pricing may no longer be purchasable (gateways deactivated 2025-09-20).
- **Architecture:** proprietary **Mixture-of-Experts** multimodal transformer (Google tech report); parameter count not disclosed; no open weights.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = `no verified public score found`.

Agent / tool use:

- Terminal-Bench 2.0 / 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Tool support itself: function calling + parallel tool calls + structured outputs **confirmed supported** (Future AGI capability flags, LLM Gateway "Tools") — support ≠ measured accuracy

Reasoning / knowledge:

- GPQA (main): **46.2%** (Google Gemini 1.5 tech report, May-2024 revision; 41.5% on the Feb-2024 version)
- GPQA Diamond: **37.1%** (AI Flash Report, verified 2026-07-20) — different suite/variant from Google's "GPQA main" figure, both listed
- HLE: **3.9%** (AI Flash Report) / **0.0%** (Artificial Analysis-sourced via CloudPrice, rank #404)
- MMLU: **85.9%** (Google, May-2024 revision; 81.9% Feb-2024) · MMLU-Pro: **65.7%** (AI Flash Report) / 0.8 ≈ 80% (CloudPrice AA-sourced, #187) — divergent, harness-dependent
- MATH: **67.7%** (Google, May-2024) · MATH-500: **67.3%** (AI Flash Report) / 0.9 (#85, CloudPrice AA-sourced)
- AIME 2025: **8.0%** (AI Flash Report) / 0.2 (#100, CloudPrice AA-sourced)
- Big-Bench Hard: **89.2%** (Google, May-2024) · WMT23: **75.3%**
- Artificial Analysis Intelligence Index: **10** (estimated, current index — Gemini 1.5 Pro Sep-'24 page); CloudPrice lists **9.9, rank #355**
- LCR / MLCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro / DeepSWE: **no verified public score found**
- LiveCodeBench: **24.4%** (AI Flash Report) / 0.3 ≈ 30%, #216 (CloudPrice AA-sourced)
- SciCode: **27.4%** (AI Flash Report) / 0.3, #306 (CloudPrice AA-sourced)
- HumanEval: **83.4%** (AI Flash Report) · Natural2Code: **82.6%** (Google, May-2024)
- AA Coding Index: **23.6, rank #135** (CloudPrice AA-sourced)
- Terminal-Bench / Vibe Code Bench: **no verified public score found**

Long context:

- Needle-in-a-haystack: **>99.7% recall up to 1M tokens** across text, video and audio; sustained through **10M tokens** in research testing (Google Gemini 1.5 tech report, arXiv:2403.05530)
- MRCR: **~80% average string-similarity score at 1M tokens**, overtaking GPT-4 Turbo from ~8K onward (Google tech report, Fig. 11)
- 200K cross-model recall: **100%** vs Claude 2.1's 98% (Google tech report)

### Normalized scores (1–100)

- **Tool use: 42/100.** Function calling, parallel tool calls and JSON output are verified supported, but **every** agentic benchmark row (Terminal-Bench, Tau, GDPval, Claw-Eval, Toolathon/MCP) is `no verified public score found`, so there is no measured tool accuracy to reward — capability only, capped low.
- **Reasoning: 50/100.** MMLU 85.9% and BBH 89.2% show solid 2024-era knowledge/reasoning, but the methodology's anchors are weak here: GPQA 37–46%, HLE 0–4%, AA Intelligence Index 10 (#355) — all under even the 55–65 mid band, which caps it at 50.
- **Context window: 96/100.** 2M documented (2,097,152) with **>99.7% needle recall at 1M** — meeting the ≥98%-retrieval-at-512K+ condition for the top of the ≥1M tier; held back from 100 only by realistic MRCR performance (~80% at 1M) and the 8,192-token max-output cap.
- **Multimodal: 95/100.** Text + image + **audio + video** + PDF input (Google tech report, AI Flash Report) is the full input stack, hitting the 90–100 band; not 100 because output is text-only and there is no non-text output.
- **Coding: 50/100.** HumanEval 83.4% / Natural2Code 82.6% are respectable but old-generation; LiveCodeBench 24–30%, SciCode 27% and AA Coding Index 23.6 (#135) sit well below the 65–75 mid band, and SWE-bench is unverified — that floors it near 50.
- **Cost efficiency: 86/100.** $1.25 / $5.00 (≤128K) matches the methodology's `~$1.25/$4.25 ≈ 88` anchor, trimmed slightly for the $2.50 >128K input tier; an AI Studio free tier exists but the model is legacy and gateway-deactivated since 2025-09-20, so availability risk keeps it out of the 90s.
- **Overall Score: 67/100.** (42 + 50 + 96 + 95 + 50) / 5 = 66.6 → **67** — best fit: a cheap, retired long-context multimodal workhorse for 1–2M-token document/video/audio ingestion, not for reasoning, agentic or modern coding work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-24
- Method: public internet research (Google Gemini 1.5 tech report arXiv:2403.05530, Google Developers pricing blog 2024-09-24, AI Flash Report model page, Artificial Analysis model/comparison pages, CloudPrice AA-sourced benchmark API, Future AGI litellm spec, LLM Gateway provider table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
