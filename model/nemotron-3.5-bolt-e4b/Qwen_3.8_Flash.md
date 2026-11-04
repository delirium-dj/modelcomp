# Nemotron 3.5 Bolt E4B — findings by Qwen 3.8 Flash

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`; HF; Ollama `nemotron-3.5-bolt:e4b`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note (why un-excluded):** NVIDIA released Nemotron 3.5 Bolt E4B on **2026-10-23** — HF model card published (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` + BF16 variant), NVIDIA Research tech report (research.nvidia.com), Ollama library available (50.6K downloads), BenchLM page created (21/739 rows). The model exists, is verifiable, and is accessible. The prior `.excluded` (written when unreleased) is superseded by this first-pass.

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's **compact edge vision-language model** — 8B total / 4B effective parameters, post-trained from Google's **Gemma 4 E4B** architecture under the OpenMDW-1.1 license. Designed for fast local voice/device assistants, on-device agents, interactive personas, and embedded interfaces. Runs in **~4–6 GB VRAM** (Q4_K_M). Supports vision (CLIP projector 478M), audio input (305M encoder), multi-turn tool use, and optional thinking mode.
- **Provider / access:** **open weights** (HuggingFace `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` and BF16 variant; `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16-DFlash-NVFP4` for speculative decoding). Ollama `nemotron-3.5-bolt:e4b`. Available on NVIDIA NIM / build.nvidia.com.
- **Release / knowledge:** **October 23, 2026** (NVIDIA blog Oct 15 announced; E4B scheduled for Oct 23).
- **IDs:** `nemotron-3.5-bolt:e4b` (Ollama), `NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` (HF).
- **Context window:** **64,000 tokens** (confirmed by BenchLM page and mindstudio hands-on).
- **Modalities:** **Text + vision + audio in / text out** (CLIP-based vision projector, 305M audio encoder per Gemma 4 family architecture; supports "images, screenshots, charts, and documents" per Ollama README).
- **Pricing (as of 2026-11-04):** **Free** open weights (self-host, ~4–6 GB VRAM). OpenMDW-1.1 license. No hosted API pricing published as of report date.
- **Architecture:** 8B total / 4B effective, Gemma4ForConditionalGeneration base, Mamba-2 hybrid per Bolt family; DFlash draft model (360M) for speculative decoding. Q4_K_M at 6.2 GB, BF16 at ~16 GB.

### Raw benchmarks found

> **Provenance:** **Vendor (NVIDIA model card)** — 20 of 21 BenchLM rows sourced from `huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`. **One independent data point:** AA-IFBench 61.1% (Artificial Analysis). AA Intelligence Index page returns 404 (no composite measurement). BenchLM: 21/739, **unranked** (no overall computed). Released only 12 days ago.

- **BFCL v3:** 67.3% (vendor)
- **When2Call Multi-Turn:** 60.50% (vendor)
- **ToolSandbox:** 74.13% (vendor)
- **τ²-bench:** 52.3% (vendor)
- **RelyToolBench:** 69.29% (vendor)
- **RULER (64K):** 85.76% (vendor)
- **LongMemEval:** 69.92% (vendor)
- **LongBench v2:** 48.7% (vendor)
- **GaRAGe:** 40.73% (vendor)
- **RAGTruth:** 77.88% (vendor)
- **MultiChallenge:** 55.60% (vendor)
- **Brevity Benchmark:** 82.84% (vendor)
- **EQ-Bench 3:** 38.15% (vendor)
- **RoleBench:** 71.21% (vendor)
- **RoleMRC:** 79.12% (vendor)
- **IHEval:** 82.40% (vendor)
- **AgentIF:** 22.95% (vendor — very low for agentic coding)
- **InverseIFEval:** 45.26% (vendor)
- **StructEval-T:** 79.99% (vendor)
- **SysBench:** 67.22% (vendor)
- **AA-IFBench:** 61.1% (**independent**, Artificial Analysis)
- **NVIDIA benchmark chart composite:** 70.2 ("smart and fast" corner, vs Gemma 4 26B A4B higher but slower)
- **MindStudio hands-on:** Failed agentic debugging (fabricated success); competent on physics/logic/scheduling; shallow multilingual coverage

### Normalized scores (1–100)

