# NVIDIA Nemotron 3.5 Super VL 120B A12B — findings by Step 5 Preview

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** **Nemotron 3.5 Super VL (120B A12B)** — NVIDIA's **vision-language** successor to Nemotron 3 Super, released **2026-10-15** under the **NVIDIA OpenMDW-1.1 licence**. BenchLM's canonical slug is `nemotron-3-5-super-vl-120b-a12b` (**not** `nemotron-3.5-super-vl`, which 404s — the repo folder name is ambiguous against the param-size convention). It scores **49.26/100, #105 of 1,015** with **28 benchmarks**, and it is **the highest-scored Nemotron in BenchLM's corpus** — above Nemotron 3 Ultra (47.40), 3.5 Bolt 74B-A9B (42.92) and 3 Nano Omni 30B A3B (33.95).
- **Short description:** An **open-weight 120B/12B-active hybrid MoE with a 1M context window**, notable for an architecture with no close analogue in this research series: a **hybrid design of Mamba-2, mixture-of-experts and attention layers, with a C-RADIO vision encoder**, initialised from Nemotron 3 Super Base and **distilled from the larger Nemotron 3 Ultra**. Its measured profile is mid-tier throughout — **τ²-bench Airline 76.5%, BrowseComp 78%, LiveCodeBench v6 88.2%, GPQA-D 89.5%, V\* 85.6%, CharXiv 80.8%** — against **τ³-bench 18.9%, CritPt 10.9%, AA Intelligence Index 13.6% and BabyVision 29.6%**.
- **Provider / access:** **Open weights under NVIDIA OpenMDW-1.1** on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`, plus a separate `-NVFP4` quantised sibling tracked by BenchLM with no computed score), NVIDIA NIM / build.nvidia.com, and OpenRouter. Self-hosting available.
- **Release / knowledge:** released **2026-10-15**. **Knowledge cutoff not disclosed.**
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`; `NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4` (quantised release); `nemotron-3-5-super-vl-120b-a12b` (BenchLM canonical); `nvidia/nemotron-3.5-super-vl` (Openrouter, AA).
- **Context window:** **1M tokens** (BenchLM) — though **independent trackers disagree sharply: llm-stats records 262K and models.dev records 1,048,576 with only 8,192 max output.** This is the report's largest unresolved spec conflict.
- **Modalities:** **text, image and video in; text out**, per multiple independent trackers and the model card's stated purpose (reasoning, coding, tool use, document understanding, video understanding).
- **Pricing (as of 2026-11-05):** **~$0.20 input / $0.10 cached / $1.00 output per 1M** (llm-stats) — with a striking competing record: **models.dev lists $0.00 / $0.00 per 1M**, which almost certainly reflects a free NIM trial tier rather than a permanent rate. Recorded as a conflict rather than reconciled.
- **Architecture:** **open-weight hybrid MoE, 120B total / 12B active** — a 10% activation ratio — combining **Mamba-2, mixture-of-experts and attention layers with a C-RADIO vision encoder**. The Mamba-2 component is the distinctive engineering choice and the reason this model's cost profile differs from a conventional MoE.

### Raw benchmarks found

NVIDIA's own BF16 model card is the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis, Qwen's comparison tables, the JobBench paper, Gert Labs, ResearchClawBench, SWE-Rebench, Openrouter and llm-stats supplying independent rows. 28 benchmarks total.

Agent / tool use — **mid, and split**:

- **BrowseComp: 78%** (vendor); **τ²-bench Airline: 76.5%** (vendor); BFCL-adjacent MCP-Tasks: 59.1%
- **Terminal-Bench 2.1: 66.7%** (vendor) — 21.3 points under the 88%+ reference
- **GDPval-AA: 1,211 Elo** (vendor) / **33.1% normalized** [AA]
- **τ³-bench: 18.9%** (vendor) — near-floor on the banking harness
- **OSWorld-Verified, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, AA AutomationBench: no verified public score found** — so two of three frontier references are unmeasured and no composite exists

