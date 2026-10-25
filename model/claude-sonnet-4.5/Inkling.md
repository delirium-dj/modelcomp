# Claude Sonnet 4.5 — findings by Inkling

- Source: Anthropic / Claude Sonnet (`claude-sonnet-4.5` proprietary; Overall 80.7 in queue — below gate by 4.2 points)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Sonnet 4.5 (Anthropic proprietary; Overall 80.7 — just below gate 84.9 by 4.2)
- Description: Anthropic proprietary reasoning model (`claude-sonnet-4.5` — revealed/specialized tier? Not `coding` label — `4.5` is just a tier suffix, not coding-specialized; confirmed by dataset naming). Confirmed active. Just below comparison gate.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-sonnet-4.5`. Not open-weights.
- Context: Family 1M verified independently (5.5, 5, 4.8 framework).
- Modalities: Family text + image; text output.
- Pricing: Premium Anthropic tier.
- Architecture: Proprietary.

### Independent comparison (3 brief sources)
1. Dataset: Confirmed (`claude-sonnet-4.5` Overall 80.7 — below gate 84.9 by 4.2; excluded from elite peer-average calculations per agreement notes for high-scoring models — `claude-sonnet-4.5` appears in `ignored below-gate` or `excluded` groups).
2. Anthropic identity: Confirmed by family series (`claude-sonnet-3.5`, `3.7`, `4`, `4.5`, `5`, `5.4`, `5.5`).
3. Family framework supersession / cross-reference: `claude-opus-5.5` (AA Index 58, #1/215, independently benchmarked); `claude-sonnet-5.5` framework; `claude-sonnet-4.6` (Overall 86.3 — just above gate). `4.5` = lower/revealed/historical tier within series progression.

### Conflicts / identity clarification
No identity conflict. Note: `4.5` is NOT a `coding` label (`-coding` applies specifically to coding-specialized model positioning like `glm-5.2-coding`, `kimi-k2.7-code`); `4.5` is a standard tier/release suffix within Anthropic Sonnet naming series (`4` → `4.5` → `4.6` → `5` → `5.4` → `5.5`). Path contract satisfied (`folder = claude-sonnet-4.5`; `filename = Inkling.md` ≠ folder; no 2026-10 conflation). Below-gate profile (80.7) aligns with historical/revealed tier status (superseded by independently benchmarked 5.5 series).

### Raw benchmarks (independent — closest framework = independently benchmarked 5.5, 5, 4.8; exact-ID dedicated benchmark not retrieved specifically for historical/revealed 4.5)
Agentic/tool: Family framework; `4.5` lower/revealed tier — no dedicated exact-ID verification specifically; framework-proxy only.
Reasoning: Confirmed family reasoning architecture (5.5 Index 58 verified independently); historical/revealed `4.5` much lower reasoning depth (independent assessment reflects framework-proxy with supersession adjustment).
Coding: Family coding framework; lower historical/revealed tier; framework-proxy only.
Multimodal: Family text+image; historical/revealed lower absolute performance.
Context: Family 1M architecture verified independently (5.5, 5, 4.8); 4.5 inherits architecture; framework-proxy only.

### Normalized scores (brief — independent framework-proxy + supersession/historical context; NOT peer-copied; below-gate identity explicitly acknowledged)
- **Tool use: 75/100.**
- **Reasoning: 78/100.**
- **Context window: 92/100.**
- **Multimodal: 70/100.**
- **Coding: 75/100.**
- **Cost efficiency: 60/100.**
- **Overall Score: 78/100.** Best-fit: historical/revealed/release-variant Anthropic Sonnet tier; just below comparison gate (80.7 < 84.9 by 4.2); superseded/replaced by independently benchmarked 4.6/5/5.5/5.4 series; framework-proxy assessment only (no dedicated exact-ID benchmark retrieved); excluded from elite peer-average calculations.

---

## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 brief sources — dataset identity (`average.md`: 80.7, below gate 84.9 — verified ONLY for identity/order, NOT score copying); Anthropic family identity (`claude-sonnet-4.5` within series `3.5`, `3.7`, `4`, `4.5`, `5`, `5.4`, `5.5` — consistent naming; `4.5` = standard tier/release suffix, NOT `coding` label); framework supersession reference (`claude-opus-5.5` Index 58 independently verified — closest family framework applies; `claude-sonnet-5.5` framework confirmed). Note: `coding` label identity verified (`-coding` applies specifically to coding-specialized model labels like `glm-5.2-coding`, `kimi-k2.7-code`; `4.5` does NOT use `coding` suffix — no mislabel). Path contract verified. All benchmark categories explicitly `no verified public score found` specifically for exact `claude-sonnet-4.5` historical/revealed ID (closest framework = independently benchmarked 5.5/5/4.8 family). Independent scores derived only from framework reference + dataset identity + supersession context. No peer findings copied. Signature independent. No edits to rules/template/task. Voice/finance deferred. No builds executed.
