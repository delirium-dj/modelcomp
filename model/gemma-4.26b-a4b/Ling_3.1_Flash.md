# Gemma 4.26B A4B — findings by Ling 3.1 Flash

- Source: Google DeepMind / Gemma 4 26B A4B
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4.26B A4B
- **Short description:** Google's 26B-total/4B-active Mixture-of-Experts Gemma 4 (Gemma 4 family release, 2026): vision-language MoE with a 550M vision encoder, thinking mode, MTP drafter, and 256K context. Per Google's Arena evaluations it performs equal to much larger open models; it is the mid tier between the encoder-free 12B Unified and the dense 31B. No audio encoder (text + image only).
- **Provider / access:** Google AI Studio / Gemini API (Gemma 4 family); Hugging Face `google/gemma-4-26b-a4b` (open weights, Apache 2.0); Google AI Edge Gallery.
- **Release / knowledge:** 2026 (Gemma 4 family release); knowledge cutoff not published.
- **IDs:** `google/gemma-4-26b-a4b`
- **Context window:** 256K tokens; 262K vocabulary; 140+ languages.
- **Modalities:** text + image in; text out; thinking mode (reasoning traces); function calling; MTP drafter. No audio input.
- **Pricing (as of 2026-10-08):** open weights (Apache 2.0) — self-host free; hosted Gemini API pricing for the 26B-A4B tier not separately listed (family rates apply; 12B Unified lists at $0.13/$0.40 per 1M).
- **Architecture:** 26B MoE, 4B active per token, 550M vision encoder, 430M MTP drafter; Apache 2.0.

### Raw benchmarks found

Google model card / arXiv Gemma 4 technical report (instruction-tuned) unless noted.

Agent / tool use:

- Tau2-bench (average over 3 domains): **68.2%** (vs 31B 76.9%, 12B Unified 69.0%, Gemma 3 27B 16.2%)

Reasoning / knowledge:

- GPQA Diamond: **82.3%**
- AIME 2026 (no tools): **88.3%**
- MMLU-Pro: **82.6%**; MMMLU: **86.3%**
- BigBench Extra Hard: **64.8%**
- Humanity's Last Exam (no tools): **8.7%**; with search: **17.2%**

Coding:

- LiveCodeBench v6: **77.1%**
- Codeforces ELO: **1718**

Multimodal:

- MMMU Pro: **73.8%**; MathVision: **82.4%**; MedXPertQA-MM: **58.1%**; OmniDocBench 1.5: **0.149** avg edit distance (lower is better)

Long context:

- MRCR v2 8-needle 128K (average): **44.1%** (vs 31B 66.4%)

### Normalized scores (1–100)

- **Tool use: 64/100.** Tau2 68.2% is the sole agentic row — solid for the tier, with no terminal/MCP suite published.
- **Reasoning: 72/100.** AIME 88.3%, GPQA 82.3% and MMLU-Pro 82.6% are strong; HLE 8.7% (17.2% w/ search) and BigBench Extra Hard 64.8% cap the tier.
- **Context window: 66/100.** 256K tokens with MRCR 44.1% at 128K — mid-pack long-context.
- **Multimodal: 76/100.** Text+image with MathVision 82.4% and MMMU Pro 73.8%; no audio input, text-only output.
- **Coding: 74/100.** LiveCodeBench v6 77.1% and Codeforces 1718 ELO are strong for 4B-active; trails the 31B dense (80.0% / 2150).
- **Cost efficiency: 85/100.** Apache 2.0 open weights with 4B active parameters — cheap to self-host at scale; hosted tier pricing not separately listed.
- **Overall Score: 70/100.** Mean of the five quality dims (64+72+66+76+74)/5 = 70.4 → 70; best fit for workstation-class open-weights reasoning and vision workloads where MoE efficiency matters.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Google AI Gemma 4 model card, arXiv Gemma 4 technical report, Hugging Face, Google Developers Blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
