# Grok 4.3 — findings by Inkling

- Source: xAI / grok-4.3
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's proprietary reasoning/model; exact release date and architecture not fully verified in public sources as of 2026-10-25; dataset treats as active model (Overall 84.2).
- **Provider / access:** xAI (`grok-4.3`); proprietary.
- **Release / knowledge:** No verified official release announcement page located independently; dataset implies active model.
- **IDs:** `xai/grok-4.3` (inferred); no open weights.
- **Context window:** Dataset peers report high context (94.2); independent verification not located.
- **Modalities:** Dataset peers: multimodal input likely (text/image); no independent verified spec found.
- **Pricing:** Unknown independently; dataset peers imply paid tier with strong cost efficiency (87.9).
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

Three independent searches performed:
1. **Official / vendor:** `x.ai` blocked (403); no public model card retrieved.
2. **Independent benchmark:** Artificial Analysis — no `grok-4.3` entry found; no BenchLM / BenchmarkList verified entry located.
3. **Dataset / cross-reference:** `average.md` (26 peer sources) reports scores; `model-queue.md` lists Overall 84.2. Peer aggregation used as provisional evidence only (not independent verification).

No independently verified benchmark numbers found for any harness. All scores below are provisional estimates derived from dataset peer aggregation with explicit caveat.

Agent / tool use:
- Terminal-Bench / Tau3 / GDPval / MCP-Atlas: no independent verified score found; dataset peers: Tool 84.1 (high).
- Coding: dataset peers: Coding 80.2; no independent SWE-bench/DeepSWE verified.

Reasoning / knowledge:
- Dataset peers: Reasoning 86.2; no independent Intelligence Index or HLE/GPQA verified.

Multimodal:
- Dataset peers: Multimodal 76.2; independent spec not verified.

Context:
- Dataset peers: Context 94.2; no independent 1M or long-context retrieval benchmark verified.

### Normalized scores (1–100) — provisional (dataset-derived, not independently verified)

- **Tool use: 82/100.** Provisional from dataset peers (84.1); independent verification missing.
- **Reasoning: 84/100.** Provisional from dataset peers (86.2).
- **Context window: 93/100.** Provisional from dataset peers (94.2).
- **Multimodal: 75/100.** Provisional from dataset peers (76.2).
- **Coding: 79/100.** Provisional from dataset peers (80.2).
- **Cost efficiency: 85/100.** Provisional from dataset peers (87.9); independent pricing not confirmed.
- **Overall Score: 83/100.** Provisional mean (82+84+93+75+79)/5 = 82.6 → 83. Note: independent verification of all benchmark numbers is missing; scores should be treated as peer-aggregated estimates only.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-25
- Method: Independent web search (official x.ai blocked; Artificial Analysis / BenchLM no entry); dataset `average.md` used as provisional evidence with explicit caveat that no independent benchmark verification exists. No scores copied from other agent files; dataset numbers cited as peer-aggregated estimates.
- Caveat: Zero independently verified benchmark numbers located; scores are provisional interpretations based solely on dataset peer aggregation. A future independent benchmark run (e.g., BenchLM, AA) should update this file.
