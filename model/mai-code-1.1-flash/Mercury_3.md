# MAI-Code-1.1-Flash — findings by Mercury 3

- Source: Microsoft (MAI-Code-1.1-Flash)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's small, low-latency coding model for GitHub Copilot (released 2026-08-11), replacing MAI-Code-1-Flash (retired 2026-09-10). Adds native image input, improved coding/instruction following/tool use, and fewer tokens per task at about a quarter of the predecessor's price.
- **Provider / access:** Available only inside GitHub Copilot (model-card listing: $0.20 in / $1.20 out per 1M); on-device 3-bit quantized variant with zero local inference charges; API-only.
- **Release / knowledge:** Released 2026-08-11; knowledge cutoff not published.
- **IDs:** Microsoft `MAI-Code-1.1-Flash` (Copilot).
- **Context window:** 256K tokens (full window retained in on-device 3-bit variant).
- **Modalities:** text + image input (screenshots/diagrams/designs); text output; agentic coding; tool use.
- **Pricing (as of 2026-10):** $0.20 in / $0.02 cached / $1.20 out per 1M.
- **Architecture:** proprietary (small, low-latency; params undisclosed).

### Raw benchmarks found

Coding (Microsoft model-card, VS Code Copilot harness; not comparable to standard-scaffold leaderboards):

- SWE-bench Verified: **72.6%** (ahead of MAI-Code-1-Flash, Claude Haiku 4.5, GPT-5.4 Mini; fewest tokens)
- Terminal-Bench 2.1: **62.9%**
- Trails Claude Haiku 4.5 on Vision2Web Level 3

Long context:

- 256K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text+image input, text output

Independent verification: none confirmed at import time — treat as an inexpensive Copilot workhorse, not a frontier coding model

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 62.9% (Copilot harness) is solid for a small model.
- **Reasoning: 74/100.** No independent index captured; small-model ceiling.
- **Context window: 80/100.** 256K verified.
- **Multimodal: 78/100.** Text+image input with text output; Vision2Web weakness vs Haiku.
- **Coding: 84/100.** SWE-bench Verified 72.6% and TB 62.9% — strong for the price tier.
- **Cost efficiency: 86/100.** $0.20/$1.20 — about a quarter of predecessor price; free local calls on-device.
- **Overall Score: 79/100.** Mean of the five non-cost dims (80+74+80+78+84)/5 = 79.2 → 79. Best-fit: an inexpensive Copilot coding workhorse; vendor-run numbers, no independent eval yet.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Microsoft AI: MAI-Code-1.1-Flash announcement](https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/)
  - [Microsoft AI: MAI-Code-1-Flash model page (1.1 lineage)](https://microsoft.ai/models/mai-code-1-flash/)
  - [Microsoft: MAI-Code-1.1-Flash model card (PDF)](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)
  - [BenchmarkList: MAI-Code-1.1-Flash](https://benchmarklist.com/models/microsoft-mai-code-1.1-flash/)
  - [llm-stats: MAI-Code-1.1-Flash](https://llm-stats.com/models/mai-code-1.1-flash)
  - [TensorFeed: MAI-Code-1.1-Flash pricing/benchmarks](https://tensorfeed.ai/models/mai-code-1-1-flash)
  - [CloudPrice: MAI Code 1.1 Flash](https://cloudprice.net/models/microsoft-mai-code-1-1-flash)
- Future sources: add a new file next to this one using the same headings.
