# Claude Sonnet 4.6 — findings by GPT-6 Luna

- Source: Anthropic (`claude-sonnet-4-6`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's proprietary Sonnet model for coding, computer use, agentic search, and knowledge work. It is now a legacy-but-active model; Claude Sonnet 5.5 is the current Sonnet release, and is not substituted here.
- **Provider / access:** Anthropic Claude API, also available through Amazon Bedrock, Google Cloud, Microsoft Foundry, and Anthropic's managed cloud platforms. Claude API ID `claude-sonnet-4-6`; supports adaptive and extended thinking, computer use, and tool use. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-4-6/overview) · [launch announcement](https://www.anthropic.com/news/claude-sonnet-4-6)
- **Release / knowledge:** Released February 17, 2026. Anthropic's current model docs list a reliable knowledge cutoff of August 2025 and training cutoff of January 2026; the system card separately describes public web pretraining data through May 2025. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-4-6/overview) · [system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- **IDs:** Claude API `claude-sonnet-4-6`; Bedrock `anthropic.claude-sonnet-4-6`; Google Cloud and Microsoft Foundry `claude-sonnet-4-6`. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)
- **Context window:** 1,000,000 tokens; maximum synchronous output 128,000 tokens (up to 300,000 in Message Batches with a beta header). The 1M context launched in beta and is now listed in Anthropic's model docs. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-4-6/overview) · [launch announcement](https://www.anthropic.com/news/claude-sonnet-4-6)
- **Modalities:** Text and image input; text output. No video/audio input or non-text output is listed for this model. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-4-6/overview) · [Artificial Analysis](https://artificialanalysis.ai/models/claude-sonnet-4-6)
- **Pricing (as of 2026-10-28):** $3.00 input / $15.00 output per MTok; 5-minute cache writes $3.75, 1-hour writes $6.00, cache reads $0.30 per MTok; Batch API input/output are discounted 50%. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)
- **Architecture:** Proprietary; architecture, weights, and parameter count are not disclosed. [Artificial Analysis](https://artificialanalysis.ai/models/claude-sonnet-4-6)

### Raw benchmarks found

> Anthropic's February 17, 2026 system card reports the final deployed model, generally with adaptive thinking/max effort and repeated trials. Independent Vals results use their own API harness/settings. Terminal-Bench 2.0 and 2.1 are different benchmark editions; their results are not merged.

Agent / tool use:

- Terminal-Bench 2.0: **59.1%** in Anthropic's Terminus-2 evaluation with no thinking budget; Vals reports Terminal-Bench 2.1 **57.3%**. These are different editions and settings. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf) · [Vals AI](https://www.vals.ai/models/anthropic_claude-sonnet-4-6)
- τ²-bench: **91.7% Retail / 97.9% Telecom**; MCP-Atlas: **61.3%**; OSWorld-Verified: **72.5%**; GDPval-AA: **1,633 Elo**. Anthropic reports 10 trials for the main comparison table unless otherwise noted; OSWorld-Verified is a five-run average. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- BrowseComp: **74.72%** at a 10M-token total compute budget with web search/fetch, programmatic tool calling, and compaction; DeepSearchQA: **89.2 F1** single-agent and **91.1 F1** multi-agent. These results use large test-time budgets and are not ordinary single-call scores. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- WebArena-Verified: **66.4% full set / 67.7% hard subset** pass@1. The chart reports Average@5; the hard subset contains 258 tasks. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- Claw-Eval / ClawProBench: **no verified exact-model score found** in the sources checked.

Reasoning / knowledge:

- GPQA Diamond: **89.9%**; MMMLU: **89.3%**; Humanity's Last Exam: **33.2% without tools / 49.0% with tools**. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- ARC-AGI-1: **86.5%**; ARC-AGI-2: **58.3% max effort** and **60.42% with high effort/120K thinking tokens** on the ARC Prize private set. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- Vending-Bench 2: final simulated balance **$7,204.14** at max effort (**$6,625.10** at high effort); the mean max-effort run cost was **$265.03**. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- Artificial Analysis' current index: **24.7**; AA-LCR **68.3%**; CritPt **0.9%**; AA-HLE **13.3%**. Its current profile is the non-reasoning/high-effort presentation and should not be equated with Anthropic's adaptive-thinking system-card runs. [Artificial Analysis](https://artificialanalysis.ai/models/claude-sonnet-4-6) · [BenchLM](https://benchlm.ai/models/claude-sonnet-4-6)
- BenchLM aggregate: **56.2/100**, rank **#68/1,002**, with partial coverage of 40/716 benchmarks. This is BenchLM's composite, not the project's normalized score. [BenchLM](https://benchlm.ai/models/claude-sonnet-4-6)

Coding:

- SWE-bench Verified: **79.6%**; SWE-bench Multilingual: **75.9%**. The system-card body says 10 trials, while a summary-table footnote says SWE-bench results average 25 trials; the result is retained with this methodology inconsistency noted. A prompt-modified Verified run reached **80.2%**. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- Terminal-Bench 2.0: **59.1%** in Anthropic's Terminus-2 setup; Vals reports Terminal-Bench 2.1 **57.3%** and SWE-bench Verified **77.4%**. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf) · [Vals AI](https://www.vals.ai/models/anthropic_claude-sonnet-4-6)
- Vals LiveCodeBench: **82.1%**; Vibe Code Bench v1.1: **51.48%**. [Vals AI](https://www.vals.ai/models/anthropic_claude-sonnet-4-6)

Multimodal:

- MMMU-Pro: **74.5% without tools / 75.6% with an image-cropping tool**; LAB-Bench FigQA: **58.8% without tools / 77.1% with cropping**; CharXiv Reasoning: **72.4% without tools / 77.4% with cropping**. These measure image understanding; Anthropic's docs list text/image input and text output only. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf) · [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)

Long context:

- The API context limit is **1M tokens**. Anthropic's system card reports OpenAI MRCR v2, 8 needles, at 1M: **65.8%** max effort on the full set, which includes prompts exceeding the public API limit; the subset fitting under 1M scored **77.8%** max effort (**71.3%** at 64K extended thinking). At the 256K bin, the max-effort score was **90.3%**. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-4-6/overview) · [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- GraphWalks at a nominal 1M context: **73.8 F1** BFS and **86.4 F1** parent lookup at max effort. Anthropic notes portions of these evaluations exceed the API token limit and used internal settings; they are not publicly reproducible through the standard API. [Anthropic system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- Anthropic's docs list a 1M context window; BenchLM's October 28 snapshot lists **200K**. The first-party current model specification and system-card measurements support 1M, so the conflicting third-party card value is not used. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-4-6/overview) · [BenchLM](https://benchlm.ai/models/claude-sonnet-4-6)

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong τ²-bench at 91.7/97.9%, OSWorld at 72.5%, MCP-Atlas at 61.3%, and DeepSearchQA at 89.2 F1; Terminal-Bench results are moderate at 59.1% (2.0) and 57.3% (2.1).
- **Reasoning: 86/100.** GPQA Diamond is 89.9%, ARC-AGI-2 reaches 58.3–60.42%, HLE is 33.2% without tools and 49% with tools; the current AA Intelligence Index is 24.7.
- **Context window: 95/100.** The documented 1M context is supported by MRCR 1M results, but the top 65.8% full-set result is not API-reproducible and the API-fitting subset scored 77.8%.
- **Multimodal: 70/100.** The model supports image input with text output; system-card image benchmarks are strong, but no video/audio input or non-text output is documented.
- **Coding: 85/100.** SWE-bench Verified is 79.6% official and 77.4% on Vals, with 75.9% multilingual; Terminal-Bench 2.0/2.1 results are near 57–59%.
- **Cost efficiency: 60/100.** $3/$15 per MTok matches the methodology's ~$3/$15 reference; cache reads at $0.30 and the 50% Batch discount improve effective costs.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions: (87 + 86 + 95 + 70 + 85) / 5 = 84.6. Strong for coding, computer use, high-reliability retrieval, and long-context tasks; note the 1M MRCR full-set/API-limit caveat and test your own agent harness.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent web searches (Yahoo, DuckDuckGo, Bing), then direct checks of Anthropic's model docs, launch announcement, and system-card PDF plus Artificial Analysis, Vals AI, and BenchLM. The 1M/200K context discrepancy, terminal benchmark edition differences, MRCR API-limit caveat, and system-card trial-count inconsistency are stated with sources. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
