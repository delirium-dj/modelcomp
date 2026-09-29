# Llama 3.2 Vision Instruct — findings by Muse Spark 1.3

- Source: Meta/Llama-3.2-Vision-Instruct (`opencode/llama_3.2_vision_instruct`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B / 90B)
- **Short description:** Meta open vision-language models for image reasoning, document/chart understanding, captioning, and visual grounding. Top use case is on-device and local visual question answering.
- **Provider / access:** Open weights via Hugging Face (`meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct`) + Meta AI assistant; deployable locally via torchchat, fine-tunable via torchtune. Chat Completions-style API via serving stacks.
- **Release / knowledge:** 2024-09-25 release (Meta Connect 2024 blog); knowledge cutoff December 2023 (per vendor model card).
- **IDs:** `opencode/llama_3.2_vision_instruct` (folder does not specify 11B vs 90B — both variants reported below; scores based on the 11B conservatively, stated explicitly)
- **Context window:** 128K tokens (per vendor model card, both sizes).
- **Modalities:** text + image in; text out; no native video/audio input; tool calls unverified for the vision variants (vendor tool-use claims cover the 1B/3B text models, not these).
- **Pricing (as of 2026-09-24):** Open weights (Llama Community License): self-hosting free plus GPU rental; no verified metered Zen price found.
- **Architecture:** 11B (10.6B) and 90B (88.8B) multimodal transformers trained on 6B image-text pairs; GQA; first Llama architecture with image reasoning support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 / 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **32.8% (11B) / 46.7% (90B)** (Meta vision model card, internal eval library, 0-shot)
- HLE: **no verified public score found** (model predates the benchmark)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMLU (CoT): **73.0% (11B) / 86.0% (90B)** (Meta vision model card)
- MATH (CoT): **51.9% (11B) / 68.0% (90B)** (Meta vision model card)
- MGSM (CoT): **68.9% (11B) / 86.9% (90B)** (Meta vision model card)
- MMMU val (CoT): **50.7% (11B) / 60.3% (90B)** (Meta vision model card); MMMU-Pro Standard **33.0% / 45.2%**, Vision **23.7% / 33.8%**; MathVista testmini **51.5% / 57.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 128K context per vendor card with no published retrieval curve.

Vision detail (for the Multimodal score):

- VQAv2 test: **75.2% (11B) / 78.1% (90B)**; DocVQA test ANLS **88.4% / 90.1%**; ChartQA test CoT **83.4% / 85.5%**; AI2 Diagram **91.1% / 92.3%** (all Meta vision model card, 0-shot). Competitive with Claude 3 Haiku and GPT-4o-mini on image recognition per Meta blog (Sept 2024).

### Normalized scores (1–100)

> Size note: scores below use the 11B variant (conservative, since the folder ID does not specify a size); 90B figures are cited alongside and are higher on every row.

- **Tool use: 40/100.** Zero agentic harness numbers (no TB/Tau/GDPval/Claw) for the vision variants; vendor tool-use claims cover the 1B/3B text models only — capped at chat-level agency.
- **Reasoning: 55/100.** MMLU 73.0% plus MATH 51.9% show mid-tier 2024 text reasoning; capped by GPQA 32.8% and no HLE-era benchmark.
- **Context window: 70/100.** 128K window was top-tier at its Sept 2024 release; capped by no verified retrieval curve and two generations behind current 1M norms.
- **Multimodal: 75/100.** VQAv2 75.2% plus DocVQA 88.4% and ChartQA 83.4% show strong 2024 open vision-text; capped by MMMU-Pro Vision 23.7% and text-only output.
- **Coding: 45/100.** Zero coding-benchmark numbers (no SWE/LiveCode/SciCode); 2024 chat-vision tuning, not coding-tuned — capped at generalist level.
- **Cost efficiency: 85/100.** Open weights with local deployment (11B fits single-GPU) and broad ecosystem support; Llama Community License terms cap below fully permissive Apache-2.0 weights.
- **Overall Score: 57/100.** Mean of the five non-cost dims (40+55+70+75+45)/5 = 57.0 → 57; best-fit local visual Q&A and document understanding where open weights outweigh agentic limits.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-24
- Method: public internet research (Meta Llama 3.2 vision model card on GitHub and Hugging Face, Meta launch blog 2024-09-25, NVIDIA NIM model page); scores are normalized 1–100 interpretations (11B-based), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
