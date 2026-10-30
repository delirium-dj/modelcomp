# GPT-6.1 Terra — findings by Qwen 3.8 Flash

- Source: OpenAI **GPT-6.1 Terra** (id `openai/gpt-6-1-terra`), anchored against **Artificial Analysis** (Intelligence Index v5.0 = 51 / v4.3.2 = 48; Terminal-Bench 4.0), OpenRouter listing, and independent launch coverage (kingy.ai, Google/decision-score reports)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note:** `gpt-6.1-terra` carries a **scaffolded `meta.json`** (generic "128K / Text in-out / Standard pricing") that is **contradicted by first-party evidence** — OpenAI launched a **real** GPT-6.1 Terra (the 6.1-generation value tier) with a **~1.05M-token** window and vision. The scaffold is **overridden** with researched specs; the model is scored, not excluded. Kept distinct from `gpt-5.6-terra` (its predecessor) and `gpt-6.1-sol` (its 6.1 sibling).

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's **midrange value flagship of the 6.1 generation** — a fast, cheap, reasoning-optional model that "marks a substantial improvement over GPT-5.6 Terra for software engineering," trading a few points of peak intelligence for roughly **half the price of GPT-6.1 Sol** and ~**90% below GPT-6 Astra**, and completing agentic tasks **~3× faster**.
- **Provider / access:** OpenAI first-party API + ChatGPT; confirmed on **OpenRouter** (`openai/gpt-6-1-terra`). Reasoning can be turned **off** (effort ladder none→max).
- **Release / knowledge:** shipped in the **GPT-6.1 wave (late 2026)**; knowledge cutoff not separately published.
- **IDs:** `openai/gpt-6-1-terra`.
- **Context window:** **~1,050,000 tokens** (OpenRouter) — the scaffold's "128K" is **wrong** and overridden.
- **Modalities:** **text + image in** (vision; MMMU-Pro reported), text out.
- **Pricing (as of 2026-10-30):** **$1.00 / $5.00 per 1M** input/output (OpenRouter) — half of GPT-6.1 Sol and GPT-5.6 Terra; ~90% below GPT-6 Astra with a ~$0.7-or-under per-task cost band at the Sol line.
- **Architecture:** undisclosed 6.1-generation OpenAI model; positioned as the affordable/agentic lane.

### Raw benchmarks found

> **Provenance:** AA is primary; index-version stated. OpenAI's effort-level claims are directional (vendor-framed).

- **AA Intelligence Index:** **51 (v5.0, Max)** / **48 (v4.3.2)** — below Sonnet 5.5 (56) and the 6.1-Sol/Astra top, but **+6 points over GPT-5.6 Terra** at max effort.
- **Terminal-Bench 4.0 (agentic coding):** **55.6% (Max)** — vs 56.1% for GPT-6.1 Sol and **35.4%** for GPT-5.6 Terra (a large jump).
- **MMMU-Pro (visual reasoning):** outperforms GPT-5.6 Terra **at every reasoning setting**, "nearly matching" higher-tier scores (OpenAI).
- OpenAI: at **medium** effort Terra scores **+15 points over GPT-5.6 Terra at ~⅓ the cost**, and "performs on par with" the premium line on several agentic tasks.
- Third-party: BenchLM record **58.3** (overall decision score 75.9/100); "3× faster", "10× cheaper" framing vs Astra in independent coverage.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 4.0 55.6% and 3× faster agentic task completion make it a strong, economical coding-agent; a clear band below the 65–67% frontier agents (Kimi 67%, Sol 56.1%).
- **Reasoning: 76/100.** AA 48 (v4.3.2) / 51 (v5.0) sits mid-tier — well above class median, but genuinely below Sonnet 5.5 (56) and the 6.1-Sol/Astra leaders; this is a value model, not a peak-reasoning one.
- **Context window: 90/100.** **~1.05M-token** window is top-tier span; docked only for no published single-window retrieval absolute and the scaffold-vs-first-party spec conflict.
- **Multimodal: 66/100.** **Text + image** input (MMMU-Pro competitive) with text output only; no audio/video input or generation found — a competent vision lane, not multimodal-frontier.
- **Coding: 79/100.** The headline upgrade: +6 index / +15 effort-adjusted points over GPT-5.6 Terra and TB 55.6% make it one of the best price/performance coders; held below the ~88+ frontier coders by its lower absolute index.
- **Cost efficiency: 92/100.** The standout, and its reason to exist: **$1/$5** (half of Sol, ~90% under Astra) with 3× speed — the value champion of the field.
- **Overall Score: 77.8/100.** Half-up mean of the five quality dims (78+76+90+66+79)/5 = 77.8 (Cost excluded, though it is the model's core appeal). Best fit: high-volume agentic coding and vision-capable assistants where near-Sol quality at half the price and triple the speed wins. **Independence note:** I score this **below the queue aggregate (83.8)** because the AA 48–51 measurement does not support the very top band once Cost is (correctly) excluded from Overall.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-30
- Method: public internet research — OpenAI launch framing (substantial SWE gain over GPT-5.6 Terra; +15 pts / ⅓ cost at medium effort; MMMU-Pro per-setting wins), **Artificial Analysis** (**Index 51 on v5.0 / 48 on v4.3.2**; Terminal-Bench 4.0 55.6% vs 56.1% Sol / 35.4% 5.6-Terra; +6 over 5.6-Terra), **OpenRouter** (1,050,000 ctx; $1/$5), and independent coverage (kingy.ai index/pricing table). The scaffolded `meta.json` (128K/text/Standard) is **overridden** with first-party specs. Index-version drift is cited per source; vendor speed/cost claims are flagged as directional. Scores are normalized 1–100 interpretations, not official vendor scores. Kept distinct from `gpt-5.6-terra` and `gpt-6.1-sol`.
- Revisit trigger: AA exposing GPT-6.1 Terra per-suite sub-scores (GPQA/HLE/SWE-bench Verified), an official OpenAI model card with context/output limits and knowledge cutoff, or reconciliation of the v5.0-51 vs v4.3-48 index.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
