# GPT-6 Luna — findings by Mimo v2.6 Flash

- Source: OpenAI/GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's entry-level GPT-6 tier (2026-09-22), trained with GPT-6 Astra methods for high-volume, cost-sensitive tasks; replaces GPT-5.6 Luna at ~half the token price with level intelligence. Not an alias of GPT-5.6 Luna.
- **Provider / access:** OpenAI API (`gpt-6-luna` — Chat Completions), ChatGPT Free/Go desktop, ChatGPT Work/Codex; not in Chat as of launch.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff 2026-05-18 (OpenAI model docs).
- **IDs:** `openai/gpt-6-luna`; no OpenCode Zen Free ID confirmed in gathered sources — paid API.
- **Context window:** 1,050,000 total (≈922K input headroom + 128K max output) — OpenAI API docs via llm-stats/HokAI.
- **Modalities:** text/image in; text out; reasoning efforts none/low/medium/high/xhigh/max; tool calls; no native audio/video.
- **Pricing (as of 2026-09-24):** $0.10 / $0.50 per 1M in/out; cache read $0.01 (90% off); cache write $0.125 — OpenAI/AA. Paid (cheap tier).
- **Architecture:** proprietary; params not disclosed.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- AutomationBench: **20.7%** at max effort (OpenAI launch chart data via MetricNexus/Digital Applied)
- Agents' Last Exam: **50.9%** max (OpenAI launch)
- OSWorld 2.0 offline: **52.7%** max (OpenAI launch; ties GPT-5.6 Luna)
- GDPval-AA v2.1: **no absolute value** — AA reports ~75 Elo regression vs GPT-5.6 Luna at max (Artificial Analysis, 2026-09-22)
- Tau3 / Toolathon / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **37** max / 34 xhigh / 29 medium / 18 non-reasoning (Artificial Analysis, 2026-09-24 release page)
- HLE: **38.5%** (LMSpeed citing BenchLM-class coverage, 2026-09-23)
- AA-Omniscience: hallucination rate **77%** at max (down from 93% GPT-5.6 Luna); accuracy ~44% (AA)
- HealthBench: **50.0%** raw / 54.5% length-adjusted; HealthBench Hard 31.4% (BenchLM)
- GPQA Diamond: **no verified public score found** for Luna specifically
- Factual error rate (OpenAI internal): **7.6%** max (down from 12.0% GPT-5.6 Luna)

Coding:

- DeepSWE v1.1: **66.6%** max (OpenAI launch — only absolute coding score OpenAI published for Luna)
- FrontierCode 1.1: **42.4%** max (OpenAI launch chart)
- AA Coding Agent Index: **41** max (down 2 pts from GPT-5.6 Luna's 43 — AA, Codex harness)
- SWE-Atlas-QnA: **44%** (AA, down from 49%)
- SciCode: **54.6%** (LMSpeed/BenchLM, 2026-09-23)
- SWE-bench Verified: **no verified public score found**

Long context:

- 1.05M window documented; MRCR/RULER retrieval quality: **no verified public score found**

Multimodal:

- Text/image in; AA-MMMU-Pro: **75.5%** (LMSpeed citing AA, #32/71 peer set)
- Video/audio: not supported

### Normalized scores (1–100)

- **Tool use: 58/100.** AutomationBench 20.7% and Agents' Last Exam 50.9% are entry-tier for GPT-6; OSWorld 52.7% helps but GDPval regressed — mid-band per methodology.
- **Reasoning: 68/100.** AA Intelligence Index 37 (max) holds level with GPT-5.6 Luna but sits well below frontier (50+); HLE 38.5% and improving factuality keep it in the high-60s.
- **Context window: 98/100.** 1.05M window clears the ≥1M tier with 128K out; not 100 without published retrieval-at-window rates.
- **Multimodal: 70/100.** Image input with AA-MMMU-Pro 75.5%; capped by text-only output and no video/audio.
- **Coding: 72/100.** DeepSWE 66.6% and FrontierCode 42.4% are respectable; AA Coding Index 41 (regressed vs predecessor) and missing SWE-Verified cap it low-70s.
- **Cost efficiency: 96/100.** $0.10/$0.50 with $0.01 cache reads — near the ~$0.10/$0.20 (97–99) anchor; slightly lower on weaker output pricing.
- **Overall Score: 73.2/100.** Mean of Tool 58 + Reasoning 68 + Context 98 + Multimodal 70 + Coding 72 = 366/5 = 73.2 — best-fit for high-volume cheap agents and extraction; step up to GPT-6 Sol/Astra for frontier coding/reasoning.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-24
- Method: public internet research (OpenAI launch post, AA GPT-6 Sol/Luna article + release page, MetricNexus, HokAI, emergent.sh, LMSpeed/BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
