# LongCat 2.0 — findings by DeepSeek 4.1 Flash

- Source: Meituan / LongCat-2.0 (`meituan/longcat-2.0`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed, open-weights 1.6T-total / ~48B-active sparse MoE for coding, repository-level edits, long-horizon problem solving and agentic workflows; the training run and large-scale deployment are built on AI-ASIC superpods. Marks the start of the LongCat 2.x line — 2.5 Preview is the multimodal successor.
- **Provider / access:** Open weights on Hugging Face (`meituan-longcat/LongCat-2.0`) and ModelScope, self-hostable via Transformers / vLLM / SGLang; hosted via OpenRouter (`meituan/longcat-2.0`, OpenAI-compatible Chat Completions) and the first-party LongCat API Platform (OpenAI- and Anthropic-compatible). **No OpenCode Zen Free ID.**
- **Release / knowledge:** Weights announced late June 2026 and pushed live under MIT in early July 2026; the launch benchmark chart is dated 2026-06-30 and OpenRouter lists the model from 2026-07-20. Knowledge cutoff not disclosed.
- **IDs:** `meituan/longcat-2.0` (OpenRouter), `longcat-2.0` (LongCat API Platform); HF repo `meituan-longcat/LongCat-2.0`. Distinct from `longcat-2.5-preview`.
- **Context window:** 1,048,756 tokens in (OpenRouter: "1.0M"). Completion cap reported as 262,144 tokens on OpenRouter and 128,000 on LLM Reference — treat 128K–256K as the output range and 1M as the confirmed input window.
- **Modalities:** text in / text out; thinking mode toggleable (`enable_thinking`), tool calling (`tools` / `tool_choice`) and prompt caching supported; `response_format` not enforced (no JSON enforcement).
- **Pricing (as of 2026-10-01):** OpenRouter **$0.30 / $1.20 per 1M** (cache read $0.006/M, listed 60% off); first-party LongCat API Platform **$0.75 / $2.95** (cache read $0.015). No free tier, no Zen Free ID.
- **Architecture:** sparse MoE, **1.6T total parameters / ~48B activated per token** (~3% active), MIT licence, LongCat Sparse Attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (LongCat launch "Code Agent" chart, observed 2026-06-30; via LLM Reference)
- BrowseComp: **79.9%** (LongCat launch "Search Agent" chart, observed 2026-06-30)
- Artificial Analysis Agentic Index: **14.0**; GDPval-AA: **17.8%** (Artificial Analysis, via OpenRouter)
- Tau3-Banking / OSWorld / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **78.0%** (Artificial Analysis, via OpenRouter)
- HLE: **33.7%** (Artificial Analysis, via OpenRouter)
- AA-LCR: **65.0%**; CritPt: **2.6%** (Artificial Analysis, via OpenRouter)
- Artificial Analysis Intelligence Index: **19.1**; AA-Omniscience Accuracy **29.6%** / Non-Hallucination Rate **24.6%** (via OpenRouter)

Coding:

- SWE-bench Pro: **59.5%** — rank **#13 of 46** on LLM Reference (LongCat launch chart, observed 2026-06-30)
- SWE-bench Multilingual: **77.3%** (LongCat launch chart, observed 2026-06-30)
- SciCode: **36.3%**; Artificial Analysis Coding Index: **45.3** (via OpenRouter)
- LiveCodeBench / DeepSWE / SWE-Atlas: **no verified public score found**

Long context:

- Native 1M-token input window is vendor/aggregator documented; AA-LCR 65.0% is the only long-context figure found (a reasoning composite, not retrieval accuracy). No MRCR/RULER/GraphWalks retrieval number: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 64/100.** Terminal-Bench 2.1 70.8% sits above the methodology's mid band (45–60%) and BrowseComp 79.9% is strong, but the AA Agentic Index (14.0) and GDPval-AA (17.8%) are low and there is no Tau3/OSWorld/Claw-Eval number, so it stays mid-tier.
- **Reasoning: 68/100.** GPQA Diamond 78.0% is near the top of the 60–80% mid band and AA-LCR 65.0% is high, but HLE 33.7% is under the 40% frontier mark and the Intelligence Index (19.1) and CritPt (2.6%) are weak — capped below the frontier band.
- **Context window: 95/100.** Native 1M-token input window (≥1M band = 95–100). Held at 95, not 100, because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 15/100.** Text-in / text-out only; no image, audio or video input documented.
- **Coding: 66/100.** SWE-bench Pro 59.5% (#13/46) and SWE-bench Multilingual 77.3% are solid mid-tier, but SciCode 36.3% is under the 40% mark and the AA Coding Index (45.3) is far below the 70+ frontier reference — capped at mid.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M (OpenRouter, cache read $0.006) is budget pricing for a 1.6T MoE; the first-party route is higher at $0.75/$2.95.
- **Overall Score: 62/100.** (64 + 68 + 95 + 15 + 66) / 5 = 61.6 → 62. Best fit: self-hosted or budget-API coding/agentic model where the 1M window matters and text-only output is acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page incl. its Artificial Analysis benchmark table, LLM Reference model page, Hugging Face model card, explainx / eyestech launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
