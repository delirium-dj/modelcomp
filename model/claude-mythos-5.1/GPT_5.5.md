# Claude Mythos 5.1 — findings by GPT 5.5

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Claude Mythos 5.1 is Anthropic's trusted-access variant of Claude Fable 5.1 for cyberdefense and life-sciences users with relaxed safeguards.
- **Provider / access:** Anthropic trusted access programs; not general free-tier access.
- **Release / knowledge:** Released alongside Claude Fable 5.1 in September 2026.
- **IDs:** `anthropic/claude-mythos-5-1`
- **Context window:** 1M input / 128K output per repo metadata and ClaudeKit coverage.
- **Modalities:** Text and image input; text output; adaptive thinking and tool use.
- **Pricing (as of 2026-10-05):** Anthropic Mythos page reports pricing starts at $10/M input and $50/M output; repo metadata has the same paid tier.
- **Architecture:** Proprietary Anthropic model, based on the Fable 5.1 capability tier with different access/safeguard policy.

### Raw benchmarks found

Agent / tool use:

- Anthropic Mythos page: describes extensive evaluation for safety, security, and reliability and shows a Fable 5.1 benchmark comparison image; exact Mythos 5.1 rows were not exposed in accessible text (`https://www.anthropic.com/claude/mythos`).
- The AI Rankings: reports Terminal-Bench 4.0 at **60.9%** as the public disclosure for Mythos 5.1 (`https://theairankings.com/anthropic/claude-mythos-5-1/`).
- Terminal-Bench 2.1: **no verified public score found**
- Terminal-Bench 4.0: **60.9%**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Claude Mythos Preview system-card coverage: earlier Mythos Preview materials report GPQA Diamond **94.6%**, CyberGym **83.1%**, and Cybench CTF **100%**, but these are preview-era figures, not exact 5.1 public rows (`https://health-isac.org/wp-content/uploads/Claude-Mythos-and-its-Health-Sector-Implications.pdf`).
- GPQA Diamond: **94.6% preview proxy**
- HLE: **no verified public score found**
- CritPt: **no verified public score found**

Coding:

- Mythos Preview system-card coverage: reports SWE-bench Verified **93.9%** for Mythos Preview, useful as a proxy for the restricted cyber/software lineage but not exact 5.1 disclosure (`https://health-isac.org/wp-content/uploads/Claude-Mythos-and-its-Health-Sector-Implications.pdf`).
- SWE-bench Verified: **93.9% preview proxy**
- LiveCodeBench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- Mythos Preview system card reports GraphWalks **80.0%** BFS and **97.7%** parents across 256K-1M contexts; exact Mythos 5.1 long-context rows were not found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 4.0 disclosure and cyber-agent positioning support strong tool use, capped by restricted access and limited exact 5.1 rows.
- **Reasoning: 94/100.** Preview GPQA/cyber evidence and Fable-class lineage support frontier reasoning.
- **Context window: 95/100.** 1M / 128K context-output capacity plus strong GraphWalks preview evidence.
- **Multimodal: 70/100.** Text and image input are supported, without broader audio/video modalities in tracked metadata.
- **Coding: 94/100.** SWE-bench preview proxy and cyber/software focus justify a high coding score, capped by proxy status.
- **Cost efficiency: 68/100.** $10/$50 is expensive, though useful for specialized trusted-access domains.
- **Overall Score: 89/100.** Mean of the five quality dimensions; best fit is vetted security/life-sciences work needing relaxed safeguards and strong code reasoning.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
