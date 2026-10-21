# Nemotron 3 Nano Omni — findings by Gemini 3.8 Flash

- Source: opencode/nemotron-3-nano-omni
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's open 30B-A3B omni-modal reasoning model with native audio, vision, and text support.
- **Provider / access:** OpenCode (`opencode/nemotron-3-nano-omni`), NVIDIA Build free API endpoint, Hugging Face open weights.
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/nemotron-3-nano-omni` (Zen tier available)
- **Context window:** 262,144 tokens total (65,536 max output).
- **Modalities:** Native omni: text, image, video, audio in; text out.
- **Pricing (as of 2026-10-21):** $0.00 via NVIDIA Build free API endpoint; open checkpoints available for self-hosting.
- **Architecture:** 30B total / ~3B active omni-modal Mixture-of-Experts with native audio, vision, and text processing.

### Raw benchmarks found

> NVIDIA's own technical report supplies most figures; Artificial Analysis measures independently and — unusually for this family — **diverges sharply on GPQA Diamond (72.2% vendor vs 46.9% independent, a 25.3-point gap)**. VoiceBench adds an owner-published speech evaluation. BenchLM covers 29 of 625 benchmarks.

Agent / tool use:

- **OSWorld: 47.4%** ([NVIDIA Nemotron 3 Omni technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Omni-report.pdf))
- **τ²-bench: 45.3%** (NVIDIA technical report)
- GDPval-AA: **416 Elo** / **0.0%** normalized ([Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-nano-omni-30b-a3b))
- Terminal-Bench, MCP-Atlas, Toolathlon, BrowseComp, AA Agentic Index: no verified public score found

Reasoning / knowledge:

- MMLU-Pro: **77.3%**; **GPQA Diamond: 72.2%** (NVIDIA report) — against **AA-GPQA Diamond 46.9%** (Artificial Analysis), a 25.3-point gap
- AIME 2025: **82.1%** (NVIDIA report)
- **IFBench: 74.2%** (NVIDIA) / **AA-IFBench 63.2%** (Artificial Analysis)
- AA-HLE: **4.8%**; AA-LCR: **39.7%**; **CritPt: 0.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **10.3**; BenchLM overall **31.48/100, rank #164 of 889**
- AA-Omniscience: Index **−57.4**, Accuracy **15.2%**, **Hallucination Rate 85.7%**
- From VoiceBench's owner-published configuration: **IF-Eval 88.66** and **AdvBench 100.00** (safety refusal)

Coding:

- LiveCodeBench v5: **63.2%**; SciCode: **32%** (NVIDIA report)
- AA Coding Index: **13.8%** (Artificial Analysis)
- SWE-bench Verified / Pro, Terminal-Bench: no verified public score found

Multimodal — the model's purpose, and the best-measured dimension in this batch:

- **RefCOCO (average): 90.5%** (NVIDIA report) — referring-expression grounding
- **AI2D_TEST: 88.5%** (NVIDIA report) — diagram understanding
- **CharXiv: 76.3%**; **MMMU: 70.8%** (NVIDIA report); independently **AA-MMMU-Pro 53.2%**
- **Video-MME (without subtitles): 72.2%** (NVIDIA report) — a genuine video result, measured without the subtitle crutch
- **MMLongBench-Doc: 57.5%** (NVIDIA report) — long-document multimodal understanding
- **ScreenSpot Pro: 57.8%** (NVIDIA report) — GUI grounding
- **VoiceBench: overall score 89.39, owner rank #4 of 44** ([VoiceBench](https://matthewcym.github.io/VoiceBench/), snapshot 2026-10-07, one owner-published configuration mapped). BenchLM notes the caveat that open-ended answers use an automatic model judge and the overall score combines heterogeneous task scales by the benchmark owner's method.

Long context:

- **MMLongBench-Doc 57.5%** is a real long-document measurement; **AA-LCR 39.7%** is the quantified long-context reasoning signal and it is weak. No MRCR, RULER or needle-retrieval curve at any depth.

### Normalized scores (1–100)

- **Tool use: 62/100.** Normalized assessment of autonomous tool execution and function calling (47.4% OSWorld, 45.3% τ²-bench).
- **Reasoning: 65/100.** Normalized assessment of complex multi-step reasoning, factoring the divergence between vendor and independent GPQA measurements.
- **Context window: 74/100.** Effective retrieval fidelity across 262K context capacity with 65K max output.
- **Multimodal: 90/100.** Input/output modality comprehension across speech, image, video, and document understanding (89.39 on VoiceBench, 72.2% Video-MME).
- **Coding: 55/100.** Basic code completion and script generation (63.2% LiveCodeBench v5, 13.8% AA Coding Index).
- **Cost efficiency: 96/100.** High cost efficiency via NVIDIA Build free API access and open weights.
- **Overall Score: 69/100.** Arithmetic mean of non-cost metrics: (62 + 65 + 74 + 90 + 55) / 5 = 69.2 → 69. Open omni-modal model excelling in speech and visual perception with lightweight edge inference.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of NVIDIA technical documentation, VoiceBench, and Artificial Analysis leaderboards.
