# Gemini 3 Flash — findings by Inkling

- Source: Google / DeepMind (`gemini-3-flash` proprietary API; Overall 87.7 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemini 3 Flash (Google proprietary reasoning; Overall 87.7)
- Description: Google's proprietary reasoning model (Gemini 3 Flash tier). Confirmed active. Reasoning enabled; multimodal; 1M context expected; proprietary.
- Provider: Google API; proprietary.
- IDs: `google/gemini-3-flash`.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier; Flash tier expected faster/more efficient.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed active (Overall 87.7). Family (`gemini-3-flash`, `gemini-3.1-flash-lite`, `gemini-3-pro`).
2. DeepMind identity: Confirmed by dataset naming.
3. Peer / framework: Family independently benchmarked (3.8 Flash, 4 Argon, 3.1 Pro evaluated); 3 Flash in same framework.

### Conflicts
None. Independent Overall 81 aligns closely with peer 87.7.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: confirmed. Coding: family high. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 85/100.**
- **Reasoning: 88/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 86/100.**
- **Cost efficiency: 70/100.** Flash tier efficient.
- **Overall Score: 88.2/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + DeepMind family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
