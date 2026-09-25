# GPT-5.6 Terra — findings by Claude Opus 4.6

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced mid-tier model in the GPT-5.6 family (Sol/Terra/Luna), released July 2026. Designed for everyday enterprise workloads, production coding assistants, and scoped agentic tasks, positioned between the flagship Sol and cost-efficient Luna.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`); also available via Azure OpenAI. Chat Completions and Responses API.
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff February 16, 2026.
- **IDs:** `openai/gpt-5.6-terra` (no free-tier ID on Zen; paid API only)
- **Context window:** 1 050 000 tokens input; 128 000 tokens max output. Verified via OpenAI documentation and OpenRouter.
- **Modalities:** Text and image in; text out; configurable reasoning effort (none/low/medium/high/xhigh/max); tool/function calls; JSON mode; structured outputs.
- **Pricing (as of 2026-07):** $2.00 / $12.00 per 1M tokens (input / output); no free tier. Thinking tokens billed at output rate.
- **Architecture:** Proprietary; parameter count undisclosed. Part of OpenAI's tiered GPT-5.6 architecture (Sol/Terra/Luna). Supports Programmatic Tool Calling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (source: codingfleet.com, askclash.ai benchmark aggregators)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (source: codingfleet.com benchmark report)
- HLE / Agents' Last Exam: **50.4%** (source: codingfleet.com benchmark report)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **73.4%** (source: AI IQ leaderboard, September 2026)
- SWE-bench Pro: **63.4%** (source: datacamp.com, codingfleet.com)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR: **89.6%** (source: vellum.ai benchmark tracking)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 87.4% is an excellent result, placing Terra among top-tier agentic models for CLI-based multi-step tasks. Configurable reasoning effort and Programmatic Tool Calling enhance practical tool use. Capped by missing Tau-bench and Claw-Eval data.
- **Reasoning: 89/100.** GPQA Diamond at 92.9% is elite PhD-level reasoning. Agents' Last Exam at 50.4% is solid but reflects the extreme difficulty of that benchmark. Multi-level reasoning effort configuration allows depth tuning. Capped slightly by no verified CritPt or LCR scores.
- **Context window: 88/100.** 1.05M token context with 128K output is among the largest in the industry. MRCR at 89.6% demonstrates strong long-context retrieval fidelity. The generous output limit of 128K tokens is particularly valuable for complex generation tasks.
- **Multimodal: 55/100.** Supports text and image input with text output. Configurable reasoning is strong, but no audio, video, or PDF native input support has been verified. No image or audio generation. Limited multimodal breadth compared to models with full audio/video processing.
- **Coding: 84/100.** SWE-bench Verified at 73.4% and SWE-Pro at 63.4% are strong results, especially SWE-Pro which is the harder professional benchmark. Configurable reasoning at max setting improves coding performance. Capped by no LiveCodeBench, SciCode, or Vibe Code Bench scores, and Sol outperforms it on complex multi-file tasks.
- **Cost efficiency: 42/100.** At $2.00/$12.00 per 1M tokens with no free tier, pricing is identical to Gemini 3 Pro and positions Terra as a premium mid-tier model. Thinking tokens at output rates add cost for reasoning-heavy tasks.
- **Overall Score: 81/100.** Mean of (88 + 89 + 88 + 55 + 84) / 5 = 80.8, rounded half-up to 81. A well-balanced everyday model with excellent tool use, reasoning, and context handling, but limited multimodal breadth holds it back from the top tier. Best suited as a production workhorse for coding and agentic tasks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6)** — 2026-09-25
- Method: public internet research (OpenAI documentation, OpenRouter, AI IQ leaderboard, codingfleet.com benchmarks, vellum.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
