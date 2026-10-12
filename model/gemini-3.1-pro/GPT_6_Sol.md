# Gemini 3.1 Pro — findings by GPT 6 Sol

- Source: Google (`gemini-3.1-pro-preview`; Zen `gemini-3.1-pro`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's proprietary multimodal reasoning model, announced in preview for difficult synthesis, coding, and long-input tasks. The Zen name without `-preview` maps to the February preview according to its provider listing; do not mistake it for a separately measured release.
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`, Google Generative AI), Vertex AI, and [OpenCode Zen `opencode/gemini-3.1-pro`](https://pi.dev/models/opencode/gemini-3-1-pro) (listed as Google Generative AI protocol, not a verified Chat Completions endpoint); [OpenRouter](https://openrouter.ai/google/gemini-3.1-pro-preview) exposes Chat Completions.
- **Release / knowledge:** February 19, 2026 ([Google announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)); cutoff not independently verified.
- **IDs:** Google `gemini-3.1-pro-preview`, Zen `opencode/gemini-3.1-pro`, OpenRouter `google/gemini-3.1-pro-preview`; no separate Zen Free ID established in the current [Zen provider listing](https://pi.dev/models/opencode/gemini-3-1-pro).
- **Context window:** 1,048,576 total / 65,536 max output ([Google-provider configuration](https://pi.dev/models/google/gemini-3-1-pro-preview), [Zen configuration](https://pi.dev/models/opencode/gemini-3-1-pro)); [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-1-pro-preview) also reports 1M. A 2M claim is not supported by these current endpoints.
- **Modalities:** First-party text/image/audio/video/PDF input, text output and reasoning ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-1-pro-preview), [Vals](https://www.vals.ai/models/google_gemini-3.1-pro-preview)); listed Zen input is text/image only. Tool calls and structured responses advertised on [OpenRouter's model API listing](https://openrouter.ai/google/gemini-3.1-pro-preview).
- **Pricing (as of 2026-10-12):** Google/Zen [provider configuration](https://pi.dev/models/opencode/gemini-3-1-pro): up to 200K request input $2 input / $12 output / $0.20 cached input per 1M; above 200K $4 / $18 / $0.40. A free API entitlement is not established by this priced Zen route; cost scored on it.
- **Architecture:** Proprietary, undisclosed size ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)).

### Raw benchmarks found

Exact preview-ID data below is cross-checked against [Google's announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/), independently run [Vals](https://www.vals.ai/models/google_gemini-3.1-pro-preview) and [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-1-pro-preview). [BenchLM](https://benchlm.ai/models/gemini-3-1-pro) collates their individually linked rows; it is not another independent run. Scores from distinct benchmark versions/harnesses are retained separately.

Agent / tool use:

- Terminal-Bench 2.0 **67.42%** (Vals Terminus 2, archived [leaderboard](https://www.vals.ai/benchmarks/terminal-bench-2), #5 on that snapshot); Vals [model evaluation](https://www.vals.ai/models/google_gemini-3.1-pro-preview) reports **2.52%** on the far harder Terminal-Bench 4.0. Neither is TB2.1.
- Claw-Eval **57.8%** (aggregated with a [Claw-Eval leaderboard citation](https://benchlm.ai/models/gemini-3-1-pro)); evaluator/harness not fully described by the accessible leaderboard rendering.
- Vals Code Migration **17.31%** (#53/77) and Tax Agent Bench **9.29%** (#56/69), versus MedCode **59.06%** (#2/106), all independent but domain-specific ([Vals model page](https://www.vals.ai/models/google_gemini-3.1-pro-preview)).
- Tau3-Banking / GDPval-AA direct comparable configuration: no verified public Tau3 score found; [BenchLM's cited AA current GDPval-AA](https://benchlm.ai/models/gemini-3-1-pro) lists **904 Elo**, under the revised AA harness.

Reasoning / knowledge:

- ARC-AGI-2 **77.1% verified** (Google's [launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)); independently Vals [GPQA Diamond **95.45%** (#1/138)](https://www.vals.ai/models/google_gemini-3.1-pro-preview) and MMLU Pro **90.99%** (#4/138).
- [BenchLM's linked AA model-evidence table](https://benchlm.ai/models/gemini-3-1-pro): GPQA **94.1%**, HLE **47.0%**, CritPt **17.7%**, AA-LCR **82.0%**; current [AA Intelligence Index v4.3.2 **30**](https://artificialanalysis.ai/models/gemini-3-1-pro-preview). Different harnesses explain the GPQA discrepancy; do not average them.
- Vals [ProofBench v1.1 **26.00%**](https://www.vals.ai/models/google_gemini-3.1-pro-preview) (#38/50): advanced reasoning remains uneven outside GPQA/ARC.

Coding:

- [Vals](https://www.vals.ai/models/google_gemini-3.1-pro-preview): LiveCodeBench **88.48%** (#6/143); SWE-bench **78.80%** currently displayed; its dated February 20 evaluation note instead specifies SWE-bench Verified **69.6%**. Version/harness or page update differs: retain both with provenance rather than silently substituting either for the other.
- Vals Vibe Code Bench v1.1 **32.03%** (#69/112); AA SciCode **58.7%** and AA Coding Index **68.8%** ([BenchLM citing AA](https://benchlm.ai/models/gemini-3-1-pro)).
- Terminal-Bench 2.1: no independently verified exact-model score from the consulted direct leaderboards.

Long context / multimodal:

- [AA-LCR **82.0%**](https://benchlm.ai/models/gemini-3-1-pro) (AA harness; not a 1M retrieval measurement). No verified MRCR or RULER percentage at the full 1M window found.
- [Vals MMMU Pro **88.21%** (#10/93)](https://www.vals.ai/models/google_gemini-3.1-pro-preview) and [AA MMMU-Pro **82.4%**](https://benchlm.ai/models/gemini-3-1-pro): clearly different evaluation harnesses, both support multimodal strength.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.0 67.42% and Claw-Eval 57.8% suggest capable agents, but TB4.0 2.52% and weak domain-agent results cap reliability across harder settings.
- **Reasoning: 90/100.** ARC-AGI-2 77.1% and GPQA 94–95% are excellent; CritPt 17.7%, ProofBench 26% and the revised AA Index 30 temper broad claims.
- **Context window: 96/100.** Verified 1,048,576-token window earns the top capacity band, but no verified near-1M retrieval score justifies 100; output is capped at 65,536.
- **Multimodal: 95/100.** Google endpoint spans text, image, audio, video and PDFs, and Vals MMMU Pro 88.21% is strong; text-only output and Zen's narrower advertised inputs limit universality.
- **Coding: 83/100.** LiveCodeBench 88.48% and SWE-bench 69.6/78.8% are useful, but Vibe Code 32.03%, Code Migration 17.31% and TB4.0 2.52% cap real-project confidence.
- **Cost efficiency: 63/100.** $2/$12 below 200K rises to $4/$18 above 200K, expensive for long sessions; no currently verified free Zen rate was found.
- **Overall Score: 88/100.** (78 + 90 + 96 + 95 + 83) / 5 = 88.4, half-up 88; best for difficult multimodal reasoning with long input, with agentic coding results checked against the actual harness.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Google announcement, Vals model and Terminus leaderboard, Artificial Analysis model page, Zen/Google provider listings, and BenchLM's traceable source rows; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
