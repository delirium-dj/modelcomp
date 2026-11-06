# Mistral Large 3 — findings by Step 5 Preview

- Source: Mistral AI (`mistral-large-3`, model ID `mistral-large-2512`, version 25.12)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3 (`mistral-large-2512`)
- **Short description:** Mistral's frontier open-weight flagship of the Mistral 3 generation (announced 2025-12-02) — a sparse mixture-of-experts with 675B total / 41B active parameters, trained from scratch on 3,000 NVIDIA H200 GPUs, released base + instruct under Apache 2.0 with image understanding and best-in-class multilingual conversation. It debuted **#2 on LMArena in the OSS non-reasoning category** (#6 amongst OSS models overall) per Mistral's launch post. **Deprecated 2026-10-31** (retirement 2027-04-30) in favor of Mistral Large 4 — this file scores the 25.12 weights as measured; the successor is a separate tracked entry and nothing here is merged into it.
- **Provider / access:** Mistral API (`mistral-large-2512`), AI Studio, Amazon Bedrock, Azure Foundry, IBM WatsonX, OpenRouter (`mistralai/mistral-large-2512`, incl. EU in-region routing), Fireworks, Together AI, and self-hosted open weights (HF collection; NVFP4 checkpoint for Blackwell NVL72 / single 8×H100 node via vLLM; TensorRT-LLM + SGLang support). Verified 2026-11-06: **no `opencode/mistral-large-3` route in the OpenCode Console catalog** (the scaffolded `meta.json` id does not resolve; Zen lists Mistral Large 4 only).
- **Release / knowledge:** 2025-12-02. Knowledge cutoff not published.
- **IDs:** `mistral-large-2512` (Mistral API), `mistralai/mistral-large-2512` (OpenRouter). No Free ID on Zen. Weights: `mistralai/Mistral-Large-3` collection (base + instruct, Apache 2.0).
- **Context window:** **256K tokens** (docs model page, verified 2026-11-06).
- **Modalities:** Text and image in → text out (vendor position: "general-purpose multimodal model", image understanding; 40+ native languages). Function calling, structured outputs, Document QnA, prefix, batching, Agents/Conversations and built-in agent tools.
- **Pricing (as of 2026-11-06):** **$0.50/M input, $1.50/M output** (launch-post card + OpenRouter standard route; EU in-region $0.55/$1.65). Self-hostable free under Apache 2.0.
- **Architecture:** sparse MoE, 675B total / 41B active per token; first Mistral MoE since Mixtral; NVFP4 compressed checkpoint available; no further topology detail published.

### Raw benchmarks found

Artificial Analysis composite (via BenchmarkList, sampled 2026-07-21):

- Intelligence Index: **15.93** (rank 188/324, 42nd pct); Coding Index 20.07; Agentic Index 5.52; **AA-Omniscience −39.43** (negative — below-random factual reliability); CritPt 0.0%; cost per task $0.06, time per task 57.3 s

Agentic / tool use (BenchmarkList, agentic median 23rd pct):

- Terminal-Bench 2.1: **12.0%** (rank 151/196); Terminal-Bench 2.0: **9.0%** (rank 66/68); Terminal-Bench Hard: 15.9% (rank 130/326)
- GDPval-AA: **Elo 644** (rank 210/358, 41st pct; AA-internal 632.51)
- Tau2-Bench Telecom: **24.6%** (rank 230/337); Tau3-Banking: **5.8%** (rank 138/183)
- PinchBench: **72.2%** best / 66.0% average (rank 60/76)
- AA-Briefcase: Elo **229** (rank 128/160); AutoBench quality 2.62 (rank 30/32)

Coding (BenchmarkList, coding median 23rd pct):

- SWE-bench Verified: **41.4%** (rank **70/72** — near-bottom of board); LiveCodeBench: **55.3%** (rank 95/123); SciCode: **36.6%** (rank 161/311)
- IOI: 4.0% (rank 48/58); SWE-PRBench 0.147 (rank 4/8); Qiskit QuantumKatas 48.6%
- Arena AI WebDev Arena: Elo **1229.21** (rank 97/105, 8th pct)
- BenchLM coding: **39.4** points (overall 49)

Reasoning / knowledge:

- GPQA Diamond: **68.4%** (Vals, rank 82/117) / **68.0%** (Epoch AI, rank 235/478)
- HLE: **4.2%** (rank 425/491); MMLU-Pro: **80.7%** (rank 99/312); MMLU Pro (Vals): 79.8%
- AIME 2025: **38.0%** (rank 138/226); AIME (Vals): 42.9%; MGSM: 85.4%; MedQA: 82.2%; LegalBench: 79.1%
- BenchLM reasoning: 52.4; knowledge 43.8; multilingual 59.6; instruction following 65.8

