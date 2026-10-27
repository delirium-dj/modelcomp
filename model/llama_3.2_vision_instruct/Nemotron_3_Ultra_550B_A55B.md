# Llama 3.2 Vision Instruct — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (Llama-3.2-11B-Vision-Instruct / Llama-3.2-90B-Vision-Instruct)
- **Short description:** Meta's multimodal Llama models, released September 25, 2024. Two sizes: 11B and 90B (text + images in / text out). Built on Llama 3.1 text backbone with separately trained image encoder and cross-attention adapter. Pretrained on 6B image-text pairs. Instruction tuned on public vision datasets + 3M synthetic examples. Llama 3.2 Community License (commercial use permitted). Knowledge cutoff December 2023.
- **Provider / access:** Meta (official), Hugging Face (`meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct`), NVIDIA NIM, OpenRouter, Together AI, Fireworks AI, DeepInfra, Groq, Cerebras, OctoAI, Anyscale, AWS Bedrock, Azure AI, Google Vertex AI, IBM watsonx. Self-hosted (Llama 3.2 Community License).
- **Release / knowledge:** 2024-09-25 release; knowledge cutoff December 2023.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct` (HF). Llama 3.2 Community License.
- **Context window:** 128K tokens. Verified via Meta model card, NVIDIA NIM, OpenRouter, Artificial Analysis, Benchmark Atlas.
- **Modalities:** Text + image input; text output. **Native multimodal** (vision). Reasoning: no (non-reasoning model per Artificial Analysis). Tool calls: no (no native function calling per Artificial Analysis). JSON mode: no. Structured output: no.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Llama 3.2 Community License). VRAM: 11B ~22GB fp16 / ~6GB Q4; 90B ~180GB fp16 / ~48GB Q4. OpenRouter 11B: $0.10/M in, $0.40/M out. OpenRouter 90B: $0.60/M in, $1.80/M out. Together 11B: $0.10/$0.40. Fireworks 11B: $0.10/$0.40. DeepInfra 11B: $0.10/$0.40. Blended 11B ~$0.10–0.20/M in.
- **Architecture:** 11B or 90B dense. Llama 3.1 text backbone + ViT image encoder + cross-attention adapter. 128K context (RoPE). 6B image-text pairs pretraining. Llama 3.2 Community License (commercial use permitted).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

**FOCUS: 11B model (primary "llama_3.2_vision_instruct" entry)**

Agent / tool use:

- SWE-bench Verified / Pro / Terminal-Bench / Toolathlon / MCP-Atlas / PinchBench / ClawEval / τ²-Bench / BFCL / AutomationBench / OfficeQA / JobBench / BrowseComp / DeepSearchQA: **no scores** (non-agentic model, no tool calling)

Reasoning / knowledge (11B instruction-tuned, from Meta model card):

- MMLU (CoT): **73.0%** — Meta model card / HF / NVIDIA NIM / IBM
- MATH (CoT): **51.9%** — Meta model card / HF / NVIDIA NIM / IBM
- GPQA: **32.8%** — Meta model card / HF / NVIDIA NIM / IBM
- GPQA Diamond: **22.1%** (Artificial Analysis) — Artificial Analysis / OpenRouter
- HLE: **5.2%** (Artificial Analysis) — Artificial Analysis / OpenRouter
- IFBench: **30.4%** (Artificial Analysis) — Artificial Analysis / OpenRouter
- AA-LCR: **11.7%** (Artificial Analysis) — Artificial Analysis / OpenRouter
- CritPt: **0.0%** (Artificial Analysis) — Artificial Analysis / OpenRouter
- MGSM (CoT): **68.9%** — Meta model card / HF / NVIDIA NIM / IBM
- MMLU-Pro: **no score** for 11B Vision specifically
- AIME / MMLU-Redux / SuperGPQA / BBH / ZebraLogic: **no scores**

Coding:

- SciCode: **11.2%** (Artificial Analysis) — Artificial Analysis / OpenRouter
- Terminal-Bench Hard: **0.8%** (Artificial Analysis) — Artificial Analysis / OpenRouter
- LiveCodeBench: **21.4%** (Benchmark Atlas, 90B) — Benchmark Atlas
- HumanEval / MBPP / Codeforces / SWE-bench / Terminal-Bench 2.0/2.1: **no scores**

Long context:

- Native 128K context verified
- AA-LCR: **11.7%** (Artificial Analysis) — Artificial Analysis / OpenRouter
- RULER / MRCR / GraphWalks / LongBench / LOFT / MMLongBench: **no scores** for 11B Vision specifically

Multimodal (11B instruction-tuned, from Meta model card):

- MMMU (val, CoT): **50.7%** — Meta model card / HF / NVIDIA NIM / IBM
- MMMU-Pro Standard (10 opts): **33.0%** — Meta model card / HF / NVIDIA NIM / IBM
- MMMU-Pro Vision: **23.7%** — Meta model card / HF / NVIDIA NIM / IBM
- MathVista (testmini): **51.5%** — Meta model card / HF / NVIDIA NIM / IBM
- ChartQA (test, CoT): **83.4%** — Meta model card / HF / NVIDIA NIM / IBM
- AI2 Diagram (test): **91.1%** — Meta model card / HF / NVIDIA NIM / IBM
- DocVQA (test): **88.4%** (ANLS) — Meta model card / HF / NVIDIA NIM / IBM
- VQAv2 (test): **75.2%** — Meta model card / HF / NVIDIA NIM / IBM
- Text VQA (val): **73.1%** (relaxed accuracy) — Meta model card / HF / NVIDIA NIM / IBM
- DocVQA (val, unseen): **62.3%** (ANLS) — Meta model card / HF / NVIDIA NIM / IBM
- MMMU (val, 0-shot): **41.7%** (base) — Meta model card / HF / NVIDIA NIM / IBM
- ChartQA (test): **39.4%** (base) — Meta model card / HF / NVIDIA NIM / IBM
- InfographicsQA (val, unseen): **43.2%** (ANLS, base) — Meta model card / HF / NVIDIA NIM / IBM
- AI2 Diagram (test): **62.4%** (base) — Meta model card / HF / NVIDIA NIM / IBM
- OCRBench / HallusionBench / BLINK / MUIRBENCH / MMStar / MMBench: **no scores** for 11B Vision specifically (GLM-4.6V has these)

90B instruction-tuned (for reference):
- MMMU (val, CoT): **60.3%**, MMMU-Pro Standard: **45.2%**, MMMU-Pro Vision: **33.8%**, MathVista: **57.3%**, ChartQA: **85.5%**, AI2 Diagram: **92.3%**, DocVQA: **90.1%**, VQAv2: **78.1%**, MMLU: **86.0%**, MATH: **68.0%**, GPQA: **46.7%**, MGSM: **86.9%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 15/100.** No native function calling, no tool use benchmarks. Non-agentic model. Floor for non-agentic.
- **Reasoning: 40/100.** MMLU 73%, MATH 52%, GPQA 33%, GPQA Diamond 22%, HLE 5.2%, IFBench 30%, AA-LCR 12%, CritPt 0%. Decent MMLU/MATH but weak GPQA/HLE/CritPt. Non-reasoning model (no CoT training). Capped by GPQA 33%, HLE 5%, CritPt 0%, no reasoning training.
- **Context window: 75/100.** 128K native (128K tier = 70–75). AA-LCR 12% low. No RULER/MRCR/GraphWalks/LongBench/LOFT. Tier placement saves score.
- **Multimodal: 70/100.** Native vision (text+image in, text out). MMMU 51% (CoT), ChartQA 83%, AI2 Diagram 91%, DocVQA 88%, MathVista 52%, VQAv2 75%. Strong document/chart understanding. No video/audio. Capped by MMMU-Pro 33% (standard), MMMU-Pro Vision 24%, no video/audio.
- **Coding: 25/100.** SciCode 11%, Terminal-Bench Hard 0.8%, LiveCodeBench 21% (90B). Very weak coding. No HumanEval/MBPP/SWE-bench. Capped by Terminal-Bench 0.8% and SciCode 11%.
- **Cost efficiency: 85/100.** 11B: OpenRouter $0.10/$0.40, self-host free (Community License), ~22GB fp16 / ~6GB Q4. 90B: $0.60/$1.80, ~180GB fp16. Good value for 11B multimodal.
- **Overall Score: 45/100.** Mean of (15+40+75+70+25)/5 = 45.0 → 45. Queue shows 59.7 — gap due to no tool use, weak reasoning/coding, non-reasoning model. Artificial Analysis Intelligence Index: 8.8 (11B), 6* (90B). Best fit: **strong open multimodal for document/chart understanding at 11B**; ChartQA 83%, AI2 Diagram 91%, DocVQA 88%; no agentic/tool use, weak reasoning/coding, 2023 knowledge cutoff.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Meta model card / GitHub, HF model card, NVIDIA NIM docs, Artificial Analysis, OpenRouter, IBM watsonx blog, Benchmark Atlas); scores normalized 1–100 per model-comparison.md methodology. **Conflicting GPQA** (32.8% Meta card vs 22.1% Artificial Analysis) noted; different harnesses (Meta internal vs AA). All Meta card benchmarks vendor-reported; AA benchmarks independent. Knowledge cutoff Dec 2023 confirmed. Non-reasoning model confirmed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.