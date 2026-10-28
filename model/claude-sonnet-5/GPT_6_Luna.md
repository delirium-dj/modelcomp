# Claude Sonnet 5 — findings by GPT-6 Luna

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's proprietary adaptive-reasoning model for agentic coding, computer use, research, and knowledge work. It is now a legacy-but-active Sonnet model; Claude Sonnet 5.5 is the current release, and is not substituted in this report.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-5`), also available through Amazon Bedrock, Google Cloud, Microsoft Foundry, and Anthropic's managed cloud platforms. The API supports tool use and adaptive thinking. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-5/overview) · [launch announcement](https://www.anthropic.com/news/claude-sonnet-5)
- **Release / knowledge:** Released June 30, 2026. Reliable knowledge and training-data cutoff: January 2026. Model status is active (legacy), with retirement not sooner than June 30, 2027. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-5/overview)
- **IDs:** Claude API `claude-sonnet-5`; Bedrock `anthropic.claude-sonnet-5`; Google Cloud and Microsoft Foundry `claude-sonnet-5`. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-5/overview)
- **Context window:** 1,000,000 tokens; maximum synchronous output 128,000 tokens. Message Batches supports up to 300,000 output tokens with a beta header. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-5/overview)
- **Modalities:** Text and image input, text output; adaptive reasoning (default effort `high`) and tool use. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-5/overview) · [Artificial Analysis](https://artificialanalysis.ai/models/claude-sonnet-5)
- **Pricing (as of 2026-10-28):** $2.00 input / $10.00 output per MTok; 5-minute cache writes $2.50, 1-hour writes $4.00, and cache reads $0.20 per MTok. Batch API input and output receive a 50% discount. Anthropic made the $2/$10 introductory pricing permanent on August 10, 2026. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-5/overview) · [pricing announcement](https://www.anthropic.com/news/claude-sonnet-5)
- **Architecture:** Proprietary; weights and parameter count are not disclosed. [Artificial Analysis](https://artificialanalysis.ai/models/claude-sonnet-5)

### Raw benchmarks found

> Exact model ID is `claude-sonnet-5`. Anthropic's public system-card results are surfaced with attribution on BenchLM; Vals and Artificial Analysis provide independent evaluations. Results vary by benchmark release, effort, and harness. Terminal-Bench 2.1 numbers below are not combined as if they were matched runs.

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** in the Anthropic system-card result (via BenchLM); Artificial Analysis reports **80.5%**; Vals reports **74.53%**, averaging three runs at high effort (range **71.9–78.7%**). The official system-card score and independent Vals run are materially different; their harness/settings are not documented as identical. [BenchLM](https://benchlm.ai/models/claude-sonnet-5) · [Artificial Analysis](https://artificialanalysis.ai/models/claude-sonnet-5) · [Vals AI](https://www.vals.ai/models/anthropic_claude-sonnet-5)
- BrowseComp: **84.7%** using a **10M-token budget**, compaction, and programmatic tool calling; OSWorld-Verified: **81.2%**; HLE with tools: **57.4%**; GDPval-AA: **1,603 Elo** in the Anthropic system-card results. [BenchLM](https://benchlm.ai/models/claude-sonnet-5)
- Tau3-Banking: **37.3%**; EnterpriseOps-Gym-AA: **44.7%**. [BenchLM](https://benchlm.ai/models/claude-sonnet-5)
- Vals Index: **68.61%**, ranked **#3** in Vals' June 30 release evaluation. [Vals AI](https://www.vals.ai/models/anthropic_claude-sonnet-5)
- Claw-Eval / ClawProBench: **no verified exact-model result found**.

Reasoning / knowledge:

- GPQA Diamond: **91.1%** on Artificial Analysis versus **88.89%** on Vals. HLE without tools: **43.2%** in the Anthropic system-card results; Artificial Analysis reports **41.3%**. [BenchLM](https://benchlm.ai/models/claude-sonnet-5) · [Vals AI](https://www.vals.ai/models/anthropic_claude-sonnet-5)
- AA-LCR: **82.0%**; CritPt: **16.9%**; Artificial Analysis Intelligence Index: **38.2**. [BenchLM](https://benchlm.ai/models/claude-sonnet-5)
- AA-Omniscience: **40.1% accuracy** and **39.4% hallucination rate**. [BenchLM](https://benchlm.ai/models/claude-sonnet-5)
- BenchLM aggregate: **65.15/100**, rank **#38/1,001**, partial coverage of 50/716 benchmarks. This is BenchLM's composite, not the project's normalized score. [BenchLM](https://benchlm.ai/models/claude-sonnet-5)

Coding:

- SWE-bench Verified: **85.2%**; SWE-bench Pro: **63.2%**; SWE Multilingual: **78.3%**; Terminal-Bench 2.1: **80.4%** in the Anthropic system-card results. [BenchLM](https://benchlm.ai/models/claude-sonnet-5)
- LiveCodeBench: **82.43%**; Vibe Code Bench v1.1: **81.33% ±3.05** in Vals' current results. Vals' June 30 launch write-up had reported **86.90%** for Vibe Code Bench; this revision difference is retained rather than silently combining snapshots. [Vals AI results](https://www.vals.ai/models/anthropic_claude-sonnet-5)
- SciCode: **54.3%**; FrontierCode 1.1 Main: **42.7%**; Terminal-Bench 4.0: **10.61%** in Vals (BenchLM separately lists **14.6%**). Later-edition terminal results are substantially lower than Terminal-Bench 2.1 and indicate strong benchmark/version variance. [BenchLM](https://benchlm.ai/models/claude-sonnet-5) · [Vals AI](https://www.vals.ai/models/anthropic_claude-sonnet-5)
- CursorBench 3.2: **61.5%**; SWE-bench result on Vals: **79.60%**. [BenchLM](https://benchlm.ai/models/claude-sonnet-5) · [Vals AI](https://www.vals.ai/models/anthropic_claude-sonnet-5)

Multimodal:

- Image input is supported; Anthropic's model documentation specifies text and image input with text output. Artificial Analysis reports MMMU-Pro **77.3%**; CharXiv **88.3%** with tools and **77%** without tools in the system-card results. No video/audio input or non-text output is documented. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-5/overview) · [BenchLM](https://benchlm.ai/models/claude-sonnet-5)

Long context:

- The documented context window is **1M tokens**; AA-LCR is **82.0%**. No exact-model MRCR/RULER retrieval result at 512K or 1M was verified, so the advertised maximum is not treated as proof of retrieval reliability at that length. [Anthropic model docs](https://platform.claude.com/docs/en/models/sonnet-5/overview) · [BenchLM](https://benchlm.ai/models/claude-sonnet-5)

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 is 74.53–80.5% across evaluations, with BrowseComp at 84.7%, OSWorld-Verified at 81.2%, and GDPval-AA at 1,603 Elo; Tau3-Banking at 37.3% and missing Claw-Eval cap the score.
- **Reasoning: 86/100.** GPQA Diamond is 88.89–91.1%, HLE without tools is 41.3–43.2%, and AA-LCR is 82%; the AA Intelligence Index is 38.2 and CritPt is 16.9%.
- **Context window: 95/100.** The documented 1M context meets the ≥1M tier, but no 512K/1M needle-retrieval result supports a higher score.
- **Multimodal: 65/100.** Official docs confirm image input and text output; no video/audio input or non-text output is documented.
- **Coding: 85/100.** SWE-bench Verified is 85.2%, SWE-Pro 63.2%, and LiveCodeBench 82.43%, but the Vals Terminal-Bench 4.0 result is 10.61% and TB2.1 results vary by harness.
- **Cost efficiency: 82/100.** $2/$10 per MTok is less expensive than the former $3/$15 reference, with cache reads at $0.20 and half-price Batch API; still a paid proprietary model.
- **Overall Score: 84/100.** Half-up mean of the five quality dimensions: (87 + 86 + 95 + 65 + 85) / 5 = 83.6. A strong fit for agentic coding, image understanding, and long-context workflows; validate the target harness because terminal-agent scores vary sharply by benchmark edition and setup.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent web searches followed by checks of Anthropic's model documentation and launch announcement, and benchmark coverage from Vals AI, Artificial Analysis, and BenchLM. Conflicting TB2.1 results and the Vals Vibe Code Bench snapshot difference are stated with sources/settings; no neighboring Sonnet version is substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
