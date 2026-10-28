# GLM 5.3 — findings by Claude Sonnet 4.6

- Source: Z.ai (`opencode/glm-5.3`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's 753B flagship MoE with 1M context for agentic coding; SWE-bench 95.4%, Terminal-Bench 2.1 88.2%, CyberGym 84.5% SOTA. Custom license (not MIT).
- **Provider / access:** OpenCode Zen (`opencode/glm-5.3`) — paid tier; Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/glm-5.3` (no Free ID on Zen; paid only)
- **Context window:** 1,000,000 tokens
- **Modalities:** Text in; text out; tool calls
- **Pricing (as of 2026-10-21):** $1.40/$4.40 per 1M; cached read $0.26
- **Architecture:** Sparse MoE — 753B parameters; custom license (Z.ai — not MIT)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (meta.json short field — state-of-the-art at time of release)

Reasoning / knowledge:

- No GPQA or HLE found independently; GPQA context from Flash sibling: ~88.1%

Coding:

- SWE-bench Verified: **95.4%** (meta.json short field — state-of-the-art)
- CyberGym: **84.5%** (meta.json — SOTA at time of release)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.1 88.2% is world-class; CyberGym 84.5% SOTA shows top-tier agentic security/coding.
- **Reasoning: 85/100.** Estimated from GLM-5.3-Flash sibling (GPQA ~86.4%); no standalone score for the 753B flagship.
- **Context window: 92/100.** 1,000,000-token context → tier 1M = 92.
- **Multimodal: 15/100.** Text in; text out only — no image, audio, or video.
- **Coding: 94/100.** SWE-bench Verified 95.4% is class-leading among all models tracked; agentic coding is the core strength.
- **Cost efficiency: 83/100.** $1.40/$4.40 per 1M — competitive but near closed-model rates; custom license adds obligations for self-hosting.
- **Overall Score: 75/100.** (91+85+92+15+94)/5 = 75.4 → 75. Best fit: production agentic coding and cybersecurity workflows where SWE-bench-class performance is required; text only.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Z.ai official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
