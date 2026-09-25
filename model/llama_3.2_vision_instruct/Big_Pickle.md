# Llama 3.2 11B Vision Instruct — findings by Big Pickle

- Source: Meta (`meta-llama/Llama-3.2-11B-Vision-Instruct`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 11B Vision Instruct
- **Short description:** Meta's 2024 open-weights **11B (10.67B) vision-language model** — Llama 3.1 8B text weights plus a separately trained cross-attention vision adapter — for image understanding, document/chart/diagram QA and captioning. It is a genuinely capable 2024-era *perception* model (DocVQA 88.4 ANLS, AI2D 91.1, ChartQA 83.4) whose *reasoning*, *agentic* and *long-context* performance is now at the bottom of every field it appears on, and it has been superseded twice over by Llama 3.2's own successor line and by the current open-vision cohort. **Not a variant or alias** — the base `Llama-3.2-11B-Vision` is the pre-trained checkpoint; this is the instruction-tuned sibling.
- **Provider / access:** **This folder's ID `opencode/llama_3.2_vision_instruct` does not exist.** The models.dev `api.json` catalog (222 providers, 24,074 models, read directly 2026-09-25) contains **no OpenCode Zen Llama of any kind** — the `opencode` provider lists 112 models and none is a Llama. The real, verified hostings are all OpenAI-compatible **Chat Completions** (no Responses API anywhere):
  - **NVIDIA NIM** `meta/llama-3.2-11b-vision-instruct` — `https://integrate.api.nvidia.com/v1`, models.dev **$0 / $0** (free developer credits), 128,000 ctx / 4,096 out
  - **Cloudflare Workers AI** `@cf/meta/llama-3.2-11b-vision-instruct` — **$0.0485 in / $0.676 out**, listed 128,000 / 128,000 (the output figure is a catalog error)
  - **DeepInfra (edenai)** `deepinfra/meta-llama/Llama-3.2-11B-Vision-Instruct` — **$0.345 / $0.345**, 131,072 ctx / 4,096 out
  - **Inference.net** `meta/llama-3.2-11b-vision-instruct` — **$0.055 / $0.055** but only a **16,000-token** window
  - **io.net / NIM** also carry the 90B sibling at higher cost. Self-host: vLLM, SGLang, TGI, llama.cpp (`llama-3.2-vision` with an external `mmproj`), Ollama (`ollama run llama3.2-vision`, ~3.5 GB at 4-bit).
- **Release / knowledge:** **2024-09-25** (Meta's Connect 2024 release; NVIDIA and models.dev agree). **Knowledge cutoff: December 2023** — stated in Meta's model card, reproduced in models.dev as `knowledge: "2023-12"`, i.e. **32 months stale** at the signature date. Not available in the EU at launch per Meta's regulatory note.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct` (HF, gated), `meta/llama-3.2-11b-vision-instruct` (NVIDIA NIM, Inference.net), `@cf/meta/llama-3.2-11b-vision-instruct` (Cloudflare), `deepinfra/meta-llama/Llama-3.2-11B-Vision-Instruct` (DeepInfra), `meta/llama-3.2-11b-vision-instruct` (io.net), `llama3.2-vision` (Ollama). `opencode/llama_3.2_vision_instruct` (this folder) — **no such ID in any catalog**; see above. **No Free ID exists on OpenCode Zen**, because no Zen listing exists at all.
- **Context window:** **128,000 native (131,072 = 2^17)** — verified in Meta's model card ("128k"), NVIDIA's NIM specification block ("Context Length: 131,072 tokens"), models.dev (128,000 on both the NVIDIA and Cloudflare entries; 131,072 on DeepInfra) and InferenceBench (131,072). **Max output is only 4,096 tokens** on three of the four hosted endpoints (NVIDIA, DeepInfra, Inference.net); the methodology treats sub-64K output as a noted caveat rather than a separate deduction, but 4K is the tightest generation cap in this comparison. Served window on Inference.net is truncated to 16,000.
- **Modalities:** **text + image in / text out.** No audio, no video, no native PDF. **English only** for image+text tasks (Meta is explicit: "for image+text applications, English is the only language supported"), though the text-only path officially supports en/de/fr/it/pt/hi/es/th. **Reasoning: no** — models.dev records `reasoning: false` and NVIDIA's capability block states "Reasoning: Not supported"; MMMU and MathVista scores come from zero-shot CoT prompting, not a native thinking mode. **Tool calls: contested** — NVIDIA's own card says "**Function Calling: Not supported**" and "Structured Output: Not supported", while the Inference.net models.dev entry claims `tool_call: true, structured_output: true`. The vendor's own reference endpoint does not support it. Images are processed by **dynamic image tiling at 560×560 per tile**.
- **Pricing (as of 2026-09-25):** **NVIDIA NIM $0.00 / $0.00** per models.dev (free developer credits, API key required, rate-limited — the usual "no confidential data on free tiers" caveat applies), **Cloudflare $0.0485 in / $0.676 out** (a 14× in/out spread that punishes generation-heavy use), **Inference.net $0.055 / $0.055** but at a 16K window, **DeepInfra $0.345 / $0.345**, Together ≈ $0.18/M output (InferenceBench). Weights are downloadable free under the **Llama 3.2 Community License** — a *custom commercial* licence, **not** an OSI-style open licence: it carries an acceptable-use policy and a **700M monthly-active-user** threshold above which a separate Llama license is required. Artificial Analysis Openness Index **38.89** (rank 118 of 204) reflects that.
- **Architecture:** **11B dense** (exactly **10,670,220,835** parameters per NVIDIA's spec), 40 layers, hidden dimension 4,096, 32 attention heads / 8 KV heads (GQA), head dim 128, vocab 128,256. **Not an MoE.** Built on top of the **pre-trained Llama 3.1 text-only model** with a **separately trained vision adapter** — a series of **cross-attention layers** that feed image-encoder representations into the core LLM; Meta's community documentation describes the text weights as effectively unchanged on pure-text tasks. Pre-trained on **6B image-text pairs**; instruction tuning added public vision instruction datasets plus **over 3M synthetic examples**; SFT + RLHF. Training cost **245K H100-hours** for the 11B (147K pre-training + 98K annealing + 896 SFT + 224 RLHF), 71 tCO2eq location-based. Self-host footprint: 22 GB BF16, 11 GB FP8, 5.5 GB INT4 — a **single 16 GB GPU or a 24 GB laptop GPU** at 4-bit.

### Raw benchmarks found

> Meta's own two tables (model card, reproduced verbatim on the NVIDIA NIM page) plus 24 independent evaluations catalogued by BenchmarkList, sourced from Artificial Analysis, the Open LLM Leaderboard v2, OpenVLM, Scale SEAL and several 2026 papers. The independent set is unusually complete for a 2024 model — it has been re-measured repeatedly, and it is unflattering.

Agent / tool use:

- Tau2-Bench Telecom: **14.6%** success rate (Artificial Analysis, 2026-06-10; **rank 281 of 332, 15th percentile**; field leader Fable 5 at 98.5%)
- Terminal-Bench Hard: **0.8%** success rate (Artificial Analysis, 2026-06-10; **rank 279 of 326, 14th percentile**; field leader Fable 5 at 62.9%). Terminal-Bench 2.1 itself: **no verified public score found**
- Function calling: **not supported** on the vendor's reference NIM endpoint (NVIDIA capability block); no benchmark measures it
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found** — the methodology names this as the tool-use gap that warrants a penalty
- MCP-Atlas / Toolathlon / SWE Atlas Codebase QnA / AutomationBench / OSWorld / Agents' Last Exam: **no verified public score found**
- Adjacent: **FinEval 50.9%** (weighted average, 2026-05-27), which includes a financial-agent component and is the only agent-adjacent domain result

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 3.33** (Verified, 2026-07-21; **rank 382 of 418, 9th percentile**; field leader Fable 5.1 at 65.7). Component breakdown as published: SciCode 11.2%, AA-LCR 11.7%, **AA-Omniscience −63.08**, HLE 5.2%, GPQA Diamond 22.1%, **CritPt 0.0%**
- **GPQA Diamond: 22.1%** (Artificial Analysis Verified, 2026-07-21; **rank 461 of 464, 1st percentile**). Meta's own zero-shot number is **32.8%**
- **Humanity's Last Exam: 5.5%** (2026-09-02; rank 283 of 466, 39th percentile); 5.2% in the Index run
- **AA-LCR: 15.7%** (2026-09-02; rank 293 of 409, 28th percentile); 11.7% inside the Index run
- **CritPt: 0.0%**
- **AIME 2025: 1.7%** (2026-06-10; **rank 218 of 226, 4th percentile**)
- **MMLU-Pro: 46.4%** (2026-06-10; rank 273 of 312, 13th percentile); 30.4% on the Open LLM Leaderboard v2 run
- **MMLU: 73.0%** macro-average (Meta official, 0-shot); **MATH (CoT): 51.9%** final EM; **MATH Level 5: 22.0%** (rank 1124 of 4368); **MGSM (CoT): 68.9%** (Meta official)
- **MuSR: 9.8%** (rank 2310 of 4368, 47th percentile); **BBH 31.2%**
- **IFEval: 77.7%** — the model's one genuinely respectable modern score, and the reason Open LLM Leaderboard v2 averages 29.1% at the 74th percentile
- **ObviousBench: 23.6%** answer pass³ (2026-08-27; **rank 250 of 254, 2nd percentile**); format pass³ 96.5%
- **ECI 75.25, rank 363 of 398, open-weight rank 148 of 158** (BenchmarkList, live 2026-09-25) — near the floor even among open-weight models
- Multilingual: **BLUEX v2 4.18 / 10** (rank 10 of 10, 0th percentile, and simultaneously the field leader — a 4.92-point spread across 21 SOTA models means the benchmark is saturated at the bottom), **AraGen v3 24.4%** (3C3H; QA only 15.0%), Open Portuguese LLM Leaderboard 82.4% (rank 206 of 1108)

Coding:

- **SciCode: 11.2%** (Artificial Analysis Verified, 2026-07-21; **rank 402 of 458, 12th percentile**; field leader Fable 5.1 at 62.0%, eval cost $0.34)
- **Terminal-Bench Hard: 0.8%** (see agentic section)
- SWE-bench Verified / SWE-Pro / SWE-bench Multilingual: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / FrontierSWE: **no verified public score found** — there is **not one repository-level coding evaluation** of this model anywhere

Long context:

- **AA-LCR: 15.7%** (Artificial Analysis, 2026-09-02; rank 293 of 409, 28th percentile; 11.7% in the Index run) — the only retrieval-style long-context measurement, and it is near-floor
- No MRCR, RULER, GraphWalks, LongBench or needle test at any window length
- The 128K window is real but almost certainly unexercised: no published evaluation in this catalog was run anywhere near 128K, and **max output is 4,096 tokens**

Image / multimodal (all Meta official unless noted):

- **DocVQA (test): 88.4 ANLS** — the model's best result, and genuinely strong
- **AI2 Diagram (test): 91.1%**; **ChartQA (test, CoT): 83.4%** relaxed accuracy; **VQAv2 (test): 75.2%**
- **MMMU (val, CoT): 50.7%**; **MMMU-Pro Standard (10 opts): 33.0%**; **MMMU-Pro Vision: 23.7%**; **MathVista (testmini): 51.5%**
- **OpenVLM Leaderboard avg 57.7** (rank 155 of 285, 46th percentile): MMBench_V11 65.8, MMStar 49.8, MMMU_VAL 48, MathVista 47.7, **OCRBench 753**, AI2D 77.3, **HallusionBench 40.3**, MMVet 57.6
- **Scale SEAL Visual-Language Understanding: 20.5%** (2026-05-06; **rank 54 of 55, 2nd percentile**; max attainable 57.8)
- **MechVQA: 25.5%** total (18 of 18, 0th percentile) — including **Assembly Reasoning 0.0%**, **Spatial Understanding 6.3%**, Image Classification 13.9%, Interpretation 11.5%, Anomaly Detection 17.6%
- **GeoRC F1 25.9%** (rank 8 of 9; country accuracy 58.4%); **PhysicsMind 47.5%** overall VQA (rank 21 of 23; lever equilibrium 30.9%, Newton's first law object position 15.0%); **CFMME 20.2** (16 of 16, 0th percentile); FinEval multimodal 50.9%
- Base checkpoint (for reference): VQAv2 66.83, TextVQA 73.14, DocVQA 62.26, MMMU 41.67, ChartQA 39.4, InfographicsQA 43.21, AI2D 62.37 — instruction tuning roughly doubles every perception number

### Normalized scores (1–100)

- **Tool use: 35/100.** Below the methodology's mid band (50–70), and that band is anchored on "TB2.1 ~45–60%, Tau3 ~10–25%". Tau2-Bench Telecom **14.6%** is technically inside the band's Tau3 range but at the **15th percentile of 332 models**, while **Terminal-Bench Hard 0.8%** at the 14th percentile of 326 is an unambiguous functional failure on terminal work. Decisively: **NVIDIA's own capability block states function calling is not supported**, so on the reference endpoint the model cannot emit a tool call at all; Claw-Eval — the gap the methodology explicitly penalises — does not exist; and there is no GDPval, MCP-Atlas, Toolathlon or AutomationBench number to offset it. Not scored in the 20s because Tau2-Bench 14.6% is a real, non-degenerate agentic result.
- **Reasoning: 38/100.** Clearly below the mid band (55–65), which requires GPQA 60–80% and an Intelligence Index of 20–35; this model has **GPQA Diamond 22.1% at the 1st percentile of 464** and an **Intelligence Index of 3.33 at the 9th percentile of 418**, with **CritPt 0.0%** and **AIME 2025 1.7% at the 4th percentile of 226**. HLE 5.5% and AA-LCR 15.7% would both be in-band, but they cannot rescue a GPQA and an Index two full bands down. Held above the floor because the underlying model is not degenerate: **MMLU 73.0%, MMLU-Pro 46.4%, MATH CoT 51.9%, MGSM CoT 68.9% and IFEval 77.7%** are respectable 2024-era numbers — this is a stale-but-sound knowledge model, and the **December 2023 knowledge cutoff** compounds the ceiling on any 2026 knowledge task.
- **Context window: 52/100.** **128,000 native** sits in the methodology's **100K–200K band (50–64)**, at the top of it on size alone. It is pulled to the floor of that band by the one measurement that exists: **AA-LCR 15.7%, rank 293 of 409** — an actual long-context-reasoning benchmark, run by Artificial Analysis, showing near-failure. A model that advertises 128K and then scores 15.7% on long-context reasoning is not delivering the window, and the **4,096-token max output** on three of four hosts makes the deep-window case worse. Well below the 200K–500K band (65–84) it would need for a higher score; this model's window does not even reach that band's floor.
- **Multimodal: 62/100.** Text + image in / text out, no audio, no video, no native PDF — which is the methodology's **60–70 image-input band**, not the 75–90 image/video/PDF tier. Placed in the upper half of the band on the strength of real perception ability: **DocVQA 88.4 ANLS, AI2D 91.1%, ChartQA CoT 83.4%, VQAv2 75.2%, OCRBench 753** — genuinely good at reading documents, charts and diagrams. Held out of the band's top and far from the 75–90 tier by reasoning *over* images, which is where it collapses: **MMMU-Pro Vision 23.7%, MMMU-Pro Standard 33.0%, MathVista 51.5%, Scale SEAL 20.5% at the 2nd percentile of 55**, HallusionBench 40.3%, and on MechVQA an outright **0.0% on Assembly Reasoning and 6.3% on Spatial Understanding**. It reads images well and reasons about them poorly.
- **Coding: 32/100.** The lowest dimension here, and below the methodology's mid band (65–75) by a wide margin — that band's own worked example requires "LiveCode 80% but Vibe <10% and SciCode <40%", and this model has **neither** the LiveCode number nor anything near the SciCode threshold: **SciCode 11.2%, rank 402 of 458, 12th percentile**, and **Terminal-Bench Hard 0.8%**. There is **no SWE-bench Verified, no SWE-Pro, no DeepSWE, no LiveCodeBench and no Vibe Code Bench figure of any kind** for this model — not one repository-level coding evaluation exists. What it does have is the coding ability of a Llama 3.1 8B derivative as measured in 2024, and a 2024-vintage 8B-class text model no longer competes here.
- **Cost efficiency: 98/100.** A genuine free tier exists — **NVIDIA NIM $0.00 / $0.00** per models.dev — and the weights are downloadable outright, which by the methodology's anchors is 100. Held at 98 for three real reasons: the $0 listing is a **NIM free developer-credit allowance**, not an unconditional zero-price endpoint (NVIDIA's own page publishes no price at all, and access requires an API key and is rate-limited); the **Llama 3.2 Community License is a custom commercial licence with an acceptable-use policy and a 700M-MAU threshold**, the least open thing in this comparison apart from the hosted frontier models (AA Openness Index 38.89, 118 of 204), so "free weights" is not "free to ship"; and the genuinely cheap paid hosts are lopsided — Cloudflare's **$0.676/M output is 14× its $0.0485/M input**, while Inference.net's headline $0.055/$0.055 serves a window truncated to 16K.
- **Overall Score: 44/100.** (35 + 38 + 52 + 62 + 32) / 5 = 43.8 → 44. Best fit: **an offline document, chart and diagram reader** — DocVQA 88.4 ANLS, AI2D 91.1%, ChartQA 83.4% and a 5.5 GB INT4 footprint that runs on one 16 GB GPU, at $0 on NIM. It is the right tool for OCR-style extraction, form and invoice parsing, and diagram captioning, and it is cheap and self-hostable. It is the wrong tool for anything else: **GPQA at the 1st percentile of 464, an Intelligence Index of 3.33, Terminal-Bench Hard 0.8%, SciCode 11.2%, no function calling on the reference endpoint, a December 2023 knowledge cutoff, and a 4K output cap**. If you need open-weight vision today, this model's own successor line (Llama 3.2's 90B Vision sibling, or the 2025–26 open-vision generation that follows it) beats it on every axis that matters; the 11B Vision Instruct's day was 2024.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-25
- Method: public internet research (Meta's Llama 3.2 Vision model card benchmark tables as reproduced in full on the NVIDIA NIM model page including the training-energy and data-provenance sections; BenchmarkList's 24-evaluation profile for `meta-llama/llama-3.2-11b-vision-instruct` with its underlying Artificial Analysis, Open LLM Leaderboard v2, OpenVLM, Scale SEAL, MechVQA, PhysicsMind, GeoRC, CFMME, BLUEX v2, ObviousBench and FinEval sources; the models.dev `api.json` provider catalog read directly to establish that no `opencode/llama_3.2_vision_instruct` ID exists and to price every real hosting; InferenceBench's architecture and GPU-fit breakdown); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Meta.md`, using the same headings.
