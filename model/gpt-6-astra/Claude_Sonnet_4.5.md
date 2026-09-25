# GPT-6 Astra — findings by Claude Sonnet 4.5

- Source: OpenAI (`gpt-6-astra`)

- Date: 2026-09-25 (UTC)

- Overview and scoring methodology: `../../model-comparison.md`

- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (paid tiers only; the API rate-limit table lists the Free tier as "Not supported")

- **Short description:** OpenAI's flagship frontier model, billed as "the world's most intelligent and aligned model," state-of-the-art on computer use, browsing, software engineering, cybersecurity, science, and professional work. Unlike GPT-5.6, there are no Luna/Terra/Sol variants; the lineup is Astra and Astra Pro — do not confuse with Google DeepMind's "Project Astra."

- **Provider / access:** OpenAI API (API model ID is `gpt-6-astra`), Responses API with reasoning.effort supporting low, medium, high, xhigh, and max; also rolling out to ChatGPT Plus, Pro, Business, and Enterprise, plus Microsoft Azure and AWS Bedrock; also listed on OpenRouter as `openai/gpt-6-astra`.

- **Release / knowledge:** Released as limited preview September 3, 2026 (same day unveiled); publicly released to paid users the following day. Knowledge cutoff April 30, 2026.

- **IDs:** `openai/gpt-6-astra` (no Free ID exists; no OpenCode Zen free listing found)

- **Context window:** 1,050,000-token context window, maximum of 922,000 input tokens, up to 128,000 output tokens — verified via OpenAI model page as relayed by multiple trackers and OpenRouter (1,050,000 context, 128,000 completion tokens).

- **Modalities:** Input is text and image, output is text only; reasoning yes (5 effort levels); tool support covers computer use, hosted shell, apply patch, skills, MCP and tool search; accepts tools and tool_choice for function calling with structured output support.

- **Pricing (as of 2026-09-25):** $10.00/M input, $50.00/M output, cache read $1.00/M, cache write $12.50/M, web search $10.00/1K calls. Prompts over 272K input tokens are priced at 2x input and 1.5x output; Batch/Flex at 50%; Fast mode at 2x. Paid only, no free tier.

- **Architecture:** Proprietary; no official parameter count. Third-party reporting describes it as a single dense reasoning model with a 1M-token-class context window and five reasoning-effort settings; OpenAI's largest training run ever, over 100,000 GPUs at the Stargate site in Texas. First OpenAI model to reach the Critical cybersecurity level under the Preparedness Framework.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (OpenAI did not publish Terminal-Bench 2.x for Astra); Terminal-Bench 4.0: **57.7%** (OpenAI self-reported, vs Sol's 37.3%); **56%** in Artificial Analysis's independent harness (vs 37% for Sol)

- Tau3-Banking / Tau2-Bench: no verified public score found (a regression on a banking tool-use evaluation was noted, without a public absolute score)

- GDPval-AA: no verified public Elo found; Artificial Analysis observed a drop of ~45 Elo points in GDPval-AA v2 compared to GPT-5.6 Sol (absolute value not published in retrieved sources)

- Claw-Eval / ClawProBench: no verified public score found

- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62%** SWE-Atlas-QnA in AA harness (vs 54% for Sol); adjacent agentic evidence: AutomationBench-AA 69%, ahead of Grok 4.6 (67%); OSWorld V2-Offline 72.6% vs 65.7% for Sol; Agents' Last Exam 59.3%; ScreenSpot-Pro 92.7% (no tools)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI launch table; highest published score)

