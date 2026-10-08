# MAI-Code-1-Flash — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's fast text-only coding model for GitHub Copilot, built for high-volume iterative development. Trained from scratch on clean traceable enterprise data, no third-party distillation.
- **Provider / access:** Microsoft AI (Foundry) + GitHub Copilot (VS Code model picker + auto picker) + OpenCode Zen `opencode/mai-code-1-flash`.
- **Release / knowledge:** 2026-06-02 release (Microsoft AI blog, updated Jun 8 2026); knowledge cutoff not disclosed.
- **IDs:** `opencode/mai-code-1-flash`
- **Context window:** 256,000 total (128,000 max output) — verified via repo meta + LLM Reference.
- **Modalities:** Text in/out; adaptive thinking (concise-to-deep by task); strong multi-turn instruction following.
- **Pricing (as of 2026-10-08):** $0.75 input / $4.50 output per 1M (Copilot/Foundry), cached input $0.075. Paid only.
- **Architecture:** Proprietary (Microsoft AI in-house code model; params undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.8%** (LLM Reference observed 2026-06-07; Microsoft reports stronger than Haiku 4.5 without exact secondary number in blog)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- SWE-bench Pro (**agentic coding, Copilot harness**): **51.2%** (Microsoft blog via LLM Reference — vs Claude Haiku 4.5 35.2% same harness; rank 37/49 peer bar)

Reasoning / knowledge:

- GPQA Diamond: **84.6%** (LLM Reference Google-Proof Q&A, observed 2026-06-07)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Adversarial reasoning (Microsoft 186-question 34-category trap benchmark): **85.8% adjusted accuracy** (Microsoft blog — beats Haiku 4.5 overall; Einstellung traps <50%)

Coding:

- SWE-bench Verified / SWE-Pro: **71.6% Verified (rank 62/90) / 51.2% Pro (rank 37/49)** (LLM Reference)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 256,000 total.

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.0 54.8pct + SWE-Pro 51.2pct (Copilot harness, beats Haiku 4.5 35.2) + adversarial IF +14.5; capped with no Tau/GDPval rows.
- **Reasoning: 76/100.** GPQA 84.6pct + adversarial 85.8pct (reasoning-strong) + beats Haiku 4.5 on math/science; capped with no HLE/LCR/CritPt/Index rows.
- **Context window: 82/100.** 256K total / 128K output verified (256K tier below 1M); capped under 1M band, no measured retrieval score.
- **Multimodal: 15/100.** Text-only — floor tier.
- **Coding: 74/100.** SWE-Pro 51.2pct + Verified 71.6pct in production Copilot harness; capped with no LCB/SciCode/Vibe rows and mid peer ranks.
- **Cost efficiency: 65/100.** $0.75/$4.50 paid (cheap input, steep output); efficient for high-volume iteration per design.
- **Overall Score: 64/100.** Mean of five non-cost dims (72+76+82+15+74)/5 = 63.8 → 64; best for high-volume Copilot iterative coding where harness-tuned efficiency beats frontier coding ceilings.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (Microsoft AI blog Jun 2026, LLM Reference page with peer bars); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
