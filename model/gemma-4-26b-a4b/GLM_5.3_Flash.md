# Gemma 4 26B A4B — findings by GLM 5.3 Flash

- Source: Google DeepMind (`google/gemma-4-26B-A4B-it`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (instruction-tuned; "A4B" = ~4B active parameters)
- **Short description:** Google's sparse Gemma 4 MoE for high-throughput multimodal use — 25.2B total/3.8B active with an ~550M vision encoder, running almost as fast as a 4B model while scoring near the dense 31B on several boards; #6 open model on Arena AI text at launch.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-26B-A4B`, `-it`); hosted via Google AI Studio and gateway partners. OpenCode Zen `opencode/gemma-4-26b-a4b`.
- **Release / knowledge:** Released 2026-03-31 (E2B/E4B/31B/26B-A4B); MTP update 2026-04-16. Knowledge cutoff not stated on the card.
- **IDs:** `google/gemma-4-26B-A4B-it` (HF); `opencode/gemma-4-26b-a4b` (Zen). Free open weights — no paid-only gate.
- **Context window:** 262,144 tokens (256K, model card); 32,768 max output (Zen listing). Sliding window 1024.
- **Modalities:** Text, image in; text out (audio input is supported on E2B/E4B/12B, NOT on 26B A4B). Thinking mode yes; vision encoder ~550M params.
- **Pricing (as of 2026-11-01):** Free open weights (Apache 2.0); hosted endpoints ~$0.12/$0.30 per 1M in/out.
- **Architecture:** MoE, 25.2B total / 3.8B active, 30 layers, 8 active / 128 total experts + 1 shared; BF16 fits a single 80GB H100 (57.7GB), Q4_0 ~14.4GB.

### Raw benchmarks found

(vendor model card + Gemma 4 Technical Report, arXiv 2607.02770 — instruction-tuned, thinking mode)

Agent / tool use:

- Tau2-bench average (3 domains): **68.2%** — airline 76.0 / retail 85.5 / telecom 43.0
- Terminal Bench Hard: **14.0%**
- (no SWE-bench, OSWorld, or large agentic-suite figure published for this size)

Reasoning / knowledge:

- MMLU-Pro: **82.6%**; GPQA Diamond: **82.3%**; MMMLU: **86.3%**
- AIME 2026 (no tools): **88.3%**; BigBench Extra Hard: **64.8%**
- HLE: **8.7%** no tools / **17.2%** with search; IFBench **72.0%**; IFEval **98.5%**
- Arena AI (text, blind human Elo): **1441** as of 2026-04-02 (#6 open model); **1438 ± 8** as of 2026-06-19 (technical report)

Coding:

- LiveCodeBench v6: **77.1%**; Codeforces Elo: **1718**; SciCode: **40.0%**

Long context:

- MRCR v2 8-needle 128k: **44.1%**; RULER 128k: **89.8%** (32k: 97.3%); GraphWalks <128k F1: **72.6%**; LOFT text retrieval 128k: **66.3%**; MTOB (half book, eng→kgv): **50.0 chrF**

Vision / multimodal:

- MMMU Pro: **73.8%**; MATH-Vision: **82.4%**; MedXPertQA MM: **58.1%**; InfographicVQA: **89.3%**; OmniDocBench 1.5 edit distance: **0.149** (lower is better; strong document parsing)

### Normalized scores (1–100)

- **Tool use: 58/100.** Tau2 retail 85.5 is genuinely strong for the size, but the telecom collapse (43.0), Terminal Bench Hard 14.0, and the absence of any large agentic-suite result cap it mid-tier.
- **Reasoning: 80/100.** GPQA 82.3 / MMLU-Pro 82.6 / AIME 88.3 no-tools is excellent intelligence-per-parameter; HLE 8.7 shows the frontier-exam ceiling of a 3.8B-active model.
- **Context window: 72/100.** 262K window with healthy retrieval (RULER 89.8 at 128K, GraphWalks 72.6) but MRCR 44.1 is mid; 32K output limit.
- **Multimodal: 76/100.** Image input with strong vision scores for the size (MMMU-Pro 73.8, MATH-Vision 82.4, InfographicVQA 89.3, best-in-family doc parsing); no audio on this SKU.
- **Coding: 68/100.** LCB v6 77.1 and Codeforces 1718 are competitive-open-tier; SciCode 40.0 and TB-Hard 14.0 with no SWE-bench publication keep it below the agentic-coding tier.
- **Cost efficiency: 93/100.** Apache 2.0 weights are free to self-host; hosted at ~$0.12/$0.30 per 1M — near the floor of the price ladder.
- **Overall Score: 71/100.** Mean of the five quality dims (58+80+72+76+68)/5 = 70.8 → 71. Best fit: high-throughput multimodal and reasoning work on commodity hardware where license freedom and speed matter more than frontier peaks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (official Google model card and Gemma 4 Technical Report, Hugging Face model pages, launch blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemma 4 model card (26B A4B benchmark tables)](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Gemma 4 Technical Report — arXiv 2607.02770 (Tables 4–6, long-context suite)](https://arxiv.org/html/2607.02770)
  - [Google DeepMind — Gemma 4 page (Arena AI Elo, τ2 retail)](https://deepmind.google/models/gemma/gemma-4/)
  - [Google — Gemma 4 launch blog (Apache 2.0, sizes, release dates)](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)
  - [Hugging Face — google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)
  - [Google — Gemma releases changelog](https://ai.google.dev/gemma/docs/releases)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
