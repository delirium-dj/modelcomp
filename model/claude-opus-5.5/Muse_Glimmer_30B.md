# Claude Opus 5.5 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-opus-5-5
- Date: 2026-10-20
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic’s flagship agentic model for long-horizon coding and knowledge work; 1M context, image-in/text-out, released Sep 2026 with 40% cost reduction vs Opus 5.
- **Provider / access:** Anthropic API nthropic/claude-opus-5-5; Claude Console, Claude Code; Chat Completions.
- **Release / knowledge:** 2026-09-22; knowledge cutoff not published.
- **IDs:** anthropic/claude-opus-5-5; no Free OpenCode Zen ID.
- **Context window:** 1M total / 128K max output — verified on Anthropic announcement and meta.json.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode.
- **Pricing (as of 2026-10-20):**  / 1M input,  / 1M output, .20 / 1M cache reads,  / 1M cache writes — paid tier only.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

- Source, Anthropic Introducing Claude Opus 5.5, 2026-09-22
- Source, BenchLM Claude Opus 5.5, 2026-10-20

Agent / tool use:

- Terminal-Bench 4.0 (agentic coding): 66.4% (Anthropic)
- Terminal-Bench-Science 0.1 (agentic scientific research): 58.7% (Anthropic)
- AutomationBench (business workflows): 40.0% (Anthropic; Zapier run)
- AA AutomationBench (agentic SaaS workflows): 69.5% (Artificial Analysis)
- Toolathlon Verified: 77.8% (Anthropic System Card)
- Toolathlon Verified Pass@3: 82.4% (Anthropic System Card)

Reasoning / knowledge:

- Humanity's Last Exam with tools: 67.7% (Anthropic)
- Humanity's Last Exam w/o tools: 64.4% (Anthropic System Card)
- AA-LCR v1.1: 84.7% (Artificial Analysis)
- CritPt: 31.7% (Artificial Analysis)
- ARC-AGI-1: 97.50% (ARC Prize)
- ARC-AGI-2: 91.7% (ARC Prize)
- Artificial Analysis Intelligence Index: 57.6% (Artificial Analysis)
- GDPval-AA v2.1: 1846 Elo (Anthropic)

Coding:

- FrontierCode 1.1 Main: 54.4% (Anthropic)
- FrontierCode 1.1 Extended: 63.6% (Anthropic System Card)
- CursorBench 4.0: 57.8% (Anthropic / Cursor)
- SWE-bench Pro: 89.9% (Anthropic System Card)
- SWE Multilingual: 93.9% (Anthropic System Card)
- DeepSWE: 74.2% (Anthropic System Card)
- AA-SciCode: 66.9% (Artificial Analysis)
- ProgramBench: 91.2% (Anthropic System Card)

Long context:

- AA-LCR v1.1 84.7% at 256K–1M range (Artificial Analysis)
- no verified public MRCR / RULER retrieval score reported

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 4.0 66.4% and Toolathlon Verified 77.8% indicate strong agentic tool use, capped by AutomationBench 40% and Terminal-Bench-Science 58.7%.
- **Reasoning: 88/100.** HLE with tools 67.7%, AA-LCR 84.7%, ARC-AGI-1 97.5% and ARC-AGI-2 91.7% show high reasoning, limited by CritPt 31.7%.
- **Context window: 97/100.** 1M total / 128K output verified; tier ≥1M mapping, capped by max-output limit.
- **Multimodal: 65/100.** image-in / text-out confirmed; no video/audio in reported.
- **Coding: 88/100.** SWE-bench Pro 89.9%, DeepSWE 74.2%, ProgramBench 91.2% offset by FrontierCode 54.4% and CursorBench 57.8%.
- **Cost efficiency: 55/100.** / per 1M paid tier; no free tier, mid-premium pricing.
- **Overall Score: 83/100.** mean of Tool 78 + Reasoning 88 + Context 97 + Multimodal 65 + Coding 88 = 83.2 → best fit for long-horizon agentic coding with premium pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

