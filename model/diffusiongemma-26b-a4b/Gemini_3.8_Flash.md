# DiffusionGemma 26B A4B — findings by Gemini 3.8 Flash

- Source: opencode/diffusiongemma-26b-a4b
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's experimental open-weights text-diffusion MoE (26B total / 3.8B active, Apache 2.0) generating 256-token blocks in parallel at ~1,500 tok/s; best for latency-sensitive local editing and code infilling.
- **Provider / access:** opencode/diffusiongemma-26b-a4b
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/diffusiongemma-26b-a4b (Zen tier available)
- **Context window:** 256K total (32K max output)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** Apache 2.0 open weights (self-host $0); hosted $0–$0.50/$0–$0.50 per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

**All figures are vendor-published.** Google ships the table with the autoregressive Gemma 4 26B A4B in the adjacent column, which is unusually useful: it isolates the diffusion tax on an identical base rather than comparing against some other model. Both instruction-tuned, both EB sampler. The third-party column is empty — there is **no** Artificial Analysis page, no BenchLM profile, and no independent harness run for this model anywhere, so nothing here is corroborated.

The paper also compares speed and quality against other text diffusion models (LLaDA 2.1 Flash 100B, Nemotron Diffusion 14B) and the proprietary Mercury 2 API, claiming a new Pareto frontier and a speed frontier that extends past the Gemma 4 AR family at every scale from E2B to 31B, even against models using multi-token prediction. It argues the large cut in total forward passes more than offsets the diffusion model's heavier individual passes.

Text & reasoning:

- MMLU-Pro: **77.6%** (Gemma 4 26B A4B: 82.6%)
- AIME 2026, no tools: **69.1%** (base: 88.3%)
- GPQA Diamond: **73.2%** (base: 82.3%)
- HLE, no tools: **11.0%** (base: 8.7%) — **the only axis where diffusion wins**
- HLE, with search: **11.9%** (base: 17.2%)
- MMMLU: **81.5%** (base: 86.3%)
- BigBench Extra Hard: **47.6%** (base: 64.8%)
- Artificial Analysis Intelligence Index / CritPt / Omniscience / LCR / IFBench: no verified public score found

Agent / tool use:

- Tau2 (average over 3 domains): **56.2%** (base: 68.2%)
- Function calling: **native**, documented by NVIDIA NGC and Model Garden
- Terminal-Bench 2.1 / TB Hard / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / BFCL-v4: **no verified public score found**

Coding:

- LiveCodeBench v6: **69.1%** (base: 77.1%)
- Codeforces ELO: **1429** (base: 1718)
- SWE-bench Verified / SWE-Pro / DeepSWE / SciCode / Vibe Code Bench / Coding Index: **no verified public score found**

Long context:

- MRCR v2 8-needle @ 128K (average): **32.0%** (base: 44.1%)
- No measurement at or beyond the advertised 256K window, and no needle test above 128K

Vision:

- MMMU-Pro: **54.3%** (base: 73.8%)
- MATH-Vision: **70.5%** (base: 82.4%)
- MedXPertQA (MM): **49.0%** (base: 58.1%)
- OmniDocBench 1.5 (average edit distance, lower is better): **0.319** (base: 0.149)
- Video-MME / LVBench: no verified public score found, despite video input being listed

Speed / cost per task:

- **~1,500 tokens/second** on a single NVIDIA H100 (technical report); **>1,000 tok/s** on H100 and **>1,100 tok/s** at low batch sizes on Hopper (DeepMind / NVIDIA); **up to 4× faster** token output than the AR family
- Fits within **24GB VRAM quantized** (RTX 4090 / 5090); native **NVFP4** support on Blackwell

### Normalized scores (1–100)

- **Tool use: 58/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 64/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 71/100.** Effective retrieval fidelity across context capacity (256K total (32K max output)).
- **Multimodal: 72/100.** Input/output modality comprehension (Text, image, video in; text out).
- **Coding: 62/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 96/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 65.4/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
