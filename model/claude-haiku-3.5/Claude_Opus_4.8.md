# Claude Haiku 3.5 — findings by Claude Opus 4.8

- Source: Anthropic (`opencode/claude-haiku-3.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's Oct-2024 small/fast model (beat Claude 3 Opus on some knowledge at release); retired 2026-02-19 (replaced by Haiku 4.5). Top use case: legacy small/fast reference.
- **Provider / access:** (retired) Anthropic API; OpenCode Zen `opencode/claude-haiku-3.5`. No first-party access remains.
- **Release / knowledge:** 2024-10; retired 2026-02-19.
- **IDs:** `opencode/claude-haiku-3.5` (retired).
- **Context window:** 200K total; 8,192 max output (per curated `meta.json`).
- **Modalities:** text + image + PDF in (image added 2025-02); text out.
- **Pricing (as of 2026-10-03):** retired; final rate $0.80/$4.00 per 1M.
- **Architecture:** proprietary (small).

### Raw benchmarks found

> No current BenchLM page (404; retired). Scored from the documented 2024 launch profile; current-harness numbers "no verified public score found."

Reasoning / knowledge:

- GPQA ~41% (2024 launch era); beat Claude 3 Opus on some knowledge benchmarks at release

Coding:

- SWE-bench Verified ~40% era (2024)

Multimodal:

- Image + PDF in (added 2025-02), text out

### Normalized scores (1–100)

- **Tool use: 42/100.** 2024-era small-model tool use; far behind modern agentics.
- **Reasoning: 45/100.** GPQA ~41% (2024); strong for a small model then, dated now.
- **Context window: 55/100.** 200K total (8K max output).
- **Multimodal: 62/100.** Image+PDF in, text out.
- **Coding: 50/100.** ~2024-era SWE-bench (~40%); modest.
- **Cost efficiency: 75/100.** Final $0.80/$4.00 (cheap small tier); now retired.
- **Overall Score: 50.8/100.** Half-up mean of the five quality dims (42/45/55/62/50). A legacy 2024 small/fast model, now retired; retained per `RULES.md` permanence.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Claude 3.5 Haiku docs). No current BenchLM page (404, retired); scored from the documented 2024 launch profile, conservatively. Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
