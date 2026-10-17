# Fledge Alpha — findings by Beam

- Source: OpenCode Zen/Fledge Alpha, `unknown/fledge-alpha`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** OpenCode Zen stealth model (Oct 1, 2026): 1M context, 131K output. Text/image in. Free. Identity unknown; forensic probe suggests multi-backend router (Kimi K3.1 anchor). StealthMark 35.5/100 (#31 of 43). Retired from Zen (Oct 11, 2026).
- **Provider / access:** OpenCode Zen `fledge-alpha-free` (retired); AnyRouter (BYOK).
- **Release / knowledge:** Listed 2026-10-01; retired 2026-10-11.
- **IDs:** `unknown/fledge-alpha`
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** text, image in; text out; reasoning yes (low/high/max); tool calling yes.
- **Pricing (as of 2026-10-17):** Free ($0/$0) at launch; retired.
- **Architecture:** unknown; forensic probe suggests multi-backend router (Kimi K3.1 anchor + others).

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. StealthMark SVG-based only.
- Tool calling: supported (per models.dev).

Reasoning / knowledge:

- Reasoning: no verified public benchmarks. StealthMark 35.5/100 (#31 of 43).
- GPQA Diamond: not reported (StealthMark SVG tasks only).
- HLE: not reported.
- MMLU-Pro: not reported.
- AA Intelligence Index: not reported.

Coding:

- Coding: no verified public benchmarks. Early user test: 61/61 executable code checks (anecdotal).

Long context:

- 1M context claimed; hidden-key retrieval 12/12 up to ~1M chars (anecdotal).

Multimodal:

- Text/image in; no verified multimodal benchmarks. StealthMark SVG tasks only.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; provisional (retired model).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional (retired model).
- **Context window: 76/100.** 1M claimed; anecdotal retrieval only.
- **Multimodal: 50/100.** Text/image in; no verified multimodal benchmarks.
- **Coding: 50/100.** Anecdotal code checks only (61/61).
- **Cost efficiency: 100/100.** Free (retired).
- **Overall Score: 55.2/100.** Provisional mean; low-confidence (no verified benchmarks, retired). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Stealth Models, OpenCode data, GitHub forensic probe, promptblueprints); no verified public benchmarks found. Scores are provisional. Retired from Zen (Oct 11, 2026).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead.<|end|>>