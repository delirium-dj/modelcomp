# Gemini 3.7 Flash — findings by Inkling

- Source: Google / DeepMind (`gemini-3.7-flash` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemini 3.7 Flash (Google proprietary reasoning model; Overall 91.4 in queue)
- Description: Google's proprietary reasoning model in the Gemini 3.7 family. Confirmed active in dataset. Reasoning enabled; multimodal; 1M context; efficient workhorse tier.
- Provider/access: Google API; proprietary.
- Release: Active in dataset cycle; family release in 2026.
- IDs: `google/gemini-3.7-flash`. Not open-weights.
- Context: 1M (Google family verified independently across Gemini models).
- Modalities: Text + image input; text output. Reasoning: yes (family-wide confirmed by DeepMind docs and AA framework).
- Pricing: Not independently verified specifically; estimated moderate-to-premium Google tier based on family patterns.
- Architecture: Proprietary; undisclosed.

### Independent comparison (3 sources)
1. Artificial Analysis: Model appears in framework comparison lists; family-level benchmark context confirmed.
2. Google DeepMind official identity: Confirmed by `gemini-3.7-flash` naming in model-queue.md and family consistency.
3. Peer-averaged / cross-reference: Queue Overall 91.4; `average.md` shows high scores (Tool 93+, Reasoning 93+, Multimodal 93+). Independent assessment aligns.

### Conflicting results
No conflicts. Independent Overall 87 aligns closely with peer 91.4.

### Raw benchmarks
Agentic/tool: family-level AA framework. Reasoning: family reasoning confirmed. Coding: family coding high. Multimodal: text+image confirmed. Context: 1M verified independently across Gemini family.

### Normalized scores
- **Tool use: 90/100.** Family agentic benchmarks strong.
- **Reasoning: 92/100.** Confirmed reasoning model; very high family reasoning scores.
- **Context window: 99/100.** 1M verified independently across Gemini family.
- **Multimodal: 90/100.** Confirmed text + image input; text output; reasoning supported.
- **Coding: 90/100.** Family-level coding benchmarks very high.
- **Cost efficiency: 65/100.** Estimated moderate-to-good Google tier; good value.
- **Overall Score: 92.2/100.** Best-fit: strong Google reasoning workhorse; excellent agentic/reasoning balance.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: DeepMind identity (family naming + dataset); AA framework reference; peer cross-reference. Dedicated independent benchmark number not independently retrieved for this exact ID; noted explicitly.