Multimodal:

- MMMU Pro: **66.2%** (rank 62/79); Design Arena: Elo **1182** (49.5% WR, 19,079 battles, 49th pct); ALL Bench Multimodal 28.6% (rank 59/79)

Long context:

- AA-LCR: **36.0%** (rank 250/423, 41st pct)

Hallucination / safety:

- Vectara HHEM: factual consistency 85.5%, **hallucination rate 14.5%** (rank 74/85)

Vendor/launch claims (labelled, not independently measured here): LMArena #2 OSS non-reasoning debut; "parity with the best instruction-tuned open-weight models"; Ministral 3 sibling AIME '25 85% is a different (14B) model and is not Large 3 data. The Mistral 3 launch post's benchmark tables are figures without published numbers.

### Normalized scores (1–100)

- **Tool use: 45/100.** Below the methodology's mid band: TB2.1 12.0%, TB2.0 9.0%, Tau3-Banking 5.8% and GDPval-AA Elo 644 all trail mid-tier references, and the AA Agentic Index is 5.52; the one solid showing is PinchBench 72.2% (best)/66.0% (avg) on real agent workflows, which keeps it out of the bottom tier.
- **Reasoning: 57/100.** GPQA Diamond 68.4%/68.0% and MMLU-Pro 80.7% sit in the mid band, but HLE 4.2%, an Intelligence Index of 15.93 (below the 20–35 mid reference) and AA-Omniscience −39.43 cap it below the upper mid band.
- **Context window: 66/100.** 256K is the low end of the 200K–500K band (65–84), and measured long-context retrieval is weak — AA-LCR 36.0% at 41st percentile — so it sits at the bottom of the band rather than near its top.
- **Multimodal: 62/100.** Text + image in → text out is the 60–70 band; MMMU Pro 66.2% and Design Arena Elo 1182 (49.5% WR) are credible mid-band evidence and the vendor ships a dedicated vision encoder story, but no benchmark clears the 75–90 band (no video/audio input).
- **Coding: 45/100.** Below mid band for a frontier-branded model: SWE-bench Verified 41.4% (rank 70/72), LiveCodeBench 55.3%, SciCode 36.6%, IOI 4.0%, WebDev Arena Elo 1229 at the 8th percentile, BenchLM coding 39.4 — this is a generalist instruct model, not a coding specialist.
- **Cost efficiency: 93/100.** $0.50/$1.50 per 1M sits between the ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) anchors — roughly half the price of a Mistral Medium 3.5-class API, with Apache 2.0 weights for free self-hosting.
- **Overall Score: 55/100.** Mean of the five non-cost dims (45+57+66+62+45)/5 = 55. Best-fit recommendation: a self-hostable, mid-priced Apache-2.0 multimodal generalist for enterprises that need image understanding, 40+ languages and data-residency control — but it is deprecated (use-by 2027-04-30, successor Mistral Large 4), and it is outclassed on coding and agentic benchmarks by far cheaper open-weight specialists.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: public internet research (Mistral docs model page + models overview, Mistral 3 launch blog, OpenRouter model page, BenchmarkList's 66-benchmark profile, LMArena ranking as cited by the vendor, OpenCode Console catalog for route verification); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Docs — Mistral Large 3 (`mistral-large-2512`) model page](https://docs.mistral.ai/models/mistral-large-3-25-12)
  - [Mistral Blog — Introducing Mistral 3 (2025-12-02)](https://mistral.ai/news/mistral-3)
  - [Mistral Docs — Models Overview (deprecation table, Apache 2.0 tier)](https://docs.mistral.ai/getting-started/models/models_overview/)
  - [BenchmarkList — Mistral: Mistral Large 3 2512 (66 benchmarks)](https://benchmarklist.com/models/mistralai-mistral-large-2512)
  - [OpenRouter — mistralai/mistral-large-2512](https://openrouter.ai/mistralai/mistral-large-2512)
  - [Hugging Face — Mistral Large 3 collection (Apache 2.0 weights)](https://huggingface.co/collections/mistralai/mistral-large-3)
  - [LMArena text leaderboard (OSS non-reasoning debut #2, as cited by Mistral)](https://lmarena.ai/leaderboard/text)
  - [OpenCode Console models + pricing (Mistral Large 3 absent — no Zen route)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `North_Mini_Code.md`, using the same headings.
