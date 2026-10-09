# GPT-6.1 Sol — findings by ChatGPT 5 (openai/gpt-5)
- Source: OpenAI / GPT-6.1 Sol (`gpt-6.1-sol`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** GPT-6.1 Sol (no Free-tier wording; Free tier not supported)
- **Short description:** OpenAI's mid-tier reasoning model released at DevDay 2026, positioned between GPT-6 Astra and GPT-6 Luna. Targets agentic coding, computer use, and document-heavy professional workflows at roughly one-fifth of Astra's token price. Alias: `gpt-6.1-sol`; a Fast tier `gpt-6.1-sol-fast` is referenced in third-party tooling but not confirmed as a separate API ID.
- **Provider / access:** OpenAI API `gpt-6.1-sol`; also available on Amazon Bedrock, Azure, and OpenCode Zen (`opencode/gpt-6.1-sol`). Responses API is preferred for tool calling; Chat Completions is supported without tool calling. No free tier on any surface.
- **Release / knowledge:** 2026-09-29 release; 2026-04-30 knowledge cutoff
- **IDs:** `openai/gpt-6.1-sol`; OpenCode Zen serves `gpt-6.1-sol` as a paid model only — explicitly **no Free ID exists on Zen**
- **Context window:** 1,050,000 total; 922,000 max input; 128,000 max output (verified from OpenAI API docs and AWS Bedrock model card)
- **Modalities:** text + image input; text output; reasoning yes (low/medium/high/xhigh/max, no none/minimal); tool calls yes via Responses API; JSON schema output supported; no audio or video
- **Pricing (as of 2026-10-09):** $2.00 input / $10.00 output / $0.10 cached input per 1M tokens. Free-tier privacy caveat: no free tier exists; Tier 1 limits are 500 RPM / 500K TPM. Prompts over 272K input tokens are priced at 2× input/cache and 1.5× output for the full request.
- **Architecture:** proprietary, closed-weights; no parameter count disclosed
### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **45.80%** (Mercor extended-set run, max reasoning; BenchLM) — original set 85.4% ±6.4
- Tau3-Banking / Tau2-Bench: **no verified public score found** (OpenRouter router benchmarks show a normalized 8.4/10 for a router configuration, not a raw model score)
- GDPval-AA: **Elo 1575.1** (OrcaRouter independent AA run)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
Reasoning / knowledge:
- GPQA Diamond: **94.4%** (OpenRouter, OpenAI provider); **94.8%** (OpenRouter, Amazon Bedrock provider)
- HLE: **49.9%** (FindLLM, medium effort); **52.9%** (LMSpeed)
- LCR / MLCR: **AA-LCR 83.0%** (BenchLM and OrcaRouter)
- CritPt: **31.7%** (NanoGPT)
- Artificial Analysis Intelligence Index / BenchLM overall: **52 (max effort)** and **51 (xhigh effort)** (Artificial Analysis); **51.8 (max)** (OrcaRouter). BenchLM composite: 66.9/100, rank #23 of 210.
- Omniscience Accuracy / Hallucination Rate: **hallucination rate 54%** (Artificial Analysis article); exact accuracy not published as a standalone figure
Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found** (explicitly absent from launch coverage; no standardized harness result located)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **54.2%** (BenchGecko); **53.2%** (FindLLM, medium); **55.8%** (Digital Report, high)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1 75.22% (high effort)**; OSWorld 2.0 offline set **71.42% (max)**; Terminal-Bench Science 0.1 **57.02% (max)**; AutomationBench **36.10% (max)**; GDP.pdf **32.0% (high)**
Long context:
- AA-LCR v1.1: **83.0%**; no MRCR or RULER values reported
### Normalized scores (1-100)
- **Tool use: 62/100.** Terminal-Bench 2.1 at 45.80% places it in the mid tier (45–60% band → 50–70). GDPval-AA Elo 1575.1 is below the frontier 1750+ threshold but competitive. OSWorld 71.42% and AutomationBench 36.10% support a mid-60s score; absence of Tau3-Banking and other agentic scores caps confidence.
- **Reasoning: 87/100.** GPQA Diamond 94.4% clears the frontier 90%+ threshold. HLE 49.9–52.9% exceeds the frontier 40%+ marker. AA Intelligence Index 52 is below the frontier 60+ band but well above median. CritPt 31.7% is a relative weak point. Net: strong reasoning with a hard-science ceiling.
- **Context window: 95/100.** Verified total of 1,050,000 tokens sits in the >=1M tier (95–100). No verified >=98% retrieval at 512K+ (MRCR/RULER absent), so capped below 100. AA-LCR 83.0% confirms long-context reasoning is functional but not perfect.
- **Multimodal: 65/100.** Text + image input only; text output. Fits the +image-in band (60–70). No audio, video, or non-text output.
- **Coding: 89/100.** DeepSWE v1.1 at 75.22% exceeds the frontier 74%+ threshold. SciCode 54.2% sits just below the frontier 55%+ line. OSWorld 71.42% and Terminal-Bench Science 57.02% reinforce strong agentic coding. SWE-bench Verified and LiveCodeBench are unverified, preventing a full frontier score.
- **Cost efficiency: 72/100.** At $2.00 input / $10.00 output, pricing sits between the ~$1.25/$4.25 reference (~88) and the $3/$15 reference (~60). Cache reads at $0.10 (95% discount) improve effective cost for repeated agentic loops.
- **Overall Score: 79.6/100.** (62 + 87 + 95 + 65 + 89) / 5 = 398 / 5 = 79.6, half-up rounded to one decimal. Best-fit recommendation: teams running high-volume agentic coding or computer-use workflows that need near-flagship reasoning at one-fifth of Astra's token price, and that can tolerate the absence of a free tier.
---
## Signature
- Provided by: **ChatGPT 5 (openai/gpt-5)** — 2026-10-09
- Method: public internet research across OpenAI API docs, AWS Bedrock model card, Artificial Analysis, OrcaRouter, BenchLM, OpenRouter, BenchGecko, LLM Stats, Epoch AI, Devin, and OpenCode Zen docs; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra.md`, using the same headings.