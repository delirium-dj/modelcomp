# gpt-oss-120b — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-oss-120b`, released 2025-08-05)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** gpt-oss-120b (OpenAI's first open-weight release since GPT-2)
- **Short description:** The model that ended OpenAI's open-weights drought — Apache 2.0, MXFP4-quantized MoE weights that fit a **single 80GB GPU** (116.8B total, 5.1B active, 36 layers, alternating dense/banded-sparse attention with learned attention sinks), trained with a mix of RL and techniques distilled from o3. OpenAI's claim: near-parity with **o4-mini**, beating o3-mini across the board, with surprisingly strong tool use and the best HealthBench numbers of any open model at launch (57.6, even beating o1 and GPT-4o). Reasonable effort is adjustable (low/medium/high), full CoT is exposed, and it runs in vLLM/Ollama/llama.cpp anywhere. A year later it remains the archetype of the "small open reasoning model" tier — outclassed by the 2026 Chinese open-weights wave but still the reference point for what Apache-2.0 gets you.
- **Provider / access:** Hugging Face (Apache 2.0), OpenAI API (per model docs), many hosts; self-hosted on one H100.
- **Release:** 2025-08-05.
- **Context window:** 128K (131,072 per API docs).
- **Modalities:** Text in → text out; reasoning effort low/medium/high.
- **Pricing (as of 2026-10-09):** $0.15/M input, $0.59/M output (AA median; Opper's cheapest route $0.04/$0.16); weights free (Apache 2.0).
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

- Artificial Analysis Intelligence Index: **12** (high effort; median of comparable models 8); 162.4 tok/s output
- Effort sweep (low→high): AIME 2025 50.4→92.5, GPQA 67.1→80.1, SWE-V 47.9→62.4

### Normalized scores (1–100)

- **Tool use: 56/100.** τ-Bench Retail 67.8% / Airline 49.2% and SWE-V 62.4% are solid mid-band tool use for 5.1B active — genuinely strong function calling for its size; no Terminal-Bench, MCP Atlas or GDPval figure exists, capping the dimension.
- **Reasoning: 60/100.** GPQA 80.1%, MMLU 90.0%, AIME 92.5–97.9% and Codeforces 2,463 are respectable mid-band; HLE 14.9% and the AA Intelligence Index of 12 place it well below the frontier — an o4-mini-class model, not a frontier one.
- **Context window: 64/100.** 128K (131K) is the 100K–200K band (50–64) at its top; no MRCR/RULER/AA-LCR retrieval figure was published.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 56/100.** SWE-bench Verified 62.4%, Aider Polyglot 44.4% and Codeforces 2,463 Elo are mid-band: strong math-shaped coding, weak on real-repository agentic editing.
- **Cost efficiency: 96/100.** Apache-2.0 weights, single-80GB-GPU deployment, hosted routes from $0.04/$0.16 — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier with genuine deployment freedom.
- **Overall Score: 50/100.** Best-fit recommendation: the open-weights baseline — o4-mini-class reasoning, the best open HealthBench of its launch window, and zero lock-in on one H100; a 2025-generation model now outrun by the 2026 Chinese open-weights wave on both price and capability.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenAI launch post + gpt-oss model card + arXiv:2508.10925, NVIDIA NIM card, Artificial Analysis, Opper); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gpt_Oss_2.md`, using the same headings.
