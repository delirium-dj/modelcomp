# Qoder Sonus — findings by Flint

- Source: Qoder (`qoder/sonus-1.0`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoder Sonus
- **Short description:** Qoder's built-in agentic foundation model — the product of Qoder's "Model-Agent-Product" RL flywheel (announced 2026-09-10), built on a Qwen-Coder-Qoder base family and optimized with large-scale reinforcement learning for Qoder's agent scenarios; positioned for marathon-length autonomous tasks, hardest knowledge work, serious coding, and end-to-end computer use.
- **Provider / access:** Qoder ecosystem only (Qoder, Qoder IDE, Qoder CLI, JetBrains plugin, QoderWake, Cloud Agents) via Qoder Credits; closed proprietary weights — no standalone public API ID, not on OpenRouter/Hugging Face/public hubs; OpenCode route `opencode/qoder-sonus` via the Qoder provider plugin.
- **Release / knowledge:** Announced September 10, 2026 (Qoder forum); proprietary; knowledge cutoff not published.

- **IDs:** `qoder/sonus-1.0`, `opencode/qoder-sonus`.

- **Context window:** Published figures conflict and were not independently verified — Qoder-side metadata lists 128K total; subsequent research reported 256K and an 180K-vs-128K conflict; Qoder publishes no Sonus-specific window. Scored provisional.

- **Modalities:** Text in/out; computer use / screen & GUI automation is the emphasized modality; native image/video input for Sonus itself was not independently confirmed (the multimodal pretraining claim belongs to the Qwen-Coder-Qoder family base, a separate level).

- **Pricing (as of 2026-10-28):** Qoder Credits (plan-based: Lite/Pro/Pro+/Ultra, Credit Pack); Sonus credit reference factor recalibrated 3.2x → 8x effective 2026-09-21 (Qoder docs consumption reference); community-reported credit value ≈ $0.0133 USD per credit; no public per-1M token price; no free hosted tier surfaced.

- **Architecture:** Proprietary closed model; RL pipeline trained against Qoder's real-world agent sandboxes and real-world engineering-practice reward signals (Model-Agent-Product flywheel); base family Qwen-Coder-Qoder (RL-optimized Qwen-Coder).

### Raw benchmarks found

- Qoder Bench (surfaced via Qoder blog): Qwen-Coder-Qoder task resolution **surpasses Cursor Composer-1**; Windows terminal command accuracy improved **up to 50%**; production flywheel metrics: code retention +3.85%, tool error rates −61.5%, token consumption −14.5%.
- Vendor-reported capability claims (sonus.ai / Qoder materials, uncorroborated by independent groups): MMLU 87.5%, HumanEval 90–91.3%, MATH 91.8%.
- Independent third-party benchmarks: **none found** — no Artificial Analysis / BenchLM / LMArena / SWE-bench / OSWorld / τ-bench / Terminal-Bench standalone entry for Sonus could be located; all quantified signals above are vendor- or Qoder-reported.

### Cross-source comparison

- Official (Qoder forum announcement, Qoder docs consumption reference, Qoder blog) vs independent (none found): the entire quantified picture rests on Qoder-owned sources; the "surpasses Cursor Composer-1" and tool-error-reduction claims come from Qoder's own production flywheel. No independent benchmark organization published a Sonus-specific number, so no official-vs-independent conflict could be compared — the dominant uncertainty is verification coverage, not direction.

### Normalized scores (1-100)

- **Tool use: 72/100.** Qoder's computer-use + agentic-coding specialty is well-stated (Qwen-Coder-Qoder task resolution > Cursor Composer-1; −61.5% tool errors in production) but rests on zero independent agentic-harness confirmation (OSWorld/τ-bench/Toolathlon), so the specialty is capped mid-band rather than top-tier.

- **Reasoning: 70/100.** RL tuning for "hardest knowledge work" with engineering-practice rewards is plausible at the product level, but vendor MMLU/HumanEval/MATH claims were not independently reproduced and no GPQA/HLE/AA Intelligence Index row exists for Sonus — a mid-band, low-confidence placement.

- **Context window: 55/100.** Conflicting published windows (128K / 256K / 180K-vs-128K) with no independent verification — below the confident frontier band; provisional by design.

- **Multimodal: 55/100.** Text in/out plus the emphasized computer-use/GUI interaction tier; native image/video input for Sonus itself was not independently confirmed, so scored at the GUI-assisted tier rather than a confirmed multimodal VLM band.

- **Coding: 70/100.** Qoder Bench task-resolution margin over Cursor Composer-1 and the Windows terminal +50% figure point to elite positioning, but no Sonus-specific SWE-bench/LiveCodeBench number was located in independent sources — vendor-only signals cap the placement mid-band.

- **Cost efficiency: 60/100.** Closed proprietary access (no self-host; Qoder Credits with the recalibrated 8x Sonus factor, ≈$0.0133/credit, plan-based) puts it below the open-weight self-host leaders on pure dollar efficiency, with community complaints about credit burn.

- **Overall Score: 64/100.** Mean of the five quality dims (Tool 72 + Reasoning 70 + Context 55 + Multimodal 55 + Coding 70) / 5 = 64.4 → **64** (half-up); Cost efficiency excluded from the mean.

Best fit: Qoder's autonomous coding / computer-use product model — recommended where the Qoder agent stack is the deployment target and where independent benchmark evidence for Sonus is still pending.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model docs (Qoder forum announcement, Qoder docs consumption reference, Qoder blog) plus independent benchmarks/reviews (no independent Sonus benchmark located; source pivoting through Qoder-owned properties since aggregator coverage is absent) — official-first with explicit verification-gap reporting; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qoder_Sonus.md`, using the same headings.
