# MiniMax-M2.5 - findings by GPT 5.6 Luna

- Source: MiniMax/MiniMaxAI/MiniMax-M2.5
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.5
- **Short description:** MiniMax's open-weight reasoning model targeting coding, tool-using agents, search, and office workflows.
- **Provider / access:** MiniMax API model `MiniMax-M2.5`; OpenAI-compatible usage and self-hosting instructions are in the official Hugging Face card.
- **Release / knowledge:** 2026-02-12 per Artificial Analysis; knowledge cutoff not disclosed.
- **IDs:** `MiniMaxAI/MiniMax-M2.5`; API name `MiniMax-M2.5`.
- **Context window:** Approximately 200K-205K tokens. MiniMax's card gives benchmark-specific settings; Artificial Analysis reports 205K.
- **Modalities:** text in and text out; reasoning and tool calling. No verified image/audio/video input found.
- **Pricing (as of 2026-10-17):** MiniMax reports M2.5 at $0.15 per 1M input and $0.60 per 1M output when describing the slower tier, while M2.5-Lightning is $0.30/$2.40; Artificial Analysis reports $0.30/$1.20. Pricing conflicts by serving tier, so the figures are not interchangeable.
- **Architecture:** 230B total / 10B active MoE, modified-MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp with context management: **76.3%** (MiniMax official Hugging Face model card).
- GDPval-MM average win rate: **59.0%** (MiniMax official card; internal benchmark).
- Artificial Analysis Intelligence Index: **23 estimated**, rank **40/120** (Artificial Analysis, accessed 2026-10-17).

Reasoning / knowledge:

- GPQA Diamond: **85.2%** (MiniMax official card; Hugging Face evaluation record agrees).
- HLE without tools: **19.4%** (MiniMax official card; Hugging Face evaluation record agrees).
- AIME25: **86.3%** (MiniMax official card).
- AA-LCR: **69.5%** (MiniMax official card).

Coding:

- SWE-bench Verified: **80.2%** (MiniMax official card); Hugging Face's independent evaluation record lists **75.8%**, so the harness difference is material.
- SWE-bench Multilingual: **51.3%** (MiniMax official card).
- OpenCode SWE-bench Verified: **76.1%** (MiniMax official card).
- SciCode: **44.4%** (MiniMax official card).

Long context:

- Approximately 200K-205K context; AA-LCR 69.5% is reported, but no independent full-window retrieval study was found.

### Normalized scores (1-100)

- **Tool use: 84/100.** BrowseComp 76.3 and the official agentic results are strong; capped by reliance on internal evaluations and no independent tool benchmark beyond the HF record.
- **Reasoning: 78/100.** GPQA 85.2 and AIME 86.3 are strong, but HLE 19.4 and AA Index 23 cap general reasoning confidence.
- **Context window: 83/100.** Roughly 200K-205K and AA-LCR 69.5; capped because full-window independent evidence is limited.
- **Multimodal: 15/100.** Verified sources describe text-only input/output.
- **Coding: 86/100.** Official SWE-bench 80.2 and OpenCode 76.1 are excellent; capped by the independent 75.8 result and moderate SciCode.
- **Cost efficiency: 91/100.** Even the higher independent pricing is low for the capability; tier and provider pricing conflicts prevent a perfect score.
- **Overall Score: 69/100.** Half-up mean of the five non-cost dimensions; best fit is economical text-only coding and agent deployment.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** - 2026-10-17
- Method: Three independent public web searches and source comparison: MiniMax official Hugging Face card, Hugging Face evaluation records, and Artificial Analysis (accessed 2026-10-17). The failed MiniMax news URL was not used as evidence. Scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
