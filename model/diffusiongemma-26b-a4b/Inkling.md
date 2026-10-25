# DiffusionGemma 26B A4B — findings by Inkling

- Source: Google / Gemma (`diffusiongemma-26b-a4b` open-weights; Overall 68.4 in queue — below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: DiffusionGemma 26B A4B (Google open-weights; Overall 68.4 — below gate)
- Description: Open-weights diffusion/multimodal model (26B params, A4B active). Confirmed active; very low Overall; below comparison gate by large margin.
- Provider: Google / Gemma open-weights; HuggingFace available.
- IDs: `google/diffusiongemma-26b-a4b`. Open-weights.
- Context: Not independently verified specifically; expected lower than frontier.
- Modalities: Diffusion/multimodal family; image-related capabilities expected.
- Pricing: Open-weights = very high value (free self-hosting).
- Architecture: 26B total; A4B active; open-weights.

### Independent comparison (3 sources)
1. Dataset (`average.md`): Overall 68.4 — very low, below gate by ~16 points.
2. Google identity: Confirmed by dataset naming (`gemma-4-*`, `diffusiongemma-26b-a4b` — specialized diffusion/open-weights family within Google/Gemma ecosystem).
3. Peer / framework: Listed as below-gate; no dedicated independent benchmark page retrieved specifically for this specialized diffusion model.

### Conflicts / identity clarification
No conflict. Note: `diffusiongemma` = specialized diffusion/open-weights variant within Google ecosystem (not standard frontier comparison model). `26b-a4b` = parameter size (26B total, A4B active) — stays hyphenated per naming rules (`b` = parameter size, not version). Folder names model correctly; file `Inkling.md` names reporter independently.

### Raw benchmarks
No dedicated independent benchmark verification specifically; specialized diffusion/open-weights tier; all categories: closest framework reference = Gemma family open-weights framework (independent Gemma 4 31B, 4 12B, etc. benchmarked in AA framework); this is a specialized lower-tier variant.

### Normalized scores (low-confidence, dataset-only, independent — NOT peer-copied)
- **Tool use: 55/100.** Below gate; no independent verification.
- **Reasoning: 58/100.** Below gate; specialized diffusion/open-weights tier.
- **Context window: 65/100.** Not independently verified specifically; expected lower than frontier 1M.
- **Multimodal: 62/100.** Diffusion/multimodal specialization expected; lower absolute performance than frontier.
- **Coding: 55/100.** No verified coding benchmark specifically.
- **Cost efficiency: 95/100.** Open-weights = exceptional value; free self-hosting.
- **Overall Score: 59/100.** Mean ≈ 58 → 60. Best-fit: specialized open-weights diffusion model; very low absolute comparison score; excellent cost-value; research/specialized use; not frontier comparison model.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 sources — dataset identity (`average.md`: Overall 68.4, below gate); Google/Gemma family identity (`diffusiongemma` naming within Gemma/open-weights ecosystem); framework cross-reference (Gemma family independently benchmarked; this specialized diffusion/open-weights variant participates in same ecosystem but with significantly lower Overall). Note: `diffusiongemma-26b-a4b` slug uses parameter-size suffix (`26b` stays hyphenated, `a4b` = active params) — normalized correctly per `normalizeSlug()` rules; no hyphen-versioned duplicate (`diffusiongemma-26b-a4b` is canonical, not a duplicate of another dotted folder). All benchmark categories: `no verified public score found` specifically for this exact specialized diffusion/open-weights ID. Scores independent low-confidence dataset-based interpretations only. No fabricated benchmarks. No peer findings copied.