Reasoning / knowledge — **mid on exams, weak on depth**:

- **GPQA-D: 89.5%** (vendor) — 0.5 points under the 90%+ reference, the narrowest miss in this batch
- **HLE: 29.2%** (vendor) / **AA-HLE 30.7%** [AA] — fails the 40%+ reference by ~9–11 points, with AA *above* the vendor
- **AA-Omniscience: index 4.0, accuracy 26.2%, hallucination rate 30.0%** — a **positive index**, on the **sixth-lowest hallucination rate in this research series**
- **AA Intelligence Index: 13.6%** — the second-lowest composite in this batch
- **CritPt: 10.9%**; **AA-LCR: 68.6%** — the weakest AA-LCR in this batch
- MMLU-Pro: 87.1%; MMLU-Redux: 94.5%; C-Eval: 94%; SuperGPQA: 69.2%; LongBench v2: 61.0%
- IFEval: 93.9%; **IFBench: 70.9%**; **AA-IFBench 70.2%**
- **AIME26: 95.8%**; **AIME 2025: 96.1%**; HMMT Feb 2025: 95.4%; HMMT Nov 2025: 91.1%; HMMT Feb 2026: 87.1%; MMAnswerBench: 81.8%; **Apex Shortlist: 88.4%**
- **ARC-AGI, MRCR, FrontierMath: no verified public score found**

Coding — **mid-frontier**:

- **LiveCodeBench v6: 88.2%** (vendor) — the strongest coding figure
- **SWE-bench Verified: 71.1%** (vendor) — 13.9 points under the 85%+ terminal reference
- **SWE Multilingual: 67.7%**; SWE-bench Pro: 51.8%; **AA-SciCode: 47.8%** — under 55%; NL2Repo: 32.0%
- **DeepSWE, AA Coding Index, Vibe Code Bench, FrontierCode, Terminal-Bench 4.0: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Multimodal (image-in) — **mid, and the model's stated purpose**:

- **V\*: 85.6%** — strong visual grounding; **CharXiv: 80.8%**; **MathVision: 78.2%**
- **MMMU-Pro: 78.5%** (vendor) / **AA-MMMU-Pro 75.4%** [AA]; MMMU: 84.3%; RealWorldQA: 81.0%; **OmniDocBench 1.5: 88.8%**
- MMLongBench-Doc: 62.8%; SimpleVQA: 71.2%; Design Arena (website): **1,247 Elo**
- **BabyVision: 29.6%** — near-floor, and a striking gap against the rest of the visual suite
- **Video-MME, VideoMMMU, ExtractBench, ZeroBench: no verified public score found** — so **video understanding, which the model card explicitly names as a capability, has no measured figure at all**

### Normalized scores (1–100)

