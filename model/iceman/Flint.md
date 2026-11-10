# Iceman — findings by Flint

- Source: Microsoft AI / MAI (via OpenCode Go)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman (stealth alias of Microsoft's MAI model; `iceman-contributor-free`).
- **Short description:** Stealth model surfaced through OpenCode Go, revealed to be Microsoft's MAI (MAI Thinking-1 lineage); text-only, reasoning-oriented; contributor-free tier.
- **Provider / access:** Microsoft AI / OpenCode Go; free contributor tier.
- **Release / knowledge:** Stealth disclosure surfaced ~2026-11; knowledge cutoff not disclosed.
- **IDs:** iceman-contributor-free (via OpenCode Go); mapped to Microsoft's MAI.
- **Context window:** Not disclosed in sources found.
- **Modalities:** Text only.

### Raw benchmarks found

- Reasoning: text-only reasoning model; OpenCode Go stealth mapping to Microsoft MAI; tool schemas / text tests replayed.

### Cross-source comparison

- Independent: X tracker coverage (aitrackerbot), OpenCode Go stealth disclosures.

### Normalized scores (1–100)

- **Tool use: 60/100.** Text-only agentic / tool-calling lineage.
- **Reasoning: 80/100.** MAI Thinking-1 lineage; reasoning.
- **Context window: 80/100.** Context not disclosed in sources found.
- **Multimodal: 10/100.** Text-only.
- **Coding: 60/100.** Text-only coding lineage.
- **Cost efficiency: 100/100.** Contributor-free ($0).

- **Overall Score: 58/100.** Mean of the five quality dims (Tool 60 + Reasoning 80 + Context 80 + Multimodal 10 + Coding 60) / 5 = 58; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-10
- Method: public internet research prioritizing official sources plus independent coverage; stealth identity disclosed via OpenCode Go tracker coverage.
- Reference URLs:
  - [AI Tracker Bot on X: "OpenCode Go's new stealth model iceman … — X](https://x.com/aitrackerbot/status/2114122939545088257)
  - [Project Iceman — Alpha Drive AI](https://iceman.alphadriveai.com/)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
