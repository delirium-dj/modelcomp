- Source: Anthropic/Claude Haiku 5.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's 2026-10-07 lightweight model for high-frequency, cost-sensitive tasks, the third Claude 5.5 family member. First Haiku with Adaptive Thinking and adjustable effort, plus Browser Use; ~75% lower average running cost than Haiku 4.5. Often used as a sub-agent to Opus 5.5 / Sonnet 5.5. A distinct model.
- **Provider / access:** Claude API and platform; usable as a sub-agent within Opus/Sonnet 5.5 workflows.
- **Release / knowledge:** 2026-10-07; knowledge cutoff: no verified public score found.
- **IDs:** `claude-haiku-5-5` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (up from Haiku 4.5's 200K); maximum output **128,000 tokens** (up from 64K).
- **Modalities:** text and image in, text out; coding, computer operation, knowledge work, Browser Use; new classifier-based refusal mechanism. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** ~**75% lower average running cost** than Haiku 4.5, and launch coverage describes a ~90% price cut (relative claims); no absolute rate card in the retrieved pages — no verified public price found.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. **Adaptive Thinking** with five effort levels (Low→Max), API default Medium; shares many performance/efficiency/safety improvements with Opus 5.5.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **39.2%** (GPT-6 Luna 16.4%) — launch comparison, labelled by harness
- GDPval-AA v2.1: **1620** (GPT-6 Luna 1437) — launch comparison, labelled by harness
- AutomationBench-AA (strict pass@1): **13.9%** (from Meta's Muse Ember launch table; Muse Ember 37.8%, GPT-6 Luna 20.2%) — comparand row, labelled
- OSWorld 2.1 (partial / binary): **68.9 / 27.8** (Muse Ember 69.5 / 33.8, GPT-6 Luna 50.5 / 17.0) — comparand row, labelled
- FrontierCode 2.0-AA: **34.9** (Muse Ember 27.2) — comparand row, labelled
- Agents' Last Exam (internal): **57.1** (Muse Ember 61.6) — comparand row, labelled
- AA Coding Agent Index **37**; AA Intelligence Index (max) **36**; cost per AA task (max) **$0.411** (Muse Ember $0.136) — comparand rows, labelled
- Browser Use and classifier-based refusals (qualitative)
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index (max) **36** as above; AA-Omniscience accuracy: no verified figure for this ID
- GPQA Diamond / HLE / LCR / CritPt: no verified public score found

Coding:

- Terminal-Bench 4.0 **39.2%**, FrontierCode 2.0-AA **34.9**, AA Coding Agent Index **37** as above
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window with 128K output; no MRCR / RULER / GraphWalks figure found — no verified public score found. Launch coverage notes the highest benchmark scores generally require more reasoning compute.

### Normalized scores (1–100)

- **Tool use: 85/100.** 39.2% Terminal-Bench 4.0 (2.4x GPT-6 Luna), GDPval-AA 1620, 68.9 OSWorld 2.1 partial and native Browser Use; capped by a weak 13.9% strict AutomationBench and no τ-bench figure.
- **Reasoning: 79/100.** Adaptive Thinking with five effort levels and an AA index of 36; capped by that modest index, no GPQA/HLE figure, and top scores requiring heavy reasoning compute.
- **Context window: 92/100.** A 5x window increase to 1M with 128K output on a lightweight tier; capped by no long-context retrieval measurement.
- **Multimodal: 81/100.** Image input with computer/browser operation and 78.6 PerceptionBench (comparand row); capped by text-only output, no verified audio/video input, and no multimodal benchmark of its own.
- **Coding: 83/100.** 39.2% Terminal-Bench 4.0, 34.9 FrontierCode 2.0-AA and a 37 Coding Agent Index; capped by no SWE-bench figure and by Muse Ember beating it on several agent/coding rows.
- **Cost efficiency: 90/100.** ~75% lower average running cost than Haiku 4.5, a ~90% launch price-cut claim, and cheap sub-agent use; capped by no absolute rate card and a $0.411 AA task cost vs Muse Ember's $0.136. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 85, 79, 92, 81, 83 = 84.0 → 84. Best fit: high-volume coding/computer-use sub-agents inside Opus/Sonnet 5.5 workflows with a 1M window.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Haiku 5.5 article retrieved via public web search excerpt (release, 1M/128K context, effort levels, Browser Use, ~75% cost reduction), plus launch coverage and Meta's published Muse Ember comparison table (retrieved via search excerpt) for the Terminal-Bench 4.0 39.2%, GDPval-AA 1620, AutomationBench 13.9%, OSWorld 68.9/27.8, FrontierCode 34.9, ALE 57.1 and AA index figures — all explicitly labelled as launch-reported or comparand rows measured under other models' tables, never merged as Haiku 5.5 vendor scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Claude Haiku 5.5 — 百度百科 (retrieved via search excerpt; specs, effort levels, cost)](https://baike.baidu.com/item/Claude%20Haiku%205.5/69132115)
  - [价格暴降 90%，多项测试超 GPT-6 Luna — 百家号 (retrieved via search excerpt; Terminal-Bench, GDPval)](https://baijiahao.baidu.com/s?id=1878482023076987889&wfr=spider&for=pc)
  - [Meta Releases Muse Ember — Go Crypto Venture (Meta launch comparison table rows)](https://gocryptoventure.com/meta-releases-muse-ember-a-1m-context-model-for-high-volume-agent-work)
