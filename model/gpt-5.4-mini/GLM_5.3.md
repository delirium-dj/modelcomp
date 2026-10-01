# GPT-5.4 mini — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.4-mini`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's most capable small model of the GPT-5.4 generation — "designed for high-volume workloads" and explicitly positioned as the fast parallel sub-agent under a larger planner (Codex delegation pattern). Variant of GPT-5.4 (mini compute tier); >2x faster than GPT-5 mini.
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); Codex (all surfaces; 30% of GPT-5.4 quota); ChatGPT (Free and Go users via "Thinking"; rate-limit fallback for GPT-5.4 Thinking). On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.4-mini`).
- **Release / knowledge:** released 2026-03-17 (dated ID `gpt-5.4-mini-2026-03-17` per Vals AI evals). Knowledge cutoff not published.
- **IDs:** `gpt-5.4-mini`; Zen `opencode/gpt-5.4-mini`. No Free ID on Zen.
- **Context window:** 400K tokens (official). Measured long-context retrieval degrades above 128K (see raw benchmarks).
- **Modalities:** text and image input, text output; reasoning (xhigh in official evals); tool use, function calling, web search, file search, computer use, skills (official API capability list).
- **Pricing (as of 2026-10-01):** $0.75 / $4.50 per MTok in/out (official and Zen; Zen cached read $0.075). No free tier on Zen.
- **Architecture:** proprietary, size undisclosed; system card addendum on OpenAI's Deployment Safety Hub.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **60.0%** (official, xhigh)
- Terminal-Bench 2.1 (Vals): **54.7%**
- OSWorld-Verified: **72.1%** (official — approaches GPT-5.4's 75.0%; substantially above GPT-5 mini 42.0%)
- MCP Atlas: **57.7%** (official)
- Toolathlon: **42.9%** (official)
- τ2-bench (Telecom): **93.4%** (official)
- GDPval-AA: **1095** raw / **25.0%** normalized (Artificial Analysis via BenchLM)
- APEX-Agents-AA: **28.2%**; AA Agentic Index: **19.6%** (Artificial Analysis via BenchLM)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.0%** (official, xhigh; Vals: 83.1%; AA: 87.5%)
- HLE with tools: **41.5%**; HLE without tools: **28.2%** (official)
- ARC-AGI-1: **63.70%**; ARC-AGI-2: **18.9%** (ARC Prize via BenchLM)
- FrontierMath v2: **28.280%** (Tiers 1-3), **2.080%** (Tier 4) (Epoch AI via BenchLM)
- CritPt: **10.0%** (AA via BenchLM)
- AA Intelligence Index: **24.1%**; AA-LCR: **77.0%**; AA-IFBench: **73.3%** (AA via BenchLM)
- Omniscience: accuracy **37.5%**, hallucination rate **90.2%**, index **-18.9%** (AA via BenchLM — poor honesty profile)
- MMLU-Pro (Vals): **84.6%**
- BenchLM composite: **55.63/100, #63 of 645** (37 of 618 benchmarks covered)

Coding:

- SWE-Bench Pro (public): **54.4%** (official — close to GPT-5.4's 57.7%)
- SWE-bench (Vals): **73.0%**
- LiveCodeBench (Vals): **81.5%**
- Vibe Code Bench (Vals): **47.97%**
- FrontierCode 1.1: **27.0%** (Cognition)
- AA-SciCode: **52.1%**; AA Coding Index: **56.1%** (AA via BenchLM)
- OmniDocBench 1.5 (no tools, edit distance — lower is better): **0.1263** (official)

Long context:

- OpenAI MRCR v2 8-needle 64K-128K: **47.7%**; 128K-256K: **33.6%** (official)
- GraphWalks BFS 0K-128K: **76.3%**; parents 0-128K accuracy: **71.5%** (official)

### Normalized scores (1–100)

- **Tool use: 62/100.** Official mid-band numbers: TB2.0 60.0% / TB2.1 54.7%, MCP Atlas 57.7%, Toolathlon 42.9% — with standout τ2-bench 93.4% and OSWorld 72.1% (near-frontier computer use for a mini). Capped by weak AA agentic indices (Agentic Index 19.6%, GDPval-AA 25.0% normalized).
- **Reasoning: 68/100.** GPQA 88.0% just misses the 90%+ frontier bar and HLE-with-tools 41.5% clears the 40% frontier bar, but everything deeper collapses: ARC-AGI-2 18.9%, FrontierMath v2 ≤28.3%, CritPt 10.0%, and a 90.2% Omniscience hallucination rate. Capped by weak abstract reasoning, math, and honesty.
- **Context window: 68/100.** 400K nominal (official) sits mid-tier (200K-500K band), but measured retrieval falls off a cliff past 128K (MRCR 128K-256K 33.6%), so the effective window is much smaller than the spec. Capped accordingly.
- **Multimodal: 68/100.** Text + image in, text out (official) with strong measured vision: MMMU-Pro 76.6% (78.0% with Python) and fast screenshot interpretation for computer use. Image-in band (60-70), top of band for its class.
- **Coding: 72/100.** SWE-Bench Pro 54.4% nearly matches the full GPT-5.4, LiveCodeBench 81.5% and SWE-bench 73.0% (Vals) are strong for the size class; FrontierCode 27.0% and AA Coding Index 56.1% show the small-model ceiling. Capped by the deep-coding gap to frontier models.
- **Cost efficiency: 88/100.** $0.75/$4.50 per MTok sits in the ~$0.60/$2.20 (≈92) to ~$1.25/$4.25 (≈88) bracket, and >2x speed plus 30% Codex quota improve effective cost per task.
- **Overall Score: 68/100.** Half-up mean of the five quality dims: (62 + 68 + 68 + 68 + 72) / 5 = 67.6 → 68. Fast, cheap parallel sub-agent coder with near-5.4 computer use — pair it with a frontier planner; keep it away from knowledge-critical outputs.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (OpenAI official mini/nano announcement + evals tables, BenchLM aggregator rows with sources, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
