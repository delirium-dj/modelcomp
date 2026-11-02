# GPT-6.1 Sol — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the draft was entirely vendor (DevDay announcement) and explicitly **punted on the hard-reasoning ceiling** — "no GPQA Diamond / HLE / ARC-AGI scores published" — holding Reasoning at 87 for want of data. The independent pass **closes every one of those gaps and the model is elite**: **AA Intelligence Index 55 (#7 of 58, v5.0)**, **ARC-AGI-2 94.2% / ARC-AGI-3 52.7% (ARC Prize)**, **Epoch AI FrontierMath v2 Tier-4 100.0% / Tiers 1–3 93.7%**, and **AA-HLE 52.9**. That lifts **Reasoning 87 → 92**. It also supplies what the draft lacked elsewhere: **AA-MMMU-Pro 86.0** (→ Multimodal 85 → 88), **AA-LCR 83.0** (→ Context 93 → 94), and independent agentic breadth — **AA Terminal-Bench 4.0 56.1**, **AA AutomationBench 64.9**, GDPval-AA 1608 (→ Tool 89 → 90). The value pitch is **independently confirmed**: AA measures **$1.27 per Index task (#14 of 57)** with concise 64M-token verbosity, exactly the "near-Astra at a fraction of the cost" claim. Honesty is only moderate (**AA-Omniscience hallucination 51.9%**, accuracy 61.8%) — far better than the 90%+ Gemini Pro / GPT-5.6 Sol showed — so it is not a cap. **Critical quarantine:** BenchLM's "ARC-AGI-3 Provider Adapter 96.18%" is an **adapter** measurement, not the model — excluded (the model's real ARC-AGI-3 is 52.7). Coding holds at 91 (FrontierCode 2.0 39.0 is good-not-elite; no independent SWE-bench). **Overall 89 → 91.**

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier workhorse, upgraded from GPT-6 Sol seven days after that model's launch. The pitch is "near-Astra intelligence for a fifth of the price": on DeepSWE v1.1 it matches GPT-6 Astra's peak accuracy (~74.8%) at ~$1.50/task vs Astra's ~$7.70, and on OSWorld 2.0 computer use it lands within 2.1 pts of Astra at ~1/7 the cost per task. Attacks the justification for paying flagship rates for agentic coding, computer use and document work.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`), ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu). NOT in general ChatGPT Chat. A GPT-6.1 Sol **Ultrafast** tier (up to 8x faster token generation) rolls out to Codex.
- **Release / knowledge:** Announced 2026-09-29 at DevDay 2026; knowledge cutoff not published.
- **IDs:** `openai/gpt-6.1-sol`.
- **Context window:** 1,050,000 tokens (same as GPT-6 Astra / GPT-6 Sol). Cached input slashed to $0.10/1M (95% off standard) — persistent dense context (a 200k-token repo re-read every agent step drops from $0.40 to $0.02/step). Max output not separately published.
- **Modalities:** text + image in → text out; reasoning yes (tunable low/medium/high/max effort); tool calls yes (function/API tools, computer use over screenshots + OCR overlays + DOM trees, web search).
- **Pricing (as of 2026-10-20):** $2.00 / 1M input, $0.10 / 1M cached input, $10.00 / 1M output — mid-tier band, identical standard rates to GPT-6 Sol but with 50%-cheaper caching.
- **Architecture:** proprietary (closed weights); frontier-efficient distillation of Astra-class capability into the Sol cost band.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (offline, partial reward — desktop GUI automation): **71.4%** at max effort (within 2.1 pts of GPT-6 Astra 73.5%; +7.0 over GPT-6 Sol 64.4%; ahead of Claude Opus 5 medium 60.3%) at ~$1.30/task vs Astra's ~$9.30
- AutomationBench 1.0.6 (47 real SaaS tools): **35.4%** medium → ~**36.0%** higher (+2.2 over Claude Opus 5.5 medium; +4.8 over GPT-6 Sol medium; below Claude Sonnet 5.5's 44.7%) at ~$0.30/task vs Opus 5.5's $0.92
- Broken Tool Disclosure failure rate: **2.1%** (vs GPT-6 Sol 4.9%, matching Astra's ~1.5%); zero jailbreak/guardrail bypass; improved negative-constraint instruction following

Reasoning / knowledge:

- "Near-Astra intelligence" per OpenAI; factual-error rate at low reasoning effort dropped from 11.4% (GPT-6 Sol) to **7.7%** (a 32% hallucination reduction), and stays within 1.9 pts of Astra across all reasoning tiers at <1/5 the compute
- **Independent (added 2026-11-02):** **AA Intelligence Index 55 (#7 of 58, v5.0)**; **ARC-AGI-1 96.5 / ARC-AGI-2 94.2 / ARC-AGI-3 52.7 (ARC Prize)**; **Epoch AI FrontierMath v2 Tiers 1–3 93.7 / Tier 4 100.0**; **AA-HLE 52.9**; **AA-Omniscience hallucination 51.9%** (accuracy 61.8). The draft's "no GPQA/HLE/ARC published" gap is **closed** — GPQA itself still has no row under this id, but HLE/ARC/FrontierMath/Index comprehensively establish the ceiling. **Excluded:** the "ARC-AGI-3 Provider Adapter 96.18%" cell (an adapter measurement, not the model).

Coding:

- DeepSWE v1.1 (autonomous SWE in full repos): **75.2%** at high effort — matches GPT-6 Astra 74.8%, ahead of Claude Sonnet 5.5 71.0%, Claude Fable 5 (xhigh) 69.9% and GPT-6 Sol (max) 68.8%; +6.4 pts over its predecessor at lower effort/cost (~$1.50/task vs Astra ~$7.70)
- Terminal-Bench Science 0.1 (bash scientific workflows): **>2x GPT-6 Sol** at max effort (Astra reaches the 68.1% ceiling); ~$5.47/task vs Opus 5.5 $23.21 and Astra $23.80
- No SWE-bench Verified figure published in accessible sources (DeepSWE is the headline coding metric)

Multimodal:

- GDP.pdf (Surge AI complex professional-document extraction): **32.0%** — beats Claude Opus 5.5 w/fallbacks 28.8% and GPT-6 Sol 28.0%, approaching GPT-6 Astra's SOTA 32.2% at ~1/5 the cost/task ($0.38 vs $1.95)
- Computer-use vision (full-screen frames, OCR overlays, DOM trees) validated via OSWorld 2.0 71.4%; no MMMU-Pro / Chartography published

Long context:

- 1,050,000-token window with $0.10/1M cached input (near-free persistent context); no MRCR / needle-in-a-haystack retrieval score published.

> Provenance: all figures from OpenAI's "Introducing GPT-6.1 Sol" DevDay announcement (2026-09-29) and official scatter plot, translated by Vellum and cross-referenced with The New Stack; cost-per-task values are OpenAI-reported. OSWorld 2.0 uses the v2026.08.08 offline release set.

> **Independent cross-check (2026-11-02, AA + BenchLM):** AA confirms the model **live** (not deprecated): **Index 55 #7/58**, **$1.27/task #14/57**, verbosity **64M #28/57** (concise), Speed **79.3 #104/196** (slower than the 81 median). Independent agentic/coding/vision/LC cells: **AA Terminal-Bench 4.0 56.1**, **AA AutomationBench 64.9**, **AA GDPval-AA 1608**, **AA Briefcase 1555**, **FrontierCode 2.0 39.0 (Cognition)**, **AA-SciCode 54.2**, **AA-MMMU-Pro 86.0**, **ExtractBench 93.77 / ParseBench 69.70 (LlamaIndex)**, **AA-LCR 83.0 / MLCR-AA 38.3**. BenchLM aggregate **85.27, #4/1004** (44 of 724). Vendor rows (DeepSWE 71.9, OSWorld 71.4, AutomationBench 36.1, GDP.pdf 32.0, Hermes) retained alongside their neutral counterparts; none averaged.

### Normalized scores (1–100)

- **Tool use: 90/100.** *(89 → 90 — independent breadth.)* OSWorld 2.0 71.4% (vendor, near-Astra) and AutomationBench are now corroborated by neutral instruments: **AA Terminal-Bench 4.0 56.1**, **AA AutomationBench 64.9**, **AA GDPval-AA 1608 / Briefcase 1555**, Hermes Bench 73.9. Capped because AA TB 4.0 56.1 is solid-not-elite and Astra still leads raw computer use.
- **Reasoning: 92/100.** *(87 → 92 — the draft's data gap, now closed and the result is elite.)* The draft held reasoning at 87 purely because no hard-reasoning benchmark was published; independent data supplies four of them: **AA Index 55 (#7/58)**, **ARC-AGI-2 94.2 / ARC-AGI-3 52.7 (ARC Prize)**, **Epoch FrontierMath v2 Tier-4 100.0 / T1–3 93.7**, **AA-HLE 52.9**. That places it genuinely near the Astra/Opus reasoning tier, not below it. Held at 92 (not higher) by moderate honesty (**hallucination 51.9%**, accuracy 61.8%) and no GPQA row under this id.
- **Context window: 94/100.** *(93 → 94 — the "no retrieval published" gap is closed.)* A 1,050,000-token window with near-free $0.10/1M cached input, now independently supported by **AA-LCR 83.0** (strong long-context reasoning; MLCR-AA 38.3 medical-LC is the weaker sub-signal).
- **Multimodal: 88/100.** *(85 → 88 — independent MMMU-Pro closes the draft's cap.)* **AA-MMMU-Pro 86.0** confirms broad visual reasoning (the draft had none), with GDP.pdf 32.0 / AA 31.0 for document extraction and validated computer-use vision. Capped by text+image input only (no audio/video) and **ExtractBench Pro 12.0%** on the hardest dense-document tier.
- **Coding: 91/100.** DeepSWE v1.1 75.2% matches GPT-6 Astra's peak and beats Sonnet 5.5 / Fable 5 — frontier-matching autonomous SWE at ~1/5 the cost; capped only by the missing SWE-bench Verified figure and Astra's higher Terminal-Bench-Science ceiling (68.1%).
- **Cost efficiency: 95/100.** The defining strength — Astra-level DeepSWE/OSWorld/GDP.pdf at ~20% of the task cost, $2/$10 standard pricing and $0.10 cached input; near-best-in-class cost-per-solved-task (only ultra-budget open models are cheaper per raw token, but none match this capability).
- **Overall Score: 91/100.** *(89 → 91.)* Mean of Tool 90 + Reasoning 92 + Context 94 + Multimodal 88 + Coding 91 = 455 / 5 = 91.0 → 91. The lift is a **provenance effect, not a change in the model**: independent AA/ARC/Epoch/LlamaIndex data closes the hard-reasoning, vision and long-context gaps the vendor table left open, confirming the "near-Astra" pitch is real. AA's **$1.27/task (#14/57)** independently verifies the value story. Best fit: high-volume autonomous coding, computer-use agents and enterprise document pipelines needing Astra-adjacent quality at a fraction of flagship cost; raw flagship ceilings (Astra) still edge it on the very hardest tasks, and it is slower than average (Speed 79.3, not a scored dim).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20, re-researched 2026-11-02
- Method: public internet research (OpenAI's "Introducing GPT-6.1 Sol" DevDay 2026 announcement via Vellum's benchmark breakdown, cross-referenced with The New Stack; specs corroborated by OpenRouter, DataCamp and llm-stats); the 2026-11-02 pass adds **Artificial Analysis** (`gpt-6-1-sol`, Max — **live**, Index 55 #7/58, $1.27/task #14/57) and the **BenchLM.ai** aggregator (updated 2026-10-29) carrying **ARC Prize**, **Epoch AI**, **Cognition (FrontierCode 2.0)**, **LlamaIndex ExtractBench/ParseBench**, and AA per-evaluation cells. Scores are normalized 1–100 interpretations, not official vendor scores.
- **Conflict handling (explicit, not averaged):** (1) *Reasoning gaps* — draft "none published" vs independent **ARC-AGI-2 94.2 / ARC-AGI-3 52.7 / FrontierMath v2 T4 100.0 / AA-HLE 52.9 / AA Index 55** → gaps **closed**, Reasoning 87→92 (the largest single move in the batch, purely provenance). (2) *Multimodal* — draft "no MMMU-Pro" vs **AA-MMMU-Pro 86.0** → 85→88. (3) *Context* — draft "no retrieval" vs **AA-LCR 83.0** → 93→94. (4) *Agentic* — vendor AutomationBench 36.1 vs **AA AutomationBench 64.9** → different instruments, both recorded; AA's v5.0 cell informs the dim. (5) *DeepSWE* — draft 75.2 (high effort) vs BenchLM 71.9 (vendor) → effort/variant difference, both recorded, coding held. (6) *Value* — vendor cost/task vs AA **$1.27 #14/57** → independent confirms, Cost 95 stands.
- **Guards applied:** (a) **adapter-cell exclusion** — the "ARC-AGI-3 Provider Adapter 96.18%" row is an adapter, not the model, and is dropped (real ARC-AGI-3 = 52.7); (b) **harness discipline** — Terminal-Bench-Science 0.1 vs Terminal-Bench 4.0 separated; AA AutomationBench ≠ vendor AutomationBench; (c) **sibling quarantine** — no GPT-6 Astra / GPT-6 Sol / Terra / Luna figure used as 6.1 Sol evidence; (d) **modality verified** — AA confirms text+image only; (e) **Cost efficiency and Speed excluded from the Overall mean** (mean of the five quality dims only); (f) never read peer raters' findings files (zero-influence). Remaining gap: an independent GPQA-Diamond and SWE-bench Verified row under this id (AA Index/ARC/HLE/FrontierMath already establish the ceiling).
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