- HLE: **57.2%** (with tools) (OpenAI table; vs Fable 5.1's 65.0% — the only academic row Astra loses)

- LCR / MLCR: no verified public score found (AA-LCR v1.1 is in the AA Index composite but no standalone value published)

- CritPt: no verified public score found (in AA Index composite; no standalone value published)

- Artificial Analysis Intelligence Index / BenchLM overall: **~61 at launch** (61.2 vs 60.9 for GPT-5.6 Sol); 53 on current AA Index v4.3.2 for Astra (max) (index version changed); BenchLM: #1 of 194 at 88.69/100 from 41 source-displayable rows

- Omniscience Accuracy / Hallucination Rate: accuracy value not published / **51%** hallucination — a significant decrease in hallucination rate from 92% to 51% at max effort, alongside a modest increase in accuracy

- Other frontier rows: FrontierMath Tier 4 v2 97.6%; ARC-AGI-3 99.9%, ARC-AGI-2 95.0%, ARC-AGI-1 98.5% (near-ceiling, OpenAI harness)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (OpenAI did not publish SWE-Bench Pro for Astra)

- LiveCodeBench: no verified public score found

- SciCode / AA-SciCode: no standalone verified public score found (in AA Index composite)

- Vibe Code Bench: no verified public score found

- DeepSWE / Coding Index / other: DeepSWE v1.1 **74.1%** (OpenAI's table, 113-task agentic coding benchmark); **68%** in AA's harness (a regression vs Sol's 72%); AA Coding Agent Index 62 in Codex, tied #1 with Claude Fable 5.1; FrontierCode 1.1 Extended 64.5, Main 53.3

Long context:

- OpenAI MRCR v2 (8-needle): 100% up to 512K tokens and 96.3% in the 512K–1M band — the strongest deep-context retention any frontier model has published (vs Sol's 73.8% in the 512K–1M band)

### Normalized scores (1-100)

- **Tool use: 88/100.** Frontier-class agentic computer use: independently verified AutomationBench-AA lead at 69%, TB4.0 56–57.7%, OSWorld 72.6%, ScreenSpot-Pro 92.7. Capped below 90 by the absence of TB2.1/Tau3 scores and the ~45 Elo GDPval-AA regression vs its predecessor.

- **Reasoning: 93/100.** GPQA 96% (frontier 90%+), HLE-with-tools 57.2% (frontier 40%+), FrontierMath T4 97.6%, launch AA Index ~61. Capped by trailing every Claude in the table on HLE and a flat aggregate index vs Sol.

- **Context window: 98/100.** Verified ≥1M tier (1,050,000 total) with best-in-class retrieval (MRCR v2 100% to 512K, 96.3% at 512K–1M); 96.3% in the deepest band falls just short of the ≥98%-at-512K+ bar for a perfect 100.

- **Multimodal: 65/100.** Text + image input, text-only output; no audio, video, or native PDF input verified — mid-band of the image-in tier.

- **Coding: 90/100.** DeepSWE 74.1% (at the 74%+ frontier bar, OpenAI harness), tied #1 on AA Coding Agent Index (62), clear TB4.0 win. Capped by the lower 68% AA-harness DeepSWE result, missing SWE-bench Verified/LiveCodeBench/SciCode standalone scores, and FrontierCode rows where Fable 5 and Opus 5 edge it.

- **Cost efficiency: 30/100.** Paid at $10/$50 per 1M in/out — maps to ~30 per the methodology; mitigated in practice by $1 cached input and strong per-task token efficiency (one third of Sol's tokens per task at max effort), but the sticker tier governs.

- **Overall Score: 86.8/100.** Mean of (88 + 93 + 98 + 65 + 90) / 5 = 86.8 — best fit for long-horizon agentic computer-use, terminal, and frontier math/science workloads where per-task quality outweighs the premium token price.

---

## Signature

- Provided by: **Claude (anthropic/claude-sonnet-4.5)** — 2026-09-25

- Method: fresh public internet research (OpenAI announcement/model docs/system card, Artificial Analysis, BenchLM, OpenRouter, LLM-Stats, and independent benchmark analyses); scores are normalized 1-100 interpretations, not official vendor scores. Note: several vendor scores are self-reported and not yet independently verified; conflicting AA Index values (61 at launch vs 53 on current v4.3.2 page) are flagged above rather than reconciled.

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
