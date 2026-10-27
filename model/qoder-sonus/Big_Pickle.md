# Qoder Sonus — findings by Big Pickle

- Source: Qoder (qoder-sonus)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoder Sonus
- **Short description:** Built-in model by Qoder (Alibaba-affiliated coding agent platform), positioned for marathon-length autonomous tasks, hardest knowledge work, and serious coding with a specialty in Computer Use / GUI automation.
- **Provider / access:** Qoder platform (Qoder, Qoder IDE, Qoder CLI, JetBrains plugin, QoderWake, Cloud Agents). Access via Qoder credits/built-in models; API details not broadly published as standalone public API ID in common aggregators.
- **Release / knowledge:** Announced September 10, 2026; knowledge cutoff not publicly documented.
- **IDs:** `opencode/qoder-sonus` (as listed), Qoder built-in model "Sonus"
- **Context window:** Not publicly specified in detail (commonly positioned for long autonomous tasks); treated as provisional.
- **Modalities:** Text in/out; computer use/GUI control capability emphasized; tool use supported in agent context.
- **Pricing (as of 2026-10):** Credit-based via Qoder plans. Consumption multipliers have changed over time (previously 3.2x, later raised to 8x in updated consumption reference); credit value approximately $0.0133 USD. Included in paid plans (Lite/Pro/Pro+/Ultra) with monthly credits; BYOK available separately. Pricing is plan/credit based, not a simple public per-1M token rate.
- **Architecture:** Proprietary (Qoder-built); not open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Computer Use (Qoder announcement): Emphasized as core specialty — drives computer and pro software end-to-end (no specific public benchmark % found in standard leaderboards).
- Terminal/agentic tasks: no verified public SWE-bench/TerminalBench scores found for "qoder-sonus" as a standalone model entry in major public leaderboards at time of research.

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- BenchLM/Artificial Analysis Intelligence Index: no verified public score found as standalone entry

Coding:
- SWE-bench Verified / SWE-bench Pro: no verified public score found as standalone entry
- LiveCodeBench: no verified public score found as standalone entry

Long context:
- no long-context retrieval benchmark (MRCR/RULER) reported publicly

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong positioning around Computer Use and marathon autonomous tasks per Qoder announcements; lacks public, third-party tool-use benchmark scores to validate at top tier.
- **Reasoning: 72/100.** Marketed for "hardest knowledge work" but no public GPQA/HLE/AA Intelligence Index numbers found; provisional.
- **Context window: 75/100.** Positioned for long-running autonomous tasks; exact window size not publicly documented.
- **Multimodal: 15/100.** Primarily text-focused based on public materials; computer use implies screen/GUI interaction but not clearly documented as broad multimodal input/output like vision models.
- **Coding: 76/100.** Targeted at serious coding tasks, but no public SWE-bench/LiveCodeBench scores found to substantiate relative to coding-focused models.
- **Cost efficiency: 70/100.** Credit-based with multipliers (currently 8x in some references) making it relatively expensive in credits compared to cheaper models; value depends on plan.
- **Overall Score: 63.2/100.** Half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding)/5 = (78+72+75+15+76)/5 = 63.2. Limited by lack of public benchmark verification despite strong product positioning.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-27
- Method: public internet research (Qoder forums/announcements, pricing/docs, X posts); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_Pro.md`, using the same headings.
