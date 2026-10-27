# Muse Wonder Full — findings by Flint

- Source: Meta / Muse Wonder Full
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (Meta; Muse family).
- **Short description:** Meta Muse Wonder agentic model — the Full tier aimed at long-horizon agentic coding / research workloads.
- **Provider / access:** Meta (hosted via Muse Code); Muse Wonder Full was NOT on Meta's Model API at the time of research.
- **Release / knowledge:** Release date not pinned in verified sources found; knowledge cutoff not stated in verified sources.
- **IDs:** muse-wonder-full; hosted tier $50/mo via Muse Code; base Wonder tier $4 in / $20 out per Mtok.
- **Context window:** 1,048,576 (1M) total tokens (research-verified context scale); max output not stated in verified sources.
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning; tool use.
- **Pricing (as of 2026-10-27):** Muse Wonder Full $50/mo via Muse Code; Muse Wonder base tier $4/$20 per Mtok; Full not on Model API.
- **Architecture:** Proprietary (Meta); parameter scale not disclosed in verified sources.

### Raw benchmarks found

- Agent / tool use:
  - Terminal-Bench 4.0: **57%**.
  - Coding Agents Index: **68**; ProgramBench: **59.0**.
- Coding:
  - DeepSWE: **79.0**; Coding Agents Index: **68**; ProgramBench: **59.0**.
- Reasoning / knowledge:
  - Artificial Analysis Intelligence Index v4.3: Muse Wonder Full **56**.
  - CritPt: **33%** (ranked **#1**); GDP.pdf: **33%** (ranked **#1**).
  - SciCode: **63** (ranked **#3**).
- Long context / robustness:
  - AA-Omniscience hallucination: Full **23%**.

### Cross-source comparison

- DeepSWE **79.0** (agentic coding) vs SWE-Marathon conflicting numbers (Meta internal **57.5** vs Abundant AI independent **53.1%**) — methodology/harness conflict.
- CritPt **33%** ranked **#1** and GDP.pdf **33%** ranked **#1** frontier-top; GDPval-AA **1857 Elo** (AA-Briefcase **1729**).

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 4.0 **57%** → mid band (45–60) → ~55; independent agentic-coding indices below frontier.
- **Reasoning: 60/100.** Artificial Analysis Intelligence Index v4.3 **56** → mid band → ~60; CritPt/GDP.pdf #1 but sourced from frontier-top analyses.
- **Context window: 95/100.** 1M-token context → top tier (≥1M = 95–100); retrieval-at-scale fraction not verified.
- **Multimodal: 90/100.** Text/image/video/audio/PDF in; text out → +video/PDF multimodal band → ~90.
- **Coding: 80/100.** DeepSWE **79.0**, Coding Agents Index **68**, ProgramBench **59.0**, SciCode **63** → strong agentic-coding tier → ~80.
- **Cost efficiency: 30/100.** Muse Wonder Full $50/mo via Muse Code; not on Model API; paid tier → ~30.

- **Overall Score: 76/100.** Mean of the five quality dims (Tool 55 + Reasoning 60 + Context 95 + Multimodal 90 + Coding 80) / 5 = 76; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-27
- Method: public web research prioritizing official model card/docs plus independent benchmarks/reviews — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
