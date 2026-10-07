# Gemini 3.8 Flash Cyber — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.8 Flash Cyber, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch/Fairwind confirmations added; zero Cyber-specific numbers so scores hold 78); re-research pass 2026-10-07 adds CyberGym/CWE-Bench/vuln-discovery absolutes, scores recomputed 78 → 79
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber (Google DeepMind cybersecurity fine-tune)
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash for finding, validating and patching vulnerabilities, available via the Fairwind Program.
- **Provider / access:** Google DeepMind via Fairwind Program (`google/gemini-3-8-flash-cyber`) — governments + trusted partners (650 members incl. CrowdStrike, CIS) with CodeMender autonomous patch agent; restricted access, no Zen Free ID (Chat Completions, tool calling + code execution).
- **Release / knowledge:** 2026-09-02 joint launch with Gemini 3.8 Flash (Google blog, Doshi + Popa); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `google/gemini-3-8-flash-cyber` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) / 65K out — verified via curated repo metadata
- **Modalities:** text, code in; text, code out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Restricted Fairwind Program (no public pricing, no Zen Free ID)
- **Architecture:** proprietary (3.8 Flash cybersecurity fine-tune)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (closest proxy as provisional: vulnerability find/validate/patch positioning, vendor claim)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (vuln-patch specialization, not general SWE)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- Cyber-security coding: **86.2% CyberGym Pass@1 Final-submission** (vendor run; BenchmarkList rank 8/43, 83rd pct, field-leader tag; vs GPT-5.5-Cyber 85.6%, Mythos 5 83.8%, Sol 83.6%, 3.5 Cyber 77.5% — harnesses differ by owner); **47.2% CWE-Bench Pass@1** (Collinear held-out audit-and-patch, 100 tasks/54 CWEs; $3.64/rollout; vs Fable 5 47.8%/$10.27, Sol 44.2%/$2.29 — Pareto frontier); **71.0% recall on Google's private 20-language real-world vuln set** (1,200+ confirmed vulns; vs 3.7 Flash 58.9%, 3.5 Cyber 46.6% — vendor-reported, not independently verifiable); **6.0% Gray Swan indirect-prompt-injection ASR@15** (vs 3.8 Flash 5.5%, Opus 5 4.8% — lower is better)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 78/100.** Cybersecurity agent positioning (find/validate/patch loop) inherits 3.8 tooling; capped by zero public harness numbers and restricted access.
- **Reasoning: 80/100.** 3.8-generation reasoning with security specialization; capped by zero public GPQA/HLE numbers.
- **Context window: 100/100.** 1M / 65K out verified; top tier.
- **Multimodal: 50/100.** Text/code in-out focus; capped well below image/audio/video omni models.
- **Coding: 88/100.** CyberGym 86.2% plus CWE-Bench 47.2% (Pareto frontier at $3.64/rollout) and 71% real-world vuln recall evidence elite defensive-security coding; capped by zero general SWE/LiveCode/DeepSWE rows and gated reproducibility.
- **Cost efficiency: 40/100.** Restricted Fairwind Program with no public pricing; access cost caps value.
- **Overall Score: 79/100.** Mean of the five non-cost dims (78+80+100+50+88)/5 = 79.2 → 79; best-fit restricted security-patch specialist pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research + 2026-10-07 re-research pass (DataCamp launch coverage, BenchmarkList cyber rows, Traictory spec page, kingy.ai evidence audit with harness caveats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
