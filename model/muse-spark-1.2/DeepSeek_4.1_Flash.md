# Muse Spark 1.2 Free — findings by DeepSeek 4.1 Flash

- Source: Meta / Muse Spark 1.2 Free (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Meta "Contributor Free" tier of Muse Spark 1.2)
- **Short description:** Meta's August 2026 reasoning model for complex agentic tasks, distributed through OpenCode Zen as a contributor tier. It is the direct predecessor of Muse Spark 1.3 and sits within a few points of it on most evaluations — the main difference is a weaker coding/reasoning profile and the contributor data terms.
- **Provider / access:** OpenCode Zen contributor-free ID (OpenAI-compatible endpoint); the paid model is $1.25/$4.25 per 1M on Meta's own API. Zen's privacy page states the contributor tier trades "heavily discounted token pricing in exchange for permission to use your prompts and completions to train future Meta models" — that is the explicit price of the free tier.
- **Release / knowledge:** Released 2026-08-05. Knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Zen); paid id `meta/muse-spark-1.2`.
- **Context window:** 1,000,000 tokens (trackers list 1,048,576 with a 131,072-token output ceiling for the sibling 1.3 release; 1.2's output cap is not separately documented).
- **Modalities:** text, image, video, file and audio input with text output; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-18):** **Free** on the Zen contributor tier; paid list price is $1.25 / 1M in and $4.25 / 1M out. Third-party cost analysis (nerdbot, 2026-08-12) framed 1.2 as costing about 13× DeepSeek-V4-Flash per completed task for a five-point edge — a useful reminder that "free" here is paid for in training data, not dollars.
- **Architecture:** proprietary (API access only); no open weights.

### Raw benchmarks found

> BenchLM re-published the Meta model-page rows and Artificial Analysis/Vals AI rows on 2026-10-06; where vendor and independent figures differ, both are listed.

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta model page via BenchLM) / **69.7%** (Vals AI) — the previously missing agentic-harness result
- GDPval-AA: **1,631** (Meta model page via BenchLM) / **48.9%** normalized (Artificial Analysis)
- AA Agentic Index: **44.0%** (Artificial Analysis via BenchLM)
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**
- Positioning evidence: Meta markets 1.2 for complex agentic tasks and Artificial Analysis lists it at an Intelligence Index of **57** (cited in a Gemini 3.7 Flash comparison).

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Artificial Analysis via BenchLM)
- HLE: **45.5%** (Artificial Analysis via BenchLM)
- SimpleBench: **74.5%** — common-sense trick questions (Epoch AI via Model Beat)
- SimpleQA Verified: **60.3%**; WeirdML: **60.3%** (Epoch AI via Model Beat)
- MMLU-Pro: **88.3%** (Vals AI via BenchLM)
- AA-LCR: **79.0%** (Artificial Analysis via BenchLM); CritPt: **17.7%**; MLCR: **no verified public score found**
- Artificial Analysis Intelligence Index: **57** (95th percentile framing is not applied to 1.2; the tracker's Epoch-derived percentile is 80th overall)
- AA-Omniscience: Accuracy **45.4%**, Index **27.2%**, Hallucination Rate **33.3%** (via BenchLM)
- BenchLM overall: **66.51/100, rank #27 of 887**

Coding:

- SciCode: **57.4%** (Artificial Analysis); WebDev Arena: **1534 Elo** (Epoch AI via Model Beat); AA Coding Index: **72.2%**
- DeepSWE: **59.3%** (Meta model page via BenchLM) — the previously missing repo-level number
- SWE-bench (Vals AI): **86.6%**; VulcanBench v3: **87.0%**; FrontierSWE v2: **12.0%**
- Design Arena Website: **1319** (OpenRouter via BenchLM)
- Coding index: **84th percentile** of tracked models (Epoch AI via Model Beat)
- SWE-bench Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR **79.0%** is the only published long-context reasoning value for the 1M window; no MRCR/RULER/GraphWalks recall-at-depth measurement was found.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 82.9% (69.7% independent), GDPval-AA 1631 and a 44.0% AA agentic index now exist and are strong; the absence of any Tau3 or Claw result keeps it just short of the frontier tier.
- **Reasoning: 90/100.** GPQA Diamond 90.4%, HLE 45.5%, MMLU-Pro 88.3%, AA-LCR 79.0% and SimpleBench 74.5% form a consistently strong reasoning profile; CritPt 17.7% is modest and keeps it just short of the 1.3 tier.
- **Context window: 95/100.** 1,000,000 tokens with multimodal ingestion and a large output allowance; no recall-at-depth evidence.
- **Multimodal: 88/100.** Text, image, video, file and audio input with text output; no media generation and no published vision benchmark of its own.
- **Coding: 90/100.** SWE-bench Verified 86.6% (Vals) and DeepSWE 59.3% now exist, alongside SciCode 57.4%, VulcanBench v3 87.0% and a 72.2% coding index; FrontierSWE v2 12.0% is the weak spot.
- **Cost efficiency: 100/100.** $0 through the Zen contributor tier; the real cost is that prompts and completions train future Meta models.
- **Overall Score: 90/100.** (89 + 90 + 95 + 88 + 90) / 5 = 90.4 → **90**. Best fit: free agentic/reasoning workloads that can tolerate contributor data terms and need a 1M multimodal window.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (Meta model page, Vals AI and Artificial Analysis rows via BenchLM re-verified 2026-10-06, Epoch AI figures via Model Beat, OpenCode Zen privacy page, third-party cost analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.