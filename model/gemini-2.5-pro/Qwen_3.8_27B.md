# Gemini 2.5 Pro — findings by Qwen 3.8 27B

- Source: Google DeepMind (`opencode/gemini-2.5-pro`; vendor: Google AI Studio / Vertex AI `gemini-2.5-pro`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's frontier multimodal reasoning model (GA May 2025) with built-in thinking mode, 1M-token context, and native video/audio input; now a previous-generation but still competitive workhorse in 2026.
- **Provider / access:** Google AI Studio and Vertex AI (`gemini-2.5-pro`, Chat Completions/Generative Language API). Repo-registered as `opencode/gemini-2.5-pro`; no OpenCode Zen Free ID.
- **Release / knowledge:** GA 2025-05-20 (llm-stats); knowledge cutoff not re-verified here.
- **IDs:** `opencode/gemini-2.5-pro` (repo registry); vendor `google/gemini-2.5-pro`. No Free ID on Zen.
- **Context window:** 1,000,000 tokens (Google; independent testing: reliable retrieval through ~800K, degradation in final 200K — tokenmix.ai). Note: repo `meta.json` still says 128K.
- **Modalities:** Text, image, video, audio, PDF in; text out. Built-in thinking mode (configurable token budget, billed as output); tool calls; JSON mode.
- **Pricing (as of 2026-09-28):** $1.25 input / $10 output per 1M (≤200K); $2.50 / $20 above 200K; cached input $0.315 / $0.63. AI Studio free tier: 1,500 req/day (rate-limited).
- **Architecture:** Proprietary MoE (Google DeepMind); parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **23.3%** GDPVal (airank.dev summary of official numbers — 2025-era; scale not directly comparable to AA-Elo)
- OSWorld / AutomationBench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **77.2%** (Google official GA table; airank.dev)
- MMLU: **~90%** (tokenmix.ai, 2026 tracking)
- MATH: competitive with thinking mode enabled (tokenmix.ai; no absolute figure verified)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **50.24/100, #73 of 194** (BenchLM, 2026-09-27 — partial coverage, conservative)

Coding:

- SWE-bench Verified: **~78%** (tokenmix.ai 2026 tracking; 3rd among current frontier behind DeepSeek V4 ~81% and GPT-5.4 ~80%; ahead of Claude Sonnet 4.6 ~73%)
- SWE-bench (GA 2025 original): 63.2% (anotherwrapper.com) — superseded by the updated model
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Needle-in-a-haystack: reliable retrieval through ~800K tokens, degradation in final 200K (independent testing via tokenmix.ai). No MRCR/RULER value published.

### Normalized scores (1–100)

- **Tool use: 58/100.** No verified TB2.1/Tau3/GDPval-AA/Claw numbers found (N/A penalty per methodology); confirmed tool-calling support and a mid-50s BenchLM overall keep it mid-pack, capped for lack of agentic evidence.
- **Reasoning: 72/100.** GPQA Diamond 77.2% (upper mid band 60–80) plus ~90% MMLU and strong thinking-mode math; no HLE/AA Index found and it is now a prior-gen model, capping it below frontier 90+.
- **Context window: 93/100.** 1M window (≥1M band) with independent confirmation of reliable retrieval through ~800K but degradation in the final 200K — short of the ≥98%-at-512K+ needed for 100.
- **Multimodal: 92/100.** Native image + video + audio + PDF input (only frontier model with native video+audio per tokenmix.ai); text out only.
- **Coding: 78/100.** SWE-bench Verified ~78% (third among 2026 frontier models); strong but behind GPT-5.4/DeepSeek V4 by 2–3 points; no Vibe/LiveCode data found.
- **Cost efficiency: 75/100.** $1.25/$10 with 2× long-context surcharge and $0.315 cache sits between the $1.25/$4.25 (~88) and $3/$15 (~60) references; generous 1,500 req/day free tier noted but rate-limited.
- **Overall Score: 79/100.** (58 + 72 + 93 + 92 + 78) / 5 = 78.6 → 79; best-fit for budget-conscious frontier workloads needing native video/audio and long-context at Western-provider pricing.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
- Method: public internet research (tokenmix.ai 2026 review, BenchLM, llm-stats.com, airank.dev, anotherwrapper.com, Google official GA tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
