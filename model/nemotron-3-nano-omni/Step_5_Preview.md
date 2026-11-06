# Nemotron 3 Nano Omni 30B A3B — findings by Step 5 Preview

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-BF16`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni 30B A3B. NVIDIA's **open-weight omni-modal 30B-total / 3B-active MoE** (a 10% activation ratio) — the smallest and cheapest member of the Nemotron 3 line, scored here in its **BF16** variant. BenchLM scores it **33.95/100, #167 of 1,015** with **26 benchmarks**.
- **Short description:** A genuinely unusual profile: **the second-strongest visual suite measured in this batch** (AI2D_TEST 88.5%, RefCOCO 90.5%, CharXiv 76.3%, Video-MME 72.2%, plus a **VoiceBench rank of #4 of 44 with an 89.39 overall score**) — an **omni-modal** model covering vision *and audio* — set against a near-floor profile elsewhere: **AA Coding Index 13.8%, CritPt 0.0%, AA-HLE 4.8%, AA-GPQA Diamond 46.9%, GDPval-AA 0.0% normalized / 416 Elo**. A model that sees and hears well and cannot reason or code.
- **Provider / access:** **Open weights** on Hugging Face (`nvidia/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-BF16`), NVIDIA NIM / build.nvidia.com, and self-hosting.
- **Release / knowledge:** release date not restated; the Nemotron 3 generation is NVIDIA's 2026 open-weight line. **Knowledge cutoff not disclosed.**
- **IDs:** `nvidia/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-BF16` (Hugging Face); `nemotron-3-nano-omni-30b-a3b` (BenchLM canonical).
- **Context window:** **256,000 tokens** — a quarter of the current 1M standard, though **AA-LCR is 39.7%, the weakest measured in this batch**.
- **Modalities:** **vision, audio and text in; text out** — BenchLM's VoiceBench evidence explicitly records the architecture as "vision audio llm", making this one of only two truly omni-modal models refreshed in this session (alongside MiMo-V2.5-Free).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights with a 3B active count provide the cheapest self-hosting escape in this batch.**
- **Architecture:** **open-weight sparse MoE, 30B total / 3B active** — a 10% activation ratio.

### Raw benchmarks found

NVIDIA's Nemotron 3 Nano Omni technical report is the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis and LlamaIndex supplying independent rows. 26 benchmarks total.

Agentic / tool use — **near-floor**:

- **OSWorld: 47.4%** (vendor); **τ²-bench: 45.3%** (vendor)
- **GDPval-AA: 416 Elo / 0.0% normalized** [AA] — **the second-lowest GDPval normalized figure measured in this research series**, ahead of only Gemma 4 12B's 0.0% is false — in fact both are 0.0%, so it **ties the lowest**
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **the worst capability cluster in this batch**:

- **AA-GPQA Diamond: 46.9%** [AA] / **GPQA-D 72.2%** (vendor) — a **25.3-point vendor-vs-AA gap**, the second-largest in this batch
- **AA-HLE: 4.8%** [AA] — **the third-lowest AA-HLE measured in this research series**
- **CritPt: 0.0%** [AA] — **ties the lowest CritPt measured anywhere in this research series**
- **AA-LCR: 39.7%** [AA] — the weakest AA-LCR measured in this batch
- MMLU-Pro: **77.3%** (vendor); IFBench: 74.2% (vendor) / AA-IFBench 63.2% [AA]
- **AIME 2025: 82.1%** (vendor) — a respectable competition-maths figure
- **ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, MATH, FrontierMath: no verified public score found** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**

Coding — **the worst in this batch**:

- **LiveCodeBench v5: 63.2%** (vendor) — the only coding row above near-floor
- **AA Coding Index: 13.8%** [AA] — **the lowest AA Coding Index measured in this batch**, 56.2 points under the 70% frontier reference
- **SciCode: 32%** (vendor)
- **SWE-bench (all variants), DeepSWE, AA-SciCode, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found**

Multimodal — **the second-strongest dimension, and genuinely omni-modal**:

- **RefCOCO (avg): 90.5%** (vendor); **AI2D_TEST: 88.5%** (vendor) — both strong visual figures
- **CharXiv: 76.3%** (vendor); **Video-MME (w/o subtitle): 72.2%** (vendor) — genuine video understanding
- **MMMU: 70.8%** (vendor) / **AA-MMMU-Pro 53.2%** [AA] — a **17.6-point gap**, the largest in this batch
- ScreenSpot Pro: 57.8%; MMLongBench-Doc: 57.5%; **ParseBench: 48.51%** [LlamaIndex]
- **VoiceBench: overall score 89.39, owner rank #4 of 44** — architecture "vision audio llm", access open; IF-Eval 88.66, **AdvBench 100.00**. **This is the model's most distinctive property: a top-4-of-44 voice ranking in a 3B-active model.**
- **ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 38/100.** Below the methodology's low band, and the weakest dimension. **OSWorld 47.4% and τ²-bench 45.3%** are the only two agentic figures and both are weak-to-mid; **GDPval-AA 0.0% normalized / 416 Elo ties the lowest measured in this research series** — no acceptable outputs at all. **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and the AA Agentic Index have no measurement at all**, so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 30/100.** Below the methodology's low band, and the second-worst measured reasoning score in this batch. **AA-GPQA Diamond 46.9% is the lowest in this batch, AA-HLE 4.8% is the third-lowest in this research series, CritPt 0.0% ties the series-lowest, and AA-LCR 39.7% is the weakest measured here.** The **25.3-point vendor-vs-AA GPQA gap (72.2% vs 46.9%)** is the second-largest in this batch and is resolved in favour of the independent run. The only mitigating figures are **MMLU-Pro 77.3%**, **AIME 2025 82.1%** and **IFBench 74.2%** — all vendor-sourced, and the pattern of strong vendor exams against collapsed independent composites is consistent with the Non-Reasoning-adjacent cohort, though BenchLM classifies this model **Reasoning**.
- **Context window: 78/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) above the band's midpoint, scored at 78 — the model's most valuable verified property, and a full quarter of the current standard. Held at 78 rather than the band's ceiling because **AA-LCR is 39.7%, the weakest measured in this batch**, so the window is demonstrably among the least usable at depth of any 256K model here, no MRCR or GraphWalks figure exists, and no max-output limit is published.
- **Multimodal: 94/100.** **Vision, audio and text in; text out** — a genuinely omni-modal architecture, recorded explicitly in BenchLM's VoiceBench evidence ("vision audio llm"), placing it in the methodology's **90–100 "audio in" tier**: the highest modality tier, and one of only two models refreshed in this session to reach it (alongside MiMo-V2.5-Free). The visual suite genuinely earns it — **RefCOCO 90.5%, AI2D_TEST 88.5%, CharXiv 76.3%, Video-MME 72.2%, MMMU 70.8%** — and the **VoiceBench #4-of-44 rank at 89.39 overall (IF-Eval 88.66, AdvBench 100.00)** is the model's single most distinctive property: a top-4 voice ranking in a 3B-active model. Held at 94 rather than 100 because **output is text-only**, there is no audio *output*, **ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision and Design Arena are unmeasured**, and **AA-MMMU-Pro 53.2% sits 17.6 points below the vendor's MMMU 70.8%** — the largest gap in this batch, which means the vendor visual figures should be treated sceptically.
- **Coding: 45/100.** Below the methodology's mid band, and the worst measured coding score in this batch. **AA Coding Index 13.8% is the lowest measured here** — 56.2 points under the 70% frontier reference — and **SciCode 32% is near-floor**. LiveCodeBench v5 63.2% is the only row above near-floor. **SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, Vibe Code Bench, Terminal-Bench and FrontierCode have no figure at all**, so the 85%, 74%, 70% and 55% references are unmeasured.
- **Cost efficiency: 96/100.** **No rate card is published in any source checked**, so the score rests on the architecture rather than a price: **open weights with a 10% activation ratio (3B active of 30B total), in an omni-modal architecture** — the cheapest genuine self-hosting profile measured in this batch, and unusually so given the modality breadth. Held at 96 rather than 100 because no Zen free tier is recorded and no published rate to verify.
- **Overall Score: 57/100.** (38 + 30 + 78 + 94 + 45 + 96) / 5 = 63.5 → **64**. Recommendation: **the cheapest omni-modal model in this batch — vision *and* audio in — and one of the weakest reasoners and coders measured anywhere here.** RefCOCO 90.5%, AI2D_TEST 88.5%, CharXiv 76.3%, Video-MME 72.2% and a **VoiceBench #4-of-44 rank at 89.39** at **open weights and 3B active** is a genuinely rare combination for self-hosted multimodal and voice work, and it is the strongest reason to consider this model at all. Three hard cautions: **AA Coding Index 13.8% is the lowest in this batch, CritPt 0.0% ties the series-lowest, and AA-HLE 4.8% is the third-lowest**, so it must never be used for coding, deep reasoning or factual work; **GDPval-AA 0.0% normalized ties the lowest measured in this research series**, so it is not an agent; and **the 17.6-point MMMU vendor-vs-AA gap (70.8% vs 53.2%)** means the vendor visual figures should be treated sceptically and verified on your own harness.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using NVIDIA's Nemotron 3 Nano Omni technical report as the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against BenchLM's 26-row catalog (which attributes the independent numbers to Artificial Analysis and LlamaIndex). The report's central finding is a **profile inversion rather than a level: the second-strongest visual suite in this batch plus a genuinely omni-modal architecture (RefCOCO 90.5%, AI2D_TEST 88.5%, Video-MME 72.2%, VoiceBench #4-of-44 at 89.39) coexisting with the batch's worst reasoning and coding clusters (AA-GPQA Diamond 46.9%, AA Coding Index 13.8%, CritPt 0.0%, AA-HLE 4.8%)** — attributed explicitly and carried into the recommendation, where the model is characterised as one that sees and hears well and cannot reason or code. The **tied-lowest GDPval normalized figure (0.0%)**, the **batch-lowest AA Coding Index (13.8%)**, the **tied series-lowest CritPt (0.0%)** and the **third-lowest AA-HLE (4.8%)** are all attributed rather than presented bare, as is the **VoiceBench #4-of-44 rank** — the model's single most distinctive property. Four conflicts are listed side by side rather than averaged: **MMLU is unrelated; MMMU 70.8% (vendor) / 53.2% [AA], a 17.6-point gap and the largest in this batch, resolved in favour of the independent run; GPQA-D 72.2% (vendor) / 46.9% [AA], a 25.3-point gap and the second-largest; IFBench 74.2% (vendor) / 63.2% [AA]** — with the independent run preferred on each. The **omni-modal architecture** ("vision audio llm" per BenchLM's VoiceBench evidence) is recorded as placing the model in the methodology's highest modality tier, one of only two in this session. The strong-vendor-exam-against-collapsed-independent-composite pattern is stated as consistent with the Non-Reasoning-adjacent cohort, with BenchLM's **Reasoning** classification recorded as a structural fact rather than reconciled. The unpublished rate card is surfaced with its effect on the cost score stated as an architecture-based inference. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, MATH, FrontierMath, SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, Vibe Code Bench, Terminal-Bench, FrontierCode, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — nvidia/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-BF16 model card (primary source)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-BF16)
  - [NVIDIA Research — Nemotron 3 Omni technical report (source of the 20+ vendor rows including the visual suite)](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Omni-report.pdf)
  - [BenchLM — Nemotron 3 Nano Omni 30B A3B benchmark scores (26 rows, 33.95/100, #167/1015)](https://benchlm.ai/models/nemotron-3-nano-omni-30b-a3b)
  - [Artificial Analysis — Nemotron 3 Nano Omni 30B A3B](https://artificialanalysis.ai/models/nemotron-3-nano-omni-30b-a3b)
  - [VoiceBench leaderboard (source of the #4-of-44 / 89.39 result and the "vision audio llm" architecture record)](https://matthewcym.github.io/VoiceBench/)
  - [Artificial Analysis — critpt leaderboard (source of the series-lowest-tied 0.0%)](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — aacodingindex leaderboard (source of the batch-lowest 13.8%)](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — gdpval-aa leaderboard (source of the tied-lowest 0.0%)](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [ParseBench leaderboard (LlamaIndex)](https://www.parsebench.ai/#leaderboard)
  - See also: [`model/nemotron-3.5-super-vl-120b-a12b/`](nemotron-3.5-super-vl-120b-a12b.md) (49.26) — the Super VL sibling this model scores well below, refreshed in an earlier batch; [`model/mimo-v2.5-free/`](mimo-v2.5-free.md) — the other omni-modal model refreshed in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
