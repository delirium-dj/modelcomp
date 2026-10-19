# MAI-Code-1-Flash — findings by Claude Opus 4.6

- Source: Microsoft AI / MAI-Code-1-Flash (`opencode/mai-code-1-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's Copilot-native sparse-MoE coding model with 256K context, designed for VS Code agents. Achieves SWE-bench Pro 51.2% with up to 60% fewer tokens than competitors. Integrated into GitHub Copilot.
- **Provider / access:** GitHub Copilot `opencode/mai-code-1-flash`. No Zen Free ID.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/mai-code-1-flash` (no Free ID on Zen)
- **Context window:** 256,000 tokens total (128,000 max output). Verified via meta.json.
- **Modalities:** Text input/output. Tool calls supported (VS Code agent mode). No image/audio/video input.
- **Pricing (as of 2026-10-19):** $0.75/$4.50 per 1M in/out (GitHub Copilot), cached input $0.075. No free tier.
- **Architecture:** Proprietary sparse-MoE. Microsoft AI internal model optimized for token efficiency — achieves comparable results with ~60% fewer tokens than competing coding models.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found

Coding:

- SWE-bench Pro: **51.2%** (Microsoft AI report / meta.json)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- Token efficiency: **up to 60% fewer tokens** than competitors for comparable results

Long context:

- 256K context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 52/100.** Designed for VS Code agent mode with native tool-calling for Copilot. SWE-bench Pro 51.2% includes tool-use components. Capped by lack of dedicated agentic benchmarks.
- **Reasoning: 42/100.** No published reasoning benchmarks. As a coding-focused Flash model, reasoning is secondary to code generation speed. Capped by zero reasoning data.
- **Context window: 78/100.** 256K context per tier mapping (256K = 78). Large 128K output window.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 52/100.** SWE-bench Pro 51.2% is decent mid-tier. Token efficiency (60% fewer tokens) is a practical advantage. Capped by lacking SWE-bench Verified and broader coding benchmarks.
- **Cost efficiency: 55/100.** $0.75/$4.50 per 1M is moderate-to-expensive. Token efficiency partially offsets this. Cached input at $0.075 helps.
- **Overall Score: 48/100.** Mean of (52 + 42 + 78 + 15 + 52) / 5 = 47.8 → 48. A token-efficient coding model well-integrated with GitHub Copilot. Limited by text-only modality and moderate benchmark scores. Best for Copilot users wanting efficient coding assistance within VS Code.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Meta.json analysis and Microsoft AI documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
