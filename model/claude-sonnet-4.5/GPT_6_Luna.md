# Claude Sonnet 4.5 — findings by GPT-6 Luna

- Source: Anthropic/Claude Sonnet 4.5
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's proprietary hybrid-reasoning model, released in 2025. Its benchmark profile is especially strong in software engineering, computer use, and agentic tool use; this report covers the Sonnet 4.5 base model, not another Claude version or the separate “Thinking” listing some benchmark sites use.
- **Provider / access:** Anthropic API and listed cloud platforms; API accepts Messages requests. It is deprecated but still functional as of this report date, and scheduled to retire **2026-11-30**. Anthropic recommends Sonnet 5.5.
- **Release / knowledge:** Released **2025-09-29**. Anthropic lists a reliable knowledge cutoff of **2025-01** and a training-data cutoff of **2025-07**; the latter is not the same as the documented reliable cutoff.
- **IDs:** Pinned Claude API ID `claude-sonnet-4-5-20250929`; Claude API alias `claude-sonnet-4-5`. Other platform IDs vary (for example, Bedrock `anthropic.claude-sonnet-4-5-20250929-v1:0`).
- **Context window:** Current Anthropic model documentation specifies **200K tokens**, with **64K maximum output**. Anthropic's 2025 launch post separately reported **78.2% SWE-bench Verified** for a 1M-context configuration but said it was implicated in inference issues, so Anthropic reported the 200K result as primary. Artificial Analysis currently lists a **1M** context window for its Sonnet 4.5 entry; this conflicts with Anthropic's model-specific specification and is not used for the normalized context score.
- **Modalities:** Text and image input, text output; extended thinking is supported. Anthropic's model reference lists the input/output modalities explicitly.
- **Pricing (as of 2026-10-29):** **$3 / MTok input, $15 / MTok output**; cache writes are $3.75 (5-minute) or $6 (1-hour) per MTok, and cache reads are $0.30 / MTok. Batch API input and output are discounted 50%. Pricing is unchanged from Sonnet 4, per Anthropic.
- **Architecture:** Proprietary; Anthropic does not disclose parameter count or architecture details in the referenced model documentation.

### Raw benchmarks found

The main numeric table is Anthropic's own launch comparison chart; the accompanying post provides the principal SWE-bench protocol and evaluation methodology. Figures below are vendor-reported, not an independent rerun. A secondary source-quality caveat is recorded in the signature.

Agent / tool use:

- OSWorld: **61.4%** (Anthropic's launch chart; official OSWorld-Verified framework, 100-step maximum, averaged across four runs per the post's methodology).
- τ2-bench: **Retail 86.2%, Airline 70.0%, Telecom 98.0%** (Anthropic launch chart). Anthropic says these scores used extended thinking and prompt addenda for known benchmark failure modes; subtask scores should not be collapsed into one overall percentage.
- Terminal-Bench: **50.0%** (Anthropic launch chart; the post identifies the default Terminus 2 agent framework and says results average runs from different days. The chart does not identify a benchmark version, so this is not relabeled TB 2.0 or 2.1).
- No verified public Claude Sonnet 4.5 GDPval-AA or Claw-Eval score found in the reviewed sources.

Reasoning / knowledge:

- GPQA Diamond: **83.4%**; AIME 2025: **87.0% without tools, 100% with Python**; MMMLU: **89.1%** (Anthropic launch comparison chart). Anthropic notes AIME used temperature 1.0 and that the Python configuration used a 64K reasoning-token budget.
- No exact-version HLE, CritPt, or Intelligence Index score verified in the reviewed primary material.

Coding:

- SWE-bench Verified: **77.2%** primary result, averaged over 10 trials with no test-time compute, a 200K thinking budget, and the full 500-problem set. Anthropic's prompt included an instruction to use tools extensively and implement tests first.
- SWE-bench Verified high-compute result: **82.0%**, using multiple parallel attempts, discarding patches that fail visible regression tests, and selecting among remaining patches with an internal scoring model; no hidden-test information was used.
- 1M-context SWE-bench Verified configuration: **78.2%**. Anthropic says this setup was implicated in recent inference issues and reports the 200K score as its primary result.
- Terminal-Bench: **50.0%** (vendor chart; protocol details above). No exact-version SciCode or LiveCodeBench result verified.

Multimodal / long context:

- MMMU validation: **77.8%** (Anthropic launch comparison chart; visual reasoning).
- Current Anthropic documentation specifies a 200K context window. No verified exact-version MRCR, RULER, or other long-context retrieval score was found in the reviewed primary sources.

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld is 61.4%, while τ2-bench's Retail/Telecom results are strong (86.2%/98.0%); the score is capped by OSWorld performance and the lack of a verified GDPval-AA or Claw-Eval result.
- **Reasoning: 84/100.** GPQA Diamond is 83.4%, AIME 2025 is 87% without tools (100% with Python), and MMMLU is 89.1%; no HLE, CritPt, or comparable broad intelligence index result was verified.
- **Context window: 70/100.** The official current 200K specification maps to 70 under the project's tiering; no long-context retrieval result supports a higher score. The reported 1M evaluation configuration and Artificial Analysis listing conflict with Anthropic's current model-specific spec.
- **Multimodal: 65/100.** Text and image input qualify for the project's image-input band; output is text only, with no verified audio/video input support.
- **Coding: 84/100.** SWE-bench Verified is 77.2% at the primary 200K setting (82.0% with additional compute), and Terminal-Bench is 50.0%; strong coding results, but the Terminal-Bench figure is below the project's frontier reference and no SciCode/LiveCodeBench result was verified.
- **Cost efficiency: 60/100.** Anthropic's $3/$15 per MTok price point maps to about 60 in the project methodology; caching and batch discounts are available.
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions: `(80 + 84 + 70 + 65 + 84) / 5 = 76.6`, rounded to 77. Best suited to coding and computer-use agents that can benefit from strong task benchmarks; the 200K context and retirement date are notable constraints.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-29
- Method: Three independent public searches; Anthropic's [release post and comparison chart](https://www.anthropic.com/news/claude-sonnet-4-5), current [Sonnet 4.5 model reference](https://platform.claude.com/docs/en/models/sonnet-4-5/overview), and independent Artificial Analysis and BenchLM listings. Anthropic's [system-card URL](https://www.anthropic.com/claude-sonnet-4-5-system-card) resolved to the May 2025 Claude Opus 4 / Sonnet 4 system card during this review, so it was not used for Sonnet 4.5 claims. BenchLM's displayed benchmark rows also linked to an Opus 4.5 card, so its aggregate score and rows were excluded rather than treated as independently verified. Artificial Analysis's 1M context listing is retained as a conflict, not substituted for Anthropic's current 200K specification. Scores are normalized interpretations, not official ratings.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
