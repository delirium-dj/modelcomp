# DeepSeek V4 Pro — findings by GLM 5.3

- Source: DeepSeek (`deepseek-v4-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (0813)
- **Short description:** DeepSeek's flagship V4-generation reasoning model (pro-reasoning 0813 build), 1M context with verified long-context retrieval and elite math/competitive coding. Top use case: high-effort reasoning and coding at aggressive output pricing.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); DeepSeek API (api-docs.deepseek.com).
- **Release / knowledge:** V4 Pro 0813 build, August 2026; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/deepseek-v4-pro` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (BenchLM; MRCR 1M 83.5% and CorpusQA 1M 62.0% verify usable long-context).
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode. Text-only (vision is a separate DeepSeek V4 Flash Vision experimental model).
- **Pricing (as of 2026-09-24):** Zen $1.74 in / $3.48 out per 1M (cached read $0.145); DeepSeek API equivalent.
- **Architecture:** proprietary weights (BenchLM source type); parameter count not disclosed this session.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.9%** (BenchLM `deepseek-v4-pro-0813`; Vals harness 54.7% — large harness spread; TB 2.0 67.9%)
- Tau2-Bench: **96.2%** (BenchLM); Tau3-Banking: **no verified public score found** for this ID
- GDPval-AA: **1306 Elo** (BenchLM; normalized 54.5%)
- Claw-Eval: **no verified public score found**
- Toolathlon-Verified: **74.1%**; MCP-Atlas **73.6%**; BrowseComp **83.4%**; CyberGym **83.3%**; HLE w/ tools **60.0%**; AA Agentic Index **49.6%**; AA EnterpriseOps-Gym **49.6%**; Agents' Last Exam **25.7%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (BenchLM; AA harness 92.8%; Vals 92.4%)
- HLE: **41.0%** AA harness / **42.7%** w/o tools (BenchLM)
- MRCR 1M: **83.5%**; CorpusQA 1M **62.0%**; AA-LCR **80.3%**; CritPt **18.0%** (BenchLM)
- ARC-AGI-1/2: **90.0% / 61.3%** (BenchLM)
- Artificial Analysis Intelligence Index: **53** (BenchLM listing — near the top of the tracked field)
- Omniscience Accuracy / Hallucination Rate: **49.1% / 94.1%** (BenchLM — very high hallucination rate, the standout weakness)
- HMMT Feb 2026 **95.2%**; IMOAnswerBench **89.8%**; Apex Shortlist **90.2%**; MMLU-Pro 87–87.5%; AA-IFBench **76.5%** (BenchLM)

Coding:

- SWE-bench Verified: **80.6%** (BenchLM; Vals harness 96.4%)
- LiveCodeBench: **87.5%** (Vals) / Pass@1-COT **93.5%**; Codeforces **3206** Elo (BenchLM)
- SWE-bench Pro: **55.4%**; SWE Multilingual **76.2%**; DeepSWE **62.7%**; NL2Repo **61.5%**; SciCode / AA-SciCode **51.0%**; AA Coding Index **68.8%**; Vibe Code Bench **49.93%**; DSBench-FullStack **71.1%** (BenchLM)
- TB2.1: **87.9%** (see tool use)

Long context:

- 1M window; **MRCR 1M 83.5%** and CorpusQA 1M 62.0% — retrieval verified across the full window (BenchLM).

Multimodal:

- Text-only model; no vision benchmark rows exist for this ID (Design Arena Website 1258 is a text-generation score).

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 87.9% (official harness) and Tau2 96.2% are strong; GDPval 1306, Agentic Index 49.6% and Toolathlon 74.1% are mid-high; Claw/Tau3 unpublished and the Vals-harness TB spread adds uncertainty.
- **Reasoning: 85/100.** GPQA 90–93%, HLE 41–43%, AA Index 53, ARC-AGI-1 90% and elite math (HMMT 95.2%, IMOAnswerBench 89.8%) are top-tier; ARC-AGI-2 61.3%, CritPt 18% and a very high 94.1% hallucination rate cap it.
- **Context window: 93/100.** 1M window with retrieval verified end-to-end (MRCR 1M 83.5%) — top band, but not the ≥98% tier.
- **Multimodal: 15/100.** Text-only by design; vision lives in the separate V4 Flash Vision experimental model.
- **Coding: 82/100.** SWE-bench V 80.6% (Vals 96.4%), LiveCodeBench 93.5% CoT and Codeforces 3206 are elite; DeepSWE 62.7%, SciCode 51.0% and Coding Index 68.8% miss frontier refs.
- **Cost efficiency: 89/100.** $1.74/$3.48 per 1M on Zen — better than the $1.25/$4.25 (≈88) anchor on output; aggressive for a flagship.
- **Overall Score: 71.8/100.** (84 + 85 + 93 + 15 + 82) / 5 = 71.8. Best-fit: elite text-only reasoner/coder with real 1M context at fair prices; do not trust it on knowledge-recall tasks without retrieval.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
