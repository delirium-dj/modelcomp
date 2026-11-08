# GPT-5.4 Mini — findings by Xing 4.0 29B A4B

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's small tier optimized for coding subagents and computer-use delegation; approaches GPT-5.4 flagship on several benchmarks while running faster at ~30% of flagship cost.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1/chat/completions`); also available in Codex (CLI, IDE extension, web) and ChatGPT via the "+ menu" "Thinking" feature. ID: `opencode/gpt-5.4-mini`.
- **Release / knowledge:** Released March 17, 2026; knowledge cutoff not specified.
- **IDs:** `opencode/gpt-5.4-mini`; vendor API endpoint `gpt-5.4-mini`.
- **Context window:** 400,000 total tokens; 128,000 max output tokens.
- **Modalities:** Text and image input; text output. Tool use, function calling, web search, file search, computer use, and skills. Reasoning effort levels: low, medium, high, xhigh.
- **Pricing (as of 2026-11-08):** $0.75 per 1M input tokens; $4.50 per 1M output tokens. Cached input: $0.075 per 1M. Paid pricing.
- **Architecture:** Proprietary (OpenAI); model size not disclosed.

### Raw benchmarks found

**Tool use:**

- Terminal-Bench 2.0 (Public): **60.0%** (source: OpenAI announcement, March 2026)
- MCP Atlas: **57.7%** (source: OpenAI announcement)
- Toolathlon: **42.9%** (source: OpenAI announcement)
- τ2-bench (telecom): **93.4%** (source: OpenAI announcement, niche variant)
- OSWorld-Verified: **72.1%** (source: OpenAI announcement, under MM/Vision/CUA)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

**Reasoning / knowledge:**

- GPQA Diamond: **88.0%** (source: OpenAI announcement)
- HLE w/ tools: **41.5%** (source: OpenAI announcement)
- HLE w/o tools: **28.2%** (source: OpenAI announcement)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (AA notes "No publicly available API")
- Omniscience Accuracy / Hallucination Rate: no verified public score found

**Coding:**

- SWE-bench Pro (Public): **54.4%** (source: OpenAI announcement)
- Terminal-Bench 2.0: **60.0%** (source: OpenAI announcement)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

**Long context:**

- OpenAI MRCR v2 8-needle 64K–128K: **47.7%** (source: OpenAI announcement)
- OpenAI MRCR v2 8-needle 128K–256K: **33.6%** (source: OpenAI announcement)
- Graphwalks BFS 0K–128K: **76.3%** (source: OpenAI announcement)
- Graphwalks parents 0–128K (accuracy): **71.5%** (source: OpenAI announcement)

**Multimodal:**

- OSWorld-Verified: **72.1%** (source: OpenAI announcement)
- MMMUPro w/ Python: **78.0%** (source: OpenAI announcement)
- MMMUPro: **76.6%** (source: OpenAI announcement)
- OmniDocBench 1.5 (no tools, Edit Distance lower is better): **0.1263** (source: OpenAI announcement)

**Cost per task / speed:**

- Input $0.75 / Output $4.50 per 1M tokens (source: OpenAI announcement, pricing page)
- Latency: 2x faster than GPT-5 mini per vendor claim (not quantified publicly)

### Normalized scores (1–100)

- **Tool use: 57/100.** Terminal-Bench 60.0% and MCP Atlas 57.7% both land in the mid band (TB 45–60% → 50–70). Toolathon 42.9% pulls down. τ2-bench telecom 93.4% is a niche metric; excluding it keeps the estimate grounded in standard tool-call benchmarks. No GDPval-AA or Claw-Eval scores exist publicly for this model. OSWorld 72.1% is not a pure tool-use metric and is reported separately under multimodal. Cap: sub-frontier on multi-tool agentic benchmarks; strongest where single-tool delegation suffices.

- **Reasoning: 80/100.** GPQA Diamond 88.0% sits right at the frontier threshold (90%+ → 90–100). HLE with tools at 41.5% meets the "HLE 40%+ → high" benchmark. HLE without tools at 28.2% is below the tools-version. The combination of two high-professional benchmarks (GPQA, HLE-with-tools) plus moderate HLE-no-tools yields a strong score for a mini model. Cap: flagged for delegation tier — sub-flagship reasoning ceiling expected.

- **Context window: 75/100.** 400K total context; 128K max output. Fits the 200K–500K tier (65–84). The 128K output cap limits effective context and is noted as caveat. Graphwalks at 71.5% parent accuracy is modest. Cap: sub-1M retrieval — good for chunked delegation, weaker for single-pass long-context reasoning.

- **Multimodal: 65/100.** Text and image input; text output only. Per methodology, text+image in = 60–70. OSWorld 72.1% demonstrates real-world visual understanding; MMMUPro 76.6% shows strong visual reasoning. No video, PDF, or audio support. Cap: solid text+image vision, absent video/PDF/audio; text output only.

- **Coding: 62/100.** SWE-bench Pro 54.4% lands near the lower end of mid band; Terminal-Bench 60.0% in mid band. Frontier coding benchmarks (DeepSWE 74%+, TB 85%+ → 90–100) are exceeded by the flagship but not the mini. Toolathlon 42.9% is weak. Cap: delegated coding workloads; approaches GPT-5.4 level on some evals per vendor claim, but clearly trails the flagship.

- **Cost efficiency: 89/100.** $0.75/$4.50 per 1M vs. ~$0.60/$2.20 (→ ~92) reference and ~$1.25/$4.25 (→ ~88) upper tier. Interpolated toward ~89. One of the better cost-to-capability ratios in the GPT lineup for its tier.

- **Overall Score: 68/100.** Mean of the five quality dims: (57 + 80 + 75 + 65 + 62) / 5 = 339 / 5 = 67.8 → 68. Best-fit recommendation: top delegated coding/subagent choice under a GPT-5.4 orchestrator — strong reasoning + tool use for delegation, sub-flagship coding strength, limited context; upgrade to GPT-5.4 flagships for frontier coding/reasoning and longer-context work.

---

## Signature

- Provided by: **Xing 4.0 29B A4B (Xing/xing4-29b-a4b)** — 2026-11-08
- Method: Public internet research; sourced the official OpenAI announcement (March 2026) as primary benchmark reference, plus OpenCode Zen pricing documentation. Scores are normalized 1–100 interpretations of vendor-reported raw numbers, not official vendor scores. Third-party benchmarks (GDPval-AA, Claw-Eval, LCR, CritPt, AI Index, LiveCodeBench, SciCode, DeepSWE) were searched but have no verified public scores for gpt-5.4-mini.
- Reference URLs:
  - [Introducing GPT‑5.4 mini and nano](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [OpenAI API pricing](https://openai.com/api/pricing/)
