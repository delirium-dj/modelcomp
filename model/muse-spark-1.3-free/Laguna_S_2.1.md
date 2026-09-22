# Muse Spark 1.3 — findings by Laguna S 2.1

> Independent findings; scored against the model-comparison methodology. Overview + scoring methodology: `../../model-comparison.md` · Signed cross-model log: `../../model-findings.md`
>
> - Source: Meta (`opencode/muse-spark-1.3-contributor-free`)
> - Date: 2026-09-20 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Free) — reporting the free Contributor-tier xhigh variant
- **Short description:** Meta's Muse Spark 1.3 (xhigh), the fourth Muse Spark release, available free on OpenCode Zen in exchange for a training-data consent agreement; same weights as the standard $1.25/$4.25 paid tier, tuned for agentic knowledge work and science reasoning.
- **Provider / access:** Meta first-party API and Muse Code; OpenCode Zen free Contributor tier (`opencode/muse-spark-1.3-contributor-free`).
- **Release / knowledge:** Released September 2, 2026. Knowledge cutoff not disclosed.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Free Contributor tier); paid `meta/muse-spark-1.3`
- **Context window:** 1,048,576 (1M)
- **Modalities:** text, image, video in; text out
- **Pricing (as of 2026-09-20):** Free Zen Contributor tier (training-data consent); paid $1.25 in / $4.25 out per 1M (cached $0.15/M).
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85%** (Artificial Analysis, Sep 2 2026; up from Muse Spark 1.2's 80%)
- GDPval-AA v2: **1709 Elo** (Artificial Analysis, Sep 2 2026; up from 1.2's 1615)
- tau3-bench Banking: **47%** (Artificial Analysis, Sep 2 2026; +12 pts vs 1.2's 35%; ties Fable 5.1 47% and GLM-5.3 Flash 47%, behind Qwen3.8 Max 51% / Grok 4.6 51%)
- GDPpdf / AutomationBench-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94%** (Artificial Analysis, Sep 2 2026; +4 pts vs 1.2's 90%)
- CritPt: **26%** (Artificial Analysis, Sep 2 2026; +8 pts vs 1.2's 18%)
- Humanity's Last Exam: **47%** (Artificial Analysis, Sep 2 2026; +2 pts vs 1.2's 45%)
- SciCode: **59%** (Artificial Analysis, Sep 2 2026; +3 pts vs 1.2's 56%)
- AA Intelligence Index: **61** (Artificial Analysis, Sep 2 2026; +4 vs 1.2's 57)
- BenchLM overall: no verified public score found
- AA-LCR: **79%** (Artificial Analysis, Sep 2 2026; a 4-pt regression vs 1.2's 83%, via higher abstention)
- AA-Omniscience (Accuracy): **42%** (Artificial Analysis, Sep 2 2026; -3 pts vs 1.2's 45%, via higher abstention / lower hallucination)
- LCR / MLCR / HLE / CritPt-Adj: see above

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench / DeepSWE / SciCode-coding / Vibe Code Bench: no verified public score found (SciCode 59% listed above under knowledge)

Long context:

- MRCR / RULER: no verified public score found (1M window asserted by Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 85% and tau3-Bench Banking 47% (#1-eligible) plus GDPval-AA 1709 Elo; capped by SWE-bench Verified / LiveCodeBench / DeepSWE not disclosed.
- **Reasoning: 85/100.** GPQA Diamond 94%, CritPt 26%, AA Intelligence Index 61; the strongest non-agentic gains are science-evals.
- **Context window: 95/100.** 1M-token context (top tier).
- **Multimodal: 85/100.** Text, image and video input, but no audio.
- **Coding: 78/100.** Agentic coding led by TB2.1 85%; capped by no disclosed SWE-bench Verified / LiveCodeBench / DeepSWE.
- **Cost efficiency: 100/100.** Free Contributor-tier access on OpenCode Zen (training-data consent).
- **Overall Score: 85/100.** Mean of the five quality dimensions; leading agentic knowledge-work model on a free tier.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-20
- Method: Independent public web research (Artificial Analysis, Meta release); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.

---
