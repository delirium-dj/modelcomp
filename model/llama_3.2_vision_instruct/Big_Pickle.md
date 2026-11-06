# Llama 3.2 Vision Instruct — findings by Big Pickle

- Source: Meta/Llama 3.2 Vision Instruct (`opencode/llama-3.2-vision-instruct`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's 2024 open-weight vision-language models in 11B and 90B sizes, built for image reasoning, document QA and chart understanding. It is the predecessor generation to Llama 4 and is now legacy-tier.
- **Provider / access:** Open weights on Hugging Face and Meta's model card; OpenCode Zen ID `opencode/llama-3.2-vision-instruct`. Chat Completions API.
- **Release / knowledge:** 2024-09-25; knowledge cutoff December 2023.
- **IDs:** `opencode/llama-3.2-vision-instruct` (no Free ID on Zen)
- **Context window:** 131,072 tokens (128K) total (Meta model card)
- **Modalities:** text and image in; text out; reasoning no; tool calls yes (Instruct variants); JSON mode via prompt only
- **Pricing (as of 2026-11-05):** open weights, $0 licence; hosted inference priced by the provider (typically well under $1 per 1M)
- **Architecture:** dense transformer, 11B and 90B parameter variants, Llama 3.2 Community License

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **32.8%** (11B; Meta model card)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- MMLU: **73.0%** (11B) / **86.0%** (90B) (Meta model card)
- MATH: **51.9%** (11B) (Meta model card)
- MGSM: **68.9%** (11B) (Meta model card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- HumanEval: no verified public score found for the Vision Instruct build
- Vibe Code Bench: no verified public score found

Vision / multimodal:

- MMMU: **50.7%** (11B) / **60.3%** (90B) (Meta model card)
- MMMU-Pro: **33.0%** standard / **23.7%** vision-only (11B) (Meta model card)
- MathVista: **51.5%** (11B) (Meta model card)
- ChartQA: **83.4%** (11B) / **85.5%** (90B) (Meta model card)
- DocVQA: **88.4%** (11B) / **90.1%** (90B) (Meta model card)
- VQAv2: **75.2%** (11B) (Meta model card)

Long context:

- 128K window advertised; no MRCR/RULER retrieval score was published for this generation.

### Normalized scores (1-100)

- **Tool use: 40/100.** No agentic benchmark coverage exists and the 2024-era instruction tuning predates modern tool-calling harnesses; function calling works but is unmeasured.
- **Reasoning: 55/100.** MMLU 73.0% / 86.0%, MATH 51.9% and GPQA 32.8% are mid-tier for 2026; MGSM 68.9% is the strongest signal.
- **Context window: 56/100.** A real 128K window, but no retrieval benchmark and no output-cap documentation, so it sits in the mid tier.
- **Multimodal: 68/100.** Genuine image input with DocVQA 90.1%, ChartQA 85.5% and MMMU 60.3% on the 90B; capped by weak MMMU-Pro (33.0%) and text-only output.
- **Coding: 42/100.** No published code benchmark and a 2024 code-generation base; suitable for snippets, not repository-scale work.
- **Cost efficiency: 88/100.** Free open weights with 11B/90B footprints that run on modest hardware; hosted rates are among the cheapest available.
- **Overall Score: 52/100.** Mean of (40+55+56+68+42)/5 = 52.2, rounded to 52. Best fit: cheap on-prem document and chart extraction with the 90B variant; not a 2026 agentic or coding choice.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public internet research (Meta Llama 3.2 model card and launch post, Hugging Face); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Llama 3.2 announcement](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)
  - [Hugging Face — Llama-3.2-11B-Vision-Instruct](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct)
  - [Hugging Face — Llama-3.2-90B-Vision-Instruct](https://huggingface.co/meta-llama/Llama-3.2-90B-Vision-Instruct)
- Future sources: add a new file next to this one, e.g. `Llama_3.2_Vision_Instruct_2.md`, using the same headings.
