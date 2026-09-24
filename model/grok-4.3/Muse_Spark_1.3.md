# Grok 4.3 — findings by Muse Spark 1.3

- Source: xAI/Grok 4.3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 (enterprise reasoning model)
- **Short description:** xAI's accuracy-focused reasoning model with a 1M context window and configurable reasoning effort. Top use case is enterprise agents (support, coding, case-law/finance document QA). Matches the scale of Grok 4.20 with an improved architecture; not an alias of Grok 4 / 4.5 / 4.6.
- **Provider / access:** xAI API (console/openrouter), Amazon Bedrock (`xai.grok-4.3`, Mantle engine, GA Jun 2026), OCI Generative AI, Microsoft Foundry, Vercel AI Gateway; Chat Completions- and Responses-style endpoints vary by host. No Free ID exists on Zen as far as verified — scored on paid pricing below.
- **Release / knowledge:** Beta 2026-04-17, general availability 2026-04-30 (Bedrock Jun 2026); knowledge cutoff December 2025
- **IDs:** `xai/grok-4.3` (Bedrock: `xai.grok-4.3`); no Free ID exists on Zen
- **Context window:** 1,000,000 total tokens — verified via xAI/Bedrock launch posts, OCI docs, and multiple trackers; max output not disclosed
- **Modalities:** Text + image in, text out; reasoning yes (configurable none/low/medium/high); tool calls yes; structured outputs yes, JSON mode yes; no audio/video out
- **Pricing (as of 2026-09-24):** $1.25 in / $2.50 out per 1M up to 200K tokens, $2.50 in / $5.00 out above 200K (xAI list; Bedrock matches base tier); full Artificial Analysis Intelligence Index suite run costs ~$395
- **Architecture:** Proprietary (undisclosed; one tracker reports ~0.5T params — provisional, treat as unverified)

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom (AA harness): **98%** (Artificial Analysis, Apr–May 2026; #1 rank, in line with GLM-5.1; xAI vendor claim of #1 confirmed by AA) — also reported as τ²-bench **97.7%** (BenchLM lane, Jul 2026)
- Terminal-Bench 2.1: **no verified public score found** (closest proxies, different harnesses: TerminalBench Hard **37.9%** per AA via llmbase.ai, provisional; Terminal-Bench 2.0 **no verified public score found**)
- Tau3-Banking / Tau2-Bench: Tau3-Banking **no verified public score found**; Tau2 figures as above
- GDPval-AA: **1500 Elo** (Artificial Analysis, Apr 2026; +321 vs Grok 4.20 0309 v2's 1179; trails GPT-5.5 xhigh by 276); alternate BenchLM-lane figure GDPval-AA **1085 Elo / 29.2%** (BenchLM compare page, Jul 2026 — different lane, listed for traceability)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: APEX-Agents-AA **17.0%**, AA Agentic Index **24.1%** (BenchLM lanes, Jul 2026); Toolathon / MCP-Atlas / SWE Atlas proper **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (Artificial Analysis via llmbase.ai/BenchLM; head-to-head BenchLM win 90.1 vs 87.9, Jul 2026)
- HLE: **35.0%** (Artificial Analysis via llmbase.ai; head-to-head BenchLM row 35 vs 46, Jul 2026)
- LCR / MLCR: AA-LCR **64.3%** (BenchLM; head-to-head win 64.3 vs 63.3, Jul 2026); MRCR same-harness score no verified public score found
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index **53/100 v4.0** (10-eval composite incl. GDPval, Tau2 Telecom, TB-Hard, SciCode, LCR, Omniscience, IFBench, HLE, GPQA, CritPt; leads Muse Spark and Sonnet 4.6, trails GPT-5.5 xhigh at 60); BenchLM public lane **65.1/100 (#31)** vs Inkling 67.54 (Jul 2026, different lane)
- Omniscience Accuracy / Hallucination Rate: accuracy **up 8 pts vs Grok 4.20** per AA Apr 2026 (vendor-claimed #1 lowest-hallucination rank at launch; non-hallucination rate down 8 pts in the same AA release — tradeoff noted); exact current pair no verified public score found beyond the AA deltas

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public 4.3-specific score found** on either (Grok 4's 67.1% Verified figure belongs to Grok 4, not 4.3 — not attributed here)
- LiveCodeBench: **no verified public 4.3-specific score found** (LiveBench Coding 70% below is a different benchmark, not LiveCodeBench)
- SciCode / AA-SciCode: **47.3%** (Artificial Analysis via llmbase.ai)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: AA Coding Index proxy **41.0** (llmbase.ai composite); LiveBench Coding **70%**, Reasoning 71%, Math 84.3%, Data Analysis 56%, Global 62%, Agentic 19% (ApX/BenchGecko, all LiveBench harness — provisional proxies, not LiveCodeBench); Aider Polyglot **no verified public 4.3-specific score found**

Long context:

- No verified public MRCR / RULER / GraphWalks retrieval-at-length figure found for the 1M window; vendor positions the 1M window for long documents/codebases and multi-turn sessions, and Vals Case Law + Corporate Finance #1 ranks (vendor-reported via Bedrock launch) support document QA qualitatively — retrieval percentage at 512K+ unmeasured, which caps the context score

### Normalized scores (1–100)

- **Tool use: 84/100.** Tau2 Telecom 98% (#1) plus GDPval-AA 1500 Elo show elite support-agent tool calling; capped by TerminalBench Hard 37.9% and no verified TB2.1/Claw-Eval score.
- **Reasoning: 86/100.** GPQA 90.1% is frontier-tier and AA Index 53 leads Muse Spark/Sonnet 4.6; capped by HLE 35.0% (below the 40% frontier bar) and no verified CritPt score.
- **Context window: 95/100.** Full 1M tier per the ≥1M band; capped at 95 (not 100) because no verified ≥98% retrieval figure at 512K+ exists.
- **Multimodal: 65/100.** Text + image in covers the +image band; capped because video/PDF/audio input and non-text output are unverified.
- **Coding: 74/100.** SciCode 47.3% plus LiveBench Coding 70% and strong reasoning spillover support upper-mid; capped by no verified 4.3-specific SWE-Verified or LiveCodeBench score.
- **Cost efficiency: 90/100.** $1.25/$2.50 base tier undercuts the ~$1.25/$4.25 reference band on outputs; capped by paid-only access with a 2x step-up above 200K tokens.
- **Overall Score: 81/100.** Mean of the five quality dims (84 + 86 + 95 + 65 + 74) / 5 = 80.8 → 81; best fit as a paid enterprise agent/document-QA pick with elite tool-calling and a full 1M window.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-24 UTC
- Method: public internet research (xAI/Bedrock/OCI launch docs, Artificial Analysis Apr 2026 release article, BenchLM compare pages, llmbase.ai, llmreference.com, ApX/BenchGecko); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
