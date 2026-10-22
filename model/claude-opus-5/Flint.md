# Claude Opus 5 — findings by Flint

- Source: Anthropic / Claude Opus 5
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (thoughtful and proactive; close to frontier intelligence of Claude Fable 5 at half the price).
- **Short description:** New Opus; SOTA on coding and knowledge work (Frontier-Bench, GDPval-AA); strong scientific research; most aligned model to date per automated behavioral audit; $5/M in / $25/M out (same as Opus 4.8); Fast mode ~2.5x.
- **Provider / access:** Anthropic API (claude-opus-5); Claude Max/Pro; Fast mode; auto fallbacks; mid-conversation tool changes; Cyber Verification Program.
- **Release / knowledge:** Released Jul 24, 2026; knowledge cutoff not stated in sources found.
- **IDs:** claude-opus-5; Context: 1M; Modalities: Text, image, PDF, tool use, reasoning, multimodal (vision); Pricing: $5/$25.
- **Architecture:** Proprietary Anthropic model; alignment core.

### Raw benchmarks found

- Coding / knowledge: Frontier-Bench v0.1: **SOTA** (Opus 5); CursorBench 3.2: **within 0.5%** of Fable 5 peak at half cost; GDPval-AA v2: **SOTA**.
- Reasoning: ARC-AGI 3: **3x next-best**; OSWorld 2.0: **outperforms every model at any cost**; AutomationBench: **~1.5x next-best**; HLE: **best/cost-efficient**.
- Science: life-sciences evals: better than Opus 4.8 on every one; organic chemistry **10.2 pp** higher; protein tasks **7.7 pp** higher.

### Cross-source comparison

- Anthropic: Opus 5 most aligned model to date (audit score 2.3, lowest); SOTA on Frontier-Bench, CursorBench, GDPval-AA, ARC-AGI 3.
- Independent: customer reports (Devin, Lovable, Zapier, Harvey, JetBrains, IDE, trading, monitoring) corroborate coding/knowledge/cyber/science claims.

### Normalized scores (1–100)

- **Tool use: 82/100.** Frontier-Bench **SOTA**, AutomationBench, OSWorld, CursorBench, monitoring autonomy -> agentic high.
- **Reasoning: 88/100.** ARC-AGI 3 **3x next-best**, GDPval-AA **SOTA**, HLE -> reasoning high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 80/100.** Visual outputs (wind tunnel, cell, video); biology/science -> multimodal strong.
- **Coding: 90/100.** Frontier-Bench **>2x Opus 4.8**, CursorBench, FrontierCode -> coding lead.
- **Cost efficiency: 70/100.** $5/$25 (same as Opus 4.8) -> strong value.

- **Overall Score: 88/100.** Mean of the five quality dims (Tool 82 + Reasoning 88 + Context 100 + Multimodal 80 + Coding 90) / 5 = 88; Cost efficiency excluded.

## Signature

- Provided by: **Claude Opus 5 (claude-opus-5)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (Anthropic) plus independent benchmarks/reviews (FrontierBench, GDPval-AA, Vals AI, customer reports) — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
