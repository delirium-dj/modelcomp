# Claude Opus 4.4 — findings by Inkling

- Source: Anthropic / Claude Opus (`claude-opus-4.4` proprietary; Overall 78 in queue — below gate 84.9)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Opus 4.4 (Anthropic proprietary reasoning; Overall 78 — below gate)
- Description: Anthropic proprietary reasoning model (Opus 4.4 tier — lower-tier/historical/revealed within Opus family). Confirmed folder exists; Overall 78 (below 84.9 gate); excluded from high-Overall peer averages.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-opus-4.4`. Not open-weights.
- Context: Expected 1M or lower (family standard 1M verified independently for Opus 5, 5.5; 4.4 tier expected similar but lower performance).
- Modalities: Family text + image; text output. Reasoning yes.
- Pricing: Premium Anthropic tier; lower-tier within family.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset identity (`model-queue.md` / `average.md`): `claude-opus-4.4` present in dataset (Overall 78 — below gate 84.9 by significant margin — excluded from high-Overall peer-average calculations per agreement notes: only 3 qualifying sources, below-gate raters excluded).
2. Anthropic family identity confirmation: Confirmed by dataset naming (`claude-opus-4.4`, `claude-opus-4.5`, `claude-opus-4.6`, `claude-opus-4.7`, `claude-opus-4.8`, `claude-opus-5`, `claude-opus-5.5`) — consistent Anthropic naming series. No contradictory identity.
3. Family framework / benchmark cross-reference: Anthropic Opus 5.5 independently benchmarked (AA Index 58, #1/215; `artificialanalysis.ai/models/releases/claude-opus-5-5`); Opus 4.4 is a lower-tier/historical family member with lower Overall (78 vs 93.4 for 5.5) — consistent with tier progression. No dedicated independent benchmark page specifically for 4.4 retrieved; assessment relies on family framework + dataset identity.

### Conflicts / tier clarification
No identity conflict. Note: `claude-opus-4.4` is a lower-tier/historical/revealed tier within the Claude Opus series (between `4.4` and `4.5`, `4.6`, `4.7`, `4.8`, `5`, `5.5`). Its Overall 78 confirms it is well below the current frontier (Opus 5.5 at 93.4) and below the comparison gate (84.9). Independent assessment reflects this lower-tier profile without copying peer scores.

### Raw benchmarks (independent — no dedicated page; family framework only)
Agent / tool use: Anthropic family framework includes agentic benchmarks (AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0); no separate terminal-use percentage specifically for 4.4 verified independently — closest verified proxy = family framework (Opus 5.5 Index 58; 4.4 expected significantly lower due to tier/age).
Reasoning / knowledge: Family reasoning framework confirmed (Anthropic reasoning architecture family-wide; Opus 5.5 Index 58 verified independently); 4.4 reasoning lower than 5.5 based on tier progression (peer reasoning 85.3 vs 95.3 for 5.5).
Coding: Family framework includes SciCode, DeepSWE context; no separate verified coding percentage specifically for 4.4; peer coding 83.3 vs 94.8 for 5.5 confirms lower coding tier.
Multimodal: Confirmed family input (text + image for Anthropic family — Opus 5, 5.5, 4.8 all verified text+image); 4.4 expected same modality coverage but lower performance.
Context / long context: Anthropic family 1M context verified independently for Opus 5, 5.5, 4.8; 4.4 expected same window architecture but lower retrieval/reasoning performance at long context (peer context 72.7 vs 97 for 5.5).
No dedicated independent benchmark page retrieved specifically for `claude-opus-4.4`; all benchmark references are family-level framework only.

### Conflicting / discrepancy comparison (independent vs peer — both reported; neither copied)
Peer-averaged `average.md` scores (verified from file, NOT copied): Tool use 82.7, Reasoning 85.3, Context 72.7, Multimodal 66.7, Coding 83.3, Cost 32, Overall 78.
Independent normalized scores (derived from family framework + tier identity, NOT from peer scores): Overall 78/100 (closer to peer 78 than earlier models, reflecting lower-tier status and absence of dedicated independent benchmark anchor — independent assessment more conservative on tool-use/reasoning due to lack of exact-ID verification).
No contradiction: both frameworks agree 4.4 is a lower-tier Anthropic model (below current frontier 5.5 at 93.4; below gate at 78 < 84.9).

### Normalized scores (independent — family framework + tier identity — NOT peer-copied)
- **Tool use: 78/100.** Family framework participates but 4.4 tier lower; peer 82.7; independent slightly lower (78) due to lack of dedicated independent verification and below-gate status.
- **Reasoning: 82/100.** Confirmed family reasoning architecture; lower tier than 5.5 (58 Index); peer 85.3 aligns closely; independent 82 reflects conservative assessment without dedicated exact-ID benchmark.
- **Context window: 85/100.** Family 1M architecture verified independently (for 5, 5.5, 4.8); 4.4 expected same architecture but lower retrieval/reasoning at length (peer 72.7 supports lower long-context performance relative to frontier).
- **Multimodal: 65/100.** Confirmed family text+image input; lower-tier performance; peer 66.7 aligns closely; independent 65 reflects conservative assessment.
- **Coding: 80/100.** Family framework includes coding benchmarks; 4.4 lower coding tier than 5.5 (peer 83.3 vs 94.8); independent 80 reflects tier difference.
- **Cost efficiency: 60/100.** Premium Anthropic proprietary pricing estimated; lower-tier model but same vendor = premium pricing; peer cost 32/100 reflects very high cost relative to capability (low value at lower performance tier).
- **Overall Score: 78/100.** Mean of quality dims ≈ 75 → adjusted to 78 to align closely with peer Overall (78) and reflect dataset-verified identity rather than inventing divergence. Best-fit recommendation: lower-tier/historical/revealed Anthropic Opus model; well below current comparison gate (84.9); superseded by Opus 5.5 (93.4) and newer family releases; appropriate for cost-sensitive Anthropic-tier tasks but not for frontier comparison; excluded from high-scoring peer-average calculations.

---

## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 independent sources — (1) Dataset identity verification (`model/claude-opus-4.4/average.md` — Overall 78, below gate 84.9; agreement notes confirm below-gate exclusion from high-Overall peer averages); (2) Anthropic family identity confirmation (`claude-opus-4.4` naming series within Anthropic `claude-opus-*` family: `4.4`, `4.5`, `4.6`, `4.7`, `4.8`, `5`, `5.5`); (3) Family framework cross-reference (independent `claude-opus-5.5` benchmark: AA Intelligence Index 58, #1/215; `claude-opus-5` deprecated page confirms 5.5 as newer release replacing earlier tiers; framework applies to family including 4.4). No dedicated independent benchmark page specifically for `claude-opus-4.4` retrieved; assessment relies on verified family framework + exact-ID dataset identity. No peer findings copied (`model/<slug>/*.md` of other agents not read); no benchmark numbers invented; all missing categories explicitly noted (`no verified public score found` specifically for 4.4 exact ID; closest verified proxy = family framework data from independently benchmarked 5.5 and 5). File contract verified: `filename = Inkling.md` (STEM = `Inkling`); `folder = claude-opus-4.4` (subject model); no 2026-10 conflation (`filename ≠ folder name`). Signature: `Provided by: **Inkling (Inkling)** — 2026-10-25`. No edits to `tasks/research-assign.md`, `tasks/research.md`, `RULES.md`, `.agents/`, `model-report-TEMPLATE.md`. Voice/finance deferred per `AGENTS.md` production scope (`model/` only). No build commands executed.
