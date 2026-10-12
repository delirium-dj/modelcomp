# GPT-5.4 Mini — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.4 Mini
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's strongest small model (Mar 2026). GPT-5.4 compressed into a 2x-faster cheaper tier approaching full 5.4 on SWE-Bench Pro and OSWorld. Designed as a Codex subagent for high-volume coding and computer use.
- **Provider / access:** OpenAI API (`gpt-5.4-mini`), Azure OpenAI. Responses API.
- **Release / knowledge:** 2026-03-17 release. Knowledge cutoff: 2025-08-31.
- **IDs:** `openai/gpt-5.4-mini`
- **Context window:** 400,000 tokens; 128,000 max output tokens.
- **Modalities:** Text, image in; text out; tool use; function calling; web search; file search; computer use (keyboard, mouse, screenshot).
- **Pricing (as of 2026-10-11):** $0.75 / $4.50 per 1M tokens (input/output). Cached input: $0.075/1M.
- **Architecture:** Proprietary; compressed GPT-5.4. Configurable reasoning: none/low/medium/high/xhigh.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **~60.0%** (source: OpenAI reporting)
- OSWorld-Verified: **~72.1%** (source: OpenAI reporting)
- Toolathlon: **~42.9%** (source: OpenAI reporting)

Reasoning / knowledge:

- GPQA Diamond: **~88.0%** (source: OpenAI reporting)
- HLE: no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- SWE-bench Pro (Public): **~54.4%** (source: OpenAI reporting)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 400,000 token context window. 128K max output. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.0 60.0% is solid (ref: 55–65% on TB 2.0 = 76–82 range). OSWorld 72.1% shows strong computer use. Toolathlon 42.9% is moderate. Native keyboard/mouse/screenshot capability.
- **Reasoning: 84/100.** GPQA Diamond ~88.0% is strong for a "mini" model — matching many full-size models. Configurable reasoning depth (5 levels).
- **Context window: 68/100.** 400K context (ref: 400K ≈ 68). 128K output is generous. Below 1M frontier standard.
- **Multimodal: 58/100.** Text + image in; text out. Computer use (screenshot interpretation). No audio/video. Computer use capability adds value over basic image = 55–62 range.
- **Coding: 79/100.** SWE-bench Pro 54.4% approaches full GPT-5.4. Designed as Codex subagent for high-volume coding. 2x faster than full model. Missing LiveCodeBench data.
- **Cost efficiency: 90/100.** $0.75/$4.50 is very competitive for near-frontier performance. Cached at $0.075 is excellent. 2x faster than full GPT-5.4.
- **Overall Score: 74/100.** Mean of (80 + 84 + 68 + 58 + 79) / 5 = 73.8, rounded to 74. Excellent "mini" model approaching full GPT-5.4 quality at dramatically lower cost and higher speed.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (OpenAI docs, benchmark reports, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
