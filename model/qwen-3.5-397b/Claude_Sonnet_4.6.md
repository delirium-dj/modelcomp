# Qwen 3.5 397B — findings by Claude Sonnet 4.6

- Source: Alibaba Cloud (`opencode/qwen-3.5-397b`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's 397B/17B-active Apache-2.0 MoE for reasoning, coding, and vision; SWE-bench 76.4%, AIME 91.3%. Superseded by 3.6/3.7/3.8 open lines.
- **Provider / access:** HuggingFace / third-party hosts (`opencode/qwen-3.5-397b`) — open weights (Apache-2.0)
- **Release / knowledge:** 2026
- **IDs:** `opencode/qwen-3.5-397b`; HuggingFace: `Qwen/Qwen3.5-397B-A17B` (no Free ID on Zen)
- **Context window:** 262,144 tokens native; extensible to ~1M; hosted at 1M
- **Modalities:** Text, image, video in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.60/$3.60 per 1M (Artificial Analysis); Apache-2.0 self-host free
- **Architecture:** Sparse MoE — 397B total / 17B active; Apache-2.0 open weights

### Raw benchmarks found

Agent / tool use:

- No specific terminal/agent benchmark found

Reasoning / knowledge:

- AIME 2025: **91.3%** (meta.json short field)

Coding:

- SWE-bench Verified: **76.4%** (meta.json short field)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 76/100.** SWE-bench 76.4% implies solid agentic coding; first-gen open MoE Plus tier at this scale.
- **Reasoning: 84/100.** AIME 91.3% shows strong mathematical reasoning for an open-weight MoE.
- **Context window: 78/100.** Native 262K → tier 256K = 78 (1M hosted but native is the reliable measure).
- **Multimodal: 68/100.** Text + image + video in; text-only out — native video input earns higher tier.
- **Coding: 78/100.** SWE-bench Verified 76.4%; superseded by 3.6+ which improved coding on similar footprints.
- **Cost efficiency: 99/100.** Apache-2.0 self-host free; $0.60/$3.60 hosted.
- **Overall Score: 77/100.** (76+84+78+68+78)/5 = 76.8 → 77. Best fit: self-hosted video+image agentic reasoning; use 3.6+ for new deployments.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Alibaba official, HuggingFace, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
