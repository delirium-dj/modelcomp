# Nemotron 3.5 Bolt 74B-A9B — findings by Step 5 Preview

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B. NVIDIA's **open-weight 74B-total / 9B-active MoE** (a 12.2% activation ratio), scored here in its **24GB quantised variant** — BenchLM's canonical slug is `nemotron-3-5-bolt-74b-a9b` and it tracks a separate `-BF16` sibling with no computed score. BenchLM scores it **42.92/100, #131 of 1,015** with **13 benchmarks**.
- **Short description:** A small efficient MoE with one genuinely notable figure — **PinchBench 87.8%**, the strongest agentic figure in this batch — set against a near-floor profile elsewhere: **τ³-bench 17.0%, GDPval-AA 24.0% normalized, CritPt 4.3%, AA-HLE 24.7%, AA-SciCode 39.7%**. Its defining property is the **24GB quantised build**, which makes a 74B model deployable on a single consumer accelerator.
- **Provider / access:** **Open weights** on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`, plus a `-BF16` variant), NVIDIA NIM / build.nvidia.com, and self-hosting.
- **Release / knowledge:** release date not restated; the 3.5 Bolt generation is NVIDIA's 2026 efficiency line. **Knowledge cutoff not disclosed.**
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (Hugging Face); `nemotron-3-5-bolt-74b-a9b` (BenchLM canonical); `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16` (the BF16 sibling).
- **Context window:** **256,000 tokens** — a quarter of the current 1M standard, though **AA-LCR is 69.7%**, so the window is measurably usable.
- **Modalities:** **text in; text out** — no visual or multimodal benchmark exists in the 13-row catalog.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights with a 24GB quantised build provide the cheapest self-hosting escape in this batch.**
- **Architecture:** **open-weight sparse MoE, 74B total / 9B active** — a 12.2% activation ratio, and the 24GB quantisation is the model's defining engineering property.

### Raw benchmarks found

NVIDIA's own 24GB model card is the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis supplying the independent rows. 13 benchmarks total.

Agent / tool use — **one strong figure, one near-floor**:

- **PinchBench: 87.8%** (vendor) — the strongest agentic figure in this batch
- **BrowseComp: 66.8%** (vendor); WebArena: 50.9% (vendor); **MCP Atlas: 52.2%** (vendor)
- **Terminal-Bench 2.1: 51.0%** (vendor) — 37 points under the 88%+ reference
- **τ³-bench: 17.0%** (vendor) — near-floor on the banking harness
- **GDPval-AA: 24.0% normalized** [AA]
- **Terminal-Bench 2.0/4.0, τ²-bench, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, AA AutomationBench, AA ITBench: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **thin, and near-floor on depth**:

- **GPQA-D: 86.4%** (vendor) — fails the 90%+ reference by 3.6 points
- **HLE w/o tools: 25.3%** (vendor) / **AA-HLE 24.7%** [AA] — fails the 40%+ reference by ~15 points on both
- **AA-LCR: 69.7%** [AA] — decent long-context reasoning; **CritPt: 4.3%** [AA] — near-floor
- **ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **composite depth, reliability and all mathematics are entirely unmeasured**

Coding:

- **AA-SciCode: 39.7%** [AA] — 15.3 points under the 55%+ reference
- **SWE-bench (all variants), LiveCodeBench, DeepSWE, AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found** — so the 85%, 74%, 70% and 55% references are all unmeasured

Multimodal:

- **No multimodal benchmark of any kind** — the model is text in / text out

### Normalized scores (1–100)

- **Tool use: 58/100.** At the methodology's mid band's upper edge, and the model's most contradictory dimension. **PinchBench 87.8% is the strongest agentic figure in this batch** and a genuinely good result, with **BrowseComp 66.8%** and **MCP Atlas 52.2%** corroborating a real browsing/orchestration substrate. Against that, **Terminal-Bench 2.1 51.0% is 37 points under the reference, τ³-bench 17.0% is near-floor and GDPval-AA is 24.0% normalized**, and **Terminal-Bench 2.0/4.0, τ²-bench, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and the AA Agentic Index have no figure at all** — so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 58/100.** Below the methodology's mid band, and thin. **GPQA-D 86.4% is 3.6 points under the 90%+ reference and AA-LCR 69.7% is decent long-context reasoning.** Capped by **AA-HLE 24.7% (15.3 under the 40% reference), CritPt 4.3% (near-floor), and the total absence of the AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro and FrontierMath** — so composite depth, reliability and all mathematics are unknown.
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 because **AA-LCR is 69.7%** — decent, so the window is measurably usable. Held below the ≥1M tier because it is a quarter of the current standard, no MRCR or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor: the model is text in / text out.** There is no image, audio or video input, so the dimension does not exist. Scored at 50 rather than lower because the absence is a verified design choice and text-out is a real capability.
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** The only coding row is **AA-SciCode 39.7%**, which is near-floor and not enough to establish a level. **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, the AA Coding Index, Vibe Code Bench, Terminal-Bench and FrontierCode have no figure at all**, so the 85%, 74%, 70% and 55% references are unmeasured.
- **Cost efficiency: 96/100.** **No rate card is published in any source checked**, so the score rests on the architecture rather than a price: **open weights with a 12.2% activation ratio (9B active of 74B total), and — decisively — a 24GB quantised build that makes a 74B model deployable on a single consumer accelerator.** That is the cheapest genuine self-hosting profile measured in this batch. Held at 96 rather than 100 because no Zen free tier is recorded and no published rate to verify.
- **Overall Score: 60/100.** (58 + 58 + 85 + 50 + 50) / 5 = 60.2 → **60**. Recommendation: **the cheapest self-hostable 74B model in this batch, with one strong agentic figure and a near-floor profile elsewhere.** PinchBench 87.8% (the batch's strongest), BrowseComp 66.8%, GPQA-D 86.4% and AA-LCR 69.7% at **open weights and a 24GB build** make it a genuinely cheap local option for browsing-heavy and exam-style work. Two hard cautions: **its coding and execution layers are essentially unmeasured or near-floor** (AA-SciCode 39.7%, τ³-bench 17.0%, Terminal-Bench 2.1 51.0%, no composite agentic index), so it must not be used as a coding or autonomous-agent model; and **CritPt 4.3% with no reliability measurement of any kind** makes it unsuitable as a factual assistant. Note it scores **below its own Super VL sibling (49.26, refreshed in an earlier batch)**, which is the better Nemotron buy unless the 24GB build is decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using NVIDIA's own 24GB model card as the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against BenchLM's 13-row catalog (which attributes the independent numbers to Artificial Analysis). The report's central finding is a **contradiction rather than a level: PinchBench 87.8% is the strongest agentic figure measured in this batch while τ³-bench 17.0% is near-floor and no AA Agentic Index exists at all** — recorded explicitly as the protocol-fluency-without-execution pattern confirmed across eleven models in this series, and carried into the recommendation rather than averaged away. The **batch-strongest PinchBench figure (87.8%)** and the **near-floor CritPt (4.3%)** are attributed rather than presented bare. The **13-benchmark evidence base** is stated plainly rather than hedged, and the coding and multimodal dimensions are scored at the methodology's placeholder floors with the absence of measurement stated explicitly. The **family inversion** (scoring below the Super VL sibling at 49.26) is recorded as an evidence-structure fact. The unpublished rate card is surfaced with its effect on the cost score stated as an architecture-based inference, with the 24GB quantised build as the decisive structural fact. Missing benchmarks (Terminal-Bench 2.0/4.0, τ²-bench, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, AA AutomationBench, AA ITBench, ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro, FrontierMath, SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB model card (primary source)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)
  - [BenchLM — Nemotron 3.5 Bolt 74B-A9B benchmark scores (13 rows, 42.92/100, #131/1015)](https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b)
  - [Artificial Analysis — Nemotron 3.5 Bolt 74B-A9B](https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b)
  - [Artificial Analysis — scicode leaderboard (source of the 39.7%)](https://artificialanalysis.ai/evaluations/scicode)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - See also: [`model/nemotron-3.5-bolt-74b-a9b-bf16/`](nemotron-3.5-bolt-74b-a9b-bf16.md) — the separately-tracked BF16 sibling with no computed BenchLM score, **not** the same identity; [`model/nemotron-3.5-super-vl-120b-a12b/`](nemotron-3.5-super-vl-120b-a12b.md) (49.26) — the Super VL sibling this model scores below, refreshed in an earlier batch
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
