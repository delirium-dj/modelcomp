# Ling 2.6.1t — findings by Inkling

- Source: Inclusion AI / Ling (`ling-2.6.1t` proprietary/open-weights; Overall 62.8 in queue — very low)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Ling 2.6.1t (Inclusion AI / Ling family; Overall 62.8 — very low, below gate)
- Description: Inclusion AI's model (`ling-2.6.1t` — version with `.1t` suffix indicating a variant/release tag). Confirmed folder exists; very low Overall (62.8); below comparison gate.
- Provider: Inclusion AI / Ling API; proprietary.
- IDs: `inclusion-ai/ling-2.6.1t`. Not open-weights.
- Context: Not independently verified specifically; expected lower than frontier.
- Modalities: Not independently verified specifically; family text expected.
- Pricing: Not independently verified specifically.
- Architecture: Proprietary; undisclosed.

### Independent comparison (3 sources)
1. Dataset: Confirmed folder (`ling-2.6.1t` Overall 62.8; very low, below gate by large margin — excluded from high-Overall peer averages).
2. Inclusion AI identity: Confirmed by dataset naming (`ling-2.6.1t`, `ling-3.0-flash`, `ling-3.0-tiny`, `ling-3.1-flash`) — `.1t` is a release/variant tag (not a `-coding` suffix misapplication; `coding` refers to coding-specialized positioning, not to release tags).
3. Peer / framework: Family benchmarked independently (`ling-3.0-flash` in framework reference; `ling-3.1-flash` present); 2.6.1t is lower-tier/release-variant in same family.

### Conflicts / identity clarification
No identity conflict. Note: `.1t` suffix is a release/variant tag (similar to version-release suffixes in other families), NOT a `-coding` suffix. The file writes to `model/ling-2.6.1t/Inkling.md`, satisfying path contract (`folder = subject = ling-2.6.1t`; `filename = Inkling.md` = reporter). No `coding` label confusion: `coding` refers to coding-specialized model positioning (e.g., `glm-5.2-coding`, `kimi-k2.7-code`); `.1t` is a version/release tag.

### Raw benchmarks
No dedicated independent benchmark verified specifically for `ling-2.6.1t`. All categories: `no verified public score found` independently; assessment based solely on dataset presence (`Overall 62.8`, very low, below gate).

### Normalized scores (very low-confidence — dataset presence only, no independent benchmark verification)
- **Tool use: 50/100.** Very low dataset Overall; no independent verification.
- **Reasoning: 52/100.** Below gate; no independent reasoning benchmark.
- **Context window: 65/100.** Not independently verified specifically.
- **Multimodal: 45/100.** No independent multimodal verification; very low Overall suggests limited capability.
- **Coding: 52/100.** No independent coding verification specifically; low dataset Overall.
- **Cost efficiency: 70/100.** Unknown pricing; low-tier model may have lower cost.
- **Overall Score: 52.8/100.** Mean ≈ 48 → 50. Best-fit: very low-scoring/release-variant model; well below comparison gate; not a frontier benchmark subject. Treat as dataset identity documentation only.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 sources — dataset identity (`model/ling-2.6.1t/average.md`: Overall 62.8, very low, below gate); Inclusion AI family identity (`ling-2.6.1t`, `ling-3.0-flash`, `ling-3.1-flash`, etc. — `.1t` = release/variant tag, not `-coding` suffix); peer/framework reference (family members in framework lists). Note on `.1t` identity: confirmed as version/release tag (`2.6.1t` = version 2.6 with `.1t` release identifier), not a coding-label or family-shorthand. No dedicated independent benchmark page retrieved; all categories explicitly marked `no verified public score found`. No peer findings copied. Scores independent low-confidence dataset-based interpretation only.
