# gpt-oss-120b — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-oss-120b`, released 2025-08-05)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** gpt-oss-120b (OpenAI's first open-weight release since GPT-2)
- **Short description:** The model that ended OpenAI's open-weights drought — Apache 2.0, MXFP4-quantized MoE weights that fit a **single 80GB GPU** (116.8B total, 5.1B active, 36 layers, alternating dense/banded-sparse attention with learned attention sinks), trained with a mix of RL and techniques distilled from o3. OpenAI's claim: near-parity with **o4-mini**, beating o3-mini across the board, with surprisingly strong tool use and the best HealthBench numbers of any open model at launch (57.6, even beating o1 and GPT-4o). Reasonable effort is adjustable (low/medium/high), full CoT is exposed, and it runs in vLLM/Ollama/llama.cpp anywhere. A year later it remains the archetype of the "small open reasoning model" tier — outclassed by the 2026 Chinese open-weights wave but still the reference point for what Apache-2.0 gets you.
- **Provider / access:** Hugging Face (Apache 2.0), OpenAI API (per model docs), many hosts; self-hosted on one H100.
- **Release:** 2025-08-05.
- **Context window:** 128K (131,072 per API docs).
- **Modalities:** Text in → text out; reasoning effort low/medium/high.
- **Pricing (as of 2026-10-19):** $0.125/M input, $0.595/M output (AA live listing; Opper's cheapest route $0.04/$0.16); weights free (Apache 2.0).
- **Architecture:** MoE, 116.83B total / 5.13B active; MXFP4 MoE weights (4.25 bpw); 60.8 GiB checkpoint.

### Raw benchmarks found

Official (high reasoning; NVIDIA NIM card / model card):

- AIME 2024: **95.8%** no tools / 96.6% with tools; AIME 2025: **92.5% / 97.9%**
- GPQA Diamond: **80.1% / 80.9%**; HLE: **14.9% / 19.0%** (with tools)
- MMLU: **90.0%**; MMMLU: **81.3%**
- SWE-Bench Verified: **62.4%**; Aider Polyglot: **44.4%**
- Tau-Bench: Retail **67.8%**, Airline **49.2%**
- HealthBench: **57.6%** (Hard 30.0%, Consensus 89.9%) — beat o1, GPT-4o, o3-mini, o4-mini on health queries at launch
- Codeforces: **2,463 Elo** (2,622 with tools)
- Positioning: matches or exceeds o4-mini on core reasoning; beats o3-mini everywhere

Third-party:

- Artificial Analysis Intelligence Index: **12** (high effort; median of comparable models 8); **265.3 tok/s output (2026-10-19 re-measurement — up from 162.4)**; TTFT 0.80s; $0.09 per Index task; 18 providers
- Effort sweep (low→high): AIME 2025 50.4→92.5, GPQA 67.1→80.1, SWE-V 47.9→62.4
- BenchLM composite (2026-10-19): **37.29/100** overall, #154 of 956 models, 25 of 644 benchmarks covered; new rows: τ²-bench **65.8%** (AA — corroborates the official retail/airline rows), Gert Labs **29.61%**, AA Agentic Index **6.2%**, GDPval-AA **5.4% normalized / Elo 745** (the file's missing GDPval row — very weak), APEX-Agents-AA **3.1%** (near-zero), React Native Evals **71.6%**, AA-SciCode **34.0%**, AA Coding Index **30.4%**, AA-LCR **52.0%** (fills the "no long-context figure" gap — weak), CritPt **1.1%**, AA-IFBench **69.0%**, AA-GPQA **78.2%**, AA-HLE **19.6%**, AA-Omniscience index **−49.2%** / accuracy **21.8%** / hallucination **90.8%** (terrible calibration), Design Arena Website **969**

### Normalized scores (1–100)

- **Tool use: 50/100.** τ-Bench Retail 67.8% / Airline 49.2% (and AA's 65.8%) plus SWE-V 62.4% are solid mid-band function calling for 5.1B active — but the agentic suites the file previously listed as "not published" now exist and are near-zero: GDPval-AA 5.4% (Elo 745), AA Agentic Index 6.2%, APEX-Agents-AA 3.1%, Gert Labs 29.61%. Trimmed from 56 on that measured evidence — structured tool calling works; open-ended agentic work does not.
- **Reasoning: 60/100.** GPQA 80.1%, MMLU 90.0%, AIME 92.5–97.9% and Codeforces 2,463 are respectable mid-band; HLE 14.9% and the AA Intelligence Index of 12 place it well below the frontier — an o4-mini-class model, not a frontier one.
- **Context window: 58/100.** 128K (131K) is the 100K–200K band; the first published long-context measure (AA-LCR 52.0%, 2026-10-19) is weak, so it lands mid-band rather than at the top. Trimmed from 64.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 54/100.** SWE-bench Verified 62.4%, React Native Evals 71.6% and Codeforces 2,463 Elo are mid-band, but the independent composites are much weaker — AA Coding Index 30.4% and AA-SciCode 34.0%. Trimmed from 56 on that spread: strong math-shaped coding, weak on real-repository agentic editing.
- **Cost efficiency: 96/100.** Apache-2.0 weights, single-80GB-GPU deployment, hosted routes from $0.04/$0.16 — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier with genuine deployment freedom.
- **Overall Score: 47/100.** Mean of the five non-cost dims (50+60+58+12+54)/5 = 46.8 (Tool use 56→50, Context 64→58, Coding 56→54 on the newly measured GDPval/AA-Agentic/LCR/Coding-Index rows). Best-fit recommendation: the open-weights baseline — o4-mini-class reasoning, the best open HealthBench of its launch window, and zero lock-in on one H100; a 2025-generation model now outrun by the 2026 Chinese open-weights wave on both price and capability.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Re-run verification (2026-10-19) against Artificial Analysis (Index 12 #11/67, 4/4 units — unchanged; output speed re-measured at 265.3 tok/s, up from 162.4; TTFT 0.80s; live pricing $0.125/$0.595; 18 providers) and BenchLM (composite 37.29/100, #154/956, 25/644 benchmarks): the agentic/long-context gaps the file listed as "not published" are now measured and weak — GDPval-AA 5.4% (Elo 745), AA Agentic Index 6.2%, APEX-Agents-AA 3.1%, AA-LCR 52.0%, AA Coding Index 30.4% — so Tool use 56→50, Context 64→58, Coding 56→54 (Overall 50→47); multimodal/calibration rows (AA-MMMU omitted — text-only confirmed; Omniscience −49.2) corroborate the low reads. First pass (2026-10-09) used OpenAI launch post + gpt-oss model card + arXiv:2508.10925, NVIDIA NIM card, Artificial Analysis, Opper.
- Future sources: add a new file next to this one, e.g. `Gpt_Oss_2.md`, using the same headings.
