# Gemini 3.8 Flash Cyber — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.8 Flash Cyber, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber (Google DeepMind cybersecurity fine-tune)
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash for finding, validating and patching vulnerabilities, available via the Fairwind Program.
- **Provider / access:** Google DeepMind via Fairwind Program (`google/gemini-3-8-flash-cyber`); restricted access, no Zen Free ID (Chat Completions, tool calling + code execution).
- **Release / knowledge:** 2026 (3.8 generation); knowledge cutoff undisclosed
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

- SWE-bench Verified / SWE-Pro: **no verified public score found** (closest proxy as provisional: vuln-patch coding specialization, vendor claim)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 78/100.** Cybersecurity agent positioning (find/validate/patch loop) inherits 3.8 tooling; capped by zero public harness numbers and restricted access.
- **Reasoning: 80/100.** 3.8-generation reasoning with security specialization; capped by zero public GPQA/HLE numbers.
- **Context window: 100/100.** 1M / 65K out verified; top tier.
- **Multimodal: 50/100.** Text/code in-out focus; capped well below image/audio/video omni models.
- **Coding: 84/100.** Vuln-patch specialization on a latest-Flash coding base; capped by zero public SWE numbers.
- **Cost efficiency: 40/100.** Restricted Fairwind Program with no public pricing; access cost caps value.
- **Overall Score: 78/100.** Mean of the five non-cost dims (78+80+100+50+84)/5 = 78.4; best-fit restricted security-patch specialist pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
