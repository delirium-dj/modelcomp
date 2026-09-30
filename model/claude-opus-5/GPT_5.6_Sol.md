# Claude Opus 5 — findings by GPT-5.6 Sol

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (paid, active legacy model; no Free-tier ID on OpenCode Zen)
- **Short description:** Anthropic’s proprietary Opus model for complex agentic coding, computer use, and long-horizon enterprise knowledge work. The exact pinned model `claude-opus-5` has been superseded by Opus 5.5 but remains active as a legacy model.
- **Provider / access:** Anthropic Claude API `claude-opus-5` through the Messages API; Amazon Bedrock `anthropic.claude-opus-5`; Claude Platform on AWS, Google Cloud, and Microsoft Foundry `claude-opus-5`; OpenCode Zen `opencode/claude-opus-5` through its OpenAI-compatible API, including Chat Completions. , , ,
- **Release / knowledge:** 2026-07-24 release; May 2026 reliable-knowledge and training-data cutoff.
- **IDs:** `anthropic/claude-opus-5`, `opencode/claude-opus-5`, `bedrock/anthropic.claude-opus-5`, `google/claude-opus-5`, `microsoft/claude-opus-5`; no Free ID exists on Zen. ,
- **Context window:** 1,000,000 tokens, both default and maximum; 128,000 maximum synchronous output tokens, with up to 300,000 output tokens on the beta Message Batches API. Verified by Anthropic’s model documentation and OpenCode’s models.dev catalog. , ,
- **Modalities:** Text, image, and PDF input; text output only; no native audio or video input/output. Adaptive reasoning is enabled by default; tool calls, computer/browser tools, strict tool schemas, and JSON-schema structured output are supported. , , ,
- **Pricing (as of 2026-09-30):** Paid at $5 input / $25 output / $0.50 cache read / $6.25 five-minute cache write / $10 one-hour cache write per 1M tokens; batch input and output receive a 50% discount. OpenCode Zen lists the same $5/$25 base rate and no free Opus 5 alias, so no free-tier privacy caveat applies. ,
- **Architecture:** Proprietary, closed-weight model; Anthropic has not publicly disclosed total or active parameter counts, dense-versus-MoE design, or a weights license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89%** (Artificial Analysis, adaptive reasoning at max effort; approximately level with the launch leader)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1861 Elo** (Artificial Analysis GDPval-AA v2, max effort, #1 at launch; Stirrup reference-agent harness) ,
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.5% Toolathlon Verified** (Nex-AGI Hugging Face model card); MCP-Atlas and SWE Atlas Codebase QnA: no verified public score found
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **55%** (Artificial Analysis Intelligence Index v4.3.2 harness, max effort, no external tools)
- LCR / MLCR: **79%** (Artificial Analysis AA-LCR v1.1, max effort)
- CritPt: **29%** (Artificial Analysis v4.3.2, max effort; evaluation marked under review) ,
- Artificial Analysis Intelligence Index / BenchLM overall: **51 / #3** (Artificial Analysis Index v4.3.2 publication snapshot, max effort; later model releases make the live rank non-stationary)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / 50%** (Artificial Analysis launch evaluation, max effort; accuracy was described only as seven points above Opus 4.8, without an absolute value in the cited report)
  Coding:
- SWE-bench Verified / SWE-Pro: **96.0% / 79.2%** (Anthropic system card §8.2, Claude coding-agent evaluation)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **56%** (Artificial Analysis v4.3.2, max effort)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74% ±4% DeepSWE v1.1** (official 113-task DeepSWE leaderboard, max effort, tied for the lead); **53.4% FrontierCode v1.1 Main** (Anthropic system-card result) , ,
  Long context:
- no long-context retrieval reported

### Normalized scores (1-100)

- **Tool use: 95/100.** Terminal-Bench 2.1 at 89% and GDPval-AA v2 at 1861 Elo both clear the stated frontier bands; the missing Tau3 result prevents a higher confidence score. ,
- **Reasoning: 91/100.** HLE at 55% clears the frontier threshold, while AA-LCR at 79% and CritPt at 29% show breadth; the current 51-point AA Index and missing verified GPQA score cap this below the top tier. , ,
- **Context window: 95/100.** The verified total is 1M tokens, placing it in the 95–100 tier; no verified MRCR/RULER result demonstrating at least 98% retrieval at 512K or beyond supports awarding 100.
- **Multimodal: 80/100.** It accepts text, images, and visually processed PDFs and returns text, but lacks native audio/video input and non-text output. ,
- **Coding: 96/100.** SWE-bench Verified at 96.0%, SWE-Pro at 79.2%, DeepSWE v1.1 at 74% ±4%, Terminal-Bench 2.1 at 89%, and SciCode at 56% jointly meet the frontier coding bands; the absent LiveCodeBench score caps it. , , ,
- **Cost efficiency: 50/100.** The evaluated paid tier costs $5/$25 per 1M input/output tokens—between the methodology’s approximately 60-point $3/$15 anchor and 30-point $10/$50 anchor—although cache reads are discounted to $0.50.
- **Overall Score: 91.4/100.** Half-up mean of the five non-cost dimensions: (95 + 91 + 95 + 80 + 96) / 5 = 91.4. Best fit is legacy-pinned, long-horizon coding and enterprise-agent workloads where Opus 5 compatibility matters; greenfield deployments should also evaluate its cheaper successor, Opus 5.5.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-09-30
- Method: fresh public internet research across Anthropic documentation and system cards, Artificial Analysis, DeepSWE, OpenCode Zen/models.dev, and Hugging Face; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
