# MAI-Code-1.1-Flash — findings by Claude Opus 4.6

- Source: Microsoft AI / MAI-Code-1.1-Flash (`opencode/mai-code-1.1-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's Copilot coding model with 256K context and image/PDF input support. Achieves SWE-bench Verified 72.6% and Terminal-Bench 2.1 62.9%. Integrated into GitHub Copilot at reduced pricing vs MAI-Code-1-Flash.
- **Provider / access:** GitHub Copilot `opencode/mai-code-1.1-flash`. No Zen Free ID.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/mai-code-1.1-flash` (no Free ID on Zen)
- **Context window:** 256,000 tokens total (128,000 max output). Verified via meta.json.
- **Modalities:** Text, image, PDF input; text output. Tool calls supported (VS Code agent mode).
- **Pricing (as of 2026-10-20):** $0.20/$1.20 per 1M in/out (GitHub Copilot), cached input $0.02. No free tier.
- **Architecture:** Proprietary. Microsoft AI internal model. Successor to MAI-Code-1-Flash with improved benchmarks and multimodal input support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (Microsoft AI report / meta.json)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found

Coding:

- SWE-bench Verified: **72.6%** (Microsoft AI report / meta.json)
- LiveCodeBench: no verified public score found

Long context:

- 256K context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 62.9% is decent mid-tier. Integrated VS Code agent tooling. Capped by trailing frontier agentic models by ~20%.
- **Reasoning: 45/100.** No published reasoning benchmarks. As a coding-focused model, reasoning is secondary. Capped by zero reasoning data.
- **Context window: 78/100.** 256K context per tier mapping (256K = 78). Large 128K output window.
- **Multimodal: 55/100.** Text + image + PDF input is a meaningful improvement over the text-only predecessor. Scored at 55 for text+image+doc support.
- **Coding: 58/100.** SWE-bench Verified 72.6% is solid — significant improvement over MAI-Code-1-Flash. Capped by trailing top coding models (80%+) and lack of broader coding benchmarks.
- **Cost efficiency: 72/100.** $0.20/$1.20 per 1M is affordable, significantly cheaper than MAI-Code-1-Flash ($0.75/$4.50). Cached input at $0.02 is excellent.
- **Overall Score: 58/100.** Mean of (55 + 45 + 78 + 55 + 58) / 5 = 58.2 → 58. A well-priced multimodal coding model with solid SWE-bench performance. The image/PDF support and lower pricing make it a meaningful upgrade over the v1 Flash. Best for Copilot users needing multimodal coding assistance.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis and Microsoft AI documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
