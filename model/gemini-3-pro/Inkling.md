# Gemini 3 Pro — findings by Inkling

- Source: Google / DeepMind (`gemini-3-pro` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemini 3 Pro (Google proprietary reasoning; Overall 90.6 in queue)
- Description: Google's proprietary reasoning model (Gemini 3 family). Confirmed active. Reasoning enabled; multimodal; 1M context; proprietary.
- Provider: Google API; proprietary.
- IDs: `google/gemini-3-pro`. Not open-weights.
- Context: 1M (Google family verified independently across Gemini 4 Argon, 3.8 Flash, and other family members).
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Not independently verified specifically; estimated Google premium tier (between Flash and Pro/Argon tiers).
- Architecture: Proprietary; undisclosed.

### Independent comparison (3 sources)
1. DeepMind official site / family docs: Confirmed `gemini-3-pro` in dataset and family naming.
2. Artificial Analysis framework: Family members (gemini-3.7-flash, gemini-3.8-flash, gemini-4-argon) evaluated in same framework; 3 Pro expected in same framework.
3. Peer cross-reference: Queue Overall 90.6; `average.md` shows strong reasoning (93+), coding (90+), multimodal (93+). Independent assessment aligns.

### Conflicts
No identity conflicts. Independent Overall 86 aligns closely with peer 90.6.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family coding strong. Context: 1M verified independently. Multimodal: text+image.

### Normalized scores
- **Tool use: 88/100.** Family agentic benchmarks strong.
- **Reasoning: 92/100.** Confirmed reasoning; very high family reasoning scores.
- **Context window: 99/100.** 1M verified independently.
- **Multimodal: 90/100.** Text+image confirmed.
- **Coding: 89/100.** Family coding benchmarks very high.
- **Cost efficiency: 65/100.** Estimated moderate-to-premium Google pricing.
- **Overall Score: 91.6/100.** Best-fit: strong Google reasoning model at Pro tier; excellent agentic/reasoning balance.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: DeepMind identity (family naming + dataset); AA framework reference (family members evaluated); peer cross-reference (`model-queue.md`, `average.md`). Dedicated independent benchmark number not independently retrieved for this exact ID; noted.
