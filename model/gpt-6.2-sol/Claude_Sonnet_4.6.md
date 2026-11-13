# GPT-6.2 Sol — findings by Claude Sonnet 4.6

- Source: OpenAI (`openai/gpt-6.2-sol`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Sol
- **Short description:** OpenAI's iterative update on GPT-6 Sol — a mainstream mid-tier reasoning model optimized for agentic coding, complex math execution, and professional workflows at a cost-efficient price point below the flagship Astra; 1.05 M token context with 128 K max output.
- **Provider / access:** OpenAI — API (standard tier); `openai/gpt-6.2-sol`
- **Release / knowledge:** Phased canary rollout, late 2026; builds on GPT-6 Sol / GPT-6.1 Sol (September 2026)
- **IDs:** `openai/gpt-6.2-sol`
- **Context window:** 1,050,000 tokens total; 128,000 max output
- **Modalities:** Text, image, file in; text out
- **Pricing (as of 2026-11-13):** Standard API tier — input ~\$2.00/M tokens; output ~\$10.00/M tokens; cached input ~\$0.10–0.20/M tokens (GPT-6 Sol family rates; vellum.ai)
- **Architecture:** Dense transformer with variable reasoning-effort control (low / medium / high / xhigh / max), agentic coding and computer-use capability, multi-step planning

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **~49.5%** resolve rate (GPT-6 Sol base; vibecoderjournal.com / vibecoderjournal)
- SWE-Atlas (DeepSWE v1.1 multi-file): **~59.9–75.2%** (GPT-6.1 Sol updated variant; askclash.ai)
- Computer use / browser agent: supported (agentic tier; OpenAI documentation)
- Terminal-Bench / Tau3-bench: no verified standalone public score found for 6.2 specifically

Reasoning / knowledge:

- GPQA Diamond: **~91.5–95.0%** (GPT-6 Sol family; aireleasetracker.com / askclash.ai)
- HLE: no verified standalone public score found
- MMLU-Pro: no verified standalone public score found

Coding:

- LiveCodeBench / Aider Polyglot: **~45.0–49.0%** (GPT-6 Sol base; vibecoderjournal.com)
- SWE-bench Verified: **~49.5%** (above)
- HumanEval: no verified standalone public score found for 6.2 specifically

Long context:

- 1,050,000-token architectural window; no MRCR or RULER retrieval score published for this variant

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-bench Verified at ~49.5% (base Sol) is solid mid-tier; SWE-Atlas range up to 75.2% on the 6.1 update suggests meaningful agent improvement. Variable reasoning-effort control is a practical differentiator. Capped below Astra due to lower baseline SWE-bench Verified and no Terminal-Bench standalone score.
- **Reasoning: 85/100.** GPQA Diamond at 91.5–95.0% is near-saturation for graduate-level science; this is a standout strength of the Sol family, rivaling top frontier models on pure reasoning. Slight cap for absent HLE/MMLU-Pro numbers.
- **Context window: 92/100.** 1,050,000-token window maps to the 1 M tier (score = 92).
- **Multimodal: 60/100.** Text, image, and file input (no audio or video); solid vision+text tier scored at the low end of the 60–65 image range given file input but absence of video.
- **Coding: 67/100.** LiveCodeBench/Aider ~45–49% and SWE-bench ~49.5% are competent but below flagship levels; GPT-6.1 Sol SWE-Atlas improvement hints at 6.2 being stronger, but no published 6.2-specific coding figure to confirm.
- **Cost efficiency: 62/100.** \$2/M input is mid-range for a frontier-class reasoning model; significantly cheaper than Astra while delivering near-equivalent GPQA scores. Cached-input discounts improve economics for high-throughput use.
- **Overall Score: 75/100.** Mean of Tool use (72) + Reasoning (85) + Context window (92) + Multimodal (60) + Coding (67) = 376 / 5 = 75.2 ≈ 75. GPT-6.2 Sol is an excellent balance of near-frontier reasoning (GPQA 91–95%) and cost efficiency; coding and tool-use scores trail the Astra flagship but the price gap makes it compelling for high-volume professional workloads.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
  - [OpenAI API pricing](https://openai.com/api/pricing/)
  - [vellum.ai — GPT-6 Sol pricing and overview](https://vellum.ai)
  - [vibecoderjournal.com — SWE-bench and LiveCodeBench GPT-6 Sol](https://vibecoderjournal.com)
  - [askclash.ai — GPQA Diamond and SWE-Atlas GPT-6.1 Sol](https://askclash.ai)
  - [aireleasetracker.com — GPQA reasoning evaluation](https://aireleasetracker.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
