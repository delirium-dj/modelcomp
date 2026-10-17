# Gemma 4 E4B — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemma-4-e4b`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B (effective 4B-class, Matryoshka-style)
- **Short description:** Google DeepMind's on-device-oriented Gemma 4 entry with ~4.5B effective parameters (8B total with embeddings) — the "E4B" successor to Gemma 3n E4B with ~10% relative translation improvement over its predecessor. BenchLM ranks it #169 of 889 (31.33) with 20 of 625 rows. Top use cases: on-device multimodal assistants and cheap hosted inference.
- **Provider / access:** Hugging Face (Gemma 4 collection, Apache 2.0); Google AI model card (ai.google.dev); hosted listings on pricepertoken and aggregators (llm-stats, BenchLM). Chat-style APIs via Google/hosting providers.
- **Release / knowledge:** April 2026 initial release (BenchLM dates its listing 2026-04-02; model card updated 2026-07-30); knowledge cutoff not published.
- **IDs:** HF `google/gemma-4-E4B` / `gemma-4-E4B-it`; "Gemma 4 E4B IT" on price-per-token listings. No dedicated OpenCode Zen Free ID verified.
- **Context window:** 128K (BenchLM concurs; llm-stats/BenchLM listings cite ~131K; the model card generation cites 128K).
- **Modalities:** text + image + audio input, text output (multimodal on-device positioning); tool calls/JSON mode not documented.
- **Pricing (as of 2026-10-11):** ~$0.020–$0.200 per 1M tokens depending on provider/variant; pricepertoken.com lists E4B IT at $0.200 per 1M input and $0.200 per 1M output. Apache 2.0 weights = free self-hosting/on-device.
- **Architecture:** ~8B total / ~4.5B effective parameters (Matryoshka-style effective sizing carried over from Gemma 3n); Apache 2.0; part of the 2.3B–31B Gemma 4 family.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **177** (AA, independent — normalized **0.0%**, floor)
- τ²-bench: **20.8%** (AA, independent — fills the gap; very weak)
- Terminal-Bench / Tau3 / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **58.6%** (Gemma 4 HF blog via benchlm.ai — fills the gap; low) — **conflicts with the unmapped technical-report rows the prior pass declined to attribute**; AA independent: **57.6%** (corroborates)
- MMLU-Pro: **69.4%** (HF blog) — **conflicts with the vendor-measured 85.2% "thinking enabled" reading the prior pass scored on**; the thinking-enabled figure appears to be a different configuration
- HLE: **3.8%** (AA — fills the gap; floor); Artificial Analysis Intelligence Index: **8.9** (AA — fills the index gap; low)
- MRCR v2: **25.4%** (HF card — fills the long-context gap; very weak); AA-LCR v1.1: **32.0%** (AA); CritPt: **0.6%** (AA — floor)
- AIME26: **77.5%** (prior pass, HF card); MMMLU: **83.4%** (prior pass)
- AA-Omniscience: **8.6% accuracy / 30.9% non-hallucination row / −19.7 index** (AA — very weak)
- AA-IFBench: **44.2%** (AA)
- BenchLM overall: **31.33, #169 of 889** (recomposed from the prior 33.2 #153/210)

Coding:

- LiveCodeBench v6: **52.0%** (HF model card via benchlm.ai — fills the LiveCodeBench gap; weak)
- AA Coding Index: **9.4%** (AA — new; very weak); AA-SciCode: **24.4%** (AA — fills the gap)
- SWE-bench Verified / SWE-Pro / Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 25.4% and AA-LCR 32.0% are the first measured long-context numbers (very weak); ~131K window

Multimodal:

- MMMU-Pro: **52.6%** (HF card) / **51.4%** (AA — corroborated) — first measured vision evidence, weak for the class

### Normalized scores (1–100)

- **Tool use: 38/100.** (Was 45 on the prior pass.) The measured rows are floor-class (τ²-bench 20.8%, GDPval 177 / 0.0% normalized) — the sub-floor becomes a measured deduction.
- **Reasoning: 50/100.** (Was 58 on the prior pass.) GPQA 57.6–58.6% (two sources) fills the gap at a low level; the MMLU-Pro conflict (85.2% thinking vs 69.4% HF blog), AA Index 8.9, HLE 3.8%, CritPt 0.6% and the −19.7 Omniscience index document the effective-4B ceiling — two bands down.
- **Context window: 58/100.** (Was 62 on the prior pass.) ~131K window (BenchLM concurs 128K) is entry-tier; the first measured retrieval numbers (MRCR 25.4%, AA-LCR 32.0%) are very weak.
- **Multimodal: 60/100.** Text + image + audio input with measured vision (MMMU-Pro 51.4–52.6%) — breadth stays credited at the band floor; no improvement to push higher.
- **Coding: 45/100.** LiveCodeBench v6 52.0% (HF card) fills the gap at a weak level, with AA Coding Index 9.4% and AA-SciCode 24.4% confirming — the score stays at the measured floor.
- **Cost efficiency: 92/100.** $0.20/1M flat hosted, free Apache 2.0 weights, and on-device capability make it cheap to run anywhere; short of top marks because per-provider pricing varies and throughput on small accelerators is undocumented.
- **Overall Score: 50.2/100.** (Was 54.0 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (38 + 50 + 58 + 60 + 45) / 5 = 251/5 = 50.2 — lowered on the 2026-10-11 second pass as the HF card + AA boards convert every prior gap into measured evidence at effective-4B levels. Best fit: on-device or ultra-cheap multimodal (including audio) assistants — not agentic, coding, or long-document work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai Gemma 4 E4B page citing the HF model card + Gemma 4 blog + AA boards, the prior 2026-10-05 pass on the technical report/llm-stats/pricepertoken; 2026-10-16 re-check: BenchLM 20-row refresh reproduces all rows identically — no new evidence, scores unchanged); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
