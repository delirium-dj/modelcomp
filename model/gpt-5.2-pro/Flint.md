# GPT-5.2 Pro — findings by Flint

- Source: OpenAI / GPT-5.2 Pro
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro (OpenAI; GPT-5.2 family — Pro tier).
- **Short description:** OpenAI's GPT-5.2 flagship update (announced via `openai.com/index/introducing-gpt-5-2/`), with GPT-5.2 Thinking and GPT-5.2 Pro; Pro tier priced at $21 per 1M input / $168 per 1M output tokens; strong frontier performance (GDPval 74.1%, SWE-bench Verified 80.0%, GPQA Diamond 93.2%, τ2-bench Telecom 98.7%, BrowseComp 77.9%).
- **Provider / access:** OpenAI API (`gpt-5.2-pro` / GPT-5.2 Pro reasoning variant); proprietary (closed weights); also via Azure.
- **Release / knowledge:** GPT-5.2 released via OpenAI announcement (date per source index: 2026 per session context); knowledge cutoff August 2025 (GPT-5.2 System Card-era cutoff per OpenAI blog; GPT-5.2 Thinking/Pro pricing $21/$168 per 1M).

- **Context window:** 200K tokens (GPT-5.2 Pro context per OpenAI docs/context; GPT-5.2 Thinking context handling per OpenAI blog).

- **Modalities:** Text + image input, text output; reasoning yes (Thinking); tool use yes (agentic coding, cybersecurity per OpenAI blog).

- **Pricing (as of 2026-10-28):** GPT-5.2 Thinking/Pro: $21 per 1M input / $168 per 1M output (OpenAI); GPT-5.2 Thinking: $1.75 per 1M input / $14 per 1M output.

- **Architecture:** Proprietary (closed weights); parameter count not disclosed.

### Raw benchmarks found

- Reasoning / knowledge:
  - GPT-5.2: GDPval **74.1%**, SWE-bench Verified **80.0%**, GPQA Diamond **93.2%**, τ2-bench Telecom **98.7%**, BrowseComp **77.9%**, AIME 100, ARC-AGI-1 90.5%, MRCRv2.

- Coding / agentic:
  - GPT-5.2 Codex: agentic coding flagship, SOTA on SWE-bench Pro/TB2.0, context compaction, cybersecurity (OpenAI blog `gpt-5.2-codex`).

### Cross-source comparison

- Official (OpenAI blog `openai.com/index/introducing-gpt-5-2/` vs `openai.com/blog/gpt-5.2-codex`) vs independent (Epoch AI, Artificial Analysis): GPT-5.2 flagship FrontierMath T1-3 74%, ARC-AGI-2 54%, GPT-5.2 Pro pricing $21/$168 (Epoch AI: ECI 156, #30/253, #1 of 166 at release; GPQA 93%, FrontierMath T1-3 74%, ARC-AGI-2 54%, AIME 100, GPT-5.2 Pro pricing $21/$168 for Pro; $1.75/$14 Thinking).

### Normalized scores (1-100)

- **Tool use: 75/100.** GPT-5.2 Codex agentic coding flagship (SOTA on SWE-bench Pro/TB2.0, cybersecurity, context compaction); GPT-5.2 Pro tool-use tier frontier-class → strong frontier tool band.

- **Reasoning: 85/100.** GPT-5.2: GDPval **74.1%, GPQA Diamond **93.2%, τ2-bench Telecom **98.7%** → frontier-class reasoning; ARC-AGI-2 **54%** / FrontierMath T1-3 **74%** → capped below absolute frontier ceilings.

- **Context window: 75/100.** GPT-5.2 context handling / reasoning window per OpenAI docs.

- **Multimodal: 70/100.** GPT-5.2 multimodal understanding (BrowseComp 77.9, etc.).

- **Coding: 72/100.** GPT-5.2: SWE-bench Verified **80.0%**, GPT-5.2 Codex SOTA on SWE-bench Pro/TB2.0, context compaction, cybersecurity → frontier-class coding.

- **Cost efficiency: 45/100.** GPT-5.2 Pro $21/$168 per 1M (premium) → moderate-low cost-efficiency value.

- **Overall Score: 75/100.** Mean of the five quality dims (Tool 75 + Reasoning 85 + Context 75 + Multimodal 70 + Coding 72) / 5 = 75.4 → half-up **75**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (OpenAI blog / GPT-5.2) plus independent benchmarks/reviews (Epoch AI, Artificial Analysis) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
