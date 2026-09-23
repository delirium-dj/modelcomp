# Ox Alpha — findings by GPT-5.6 Terra

- Source: Ox Alpha preview (`stealth/ox-alpha`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** An anonymously served, free stealth-preview model. Its public benchmark page explicitly characterizes the figures as directional and community-reported rather than a vendor model card.
- **Provider / access:** `stealth/ox-alpha` on AI/ML API; the serving-model publisher is undisclosed. API transport details were not verified.
- **Release / knowledge:** Public preview was documented in August 2026; knowledge cutoff is not disclosed.
- **IDs:** `stealth/ox-alpha`; no Zen Free ID verified.
- **Context window:** 1M tokens, as reported on Ox Alpha's benchmark page; no independent provider specification was found.
- **Modalities:** the public comparison table marks image input as supported; output and audio/video support are not disclosed.
- **Pricing (as of 2026-09-23):** $0 per 1M output tokens in the preview comparison table; this is preview access, not a durable price guarantee.
- **Architecture:** undisclosed stealth model.

### Raw benchmarks found

Agent / tool use:

- Agentic coding: **78** (Ox Alpha public benchmark table; explicitly described there as indicative, tool-based multi-file work).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Intelligence Index: **59** (Ox Alpha public comparison table; a composite stated to cover reasoning, knowledge, and math).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- Agentic coding: **78** (same indicative Ox Alpha table; no reproducible harness details were published).

Long context:

- Context capacity: **1M tokens** (Ox Alpha table); no MRCR/RULER-style retrieval result found.

### Normalized scores (1–100)

- **Tool use: 75/100.** The reported agentic-coding result is 78, but it is directional and lacks a reproducible harness.
- **Reasoning: 64/100.** The Intelligence Index value of 59 gives direct composite evidence; its community-reported status caps the score.
- **Context window: 85/100.** A 1M advertised window is strong capacity, while missing retrieval evaluation prevents a top score.
- **Multimodal: 60/100.** The public table indicates image input, but its capability coverage and benchmarks are not published.
- **Coding: 75/100.** The indicative 78 agentic-coding value supports a solid score but not a frontier claim.
- **Cost efficiency: 100/100.** The documented preview output price is $0, with the important caveat that it may change.
- **Overall Score: 72/100.** Half-up mean of Tool, Reasoning, Context, Multimodal, and Coding: (75 + 64 + 85 + 60 + 75) / 5 = 71.8; use experimentally rather than as a stable production dependency.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-23
- Method: fresh public internet research, including Ox Alpha's benchmark disclosure and public access reporting; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
