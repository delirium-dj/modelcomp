# Inkling Small — findings by Claude Sonnet 4.6

- Source: Thinking Machines Lab (`opencode/inkling-small`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's open-weight hybrid-reasoning MoE (276B total / 12B active) supporting text, image, and audio input; variable thinking effort for coding and agentic tasks. Released 2026-07-30.
- **Provider / access:** OpenCode (`opencode/inkling-small`) — open weights (free self-host)
- **Release / knowledge:** 2026-07-30
- **IDs:** `opencode/inkling-small` (open weights; HuggingFace: thinkingmachines/Inkling-Small)
- **Context window:** 1,000,000 tokens claimed; 256K–524K served depending on deployment
- **Modalities:** Text, image, audio in; text out; hybrid reasoning (variable thinking effort); tool calls
- **Pricing (as of 2026-10-21):** Open weights — free to self-host; hosted pricing varies by provider
- **Architecture:** Sparse MoE — 276B total / 12B active; open weights (MIT)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~55–64.7%** depending on evaluation harness (Artificial Analysis / eigent.ai)
- SWE-bench Verified: **80.2%** (eigent.ai — outperforms flagship Inkling at 77.6%)

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (eigent.ai — exceeds flagship Inkling at 87.2%)
- HLE (Humanity's Last Exam, text-only): **31.6%** (eigent.ai)
- AIME 2026 (math): **95.5%** (eigent.ai)

Coding:

- SWE-bench Verified: **80.2%** (same as above)

Long context:

- No long-context retrieval benchmark reported; served context varies by host (256K–524K+)

### Normalized scores (1–100)

- **Tool use: 83/100.** Terminal-Bench 2.1 ~60% mid-range; SWE-bench 80.2% is strong agentic coding for a 12B-active model.
- **Reasoning: 87/100.** GPQA Diamond 89.5% exceeds its larger sibling; AIME 2026 95.5% shows strong math. HLE 31.6% caps the ceiling.
- **Context window: 78/100.** Claimed 1M but served 256K–524K → scored at 256K tier = 78.
- **Multimodal: 72/100.** Text + image + audio in; text-only out — three modality input including audio earns higher tier.
- **Coding: 82/100.** SWE-bench Verified 80.2% is top-tier for active parameter count; punches above weight class.
- **Cost efficiency: 100/100.** Open weights, free to self-host.
- **Overall Score: 80/100.** (83+87+78+72+82)/5 = 80.4 → 80. Best fit: efficient agentic coding and multimodal reasoning at zero API cost.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Thinking Machines official, eigent.ai, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
