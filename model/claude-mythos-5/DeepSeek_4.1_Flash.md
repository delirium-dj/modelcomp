# Claude Mythos 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Mythos 5 (`anthropic/claude-mythos-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5 — Anthropic's restricted cyber-defense flagship (June 2026), released under the Project Glasswing / Cyber Verification Program (CVP). Claude Fable 5 weights with security refusals lifted; vetted-organizations-only. (Distinct from Claude Mythos 5.1, the Sept 2026 Fable 5.1 twin.)
- **Short description:** Anthropic's most capable cyber-defense instrument — frontier coding/knowledge scores with cybersecurity refusals removed for verified defenders.
- **Provider / access:** Claude API / Bedrock / Google Cloud (`claude-mythos-5`) — **access gated** to vetted organizations via the CVP/Project Glasswing. No free tier; not a general-public model. (Note: `anthropic.com/news/claude-mythos-5` referenced in project metadata now 404s — the system card is the authoritative source.)
- **Release / knowledge:** June 2026; knowledge cutoff not disclosed.
- **IDs:** `claude-mythos-5`. No Zen Free ID.
- **Context window:** 1M+ context (system card; project metadata: 1M / 128K out).
- **Modalities:** text + image in; text out; adaptive thinking.
- **Pricing (as of 2026-11-05):** paid **$10 in / $50 out** per 1M; cache read **$1.00**; CVP access only.
- **Architecture:** proprietary; Fable-5-class weights, Mythos configuration (safeguards relifted).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **88.0%**; OSWorld-Verified **85%**; BrowseComp **88%**; CyberGym **83.8%** (system card — the cyber task set that is *not* suppressed for this configuration)
- Tau3 / MCP-Atlas / Toolathlon / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA **94.1%**; HLE **64.5%** (59% w/o tools); USAMO 2026 **97.6%**
- Artificial Analysis Intelligence Index / CritPt / LCR: **no verified public score found** (gated; BenchLM lists the model as unranked)

Coding:

- SWE-bench Verified **95.5%**; SWE-bench Pro **80.3%**; SWE Multilingual **92.2%**; SWE Multimodal 54.9%
- DeepSWE / LiveCodeBench / SciCode: **no verified public score found**

Multimodal / long context:

- CharXiv **93.5%** (88.9% w/o tools) — strong chart/document vision
- Long context: 1M+ documented; no MRCR/RULER/GraphWalks published.

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.1 88.0%, OSWorld-Verified 85% and CyberGym 83.8% are first-tier agentic/computer-use evidence, ahead of the GA twin's rows; capped because Tau3/MCP-class checks are unpublished and the model is unreachable by independent harnesses.
- **Reasoning: 92/100.** GPQA 94.1%, HLE 64.5% and a 97.6% USAMO 2026 are frontier; no AA Index/CritPt rows and restricted access keep it under 94.
- **Context window: 96/100.** 1M+ documented (≥1M band, 128K output per metadata); no published recall-at-depth measurement.
- **Multimodal: 82/100.** Text + image in with CharXiv 93.5%; text-only output, no audio/video.
- **Coding: 93/100.** SWE-bench Verified 95.5% and SWE Multilingual 92.2% are elite; SWE-bench Pro 80.3% trails the newest flagships and SWE Multimodal 54.9% is the soft spot.
- **Cost efficiency: 30/100.** $10/$50 per 1M with a $1.00 cache read is among the most expensive tracked; the value is CVP-gated anyway.
- **Overall Score: 91/100.** (93 + 92 + 96 + 82 + 93) / 5 = 91.2 → 91. Best fit: vetted cyber-defense teams needing Fable-5-class capability with refusals lifted on authorized work; everyone else should use the GA Fable line.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-05
- Method: fresh public internet research (Anthropic Fable 5 & Mythos 5 system card, BenchLM model page 2026-11-05 with 20 system-card rows, project-curated metadata for release/access/pricing facts; the official news URL in metadata now 404s and was surfaced). Independent harnesses cannot reach this configuration, so system-card rows are labelled as such. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5 and Claude Mythos 5 system card](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [Anthropic — Claude Mythos page](https://www.anthropic.com/claude/mythos)
  - [BenchLM — Claude Mythos 5 benchmark scores](https://benchlm.ai/models/claude-mythos-5)
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_5.md`, using the same headings.
