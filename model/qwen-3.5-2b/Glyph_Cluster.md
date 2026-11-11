# Qwen 3.5 2B — findings by Glyph Cluster

- Source: Alibaba Qwen (`Qwen/Qwen3.5-2B`, `opencode/qwen-3.5-2b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 2B
- **Short description:** Alibaba's 2B-parameter dense multimodal Qwen 3.5 model for efficient text and vision-language tasks, supporting long context and tool/agentic use in compatible runtimes.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-2B`, Apache 2.0). Usable via Transformers, vLLM, SGLang, KTransformers, and inference providers; repo meta lists `opencode/qwen-3.5-2b`.
- **Release / knowledge:** Qwen3.5 family announced February 2026 (per HF model card/blog context); knowledge cutoff not explicitly stated on fetched HF page.
- **IDs:** `Qwen/Qwen3.5-2B` (HF), `opencode/qwen-3.5-2b` (repo/meta).
- **Context window:** 262,144 tokens natively (per HF model card); repo meta notes 81,920 max output on some provider rows.
- **Modalities:** Text and image input (image-text-to-text); video input supported in compatible serving setups per HF examples; text output.
- **Pricing (as of 2026-11-11):** Open weights (Apache 2.0, self-host $0). Repo meta notes free hosted lanes available; hosted pricing varies by provider.
- **Architecture:** Dense causal language model with vision encoder (early-fusion multimodal foundation), 2B parameters, 24 layers, hybrid Gated DeltaNet/attention layout, 262K native context, MTP training mentioned (per HF model card).

### Raw benchmarks found

> Sources: Hugging Face model card benchmark tables and eval results for `Qwen/Qwen3.5-2B`. Values vary by mode (thinking/non-thinking) and evaluation setting.

Agent / tool use:

- BFCL-V4 (general agent, thinking): **43.6** (HF table).
- TAU2-Bench (general agent, thinking): **48.8** (HF table; official setup note on airline domain fixes).
- Terminal-Bench 2.1: **no verified public score found**.
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- MMLU-Pro (instruct/non-thinking): **55.3** (HF table; thinking 66.5).
- MMLU-Redux (instruct): **69.2**.
- GPQA (thinking): **51.6** (HF table); GPQA Diamond eval result shown as **44.95** on HF eval panel.
- SuperGPQA (instruct): **30.4**.
- MMMU (vision-language): **64.2 / 64.2** (thinking/non-thinking, HF table).
- MMMU-Pro Vision (eval result): **50.3**.
- MathVista (mini): **76.7 / 73.9** (thinking/non-thinking).
- HLE / LCR / MLCR / CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / Omniscience: **no verified public score found**.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found**.

Long context:

- AA-LCR (thinking): **25.6** (HF table).
- LongBench v2 (thinking): **38.7**.
- 262,144-token native context window reported; specific MRCR/RULER/GraphWalks scores: **no verified public score found**.

Instruction following / multimodal (supporting evidence):

- IFEval (instruct): **61.2** (thinking 78.6); IFBench (thinking) **41.3**.
- MMBenchEN-DEV-v1.1: **83.3 / 81.3**.
- AI2D_TEST: **83.3 / 81.5**.
- OCRBench: **84.5 / 85.4**.
- DocVQA-like document understanding not directly listed as DocVQA score; MMLongBench-Doc **45.4 / 38.8**.

### Normalized scores (1–100)

> Scores are normalized interpretations for a small 2B multimodal model, reflecting strong efficiency for size but limited absolute capability versus larger models. Overall = half-up mean of the five quality dimensions (Cost efficiency excluded).

- **Tool use: 52/100.** Reported agentic/tool-use signals (BFCL-V4 43.6, TAU2-Bench 48.8) show emerging capability, but no verified results on stronger agentic coding/tool suites requested; suitable for lightweight tool-assisted tasks.
- **Reasoning: 55/100.** Decent reasoning for 2B scale (MMLU-Pro 55.3/66.5, GPQA ~45–52 depending on eval, strong MathVista 76.7) but limited on harder knowledge/reasoning benchmarks and prone to thinking-loop issues noted by vendor.
- **Context window: 74/100.** 262K native context is impressive for size, though long-context performance is modest (AA-LCR 25.6, LongBench v2 38.7), capping practical long-context reliability.
- **Multimodal: 68/100.** Good image/video-capable understanding for a 2B model (MMMU 64.2, MMMU-Pro Vision 50.3, MathVista 76.7, strong OCR/diagram/document signals) with text-only output; capped by small model capacity and mixed results on complex visual/spatial tasks.
- **Coding: 42/100.** No verified coding benchmark scores (SWE-bench, LiveCodeBench, etc.) were found; likely useful for basic coding assistance but not evidenced as a strong coding model.
- **Cost efficiency: 99/100.** Very small open-weight Apache 2.0 model enabling cheap/free self-hosting and low-latency deployment. Not included in Overall.
- **Overall Score: 58/100.** Mean of the five non-cost dimensions (Tool 52, Reasoning 55, Context 74, Multimodal 68, Coding 42) = 291/5 = 58.2, rounded to 58 (half-up). Best fit: low-cost on-device/edge multimodal assistance, lightweight reasoning, and prototyping where small footprint matters more than top-tier coding or agentic reliability.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public-source synthesis from fetched Hugging Face model card/eval results and repo metadata; web search unavailable in-session (HTTP 402). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-2B](https://huggingface.co/Qwen/Qwen3.5-2B)
  - [Qwen3.5 blog](https://qwen.ai/blog?id=qwen3.5)
  - [Qwen Chat](https://chat.qwen.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
