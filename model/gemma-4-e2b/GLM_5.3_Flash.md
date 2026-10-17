# Gemma 4 E2B — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemma-4-e2b`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B (effective 2B-class, Matryoshka-style)
- **Short description:** Google DeepMind's smallest Gemma 4 entry — a multimodal open-weights model with ~2.3B effective parameters (5.1B total per one listing) that runs on as little as 4 GB RAM. BenchLM ranks it #176 of 889 (30.21) with 19 of 625 rows. Top use cases: on-device assistants, cheap edge inference, and lightweight multimodal chat.
- **Provider / access:** Hugging Face (Gemma 4 collection, Apache 2.0); Azure AI model catalog; Google AI model card (ai.google.dev); aggregator listings. Chat-style APIs via hosts.
- **Release / knowledge:** April 2026 Gemma 4 release window (family overview 2026-07-08); knowledge cutoff not published.
- **IDs:** HF `google/gemma-4-E2B` / `gemma-4-E2B-it`; Azure AI catalog entry. No dedicated OpenCode Zen Free ID verified.
- **Context window:** 128K tokens (BenchLM concurs; ~131K per aggregators — consistent with the E4B sibling).
- **Modalities:** text + image input (audio input cited for the E-series on the family model card), text output. Tool calls/JSON mode not documented.
- **Pricing (as of 2026-10-11):** ~$0.02 per 1M input / $0.04 per 1M output (anotherwrapper). Apache 2.0 weights = free local/on-device use.
- **Architecture:** Matryoshka-style effective sizing — sources conflict on parameters (~2.3B effective vs ~5.1B total multimodal); Apache 2.0; member of the 2.3B–31B Gemma 4 family.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **36** (AA, independent — normalized **0.0%**, floor)
- τ²-bench: **20.8%** (AA, independent — fills the gap; very weak)
- Terminal-Bench / Tau3 / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **43.4%** (Gemma 4 HF blog via benchlm.ai — fills the gap; very low) — **conflicts with the vendor-measured 82.6% MMLU-Pro "thinking enabled" reading the prior pass scored on** (a different benchmark and configuration); AA independent: **43.3%** (corroborates)
- MMLU-Pro: **60%** (HF blog) — **conflicts with the 82.6% thinking-enabled vendor figure**; the non-thinking reading is the one to score on
- HLE: **4.8%** (AA — fills the gap; floor); Artificial Analysis Intelligence Index: **7.8** (AA — fills the index gap; floor)
- MRCR v2: **19.1%** (HF card — fills the long-context gap; very weak); AA-LCR v1.1: **16.3%** (AA — very weak); CritPt: **0.0%** (AA — floor)
- AA-Omniscience: **6.6% accuracy / 32.4% non-hallucination row / −23.6 index** (AA — very weak)
- AA-IFBench: **38.0%** (AA)
- BenchLM overall: **30.21, #176 of 889**

Coding:

- LiveCodeBench v6: **44.0%** (HF model card via benchlm.ai — fills the coding gap; weak)
- AA Coding Index: **7.2%** (AA — new; floor-class)
- SWE-bench / SciCode / Vibe Code Bench: no verified public score found for E2B

Long context:

- MRCR v2 19.1% and AA-LCR 16.3% are the first measured long-context numbers (very weak); 128K window

Multimodal:

- MMMU-Pro: **44.2%** (HF card) / **44.6%** (AA — corroborated) — first measured vision evidence, low for the class

### Normalized scores (1–100)

- **Tool use: 34/100.** (Was 42 on the prior pass.) The measured rows are floor-class (τ²-bench 20.8%, GDPval 36 / 0.0% normalized) — two bands down from the sub-floor estimate.
- **Reasoning: 42/100.** (Was 55 on the prior pass.) GPQA 43.3–43.4% (two sources) and MMLU-Pro 60% (HF blog, vs the 82.6% thinking-enabled reading) document the effective-2B ceiling; AA Index 7.8, HLE 4.8%, CritPt 0.0% and the −23.6 Omniscience index confirm — two bands down.
- **Context window: 54/100.** (Was 60 on the prior pass.) 128K window (BenchLM concurs) is entry-tier; the first measured retrieval numbers (MRCR 19.1%, AA-LCR 16.3%) are very weak.
- **Multimodal: 54/100.** (Was 58 on the prior pass.) Measured vision exists but is low (MMMU-Pro 44.2/44.6%) — one band down from the credited-only estimate.
- **Coding: 40/100.** LiveCodeBench v6 44.0% (HF card) and AA Coding Index 7.2% fill the gap at measured weak levels — the score stays at the small-model floor.
- **Cost efficiency: 97/100.** $0.02/$0.04 per 1M hosted, free Apache 2.0 weights, and a 4 GB RAM footprint make it nearly free to run anywhere.
- **Overall Score: 44.8/100.** (Was 51.0 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (34 + 42 + 54 + 54 + 40) / 5 = 224/5 = 44.8 — lowered on the 2026-10-11 second pass as the HF card + AA boards convert every prior gap into measured evidence at effective-2B levels. Best fit: ultra-cheap on-device multimodal chat and simple tasks — not reasoning-heavy, agentic, or coding work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai Gemma 4 E2B page citing the HF model card + Gemma 4 blog + AA boards, the prior 2026-10-05 pass on LLMLearner/apxml/anotherwrapper; 2026-10-16 re-check: BenchLM 19-row refresh reproduces all rows identically — no new evidence, scores unchanged); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