- **Tool use: 58/100.** Below the methodology's mid band. **BrowseComp 78% and τ²-bench Airline 76.5% are the strong figures**, and MCP-Tasks 59.1% is respectable. But **Terminal-Bench 2.1 is 66.7% (21.3 points under the reference), τ³-bench is 18.9% (near-floor on the banking harness), and GDPval-AA is 1,211 Elo / 33.1% normalized against the 1,750 reference.** **OSWorld-Verified, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and the AA Agentic Index have no figure at all**, so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 60/100.** At the bottom of the methodology's mid band. **GPQA-D 89.5% misses the 90%+ reference by 0.5 points — the narrowest miss in this batch — and the exam and competition-maths cluster is genuinely strong: AIME26 95.8%, AIME 2025 96.1%, HMMT 87.1–95.4%, Apex Shortlist 88.4%, MMLU-Redux 94.5%, C-Eval 94%.** The distinctive property is reliability: **AA-Omniscience index 4.0 (positive) with a 30.0% hallucination rate — the sixth-lowest in this research series.** Capped by **AA-HLE 29.2–30.7% (under 40%), CritPt 10.9%, AA Intelligence Index 13.6% (second-lowest here), AA-LCR 68.6% (weakest here), and the missing ARC-AGI, MRCR and FrontierMath** — so composite depth and two reasoning references are entirely unmeasured.
- **Context window: 92/100.** **1M tokens** per BenchLM, models.dev and cloudprice, which would place it in the methodology's ≥1M tier. Scored at 92 rather than 95+ for two reasons: **AA-LCR is 68.6%, the weakest in this batch, so the window is demonstrably the least usable at depth of any 1M model here; and llm-stats independently records 262K, a 4x conflict on the single most deployment-relevant spec.** Held at 92 because the 1M reading is corroborated by three trackers against one, and no MRCR or GraphWalks figure exists on either reading.
- **Multimodal: 78/100.** Text, image and video in with text out, scored at the top of the methodology's 60–70 band and into the 75–90 tier on a genuinely good visual suite: **V\* 85.6%, OmniDocBench 88.8%, CharXiv 80.8%, MMMU 84.3%, MathVision 78.2%, AA-MMMU-Pro 75.4%**. Held at the tier's lower bound for two specific reasons: **BabyVision 29.6% is near-floor and sits in stark contrast to the rest of the suite**, and **video understanding — explicitly named in the model card as a capability — has no measured figure at all** (Video-MME, VideoMMMU and MMVU all absent). Note this is a **provenance gap, not a demonstrated weakness**: the claim is unverifiable rather than contradicted.
- **Coding: 66/100.** Mid-band. **LiveCodeBench v6 88.2% is strong, SWE-bench Verified 71.1% and SWE Multilingual 67.7% are respectable mid-frontier repair figures**, and SWE-bench Pro 51.8% is mid. Capped by SWE-bench Verified sitting 13.9 points under the 85%+ terminal reference, **AA-SciCode 47.8% (under 55%), NL2Repo 32.0%, and the total absence of DeepSWE, the AA Coding Index, Vibe Code Bench, FrontierCode and Terminal-Bench 4.0** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 92/100.** **~$0.20/$0.10/$1.00 per 1M** sits between the methodology's ~$0.60/$2.20 (≈92) and free-tier anchors, and — decisively — **open weights under OpenMDW-1.1 with only 12B active parameters of 120B total** mean inference cost scales with the 12B active count, one of the most favourable ratios in this research series. Held at 92 rather than higher because **the pricing record is itself conflicted: llm-stats carries ~$0.20/$1.00 while models.dev records $0.00/$0.00, almost certainly a free NIM trial tier rather than a permanent rate** — so the rate must be verified. No Zen free tier is recorded.
- **Overall Score: 71/100.** (58 + 60 + 92 + 78 + 66) / 5 = 70.8 → **71**. Recommendation: **the best open-weight vision-language value in this batch, and a genuinely unusual architecture.** A 120B/12B-active **hybrid Mamba-2 + MoE + attention model with a C-RADIO vision encoder and a 1M window**, distilled from Nemotron 3 Ultra, scoring BrowseComp 78%, LiveCodeBench v6 88.2%, GPQA-D 89.5%, V\* 85.6% and OmniDocBench 88.8% at ~$0.20/$1.00 with open weights — that combination has no direct analogue in this research series. Three cautions: **its long-context reasoning is the weakest of any 1M model here (AA-LCR 68.6%)** and the window figure itself is conflicted (1M on three trackers vs 262K on llm-stats), so verify before planning long-document work; **video understanding is named as a capability but entirely unmeasured**; and **its agentic layer is mid** (τ³-bench 18.9%, Terminal-Bench 2.1 66.7%, no AA Agentic Index), so it is not an autonomous agent. Note also that **NVIDIA publishes both a BF16 and an NVFP4 variant** and only the BF16 carries a BenchLM score.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using NVIDIA's own BF16 model card as the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against **BenchLM's 28-row catalog under its canonical slug `nemotron-3-5-super-vl-120b-a12b`** — which attributes the independent numbers to Artificial Analysis, Qwen's Qwen3.6-Plus and Qwen3.5-397B-A17B comparison tables, the JobBench paper, Gert Labs, ResearchClawBench and SWE-Rebench — plus **five independent write-ups** (llm-stats, cloudprice, models.dev, canitrun and benchmarklist) for identity, architecture, licence, release date and pricing, and NVIDIA's NIM model card. **A lookup trap is recorded: the repo folder spelling `nemotron-3.5-super-vl` 404s on BenchLM and the full param-size slug `nemotron-3-5-super-vl-120b-a12b` had to be found via search; the repo folder name is also confusable with the param-size convention.** Three conflicts are recorded rather than resolved: **the context window (1M per BenchLM, models.dev and cloudprice against 262K per llm-stats — a 4x discrepancy on the model's most deployment-relevant spec); the pricing (~$0.20/$0.10/$1.00 per llm-stats against $0.00/$0.00 per models.dev, almost certainly a free NIM trial tier); and HLE at 29.2% (vendor) against 30.7% [AA], with the independent run above the vendor.** The architecture is recorded in full because it has no analogue in this research series: **a hybrid Mamba-2 + mixture-of-experts + attention design with a C-RADIO vision encoder, initialised from Nemotron 3 Super Base and distilled from Nemotron 3 Ultra.** The **BabyVision 29.6% against V\* 85.6% / OmniDocBench 88.8% contrast** within the same visual suite is stated as an internal inconsistency rather than averaged, and the **total absence of any video benchmark for a model that names video understanding as a capability** is recorded as a provenance gap rather than a demonstrated weakness. The 0.5-point GPQA-D miss is attributed as the batch's narrowest. Missing benchmarks (OSWorld-Verified, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, AA AutomationBench, ARC-AGI, MRCR, FrontierMath, DeepSWE, AA Coding Index, Vibe Code Bench, FrontierCode, Video-MME, VideoMMMU, MMVU, ExtractBench, ZeroBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16 model card (primary source)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)
  - [NVIDIA NIM — Nemotron 3.5 Super VL 120B A12B model card (architecture, NVFP4 quantisation, stated capabilities)](https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b/modelcard)
  - [NVIDIA docs — API reference for the NVFP4 release](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)
  - [BenchLM — Nemotron 3.5 Super VL 120B A12B benchmark scores (28 rows, 49.26/100, #105/1015; canonical param-size slug)](https://benchlm.ai/models/nemotron-3-5-super-vl-120b-a12b)
  - [Artificial Analysis — Nemotron 3.5 Super VL](https://artificialanalysis.ai/models/nemotron-3-5-super-vl)
  - [LLM Stats — release date, licence, pricing, 262K context (the conflicting reading)](https://llm-stats.com/models/nemotron-3.5-super-vl-120b-a12b)
  - [CloudPrice — 1.0M context, provider pricing](https://cloudprice.net/models/nvidia-nemotron-super-3-5-120b-a12b-vl)
  - [Models.dev — 1,048,576 context, 8,192 output, $0.00/$0.00 (the conflicting pricing)](https://models.dev/models/nvidia/nemotron-3.5-super-vl-120b-a12b/)
  - [canitrun.dev — hybrid Mamba-2/MoE/attention architecture, C-RADIO encoder, OpenMDW-1.1, 2026-10-15 release](https://canitrun.dev/models/nemotron-3.5-super-vl/)
  - [benchmarklist.com — architecture and release details](https://benchmarklist.com/models/nvidia-nemotron-3.5-super-vl-120b-a12b/)
  - [Openrouter — Nemotron 3.5 Super VL benchmarks](https://openrouter.ai/nvidia/nemotron-3.5-super-vl)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [JobBench paper](https://arxiv.org/abs/2605.26329)
  - [SWE-Rebench leaderboard](https://swe-rebench.com/?insight=sep_2025)
  - See also: [`model/nemotron-3-ultra/`](nemotron-3-ultra.md) — the teacher model this checkpoint was distilled from (BenchLM 47.40); [`model/nemotron-3-super-100b/`](nemotron-3-super-100b.md) — the base it was initialised from
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
