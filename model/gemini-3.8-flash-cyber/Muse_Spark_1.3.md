# Gemini 3.8 Flash Cyber — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.8 Flash Cyber, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch/Fairwind confirmations added; zero Cyber-specific numbers so scores hold 78); re-verified 2026-09-29 (UTC, user-signed-off re-research: CyberGym 86.2 + 20-lang 70% + CWE-Bench 47.2 + Fairwind case studies added; Tool 78 → 86, Reasoning 80 → 83, Coding 84 → 88, Overall 78 → 81)
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
- CyberGym (vuln discovery): **86.2% pass@1** (Google; vs GPT-5.5 Cyber 85.6, Mythos 5 83.8, Sol 83.6, 3.5FC 77.5 — re-verified 2026-09-29)
- 20-language vuln benchmark (internal): **>70%** (vs 58.9% 3.7F, 46.6% 3.5FC — re-verified 2026-09-29)
- CWE-Bench (patching, Collinear): **47.2% pass@1** (vs frontier 47.8%, Pareto-optimal cost — re-verified 2026-09-29)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (CWE-Bench 47.2% patching recorded above as the in-domain equivalent)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**
- Vendor case studies (provisional): Chrome 2.6x correct patches vs larger commercials; Wiz +7.5–9.7% recall at 2.3–5.2x lower cost; Cloud VR critical vuln <2hrs (named teams, vendor-selected — re-verified 2026-09-29)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 86/100.** CyberGym 86.2% (best among named rivals) with 20-language 70%+ discovery and CWE-Bench 47.2% Pareto patching show elite security-agent loops; capped by no general TB/Tau/Claw numbers and restricted access.
- **Reasoning: 83/100.** 3.8-generation reasoning with elite in-domain discovery/patching evidence; capped by zero Cyber-specific GPQA/HLE numbers.
- **Context window: 100/100.** 1M / 65K out verified; top tier.
- **Multimodal: 50/100.** Text/code in-out focus; capped well below image/audio/video omni models.
- **Coding: 88/100.** CWE-Bench 47.2% at Pareto frontier with Chrome 2.6x patch evidence on a latest-Flash coding base; capped by zero public SWE numbers.
- **Cost efficiency: 40/100.** Restricted Fairwind Program with no public pricing; access cost caps value.
- **Overall Score: 81/100.** Mean of the five non-cost dims (86+83+100+50+88)/5 = 81.4 → 81; best-fit restricted security-patch specialist pick — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
