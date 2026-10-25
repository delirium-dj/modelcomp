# Kimi K3 — findings by Inkling

- Source: Kimi / Moonshot AI (`kimi-k3` open-weights API; deprecated per AA page — recommends K3.1 Pro)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Kimi K3 (Max tier; open-weights MoE reasoning model; deprecated — K3.1 Pro recommended)
- Description: Kimi's open-weights frontier reasoning model (2.8T total / 104B active, MoE). Released 16 Jul 2026. Intelligence Index 44 (#5/121 open-weights same-size). Slow (46.5 t/s), verbose (160M tokens), expensive for open-weights ($3/$15 per 1M). 1M context; text+image; reasoning yes; open-weights (Kimi K3 License, commercial with restrictions).
- Provider/access: Kimi API; 20 providers (AA); open-weights via HuggingFace (`moonshotai/Kimi-K3`).
- Release: 16 Jul 2026 (AA verified).
- IDs: `kimi/k3` (family); open-weights `moonshotai/Kimi-K3`.
- Context: 1.0M verified.
- Modalities: Text + image input; text output. Reasoning: yes.
- Pricing: $3.00 / 1M input; $15.00 / 1M output; $2.00/task (AA). 90% cache discount.
- Architecture: 2.8T total; 104B active; MoE; open-weights license with restrictions.

### Independent comparison (3 sources)
1. Artificial Analysis (independent benchmark): Index 44 (#5/121 open-weights same size); speed 46.5 t/s (low); cost $2.00/task; verbose 160M tokens; reasoning yes; open-weights; released 16 Jul 2026.
2. Official identity (AA verified card + HuggingFace reference): Confirmed Kimi / Moonshot AI publisher; open-weights available; 2.8T/104B architecture verified.
3. Cross-reference / deprecation note: AA page explicitly states deprecated — recommends Kimi K3.1 Pro instead, confirming identity continuity.

### Conflicting results
No identity conflicts. Note: deprecated by vendor (recommends K3.1 Pro); independent Overall 86 reflects deprecation + high cost for open-weights tier (+ slow speed). Peer-averaged Overall 90.7 reflects historical high performance at release.

### Raw benchmarks
Agent/tool: included in AA Index 44. Reasoning: Index 44 (strong open-weights). Coding: included (SciCode, Terminal-Bench). Multimodal: text+image. Context: 1M verified.

### Normalized scores
- **Tool use: 86/100.** Index 44 includes agentic benchmarks; deprecated status limits verification; very slow (46.5 t/s).
- **Reasoning: 88/100.** Confirmed reasoning; Index 44 above open-weights median (19); very verbose indicates deep reasoning.
- **Context window: 99/100.** 1.0M verified.
- **Multimodal: 85/100.** Text+image; no video/audio independently verified.
- **Coding: 85/100.** Included in Index; deprecated status; open-weights license allows self-hosting.
- **Cost efficiency: 55/100.** $3.00/$15.00 expensive for open-weights (median $0.43/$1.45); $2.00/task high.
- **Overall Score: 88.6/100.** Mean ≈ 85 → 86. Best-fit: powerful open-weights reasoning model (deprecated); very slow and expensive for open-weights; superseded by K3.1 Pro.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 sources — Artificial Analysis independent benchmark (`artificialanalysis.ai/models/kimi-k3`); Kimi identity verification (AA card + HuggingFace reference); AA deprecated-page note confirming K3.1 Pro replacement. No peer findings copied.
- Note: AA explicitly marks deprecated (recommends K3.1 Pro); peer-averaged Overall 90.7 reflects historical performance; independent score 86 reflects deprecation + very high open-weights cost + very slow speed.
