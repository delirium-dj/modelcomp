# Big Pickle — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / Big Pickle (`opencode/big-pickle`, free stealth alias)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked against OpenCode Zen (https://opencode.ai/zen), Pi models (https://pi.dev/models/opencode/big-pickle), Grokipedia (https://grokipedia.com/page/Big_Pickle_model), Cracked AI Engineering (https://www.crackedaiengineering.com/ai-models/opencode-big-pickle), the models.dev database (https://github.com/anomalyco/models.dev) and the DuckDuckGo result set (https://duckduckgo.com/html/?q=Big+Pickle+model+OpenCode+Zen) plus the Bing result set (https://www.bing.com/search?q=%22Big+Pickle%22+opencode+zen+model). The identity consensus, the 200K / text-only / $0 specs and the direct SWE Atlas 50.8% eval all still stand. New proxy GLM benchmark numbers and one hard spec conflict surfaced (max output 32K vs 128K); both are labelled below. No dimension crossed its evidence threshold, so the five quality scores are unchanged.

## Model card

- **Name:** Big Pickle (free stealth alias on OpenCode Zen; label "Big Pickle")
- **Short description:** A free, maker-anonymous "stealth" coding model served through OpenCode Zen. Community consensus and an OpenCode maintainer still identify it as **GLM-4.6** (Z.ai/Zhipu) — the `sst/opencode` issue #4276 asks exactly that (`https://github.com/anomalyco/opencode/issues/4276`). Grokipedia's fact-checked page (https://grokipedia.com/page/Big_Pickle_model) records the same consensus but now states the underlying model "is rotated periodically and its current identity is undisclosed" — and that same page's Performance section inconsistently calls the served instance **GLM-4.7**, which is precisely why any score is a snapshot of whatever answered on the test date, not a durable rating.
- **Provider / access:** OpenCode Zen — model id `big-pickle`, called through Zen's OpenAI-compatible endpoint (`pi.dev` documents base URL `https://opencode.ai/zen/v1`, `openai-completions`). Zen curates, tests and benchmarks the models it lists, hosts them in the US, and follows zero-retention except for listed privacy exceptions (https://opencode.ai/zen). No first-party model page.
- **Release / knowledge:** Catalogue release date listed as **2025-10-17** (Cracked AI Engineering, https://www.crackedaiengineering.com/ai-models/opencode-big-pickle); Grokipedia instead says the model was "first introduced … in November 2025" (https://grokipedia.com/page/Big_Pickle_model). No knowledge cutoff published. Free stealth period still active as of 2026-10-11; no end date or post-stealth price announced.
- **IDs:** `opencode/big-pickle` (Zen). Not listed on Artificial Analysis or LLM-Stats.
- **Context window:** **200,000 tokens** (Pi, https://pi.dev/models/opencode/big-pickle; Cracked AI Engineering, same URL above). **Max output is contested:** Pi/models.dev report **32,000**, while Cracked AI Engineering reports **128,000** — recorded as an unresolved conflict, not silently averaged.
- **Modalities:** text in / text out (code-focused). Pi flags `reasoning: true` and text-only input (https://pi.dev/models/opencode/big-pickle); Cracked AI flags text generation, function calling and advanced reasoning (https://www.crackedaiengineering.com/ai-models/opencode-big-pickle). No image, audio, video or PDF input.
- **Pricing (as of 2026-10-11):** **Free** — $0 / 1M input and $0 / 1M output, including $0 cache read/write during the stealth period (Pi pricing table, https://pi.dev/models/opencode/big-pickle; Cracked AI Engineering, same URL above). Zen's terms state free-period prompts may be used to improve the model (https://opencode.ai/zen). Benchmark infrastructure was not free: ~$70 of Modal compute plus ~$25 of judge-model API spend for the SWE Atlas run.
- **Architecture:** undisclosed by Zen. Grokipedia's proxy reconstruction (tied to the believed GLM-4.6 base) describes a transformer **MoE** with ~355B total / ~32B active parameters, GQA, RoPE, RMSNorm, SwiGLU, a ~150K-token bilingual BPE vocabulary and a 200K context (https://grokipedia.com/page/Big_Pickle_model) — proxy detail only, never vendor-confirmed for the alias.

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA (Scale AI, mini-SWE-Agent 2.4.6, 250-step cap, judged by `claude-opus-4-5`): **50.8%** (63/124 tasks, single trial, self-reported 2026-08-11; a stricter lower bound of 49.2% applies if two tasks whose rubrics the judge could not parse are counted as failures) — https://github.com/PhillipChaffee/big-pickle-swe-atlas. Beats every other entry in the Mini-SWE-Agent scaffold class; only two Claude models on the native Claude Code scaffold score higher.
- Grokipedia proxy table (measured on the believed GLM base, **not** on the alias): "Real-World Avg Score" **7.5/10**, terminal-agent positioning against Claude Sonnet 4.5 / Grok Code Fast 1 — https://grokipedia.com/page/Big_Pickle_model
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Proxy numbers only (GLM-4.6/4.7 base, Grokipedia — https://grokipedia.com/page/Big_Pickle_model): **MMLU-Pro 84.3**, **HLE 24.8 without tools / 42.8 with tools**. These are inherited GLM figures on a page that contradicts itself on the base version, **not** alias-measured, so they are recorded as lineage data only.
- GPQA Diamond: **no verified public score found**
- HLE (measured directly on `big-pickle`): **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (alias untracked on both aggregators; LLM-Stats also returns no model page — https://llm-stats.com/models/big-pickle)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **~72% provisional**, now corroborated by proxy figures — Grokipedia lists **SWE-bench Verified 73.8** and its comparison table **~68%**, plus **SWE-bench Multilingual 66.7** and **LiveCodeBench V6 82.8** (https://grokipedia.com/page/Big_Pickle_model). Still not independently verifiable on the live alias, and the proxy base is disputed (4.6 vs 4.7).
- SWE Atlas Codebase QnA: **50.8%** (above)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found** (the LiveCodeBench 82.8 above is the Grokipedia proxy, not an alias eval)

Long context:

- no long-context retrieval reported (no MRCR/RULER/GraphWalks result at any window depth; the 200K window has no long-context eval behind it).

### Normalized scores (1–100)

- **Tool use: 60/100.** 50.8% on SWE Atlas Codebase QnA with the standard minimal scaffold beats every non-Claude entry in its class across 124 audited trajectories — genuine agentic robustness, re-checked live at https://github.com/PhillipChaffee/big-pickle-swe-atlas. Capped by a single trial (±4.5 points), a self-reported (not Scale-verified) run, and still-missing TB2/Tau3/GDPval/Claw data.
- **Reasoning: 55/100.** No alias-measured GPQA Diamond, HLE, LCR or CritPt number exists; the only new reasoning evidence is Grokipedia's inherited proxy (HLE 24.8 no-tools / 42.8 tools, MMLU-Pro 84.3, https://grokipedia.com/page/Big_Pickle_model) on a self-contradictory page, which does not clear the bar for a change. Score stays mid-range: competent at long-horizon work, unmeasured on knowledge exams.
- **Context window: 70/100.** 200K tokens confirmed by two independent catalogues (https://pi.dev/models/opencode/big-pickle and https://www.crackedaiengineering.com/ai-models/opencode-big-pickle), but max output is contested — 32K (Pi/models.dev) vs 128K (Cracked AI) — and no recall is measured at depth. 200K maps to 70 in the rubric; the output-cap conflict is a caveat, per `model-comparison.md` (max output <64K noted, not separately scored).
- **Multimodal: 15/100.** Text-in/text-out only; Pi confirms `input: ["text"]` (https://pi.dev/models/opencode/big-pickle) and no source reports vision, audio, video or PDF input.
- **Coding: 72/100.** Strongest real signal is SWE Atlas Codebase QnA 50.8% under a thin scaffold, now backed by the provisional SWE-bench ~72% directory figure and Grokipedia's proxy SWE-bench Verified 73.8 / LiveCodeBench V6 82.8 (https://grokipedia.com/page/Big_Pickle_model). Capped by the unverifiable, proxy-only SWE-bench number and the alias's identity instability (a different model may answer tomorrow).
- **Cost efficiency: 100/100.** $0 input, output and cache read/write during the free stealth period (Pi pricing table, https://pi.dev/models/opencode/big-pickle); the counterweight is data usage (Zen may use free-period prompts to improve the model, https://opencode.ai/zen) and an unannounced post-stealth price.
- **Overall Score: 54/100.** Mean of the five quality dims (60+55+70+15+72)/5 = 54.4 → 54. Best fit: budget-constrained coding/terminal agents where an unverified, rotating identity, zero direct reasoning scores and free-period data collection are acceptable risks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research — OpenCode Zen product page (https://opencode.ai/zen), Pi model card (https://pi.dev/models/opencode/big-pickle), Grokipedia fact-checked page (https://grokipedia.com/page/Big_Pickle_model), Cracked AI Engineering spec page (https://www.crackedaiengineering.com/ai-models/opencode-big-pickle), models.dev (https://github.com/anomalyco/models.dev), the direct SWE Atlas eval repo (https://github.com/PhillipChaffee/big-pickle-swe-atlas), plus Bing and DuckDuckGo result sets. Deep second pass of the 2026-10-01 report; conflicting figures (max output 32K vs 128K; GLM-4.6 vs GLM-4.7 proxy) are surfaced, not reconciled. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
