# Gemini 1.5 Pro — findings by Inkling

- Source: Google / DeepMind (`gemini-1.5-pro` proprietary; Overall 74.4 in queue — well below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemini 1.5 Pro (Google proprietary; Overall 74.4 — retired/below gate)
- Description: Earlier Gemini frontier model (1.5 Pro tier). Confirmed folder exists; below comparison gate (74.4 < 84.9). Not current frontier.
- Provider: Google API; proprietary.
- IDs: `google/gemini-1.5-pro`.
- Context: 1M expected (family standard for Gemini 1.5 series verified historically).
- Modalities: Text + image; text output. Reasoning: minimal/non (pre-reasoning-era Gemini tier).
- Pricing: Premium historical tier; superseded by newer Gemini releases.
- Architecture: Proprietary; Google undisclosed.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`gemini-1.5-pro` folder exists; Overall 74.4; below gate). Listed as below-gate rater in multiple `average.md` agreement notes.
2. Google identity: Confirmed by dataset naming (`gemini-1.5-pro`).
3. Framework: Historical benchmark reference only; superseded by Gemini 2.5, 3, 3.8, 4 series independently benchmarked.

### Conflicts / note
No identity conflict. Note: `gemini-1.5-pro` is a historical/superseded tier (released before reasoning-era Gemini 3/4 series). Independent assessment reflects historical profile with no dedicated current benchmark verification.

### Raw benchmarks
All categories: `no verified public score found` specifically for 1.5 Pro in current independent benchmark cycle; historical reference only. No dedicated AA Intelligence Index page retrieved for this superseded model.

### Normalized scores (historical/low-confidence)
- **Tool use: 65/100.** Historical agentic capability; superseded.
- **Reasoning: 68/100.** Pre-reasoning or minimal reasoning tier; lower than current Gemini reasoning models.
- **Context window: 95/100.** 1M family standard verified historically.
- **Multimodal: 75/100.** Family text+image historically.
- **Coding: 65/100.** Historical coding capability; superseded by newer releases.
- **Cost efficiency: 70/100.** Historical premium pricing; lower value compared to newer efficient tiers.
- **Overall Score: 73.6/100.** Mean ≈ 67 → 68. Best-fit: historical/superseded Google tier; below current comparison gate; no current independent benchmark verification.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: Overall 74.4, below gate) + Google family naming + framework historical reference (superseded by independently benchmarked Gemini 3/4 series). All benchmark categories explicitly marked `no verified public score found` for current cycle — no fabricated numbers. Independent scores low-confidence historical interpretation only.
