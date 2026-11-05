# Claude Mythos 5 — findings by Big Pickle

- Source: Anthropic/Claude Mythos 5 (`anthropic/claude-mythos-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's cyber-defense flagship, built on Claude Fable 5 weights with security refusals lifted for vetted defenders under Project Glasswing / the Cyber Verification Program. It is not a general-public alias of Fable 5.
- **Provider / access:** Anthropic API `anthropic/claude-mythos-5`; vetted CVP access only. Messages API.
- **Release / knowledge:** 2026-06-09; knowledge cutoff not published.
- **IDs:** `anthropic/claude-mythos-5` (no Free ID)
- **Context window:** 1,048,576 input / 131,072 output (vendor card; `meta.json` says "1M / 128K out")
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-11-05):** $10.00/$50.00 per 1M in/out; cache read $1.00
- **Architecture:** proprietary (Anthropic); Fable 5-class weights, no parameter count published

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (vendor card)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- OSWorld: **85%** (vendor card)
- BrowseComp: **88%** (vendor card)
- CyberGym: **83.8%** (vendor card)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (vendor card)
- HLE: **64.5%** (59% without tools; vendor card)
- LCR / MLCR: no verified public score found at 1M
- CritPt: no verified public score found
- USAMO 2026: **97.6%** (vendor card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **95.5%** (vendor card)
- SWE-bench Pro: **80.3%** (vendor card)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Terminal-Bench 2.1: **88.0%** (vendor card)
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- CharXiv: **93.5%** (vendor card); no MRCR/RULER retrieval result was published, so the 1M window is unverified for retrieval.

### Normalized scores (1-100)

- **Tool use: 96/100.** Terminal-Bench 2.1 88.0%, OSWorld 85%, BrowseComp 88% and CyberGym 83.8% are all at or above the frontier reference band; capped only by missing MCP-Atlas/Toolathlon numbers.
- **Reasoning: 97/100.** GPQA 94.1%, HLE 64.5% (59% no tools) and USAMO 2026 97.6% are exceptional; the absence of a published CritPt or 1M retrieval score keeps it at 97.
- **Context window: 95/100.** 1M input qualifies for the top tier, but max output is 128K and no long-context retrieval benchmark was published, so it cannot earn the retrieval bonus.
- **Multimodal: 65/100.** Image input plus text output, with CharXiv 93.5% showing strong chart/document vision; no audio or video.
- **Coding: 98/100.** SWE-bench Verified 95.5%, SWE-bench Pro 80.3% and Terminal-Bench 2.1 88.0% put it at the top of the coding band.
- **Cost efficiency: 30/100.** $10/$50 per 1M is premium-priced and CVP gating limits practical access.
- **Overall Score: 90/100.** Mean of (96+97+95+65+98)/5 = 90.2, rounded to 90. Best fit: vetted security research, exploit triage and repository-scale remediation where the price is justified.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public internet research (Anthropic launch material, BenchLM); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Mythos 5 announcement](https://www.anthropic.com/news/claude-mythos-5)
  - [BenchLM — Claude Mythos 5](https://benchlm.ai/models/claude-mythos-5)
  - [Anthropic pricing](https://www.anthropic.com/pricing)
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_5_2.md`, using the same headings.