- **Tool use: 55/100.** BFCL v3 67.3%, ToolSandbox 74.13%, τ² 52.3% — a solid tool-calling profile for a 4B-effective model. The breadth of NVIDIA's agentic suite (5 benchmarks) is unusual for a fresh edge release, but **all vendor-sourced**. AA-IFBench 61.1% (independent) confirms the model follows structured instructions competently. Mid-band for a local edge assistant; not a frontier agent.
- **Reasoning: 48/100.** No GPQA, HLE, AIME, or absolute reasoning benchmark published. Derived from Gemma 4 E4B (AA Index 8.9 in registry). RULER 85.76% at 64K confirms strong context-comprehension reasoning, but this is retrieval/reading within the window, not novel reasoning. EQ-Bench 3 (38.15) is low. StructEval-T (79.99) and IHEval (82.40) show format compliance, not depth. MindStudio's physics/logic success is anecdotal. Score reflects the E4B-derived reasoning tier, modestly uplifted for NVIDIA's post-training focus. **Provisional** — no independent reasoning measurement.
- **Context window: 52/100.** **64K is small** by 2026 standards (50K–100K = 45–55 band). RULER 85.76% demonstrates the window is well-utilized, and LongMemEval 69.92% / LongBench v2 48.7% are reasonable within the constraint. But 64K structurally limits document-heavy and multi-file agentic work. No MRCR/needle test published.
- **Multimodal: 45/100.** **Text + vision + audio input** confirmed by architecture (CLIP projector 478M, audio encoder 305M). Ollama README lists vision and audio capabilities. This is genuinely multimodal — well above the text-only 15 floor. However, 4B-effective limits vision/audio reasoning depth (base Gemma 4 E4B's multimodal scores were mid-band; no MMMU-Pro row for Bolt E4B specifically). No video input confirmed (vs the base family's video-as-frames). No image output.
- **Coding: 30/100.** **No SWE-bench, LiveCodeBench, Terminal-Bench, or SciCode row published for this model.** AgentIF 22.95% is very low. MindStudio's hands-on debugging test showed the model "skipped the actual bug investigation and falsely declared the issue fixed" — a confabulation failure mode. For a 4B-effective edge model focused on conversation, coding is clearly not the design target. Score at evidence floor.
- **Cost efficiency: 100/100.** Free OpenMDW-1.1 open weights, ~4 GB VRAM (Q4_K_M), runs on Jetson, phones, and modest laptops. Near-zero cost, fully private, no API bill. Speculative decoding via DFlash draft accelerates inference. Cost excluded from Overall.
- **Overall Score: 46/100.** Half-up mean of the five quality dims (55+48+52+45+30)/5 = 230/5 = 46.0. Best fit: **fast, local, privacy-preserving conversational agents** on constrained hardware (RTX edge, Jetson, laptops) — voice interfaces, multi-turn tool use for simple workflows, and structured instruction following at ~4 GB footprint. **Not** a coding agent, not a deep reasoner, and the 64K window caps document-heavy work. The score is **provisional**: anchored almost entirely on **vendor-reported benchmarks** (NVIDIA model card) with only one independent data point (AA-IFBench 61.1%). The DFlash speculative-decoding companion and the model's 50.6K Ollama downloads confirm real adoption. Positioned above `nemotron-3.5-lightning-free` (Overall 44, text-only, 30B-A3B) due to superior tool-use and multimodal, despite fewer active parameters.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04
- Method: public internet research — **NVIDIA research page** (research.nvidia.com, tech report published Oct 23, 2026), **HF model cards** (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, BF16, DFlash variants), **NVIDIA blog** (blogs.nvidia.com/blog/nemotron-3-5-super-vl/, Oct 15: "optimized for intelligence per GB"), **Ollama** (`nemotron-3.5-bolt:e4b`, 50.6K downloads, updated 1 week ago, 7.2GB Q4_K_M), **BenchLM** (21/739 rows, unranked, all vendor + one AA), **mindstudio.ai** hands-on review (Oct 25: benchmark-vs-reality gap, agentic debugging failure, reasoning competence, multilingual shallow), **eesel.ai** (Oct 26: "70.2 in the smart and fast corner"), **cellcog.ai** (Oct 15: "for voice assistants and embedded agents"), **unite.ai** (Oct 15: "scheduled for October 23, 2026"), **marktechpost** (Oct 23: release confirmation). AA Intelligence Index page 404 (`nemotron-3-5-bolt-e4b`). Scores are normalized 1–100 interpretations, applied under a **heavy vendor-only discount**: this model shipped 12 days ago, only one independent measurement (AA-IFBench) exists, and the benchmark suite breadth (21 rows) is impressive but uniformly vendor-sourced. The prior `.excluded` (Oct 17, written when the model was unreleased) is superseded by this first-pass.
- Revisit trigger: an **independent** AA Intelligence Index row (when AA adds the model to v5), a third-party SWE-bench/Terminal-Bench run, or a published hosted-API pricing. The SWE-bench and agentic-coding gap is the most significant missing measurement.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
